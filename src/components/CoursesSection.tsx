import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "₹999",
    duration: "30 min",
    features: ["Audio consultation", "Basic direction analysis", "Email summary"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹2,499",
    duration: "60 min",
    features: ["Video consultation", "Compass analysis", "Detailed PDF report", "Chat follow-up"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹4,999",
    duration: "90 min",
    features: ["Video consultation", "Full property analysis", "Remedies report", "3 follow-up sessions", "Priority support"],
    popular: false,
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Choose Your <span className="gradient-text">Consultation Plan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-8 border transition-shadow ${
                pkg.popular
                  ? "gradient-hero-bg text-primary-foreground shadow-xl scale-105 border-transparent"
                  : "bg-card border-border/50 shadow-sm hover:shadow-lg"
              }`}
            >
              {pkg.popular && (
                <span className="text-xs font-bold uppercase tracking-wider bg-primary-foreground/20 px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-display font-bold mt-4 ${pkg.popular ? "" : "text-foreground"}`}>
                {pkg.name}
              </h3>
              <div className="mt-4">
                <span className={`text-4xl font-display font-bold ${pkg.popular ? "" : "gradient-text"}`}>
                  {pkg.price}
                </span>
              </div>
              <div className={`flex items-center gap-2 mt-2 text-sm ${pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                <Clock size={14} />
                {pkg.duration} session
              </div>
              <ul className="mt-6 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className={pkg.popular ? "text-primary-foreground" : "text-primary"} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 ${
                  pkg.popular
                    ? "bg-primary-foreground text-primary"
                    : "gradient-hero-bg text-primary-foreground"
                }`}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
