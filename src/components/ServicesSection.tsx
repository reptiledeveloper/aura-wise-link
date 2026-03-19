import { motion } from "framer-motion";
import { Compass, Video, MessageCircle, Phone, Shield, CreditCard } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "In-App Compass",
    description: "Live compass with camera-based centre-point detection and accurate direction marking for precise Vaastu analysis.",
  },
  {
    icon: Video,
    title: "Video Consultation",
    description: "Face-to-face sessions with certified consultants. Share your screen and get real-time Vaastu guidance.",
  },
  {
    icon: Phone,
    title: "Audio Consultation",
    description: "Quick audio calls for follow-ups and simple queries. All calls are tracked and securely recorded.",
  },
  {
    icon: MessageCircle,
    title: "In-App Chat",
    description: "Real-time messaging with image sharing. Privacy-safe with spam filtering and admin monitoring.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "End-to-end encrypted communications, phone number masking, and DLT-compliant OTP verification.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Seamless payments via UPI, debit/credit cards through Razorpay. Full transaction history at your fingertips.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Everything You Need for <span className="gradient-text">Vaastu Guidance</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
