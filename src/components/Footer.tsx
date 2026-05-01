import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[40rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary shadow-glow-sm">
                <span className="font-display font-black text-primary-foreground">K</span>
              </span>
              <span className="font-display font-bold text-lg">
                KORVION<span className="text-primary">.</span>MEDIA
              </span>
            </Link>
            <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
              We don't just build brands. We build revenue systems engineered for scale.
            </p>
            <a
              href="mailto:hello@korvion.media"
              className="mt-6 inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>korvionmedia@gmail.com</span>
            </a>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol
              title="Company"
              links={[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/work", label: "Case Studies" },
                { to: "/process", label: "Process" },
              ]}
            />
            <FooterCol
              title="Engage"
              links={[
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" },
                { to: "/contact", label: "Strategy Call" },
              ]}
            />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Studios</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Belgavi ·Karnataka</li>
                <li>Bengaluru ·Karnataka</li>
                
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Korvion Media. All systems engineered for revenue.</p>
          <p className="font-mono text-xs">v.1.0 · Built to convert.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: "/" | "/services" | "/work" | "/process" | "/careers" | "/contact"; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
