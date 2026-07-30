import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    question: "Who is eligible to attend UDAAN 2026?",
    answer: "All graduating scholars receiving certificates or donor gold medals, their parents, and faculty members are eligible to attend. Special invitations are issued to distinguished alumni and chief guests.",
  },
  {
    question: "How do I complete registration for the ceremony?",
    answer: "Registration is mandatory for all awardees and must be completed using the official Google Form portal on this website prior to the announced deadline.",
  },
  {
    question: "What is the mandatory dress code?",
    answer: "Traditional Indian formal wear is required. Male candidates should wear white/off-white Kurta Pyjama. Female candidates should wear white/off-white Salwar-Kurta or Saree. Ceremonial half-jackets are provided at the venue registration counter.",
  },
  {
    question: "Can I bring guest family members?",
    answer: "Each award recipient is permitted up to 2 family guests inside the main auditorium. Guest details must be recorded during digital registration.",
  },
  {
    question: "What documents must I present at entry?",
    answer: "Please present your institute photo ID card / Aadhaar card alongside your digital QR pass confirmation at Gate 1 or Gate 2.",
  },
  {
    question: "Is parking available on campus?",
    answer: "Designated complimentary parking is available on the SGSITS campus. Student volunteers will assist with vehicle directions.",
  },
  {
    question: "Will refreshments be served?",
    answer: "Welcome tea is provided during morning registration, followed by a networking high tea session after the main ceremony on the Golden Jubilee Lawn.",
  },
  {
    question: "What if I am unable to attend in person?",
    answer: "The ceremony will be live-streamed on the official SGSITS YouTube channel. Degree certificates and medals can subsequently be collected from the Academic Registrar's office with prior authorization.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 bg-background border-t border-border-strong">
      <div className="mx-auto px-4 max-w-3xl">
        <Reveal className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            INFORMATION &amp; INQUIRIES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-normal">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </Reveal>

        <div className="bg-card border border-border divide-y divide-border">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-background transition-colors cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="font-serif text-base text-foreground font-normal">{faq.question}</span>
                <ChevronDown className="h-4 w-4 text-accent flex-shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 font-sans text-xs text-muted-foreground leading-relaxed border-t border-dashed border-border pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
