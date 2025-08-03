import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@kristashia.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/kristashia",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/kristashia",
    },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full w-12 h-12 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center space-x-1 text-sm">
              <span>© 2025 Kristashia. Made with</span>
              <Heart className="h-4 w-4 fill-red-500 text-red-500 animate-pulse-slow" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}