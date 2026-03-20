import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img src={logo} alt="Vastu Sarovar" className="h-16 w-auto mb-4 rounded-lg" />
            <p className="text-background/60 text-sm leading-relaxed">
              Bringing ancient Vaastu wisdom to modern living through technology.
            </p>
          </div>

          {[
            {
              title: "Quick Links",
              links: [
                { label: "About Vaastu", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Consultants", href: "#consultants" },
                { label: "Packages", href: "#courses" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "#" },
              ],
            },
            {
              title: "Download App",
              links: [
                { label: "Google Play Store", href: "#" },
                { label: "Apple App Store", href: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-background font-display font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/60 text-sm hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Vastu Sarovar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
