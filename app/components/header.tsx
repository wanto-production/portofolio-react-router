import icon from "~/assets/favicon.png";
import { Icon } from "~/components/icons";
import { ThemeToggle } from "~/components/theme-togle";
import { Link } from "react-router";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl flex flex-col items-center z-50">
      {/* Floating Bar */}
      <div className="w-full h-[60px] flex items-center justify-between px-6 
                  bg-background/80 backdrop-blur-md border border-border 
                  rounded-2xl shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={icon} alt="icon" className="h-[36px] w-auto rounded-full" />
          <span className="hidden sm:inline font-poppins font-semibold text-foreground">
            Ikhwan Satrio
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-inter text-muted-foreground text-sm">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <Link to="/about" className="hover:text-foreground transition">About</Link>
          <Link to="/projects" className="hover:text-foreground transition">Projects</Link>
          <Link to="/contact" className="hover:text-foreground transition">Contact</Link>
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/wanto-production"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                   bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                   font-medium hover:opacity-90 transition"
          >
            <Icon name="fa:github" />
            Github
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-muted-foreground hover:text-foreground p-2"
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <Icon name="lu:x" size={20} />
            ) : (
              <Icon name="lu:menu" size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav (Dropdown card style) */}
      <div
        className={`md:hidden absolute top-[72px] left-1/2 -translate-x-1/2 w-[90%] 
          bg-background/95 backdrop-blur-md border border-border 
          rounded-2xl shadow-lg flex flex-col items-center gap-4 py-6 
          transition-all duration-300 z-40
          ${isOpen
            ? "opacity-100 scale-100 visible pointer-events-auto"
            : "opacity-0 scale-95 invisible pointer-events-none"
          }`}
      >
        <Link
          to="/"
          className="text-muted-foreground hover:text-foreground font-medium"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-muted-foreground hover:text-foreground font-medium"
          onClick={() => setOpen(false)}
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-muted-foreground hover:text-foreground font-medium"
          onClick={() => setOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="text-muted-foreground hover:text-foreground font-medium"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
        <a
          href="https://github.com/wanto-production"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r 
           from-blue-600 to-purple-600 text-white font-medium 
           hover:opacity-90 transition"
        >
          <Icon name="fa:github" />
          Github
        </a>
      </div>
    </header>
  );
};
