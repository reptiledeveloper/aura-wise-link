import { motion } from "framer-motion";
import { Compass, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Compass className="text-secondary" size={20} />
              <span className="text-secondary font-medium text-sm tracking-widest uppercase">
                Ancient Wisdom, Modern Living
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              <span className="text-primary-foreground">Harmonize Your</span>
              <br />
              <span className="gradient-text">Space & Life</span>
            </h1>

            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
              Connect with certified Vaastu consultants through video, audio, or chat.
              Get personalized guidance with our in-app compass technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="gradient-accent-bg text-accent-foreground px-8 py-4 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity shadow-lg"
              >
                Explore Services
              </a>
              <a
                href="#about"
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-center hover:bg-primary-foreground/10 transition-colors"
              >
                Learn About Vaastu
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-primary-foreground/50" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
