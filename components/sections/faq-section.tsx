"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { faqs } from "@/data/content";

export function FaqSection() {
  return (
    <section className="section-padding border-b border-border">
      <Container className="max-w-3xl">
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />

        <FadeUp className="mt-12">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <Accordion.Item
                key={faq.question}
                value={faq.question}
                className="overflow-hidden rounded-card border border-border bg-surface"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-heading text-sm font-semibold text-foreground transition-colors hover:text-primary">
                    {faq.question}
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="px-6 pb-5">{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </FadeUp>
      </Container>
    </section>
  );
}
