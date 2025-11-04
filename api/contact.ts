import { TransactionalEmailsApi, SendSmtpEmail } from '@getbrevo/brevo';

export async function POST(request: Request) {
    try {
        // Get the API key from environment variables
        const brevoApiKey = process.env.BREVO_API_KEY;

        if (!brevoApiKey) {
            return Response.json(
                { error: 'Brevo API key is not configured' },
                { status: 500 }
            );
        }

        // Parse the request body
        const body = await request.json();
        const { name, email, company, message, turnstileToken } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return Response.json(
                { error: 'Missing required fields: name, email, and message are required' },
                { status: 400 }
            );
        }

        // Verify Cloudflare Turnstile
        const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
        if (!turnstileSecret) {
            return Response.json(
                { error: 'Turnstile secret key is not configured' },
                { status: 500 }
            );
        }

        if (!turnstileToken || typeof turnstileToken !== 'string') {
            return Response.json(
                { error: 'Verification token missing. Please complete the challenge.' },
                { status: 400 }
            );
        }

        const clientIp =
            request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            request.headers.get('x-real-ip') ||
            undefined;

        const verifyParams = new URLSearchParams();
        verifyParams.append('secret', turnstileSecret);
        verifyParams.append('response', turnstileToken);
        if (clientIp) verifyParams.append('remoteip', clientIp);

        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            body: verifyParams.toString()
        });

        if (!verifyRes.ok) {
            return Response.json(
                { error: 'Verification service unavailable' },
                { status: 502 }
            );
        }

        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
            return Response.json(
                { error: 'Verification failed', details: verifyData['error-codes'] },
                { status: 400 }
            );
        }

        // Hostname/origin allowlist intentionally not enforced

        // Initialize Brevo API
        const emailAPI = new TransactionalEmailsApi();
        (emailAPI as any).authentications.apiKey.apiKey = brevoApiKey;

        // Get recipient email and configured sender from environment variables
        const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || email;
        const senderEmail = process.env.CONTACT_FROM_EMAIL;
        const senderName = process.env.CONTACT_FROM_NAME || 'Website Contact';

        if (!senderEmail) {
            return Response.json(
                { error: 'Sender email is not configured' },
                { status: 500 }
            );
        }

        // Build the email message
        const emailMessage = new SendSmtpEmail();
        emailMessage.subject = `New Contact Form Submission from ${name}`;
        emailMessage.htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;
        emailMessage.textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

Message:
${message}
    `;
        emailMessage.sender = {
            name: senderName,
            email: senderEmail,
        };
        emailMessage.to = [
            {
                email: recipientEmail,
                name: 'Contact Form Recipient',
            },
        ];
        emailMessage.replyTo = {
            email: email,
            name: name,
        };

        // Send the email
        const response = await emailAPI.sendTransacEmail(emailMessage);

        return Response.json(
            {
                success: true,
                message: 'Email sent successfully',
                messageId: response.body.messageId
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error sending email:', error);
        return Response.json(
            {
                error: 'Failed to send email',
                details: error.body?.message || error.message || 'Unknown error'
            },
            { status: 500 }
        );
    }
}

