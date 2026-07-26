import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { BackToTop } from "@/components/site/BackToTop";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-950 px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-gold-500">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-white">Page not found</h2>
        <p className="mt-2 text-sm text-navy-200">The page you're looking for doesn't exist.</p>
        <div className="mt-8">
          <Link to="/" className="btn-gold">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ADVAQ | Cross-Border Tax & Legal Services | UK, USA, UAE & Pakistan" },
      {
        name: "description",
        content:
          "Premium UK & US company formation, tax filing, and compliance for international entrepreneurs. 100% remote, no UK or US address required.",
      },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpg" },
      { rel: "shortcut icon", href: "/favicon.jpg" },
      { rel: "apple-touch-icon", href: "/favicon.jpg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="top-center" />
    </div>
  );
}

import { useRouterState } from "@tanstack/react-router";
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={location} className="page-transition">
      {children}
    </div>
  );
}
