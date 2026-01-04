import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is FinEase?",
    answer:
      "FinEase is a personal finance management platform that helps you track income, expenses, and savings in one place.",
  },
  {
    id: 2,
    question: "Is my financial data secure in FinEase?",
    answer:
      "Yes. FinEase uses secure authentication and encrypted data storage to protect your financial information.",
  },
  {
    id: 3,
    question: "Can I track both income and expenses?",
    answer:
      "Absolutely. FinEase allows you to record income, expenses, and categorize transactions for better insights.",
  },
  {
    id: 4,
    question: "Does FinEase support monthly budgeting?",
    answer:
      "Yes. You can set monthly budgets and monitor spending to stay within your financial limits.",
  },
  {
    id: 5,
    question: "Can I access FinEase from mobile devices?",
    answer:
      "Yes. FinEase is fully responsive and works seamlessly on mobile, tablet, and desktop devices.",
  },
  {
    id: 6,
    question: "Is FinEase free to use?",
    answer:
      "FinEase offers a free version with essential features. Premium features may be added in future updates.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-5 bg-base-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          FinEase – Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-base-100 border rounded-lg shadow-sm"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium"
              >
                {faq.question}
                <span
                  className={`text-xl transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                >
                  ⌄
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-base-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
