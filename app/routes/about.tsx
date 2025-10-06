import GlareHover from '~/components/react-bits/GlareHover';
import TextType from '~/components/react-bits/TextType';
import { NavigationTabs, SelectionTabs } from '~/components/about/tabs';
import { Link } from 'react-router';
import image from '~/assets/nishimiya.jpeg';
import type { Route } from './+types/about';

export const meta: Route.MetaFunction = () => [
  {
    title: 'ikhwan | about',
  },
  {
    name: "description",
    content: 'Learn more about Ikhwan Satrio - Young passionate programmer specializing in modern web development with Svelte, and React',
  },
  { name: "keywords", content: ["portofolio", "portofolio ikhwan", "portofolio ikhwan satrio", "ikhwan,ikhwan satrio", "young dev portofolio"].join(',') }
]

export default function About() {
  return (
    <main className='w-full min-h-screen bg-background text-foreground'>
      {/* Hero Section */}
      <section className='relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 overflow-hidden'>
        {/* Profile Image */}
        <div className='relative'>
          <GlareHover
            width='150px'
            height='150px'
            borderRadius='100%'
            glareColor='oklch(from var(--color-foreground) l c h / 0.3)'
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <img
              src={image}
              alt='Profile'
              className='h-[150px] w-[150px] rounded-full object-cover shadow-2xl border-4 border-border/50'
            />
          </GlareHover>
        </div>

        {/* Text Block */}
        <div className='flex flex-col items-center gap-6 p-3 z-10'>
          <h2 className='font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent'>
            About Ikhwan Satrio
          </h2>

          <TextType
            className='font-inter text-lg sm:text-xl md:text-2xl text-muted-foreground'
            text={[
              'Passionate Developer',
              'Problem Solver',
              'Tech Enthusiast',
              'Linux Enthusiast',
            ]}
            typingSpeed={80}
            pauseDuration={1800}
            showCursor
            cursorCharacter='|'
          />
        </div>

        {/* Navigation Tabs */}
        <NavigationTabs />
      </section>

      {/* Content Sections */}
      <section className='w-full min-h-screen flex items-center'>
        <SelectionTabs />
      </section>

      {/* CTA Section */}
      <section className='w-full py-20'>
        <div className='max-w-4xl mx-auto text-center px-6'>
          <div className='bg-gradient-to-br from-chart-1/10 via-chart-4/10 to-chart-3/10 rounded-3xl p-12 backdrop-blur-sm border border-border/50'>
            <h2 className='text-4xl font-bold bg-gradient-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6 p-2'>
              Let's Build Something Amazing
            </h2>
            <p className='text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
              I'm always excited to work on interesting projects and collaborate with passionate people.
              Whether it's a challenging technical problem or an innovative idea, let's make it happen!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/projects'
                className='min-w-[150px] text-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'
              >
                View My Work
              </Link>
              <Link
                to='/contact'
                className='min-w-[150px] text-center px-8 py-3 rounded-xl border border-border text-muted-foreground font-medium hover:bg-muted hover:text-foreground transition-all duration-300'
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}
