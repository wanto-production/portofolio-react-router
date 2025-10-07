import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
  useFetcher
} from "react-router";
import { useTheme } from "react-router-theme"
import "./app.css";
import { ThemeContext } from "~/lib/theme-context";
import { Header } from "~/components/header";
import Footer from "~/components/footer";
import type { Route } from "./+types/root";
import { Icon } from "~/components/icons";
import { Link } from "react-router";
import { Alert, AlertDescription } from "~/components/ui/alert";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  }
];

export { action, loader } from "react-router-theme"

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData("root") as { theme: string } | undefined;
  const fetcher = useFetcher();

  // Berikan default value jika loaderData belum tersedia (SSR)
  const [theme, setTheme] = loaderData
    ? useTheme(loaderData, fetcher, "dark")
    : ["dark", () => { }];

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html lang="en" data-theme={theme}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body className="bg-background">
          <Header />
          {children}
          <Footer />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;
  let statusCode = 500;
  let isNotFound = false;

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    isNotFound = error.status === 404;
    message = isNotFound ? "Page Not Found" : `Error ${error.status}`;
    details = isNotFound
      ? "The page you're looking for doesn't exist or has been moved."
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-sidebar to-background pb-4 pt-30 py-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Error Icon & Status Code */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="relative">
            {/* Animated Background Circles */}
            <div className="absolute inset-0 animate-pulse">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-destructive/5 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Icon Container */}
            <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-destructive/10 to-primary/10 border-2 border-border backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Icon
                name={isNotFound ? "lu:search-x" : "lu:alert-triangle"}
                size={48}
                className={isNotFound ? "text-primary" : "text-destructive"}
              />
            </div>
          </div>

          {/* Status Code */}
          {statusCode && (
            <div className="text-8xl font-bold bg-gradient-to-br from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {statusCode}
            </div>
          )}
        </div>

        {/* Error Message Card */}
        <div className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-8 space-y-6 shadow-2xl">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">
              {message}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {details}
            </p>
          </div>

          {/* Stack Trace (Dev Only) */}
          {stack && (
            <Alert className="bg-destructive/5 border-destructive/20">
              <Icon name="lu:bug" size={16} className="text-destructive" />
              <AlertDescription className="mt-2">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-destructive">
                    Development Error Details:
                  </p>
                  <pre className="text-xs bg-background/50 p-4 rounded-lg overflow-x-auto border border-border text-foreground/80 leading-relaxed">
                    <code>{stack}</code>
                  </pre>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link
              to="/"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Icon name="lu:home" size={20} />
              <span>Go Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium border border-border hover:bg-secondary/80 transition-all duration-300"
            >
              <Icon name="lu:arrow-left" size={20} />
              <span>Go Back</span>
            </button>

            <button
              onClick={() => window.location.reload()}
              className="sm:w-auto px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium border border-border hover:bg-accent/80 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Icon name="lu:refresh-cw" size={20} />
              <span className="sm:hidden">Reload</span>
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-muted/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="lu:lightbulb" size={20} className="text-primary" />
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="font-semibold text-foreground">Need Help?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If this error persists, try clearing your browser cache or contact support.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <Icon name="lu:mail" size={14} />
                  Contact Support
                </Link>
                <span className="text-muted-foreground">•</span>
                <a
                  href="https://github.com/wanto-production"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <Icon name="fa:github" size={14} />
                  Report Issue
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-xs text-muted-foreground space-y-1">
          <p>Error ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          <p>Timestamp: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </main>
  );
}
