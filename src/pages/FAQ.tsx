import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

const faqs = [
  {
    category: "Ordering",
    questions: [
      {
        question: "How do I place an order?",
        answer: "You can place an order by browsing restaurants or stores, adding items to your cart, and proceeding to checkout. Make sure you're signed in to your account."
      },
      {
        question: "Can I modify my order after placing it?",
        answer: "You can modify your order within the first few minutes before the restaurant accepts it. After that, please contact support for assistance."
      },
      {
        question: "What if my order is late?",
        answer: "If your order is taking longer than estimated, you can track it in real-time through the app. If there's a significant delay, our support team will contact you."
      }
    ]
  },
  {
    category: "Payment",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards, digital wallets (Apple Pay, Google Pay), and cash on delivery in select areas."
      },
      {
        question: "Is it safe to save my card information?",
        answer: "Yes, we use industry-standard encryption to protect your payment information. Your card details are never stored on our servers."
      },
      {
        question: "How do refunds work?",
        answer: "Refunds are processed within 5-7 business days, depending on your payment method and bank."
      }
    ]
  },
  {
    category: "Delivery",
    questions: [
      {
        question: "How is the delivery fee calculated?",
        answer: "Delivery fees are calculated based on distance, time of day, and weather conditions. The exact fee is shown before you place your order."
      },
      {
        question: "What is the delivery radius?",
        answer: "Delivery radius varies by restaurant and location. You can see available restaurants by entering your delivery address."
      },
      {
        question: "Can I schedule a delivery for later?",
        answer: "Yes, you can schedule deliveries up to 7 days in advance for most restaurants."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          
          {faqs.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}