import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FAQ { q: string; a: string }

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <Accordion type="single" collapsible className="w-full divide-y divide-border border-y border-border">
      {items.map((it, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg font-medium text-dark-text hover:text-gold-500 hover:no-underline">
            {it.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base text-gray-600 leading-relaxed">
            {it.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
