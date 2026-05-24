import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes your teaching method unique and effective?",
    answer:
      "Our program is designed especially for Muslim families living in the West who want their children to stay connected to the Qur'an, Arabic, and their Islamic identity. We combine correct Tajweed and strong memorization techniques, clear Arabic pronunciation, gentle and encouraging teaching style, and structured progress plans with regular parent updates. Our goal is not just memorization — it's raising confident Muslim children who love the Qur'an and understand what they recite.",
  },
  {
    question: "Where are you located and do you serve my area?",
    answer:
      "We offer fully online classes, which means your child can join from anywhere in the United States or around the world. No driving, no stress — just safe, comfortable learning from home.",
  },
  {
    question: "What is the age limit for students?",
    answer:
      "We accept students starting from 5 years old and above. Each child is placed in a level that matches their age and ability — whether they are complete beginners or already memorizing.",
  },
  {
    question: "Do I have to know Arabic to join?",
    answer:
      "Not at all. We welcome both Arabic and non-Arabic speaking students. We start from the basics if needed and guide your child step by step with patience and clarity.",
  },
  {
    question: "What technology is needed for online classes?",
    answer:
      "Very simple: A laptop, tablet, or smartphone, stable internet connection, Zoom installed, and a quiet learning space. That's all your child needs to begin their journey.",
  },
  {
    question: "Can I get a free trial before enrolling?",
    answer:
      "Yes! We offer a free trial class so you can see our teaching style and ensure it's the right fit for your child. We want you to feel completely confident before enrolling.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are responses to some frequently asked questions about our courses and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left text-card-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
