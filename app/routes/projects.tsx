import LightRays from '~/components/react-bits/LightRays';
import { ProjectGrid, ToggleFilter } from '~/components/projects/filter-container';
import { Link } from 'react-router';
import type { Route } from './+types/projects';

export const meta: Route.MetaFunction = () => [
  { title: "ikhwan | projects" },
  {
    name: 'description',
    content: "Explore the portfolio of Ikhwan Satrio - Frontend Developer. Showcasing web applications, mobile apps, and open-source projects built with modern technologies like React, and TypeScript."
  },
  { name: "keywords", content: ["portofolio", "portofolio ikhwan", "portofolio ikhwan satrio", "ikhwan,ikhwan satrio", "young dev portofolio"].join(',') }
]

export default function Projects() {
  return (
    <main className='w-full min-h-screen bg-background text-foreground'>
      {/* Hero Section */}
      <section className='relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 overflow-hidden'>
        {/* Background Rays */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, zIndex: 1 }}>
          <LightRays
            raysOrigin='top-center'
            raysColor='oklch(from var(--color-foreground) l c h / 0.2)'
            raysSpeed={1.0}
            lightSpread={0.5}
            rayLength={0.8}
            followMouse
            mouseInfluence={0.06}
            noiseAmount={0.15}
            distortion={0.02}
            className='custom-rays pointer-events-none'
          />
        </div>

        {/* Content */}
        <div className='relative z-10 space-y-8'>
          <div className=' flex flex-col items-center justify-center text-center space-y-6'>
            <h2 className='font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent p-3'>My Projects</h2>

            <p className='font-inter text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              A collection of projects I've worked on, from web applications to mobile apps and everything in between
            </p>
          </div>

          {/* Stats */}
          <div className='flex flex-wrap justify-center gap-8 mt-12'>
            <div className='text-center'>
              <div className='text-3xl font-bold bg-gradient-to-r from-chart-1 to-chart-3 bg-clip-text text-transparent'>
                3+
              </div>
              <div className='text-muted-foreground text-sm uppercase tracking-wide'>
                Projects
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold bg-gradient-to-r from-chart-4 to-chart-1 bg-clip-text text-transparent'>
                6+
              </div>
              <div className='text-muted-foreground text-sm uppercase tracking-wide'>
                Technologies
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold bg-gradient-to-r from-chart-5 to-chart-2 bg-clip-text text-transparent'>
                2+
              </div>
              <div className='text-muted-foreground text-sm uppercase tracking-wide'>
                Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10'>
          <div className='flex flex-col items-center animate-bounce'>
            <span className='text-muted-foreground text-sm mb-2'>Explore Projects</span>
            <svg className='w-6 h-6 text-muted-foreground' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 14l-7 7m0 0l-7-7m7 7V3' />
            </svg>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className='w-full py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold bg-gradient-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6'>
              All Projects
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              Browse through all my projects by category
            </p>
          </div>

          {/* Category Filter */}
          <ToggleFilter />

          {/* Projects Grid */}
          <ProjectGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full py-20'>
        <div className='max-w-4xl mx-auto text-center px-6'>
          <div className='bg-gradient-to-br from-chart-1/10 via-chart-4/10 to-chart-3/10 rounded-3xl p-12 backdrop-blur-sm border border-border/50'>
            <h2 className='text-4xl font-bold bg-gradient-to-r from-chart-1 via-chart-4 to-chart-3 bg-clip-text text-transparent mb-6'>
              Have a Project in Mind?
            </h2>
            <p className='text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
              I'm always excited to work on interesting projects and collaborate with passionate people.
              Let's bring your ideas to life!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/contact'
                className='px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'
              >
                Start a Project
              </Link>
              <Link
                to='/about'
                className='px-8 py-3 border border-border text-muted-foreground rounded-xl font-medium hover:bg-muted hover:text-foreground transition-all duration-300'
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}
