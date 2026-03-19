import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Vaastu Shastra?",
    answer:
      "Vaastu Shastra is an ancient Indian science of architecture and spatial arrangement. It provides guidelines for designing buildings and spaces that harmonize with natural forces, promoting health, wealth, and well-being.",
  },
  {
    question: "How does the in-app compass work?",
    answer:
      "Our app uses your device's compass sensor along with camera-based centre-point detection to accurately determine directions. This helps consultants assess your property's orientation for precise Vaastu recommendations.",
  },
  {
    question: "What consultation modes are available?",
    answer:
      "We offer audio calls, video calls, and real-time chat consultations. All sessions are one-to-one with certified Vaastu consultants and include call duration tracking and secure recordings.",
  },
  {
    question: "Are my personal details safe?",
    answer:
      "Absolutely. We use encrypted data handling, phone number masking between clients and consultants, spam filtering in chats, and secure cloud storage. Your privacy is our top priority.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, debit cards, and credit cards through our secure Razorpay integration. Every transaction generates a unique Order ID and is logged in your transaction history.",
  },
  {
    question: "Can I choose my own consultant?",
    answer:
      "Yes! You can browse consultant profiles, view their ratings and reviews from past clients, and select the one that best fits your needs before purchasing a consultation package.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-3">
            Everything you need to know about Vastu Sarovar
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-background rounded-xl border border-border px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-base hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
