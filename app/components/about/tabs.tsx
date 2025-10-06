import { Link } from 'react-router';
import { atom, useAtom } from 'jotai';

export const tabsAtom = atom('story');

export const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useAtom(tabsAtom);

  return (
    <div className='flex flex-wrap justify-center gap-3 z-10 mt-4'>
      {['story', 'skills', 'journey', 'interests'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 capitalize ${activeTab === tab
            ? 'bg-primary text-primary-foreground shadow-lg'
            : 'border border-border text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export const SelectionTabs = () => {
  const [activeTab] = useAtom(tabsAtom);

  return (
    <div className='max-w-6xl mx-auto px-6'>
      {activeTab === 'story' && <StoryTab />}
      {activeTab === 'skills' && <SkillsTab />}
      {activeTab === 'journey' && <JourneyTab />}
      {activeTab === 'interests' && <InterestTab />}
    </div>
  );
};

function StoryTab() {
  return (
    <div className='space-y-12 animate-in slide-in-from-bottom-4 duration-700'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold bg-gradient-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6 p-2'>
          My Story
        </h2>
      </div>

      <div className='grid lg:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6'>
          <div className='space-y-4 text-muted-foreground leading-relaxed text-lg'>
            <p>
              My journey started with an old, barely functioning laptop. I first touched programming through Scratch, dragging colorful blocks on screen. Curiosity led me to open VSCode and write my first lines of HTML. Soon, I jumped into React without fully understanding JavaScript — and failed, but kept going.
            </p>
            <p>
              Through persistence and late nights, I gradually built real apps. I fell in love with clean code and fast feedback loops. Today, I proudly craft projects using TypeScript, NeoVim, and modern frameworks like Nuxt, SvelteKit, and AdonisJS.
            </p>
            <p>
              I’m still learning, still building, and always excited to solve meaningful problems with code.
            </p>
          </div>

          <div className='flex flex-wrap gap-3 mt-8'>
            <span className='px-4 py-2 bg-chart-1/20 text-chart-1 rounded-full text-sm border border-chart-1/30'>
              Creative Thinker
            </span>
            <span className='px-4 py-2 bg-chart-4/20 text-chart-4 rounded-full text-sm border border-chart-4/30'>
              Problem Solver
            </span>
            <span className='px-4 py-2 bg-chart-3/20 text-chart-3 rounded-full text-sm border border-chart-3/30'>
              Team Player
            </span>
          </div>
        </div>

        <div className='relative'>
          <div className='bg-gradient-to-br from-chart-1/10 via-chart-4/10 to-chart-3/10 rounded-3xl p-8 backdrop-blur-sm border border-border/50'>
            <div className='text-center space-y-6'>
              <div className='text-6xl'>💭</div>
              <h3 className='text-2xl font-bold bg-gradient-to-r from-chart-1 to-chart-3 bg-clip-text text-transparent'>
                My Philosophy
              </h3>
              <blockquote className='text-muted-foreground text-lg italic leading-relaxed'>
                &quot;Code is my canvas, and ambition is my fuel.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function SkillsTab() {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-chart-4 to-chart-1' },
    { name: 'TypeScript', level: 85, color: 'from-chart-3 to-chart-2' },
    { name: 'React', level: 75, color: 'from-chart-2 to-chart-3' },
    { name: 'Qwik', level: 80, color: 'from-chart-1 to-chart-4' },
    { name: 'Svelte', level: 80, color: 'from-chart-4 to-chart-5' },
    { name: 'Node.js', level: 85, color: 'from-chart-5 to-chart-3' },
    { name: 'UI/UX Design', level: 70, color: 'from-chart-1 to-chart-5' },
    { name: 'Database', level: 70, color: 'from-chart-3 to-chart-1' },
  ];

  return (
    <div className='space-y-12 animate-in slide-in-from-bottom-4 duration-700'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold bg-gradient-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6 p-2'>
          Skills & Technologies
        </h2>
        <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
          Here are the technologies I love working with and my proficiency levels
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className='bg-card/50 rounded-2xl p-6 border border-border/50 backdrop-blur-sm'
          >
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-semibold text-foreground text-lg'>{skill.name}</h3>
              <span className='text-muted-foreground font-medium'>{skill.level}%</span>
            </div>
            <div className='w-full bg-muted rounded-full h-3 overflow-hidden'>
              <div
                className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: `${skill.level}%`,
                  animationDelay: `${index * 100}ms`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center bg-gradient-to-r from-chart-1/10 to-chart-4/10 rounded-2xl p-8 border border-border/50'>
        <p className='text-muted-foreground text-lg'>
          🚀 Always learning new technologies and staying up-to-date with the latest trends in web development
        </p>
      </div>
    </div>
  );
};

function JourneyTab() {
  return (
    <div className='space-y-12 animate-in slide-in-from-bottom-4 duration-700'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold bg-gradient-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6 p-2'>
          My Journey
        </h2>
        <p className='text-muted-foreground text-lg'>The path that led me to where I am today</p>
      </div>

      <div className='max-w-2xl mx-auto text-center py-16'>
        <div className='space-y-6'>
          <div className='w-24 h-24 mx-auto bg-gradient-to-r from-muted to-border rounded-full flex items-center justify-center'>
            <svg className='w-12 h-12 text-muted-foreground' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>

          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-foreground'>Journey Coming Soon</h3>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              I'm currently building my professional timeline. Check back soon to see my journey unfold!
            </p>
          </div>

          <div className='pt-6'>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-lg transition-all duration-300'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.906-1.447l-3.077 1.028a.75.75 0 01-.97-.97l1.028-3.077A8.955 8.955 0 013 12C3 7.582 6.582 4 12 4s8 3.582 8 8z' />
              </svg>
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function InterestTab() {
  const interests = [
    { emoji: '🎮', title: 'Gaming', desc: 'Strategy games and indie titles' },
    { emoji: '📚', title: 'Learning', desc: 'Always exploring new tech' },
    { emoji: '☕', title: 'Coffee', desc: 'Fuel for late-night coding' },
    { emoji: '🎵', title: 'Music', desc: 'Lo-fi beats while coding' },
    { emoji: '🌟', title: 'Open Source', desc: 'Contributing to community' },
    { emoji: '🚀', title: 'Innovation', desc: 'Building the future' },
  ];

  return (
    <div className='space-y-12 animate-in slide-in-from-bottom-4 duration-700'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold bg-gradient-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6 p-2'>
          Beyond Code
        </h2>
        <p className='text-muted-foreground text-lg'>What inspires and motivates me outside of programming</p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {interests.map((interest) => (
          <div
            key={interest.title}
            className='bg-card/50 rounded-2xl p-6 text-center border border-border/50 backdrop-blur-sm hover:border-border transition-all duration-300 group'
          >
            <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
              {interest.emoji}
            </div>
            <h3 className='text-xl font-bold text-foreground mb-2'>{interest.title}</h3>
            <p className='text-muted-foreground'>{interest.desc}</p>
          </div>
        ))}
      </div>

      <div className='bg-gradient-to-r from-chart-1/10 via-chart-4/10 to-chart-3/10 rounded-3xl p-8 text-center border border-border/50 backdrop-blur-sm'>
        <div className='text-4xl mb-4'>🎯</div>
        <h3 className='text-2xl font-bold bg-gradient-to-r from-chart-1 to-chart-3 bg-clip-text text-transparent mb-4'>
          Current Focus
        </h3>
        <p className='text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto'>
          I'm currently diving deep into performance optimization with Qwik and exploring
          the intersection of AI and web development. Always excited about pushing the
          boundaries of what's possible on the web! 🚀
        </p>
      </div>
    </div>
  );
};
