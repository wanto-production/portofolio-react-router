import { Link, useFetcher } from 'react-router';
import { Icon } from '~/components/icons';
import LightRays from '~/components/react-bits/LightRays';
import z from "zod"
import type { Route } from './+types/contact';
import { Resend } from "resend"
import { useForm } from "@tanstack/react-form"
import { render } from "@react-email/components"
import ContactEmail from '~/components/templates/contact';

export const meta: Route.MetaFunction = () => [
  { title: "ikhwan | contact" },
  {
    name: 'description',
    content: "Get in touch with Ikhwan Satrio - Frontend Developer. Contact me for web development projects, collaborations, or just to say hello. Available for freelance work and exciting opportunities.",
  },
  { name: "keywords", content: ["portofolio", "portofolio ikhwan", "portofolio ikhwan satrio", "ikhwan,ikhwan satrio", "young dev portofolio"].join(',') }
]

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function action({ request }: Route.ActionArgs) {
  try {
    const formData = await request.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    const resend = new Resend(process.env.RESEND_API_KEY);


    // Render React Email template untuk email penerima
    const emailHtml = await render(ContactEmail({ name, email, subject, message }));

    //Kirim email ke penerima(Anda)
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'ikwansatria3974@gmail.com',
      subject: `Pesan Baru: ${subject}`,
      html: emailHtml,
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: 'Failed to send email. Please try again.' };
  }

}

export default function Contact() {
  const fetcher = useFetcher()
  const submitResult = fetcher.data
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validators: {
      onChange: contactSchema
    },
  })


  const contactMethods = [
    {
      icon: 'lu:mail',
      title: 'Email',
      value: 'ikwansatria3974@gmail.com',
      href: 'mailto:ikwansatria3974@gmail.com',
      description: 'Drop me a line anytime',
    },
    {
      icon: 'fa:github',
      title: 'GitHub',
      value: '@wanto-production',
      href: 'https://github.com/wanto-production',
      description: 'Check out my code',
    },
    {
      icon: 'fa:linkedin',
      title: 'LinkedIn',
      value: 'Ikhwan Satrio',
      href: 'https://linkedin.com/in/ikhwan-satrio',
      description: "Let's connect professionally",
    },
    {
      icon: 'fa:twitter',
      title: 'Twitter',
      value: '@ikhwansatrio',
      href: 'https://twitter.com/ikhwansatrio',
      description: 'Follow me for updates',
    },
  ];

  const faqs = [
    {
      question: 'What kind of projects do you work on?',
      answer:
        'I specialize in web applications using modern frameworks like Qwik, React, and Svelte. I also work on mobile apps, UI/UX design, and open-source projects.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I always provide detailed timelines during consultation.',
    },
    {
      question: 'Do you work with remote clients?',
      answer:
        'Absolutely! I work with clients globally and have experience collaborating remotely. I use tools like Slack, Discord, and video calls to ensure smooth communication.',
    },
    {
      question: "What's your preferred tech stack?",
      answer:
        'I love working with Qwik for performance-critical apps, React for complex UIs, Svelte for lightweight projects, and TypeScript for everything. I also use Tailwind CSS, Node.js, and various databases.',
    },
  ];



  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 bg-[radial-gradient(circle_at_center,_var(--sidebar),_var(--background))] overflow-hidden px-4 sm:px-6 md:px-8">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, zIndex: 1 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="hsl(var(--primary))"
            raysSpeed={0.8}
            lightSpread={0.4}
            rayLength={0.6}
            followMouse
            mouseInfluence={0.05}
            noiseAmount={0.1}
            distortion={0.03}
            className="custom-rays pointer-events-none"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
            <h2 className="font-poppins text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent leading-tight">
              Let's Work Together
            </h2>
          </div>

          <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            Have a project in mind? I'd love to hear from you. Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-lg sm:max-w-none mx-auto">
          <a
            href="mailto:ikwansatria3974@gmail.com"
            className=" z-10 w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
          >
            Send me an Email
          </a>
          <div className="text-muted-foreground text-xs sm:text-sm text-center">or fill out the form below</div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-muted-foreground text-xs sm:text-sm mb-2">Get in Touch</span>
            <Icon name="lu:arrow-down" size={24} className="text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full bg-gradient-to-b from-background to-sidebar py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Form */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Send me a Message</h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Fill out this form and I'll get back to you within 24 hours
                </p>
              </div>

              <fetcher.Form method="post" className="space-y-4 sm:space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <form.Field name="name">
                    {(field) => (
                      <div>
                        <label htmlFor={field.name} className="block text-sm font-medium text-foreground mb-2">Name *</label>
                        <input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-3 sm:px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm sm:text-base"
                          placeholder="Your name"
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-destructive text-xs mt-1">{field.state.meta.errors[0]?.message}</p>
                        )}
                      </div>
                    )}
                  </form.Field>

                  <form.Field name="email">
                    {(field) => (
                      <div>
                        <label htmlFor={field.name} className="block text-sm font-medium text-foreground mb-2">Email *</label>
                        <input
                          id={field.name}
                          name={field.name}
                          type="email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-full px-3 sm:px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-destructive text-xs mt-1">{field.state.meta.errors[0]?.message}</p>
                        )}
                      </div>
                    )}
                  </form.Field>
                </div>

                {/* Subject */}
                <form.Field name="subject">
                  {(field) => (
                    <div>
                      <label htmlFor={field.name} className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full px-3 sm:px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm sm:text-base"
                        placeholder="Project discussion, collaboration, etc."
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="text-destructive text-xs mt-1">{field.state.meta.errors[0]?.message}</p>
                      )}
                    </div>
                  )}
                </form.Field>

                {/* Message */}
                <form.Field name="message">
                  {(field) => (
                    <div>
                      <label htmlFor={field.name} className="block text-sm font-medium text-foreground mb-2">Message *</label>
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        rows={5}
                        className="w-full px-3 sm:px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                        placeholder="Tell me about your project, ideas, or just say hello..."
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="text-destructive text-xs mt-1">{field.state.meta.errors[0]?.message}</p>
                      )}
                    </div>
                  )}
                </form.Field>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={fetcher.state !== 'idle'}
                    className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-primary-foreground transition-all duration-300 text-sm sm:text-base
                  ${fetcher.state !== 'idle'
                        ? 'bg-muted cursor-not-allowed'
                        : submitResult?.success
                          ? 'bg-chart-5 hover:bg-chart-5/90'
                          : 'bg-primary hover:shadow-lg hover:scale-105'
                      }`}
                  >
                    {fetcher.state !== 'idle' ? (
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="lu:loader-2" size={20} className="animate-spin" />
                        Sending...
                      </div>
                    ) : submitResult?.success ? (
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="lu:check" size={20} />
                        Message Sent!
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>

                {/* Feedback */}
                {submitResult?.success && (
                  <div className="p-3 sm:p-4 bg-chart-5/20 border border-chart-5/50 rounded-lg text-chart-5 text-xs sm:text-sm">
                    Thanks for reaching out! I'll get back to you soon.
                  </div>
                )}
                {submitResult && !submitResult.success && (
                  <div className="p-3 sm:p-4 bg-destructive/20 border border-destructive/50 rounded-lg text-destructive text-xs sm:text-sm">
                    {submitResult.error}
                  </div>
                )}
              </fetcher.Form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Prefer to reach out directly? Here are the best ways to contact me
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={method.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    className="group block p-4 sm:p-6 bg-secondary/50 rounded-xl sm:rounded-2xl border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/30 transition-all duration-300 flex-shrink-0">
                        <Icon name={method.icon} size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-1 text-sm sm:text-base break-words">
                          {method.value}
                        </p>
                        <p className="text-muted-foreground/70 text-xs sm:text-sm">{method.description}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                        <Icon name="lu:external-link" size={16} className="text-muted-foreground" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Info */}
              <div className="p-4 sm:p-6 bg-chart-5/10 rounded-xl sm:rounded-2xl border border-chart-5/30">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-chart-5 rounded-full animate-pulse flex-shrink-0"></div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">Currently Available</h3>
                </div>
                <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                  I'm currently taking on new projects and collaborations. Response time is typically within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gradient-to-b from-sidebar to-background py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Quick answers to common questions about working together
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-secondary/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border backdrop-blur-sm"
              >
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 leading-snug">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-gradient-to-b from-background to-sidebar py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm border border-border">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">Ready to Start Your Project?</h2>
            <p className="text-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you have a clear vision or just an idea, I'm here to help bring it to life. Let's create
              something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="mailto:ikwansatria3974@gmail.com"
                className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Start the Conversation
              </a>
              <Link
                to="/projects"
                className="px-6 sm:px-8 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-secondary transition-all duration-300 text-sm sm:text-base"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
