# Welcome to your Lovable project

## Project info

**URL**: <https://lovable.dev/projects/7b289d96-863b-4114-8b6f-2c78208968fa>

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7b289d96-863b-4114-8b6f-2c78208968fa) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Environment variables

Set the following environment variables:

- `VITE_TURNSTILE_SITE_KEY` – Cloudflare Turnstile Site Key (exposed to client)
- `TURNSTILE_SECRET_KEY` – Cloudflare Turnstile Secret Key
- `BREVO_API_KEY` – API key for sending emails
- `CONTACT_FROM_EMAIL` – Sender email address
- `CONTACT_FROM_NAME` – Sender name (optional)
- `CONTACT_RECIPIENT_EMAIL` – Recipient override (optional)

Notes:

- For local development, create a `.env` file at the repo root with:

```dotenv
VITE_TURNSTILE_SITE_KEY=1x00000000000000000000AA  # Cloudflare test key
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA  # Cloudflare test secret
```

Add the same keys in your Vercel project for deployed environments.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7b289d96-863b-4114-8b6f-2c78208968fa) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
