import { motion } from "framer-motion";
import aboutImg from "@/assets/about-vaastu.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src={aboutImg}
                alt="Vaastu Shastra sacred geometry"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl gradient-hero-bg opacity-20 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
              About Vaastu Shastra
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6 text-foreground">
              The Science of <span className="gradient-text">Directional Harmony</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Vaastu Shastra is an ancient Indian architectural science that aligns your living and working
              spaces with natural forces and cosmic energies. Dating back over 5,000 years, it provides
              guidelines for spatial arrangement to promote health, wealth, and harmony.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our platform brings this profound wisdom to your fingertips — connecting you with certified
              Vaastu consultants who can analyze your space using our cutting-edge compass technology
              and provide personalized remedies.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "5000+", label: "Years of Wisdom" },
                { num: "500+", label: "Consultations" },
                { num: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-display font-bold gradient-text">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
