import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Is this workshop suitable for complete beginners?',
      answer: 'Yes, absolutely. This workshop is designed for kids aged 8–14 with zero prior experience in AI or robotics. Our mentors start from scratch and guide every child step by step.',
    },
    {
      question: 'What equipment does my child need?',
      answer: 'A laptop or desktop computer with a stable internet connection, a webcam, and a microphone. All software used is free and browser-based — no installation required.',
    },
    {
      question: 'Will there be a certificate at the end?',
      answer: 'Yes! Every child who completes the 4-week workshop and submits their final project receives a digital Certificate of Completion they can share and print.',
    },
    {
      question: 'How are the live sessions conducted?',
      answer: 'Sessions run live over Zoom with a maximum of 15 students per batch. Children interact directly with the instructor, ask questions, and work on projects in real time.',
    },
    {
      question: 'Can I get a refund if my child cannot attend?',
      answer: 'We offer a full refund within 48 hours of registration. After that, we provide a credit that can be used for the next available batch.',
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      {/* Header like screenshot 4 */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-white text-xl">?</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-sm mt-1">Everything you need to know about this workshop</p>
      </div>

      <div className="space-y-2 max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-800 text-sm pr-4">{faq.question}</span>
              <span className={`text-blue-500 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-gray-600 text-sm border-t border-gray-50">
                <p className="pt-3">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-500 text-sm mb-3">Still have questions?</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors text-sm">
          Contact Support
        </button>
      </div>
    </div>
  )
}

export default FAQ
