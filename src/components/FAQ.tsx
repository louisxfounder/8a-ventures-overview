import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does 8a Projects handle investment accounts or customer inquiries?",
    answer: "No. Each venture is independent and has its own processes and points of contact.",
  },
  {
    question: "Why group these ventures together under 8a Projects?",
    answer: "They share certain strategic resources (like marketing) and benefit from a centralized reference point.",
  },
  {
    question: "How do I learn more about one of the ventures?",
    answer: "Each venture has its own website or team that can provide additional details.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg">
            Find answers to common questions about 8a Projects and our ventures.
          </p>
        </div>

        <Accordion type="single" collapsible className="animate-in space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-lg py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;