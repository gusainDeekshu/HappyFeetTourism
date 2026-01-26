import React from 'react';

const faqs = [
  { q: "How long does a typical sports facility project take?", a: "Timelines vary based on scope. Small courts take 2-4 weeks, while large stadiums can take 6+ months." },
  { q: "Do you provide free consultation and project planning?", a: "Yes, we offer initial consultation and planning to understand your requirements." },
  { q: "What warranty and after-sales support do you provide?", a: "We provide comprehensive warranties on all equipment and installations. Detailed terms vary by product." },
  { q: "Can you handle projects outside major cities?", a: "Absolutely. We execute projects pan-India, including remote locations." },
  { q: "Do you offer financing options for large projects?", a: "We can connect you with financing partners for qualifying projects." },
];

export default function FAQSection() {
  return (
    <section className="container mx-auto px-4 mb-24 max-w-4xl">
      <h2 className="text-center text-white text-2xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-lg p-6">
            <h3 className="font-bold text-hercules-blue text-lg mb-2">{faq.q}</h3>
            <p className="text-gray-600 text-sm">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}