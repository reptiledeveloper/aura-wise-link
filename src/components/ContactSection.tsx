import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6 text-foreground">
              Start Your <span className="gradient-text">Vaastu Journey</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Have questions about our services? Want to book a consultation? Reach out to us
              and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, text: "Mumbai, Maharashtra, India" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "info@vastusarovar.com" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-hero-bg flex items-center justify-center shrink-0">
                    <Icon className="text-primary-foreground" size={20} />
                  </div>
                  <span className="text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your space and concerns..."
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-hero-bg text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
