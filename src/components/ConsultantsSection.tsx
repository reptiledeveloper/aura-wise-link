import { motion } from "framer-motion";
import { Star } from "lucide-react";
import consultantImg from "@/assets/consultant.jpg";

const consultants = [
  { name: "Pandit Rajesh Sharma", specialty: "Residential Vaastu", rating: 4.9, consultations: 320 },
  { name: "Dr. Meera Iyer", specialty: "Commercial Vaastu", rating: 4.8, consultations: 245 },
  { name: "Acharya Vikram Singh", specialty: "Industrial Vaastu", rating: 4.9, consultations: 180 },
];

const ConsultantsSection = () => {
  return (
    <section id="consultants" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            Expert Consultants
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Meet Our <span className="gradient-text">Certified Experts</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {consultants.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border/50"
            >
              <div className="h-56 overflow-hidden">
                <img src={consultantImg} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold text-foreground">{c.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.specialty}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1">
                    <Star className="fill-secondary text-secondary" size={16} />
                    <span className="text-sm font-semibold text-foreground">{c.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{c.consultations}+ consultations</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultantsSection;
