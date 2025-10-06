import { Icon } from '~/components/icons';
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/wanto-production', icon: 'fa:github' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ikhwan-satrio', icon: 'fa:linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/ikhwansatrio', icon: 'fa:twitter' },
    { name: 'Instagram', href: 'https://www.instagram.com/wantoobrrrrrr/', icon: 'fa:instagram' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const techStack = ['JavaScript', 'TypeScript', 'React', 'TanstackStart', 'Bun'];

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className='bg-gradient-to-b from-background to-sidebar border-t border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center'>
                <span className='text-primary-foreground font-bold text-lg'>IS</span>
              </div>
              <div>
                <h3 className='text-xl font-bold text-foreground'>Ikhwan Satrio</h3>
                <p className='text-muted-foreground text-sm'>Young Programmer</p>
              </div>
            </div>

            <p className='text-foreground/90 leading-relaxed max-w-md'>
              Passionate frontend developer crafting beautiful and performant web experiences
              with modern technologies. Always learning, always building.
            </p>

            {/* Social Links */}
            <div className='flex space-x-3'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 group border border-border'
                  aria-label={social.name}
                >
                  <span className='group-hover:scale-110 transition-transform duration-200'>
                    <Icon name={social.icon} size={20} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-6'>
            <h4 className='text-lg font-semibold text-foreground'>Quick Links</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className='text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group'
                  >
                    <span className='w-1 h-1 bg-primary rounded-full mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className='space-y-6'>
            <h4 className='text-lg font-semibold text-foreground'>Tech Stack</h4>
            <div className='flex flex-wrap gap-2'>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 bg-secondary text-foreground/80 text-sm rounded-full hover:bg-primary/20 hover:text-primary border border-border transition-all duration-200'
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Status */}
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-chart-5 rounded-full animate-pulse'></div>
              <span className='text-sm text-muted-foreground'>Available for projects</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-sm'>
          <div className='flex flex-wrap items-center justify-center gap-1 text-muted-foreground'>
            <span>&copy; {currentYear} Ikhwan Satrio.</span>
            <span>Made with</span>
            <span className='text-destructive animate-pulse'>❤️</span>
            <span>and lots of</span>
            <span className='text-chart-4'>☕</span>
          </div>

          <div className='flex items-center gap-1 text-muted-foreground'>
            <span>Built with</span>
            <span className='text-primary font-medium'>TanStack Start</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - outside container for fixed positioning */}
      <button
        onClick={scrollToTop}
        className='fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group'
        aria-label='Scroll to top'
      >
        <Icon
          name='lu:arrow-up'
          className='mx-auto group-hover:-translate-y-0.5 transition-transform'
          size={24}
        />
      </button>
    </footer>
  );
};

export default Footer;
