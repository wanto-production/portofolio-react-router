import type { Route } from "./+types/home";
import { Link } from "react-router"

import { Icon } from '~/components/icons';
import image from '~/assets/nishimiya.jpeg';
import LightRays from '~/components/react-bits/LightRays';
import CircularText from '~/components/react-bits/CircularText';
import TextType from '~/components/react-bits/TextType';

export const meta: Route.MetaFunction = () => [
  {
    title: 'ikhwan | home',
  },
  {
    name: 'description',
    content: 'Personal portfolio of Ikhwan Satrio - Frontend Developer',
  },
]

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <section className="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_center,_var(--sidebar),_var(--background))] overflow-hidden">
        {/* Background Rays */}
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            zIndex: 1,
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="hsl(var(--primary))"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays pointer-events-none"
          />
        </div>

        {/* Profile Image with Circular Text */}
        <div className="relative flex items-center justify-center z-10">
          <CircularText
            text="*ikhwan*satrio*"
            spinDuration={20}
            className="custom-class"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={image}
              alt="Profile"
              className="h-[130px] w-[130px] rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Text Block */}
        <div className="flex flex-col items-center gap-4 p-3 z-10">
          {/* Heading */}
          <h2 className="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
            hello, i'm Ikhwan satrio
          </h2>

          {/* Typing Text */}
          <TextType
            className="font-inter text-lg sm:text-xl md:text-2xl text-muted-foreground"
            text={[
              'Young Programmer',
              'Frontend Developer',
              'Loves Qwik & Svelte',
              'Happy coding!',
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
          />
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center z-10">
          <Link
            to="/projects"
            className="min-w-[150px] text-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/wanto-production"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[150px] text-center px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Icon name="fa:github" size={20} />
            Github
          </a>
        </div>
      </section>
    </main>
  );
}

