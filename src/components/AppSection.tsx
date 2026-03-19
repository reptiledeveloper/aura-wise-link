import { motion } from "framer-motion";
import { Smartphone, CheckCircle } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const features = [
  "Live compass with direction detection",
  "Video & audio consultations",
  "Secure in-app chat with image sharing",
  "Consultation packages & scheduling",
  "Razorpay payment integration",
  "Ratings & reviews system",
];

const AppSection = () => {
  return (
    <section id="app" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
              Mobile App
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6 text-foreground">
              Vaastu Guidance <span className="gradient-text">In Your Pocket</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Download the Vastu Sarovar app on Android and iOS. Get instant access to certified
              consultants, use the in-app compass for direction analysis, and manage your
              consultations seamlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle className="text-primary shrink-0" size={18} />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="gradient-primary-bg text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Smartphone size={18} />
                Google Play
              </a>
              <a
                href="#"
                className="gradient-primary-bg text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Smartphone size={18} />
                App Store
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={appMockup}
              alt="Vastu Sarovar App"
              className="rounded-3xl shadow-xl max-w-sm w-full animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
