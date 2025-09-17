interface NavigationProps {
  onContactClick: () => void;
}

export const Navigation = ({ onContactClick }: NavigationProps) => {
  return (
    <nav className="nav-fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-foreground">
          Starling Research Group
        </div>
        
        <button
          onClick={onContactClick}
          className="text-foreground hover:text-silver transition-colors duration-300 font-medium"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};