import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Logo,
  MAPS_URL,
  PhoneButton,
  RatingSeal,
  Stars,
  WhatsAppButton,
  WhatsAppIcon,
  WHATSAPP_URL,
} from "./brand";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-deep/95 backdrop-blur">
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
        <div className="flex min-w-0 items-baseline gap-3">
          <Logo className="text-3xl text-cream" />
          <span className="hidden truncate text-xs text-cream/60 sm:inline">
            Cuidamos dos sorrisos de todas as idades.
          </span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-lg bg-whatsapp px-4 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-hover"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
          <span className="sr-only">
            Abrir conversa no WhatsApp com a Vero Odontologia
          </span>
        </a>
      </div>
    </header>
  );
}

export function Hero({ sentinelRef }: { sentinelRef: React.Ref<HTMLDivElement> }) {
  return (
    <section className="bg-navy-deep px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm tracking-wide text-cream/60 sm:hidden">
          Cuidamos dos sorrisos de todas as idades.
        </p>
        <h1 className="mt-4 text-[2rem] leading-[1.12] font-semibold text-cream sm:mt-0 sm:text-5xl">
          Nota 4,9 em 162 avaliações reais.{" "}
          <span className="text-cream/70">
            A confiança já existe — agora ela tem para onde ir.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
          A Vero Odontologia atende na R. Martim Afonso de Souza, 375, em Santo
          André. Chame no WhatsApp e agende sua avaliação.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <WhatsAppButton className="w-full sm:w-auto" />
          <PhoneButton />
        </div>
        <p className="mt-4 text-sm text-cream/55">Atendimento em Santo André</p>
        <div className="mt-8">
          <RatingSeal />
        </div>
      </div>
      <div ref={sentinelRef} aria-hidden="true" className="h-px w-full" />
    </section>
  );
}

export function TrustBlock() {
  return (
    <section className="bg-navy px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-16">
        <div className="text-center md:text-left">
          <div className="flex items-baseline justify-center gap-3 md:justify-start">
            <span className="font-display text-[5.5rem] leading-none font-semibold text-cream sm:text-[7.5rem]">
              4,9
            </span>
            <Stars className="text-4xl sm:text-5xl" />
          </div>
          <p className="mt-3 text-base text-cream/70">
            162 avaliações no Google
          </p>
          <span className="sr-only">
            Nota 4,9 de 5 estrelas, baseada em 162 avaliações reais no Google
          </span>
        </div>
        <div className="min-w-0">
          <h2 className="text-2xl leading-snug font-semibold text-cream sm:text-3xl">
            Isso não é uma promessa de site. É o que 162 pessoas já confirmaram.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75">
            A nota da Vero Odontologia não foi escrita para esta página — ela
            existe há tempo no Google Maps, construída avaliação por avaliação,
            por quem já foi atendido. 4,9 de 5, com 162 avaliações reais. É esse
            histórico que está por trás de cada consulta marcada aqui.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CareSection() {
  return (
    <section className="bg-cream px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <span
          aria-hidden="true"
          className="block h-px w-16 bg-gold"
        />
        <h2 className="mt-8 text-2xl leading-snug font-semibold text-navy-deep sm:text-4xl">
          Cuidado com o seu sorriso, do jeito que a sua rotina precisar
        </h2>
        <p className="mt-6 text-base leading-relaxed text-navy/80 sm:text-lg">
          Cada pessoa chega a uma consulta odontológica por um motivo diferente
          — uma dor, uma prevenção de rotina, uma avaliação antes de decidir um
          tratamento, ou simplesmente para colocar em dia o cuidado com os
          dentes. Cuidamos dos sorrisos de todas as idades: a Vero Odontologia
          atende em Santo André para conversar sobre o que você precisa e
          indicar o melhor caminho a partir daí.
        </p>
        <p className="mt-5 text-base leading-relaxed text-navy/80 sm:text-lg">
          Se você já sabe o que procura ou ainda está com dúvida sobre o tipo de
          atendimento, o primeiro passo é o mesmo: chamar a clínica no WhatsApp.
        </p>
      </div>
    </section>
  );
}

const STEPS = [
  {
    title: "Chame a Vero Odontologia no WhatsApp",
    body: "(11) 99396-7923.",
  },
  {
    title: "Conte o que você precisa",
    body: "uma dúvida rápida, uma avaliação ou já uma consulta específica.",
  },
  {
    title: "Combine o melhor horário",
    body: "direto com a clínica, sem burocracia.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-cream-soft px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold text-navy-deep sm:text-4xl">
          Marcar uma consulta é simples
        </h2>
        <ol className="mt-10 space-y-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="font-display shrink-0 text-3xl leading-none font-semibold text-gold">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-navy-deep">
                  {step.title}
                </h3>
                <p className="mt-1 text-base text-navy/75">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-base leading-relaxed text-navy/75">
          Não é preciso saber exatamente o tratamento antes de chamar. Se você
          ainda tem dúvida sobre convênio, tipo de atendimento ou
          disponibilidade, essas são exatamente as perguntas certas para começar
          a conversa.
        </p>
        <div className="mt-8">
          <WhatsAppButton className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="bg-cream px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold text-navy-deep sm:text-4xl">
          Fácil de encontrar, em Santo André
        </h2>
        <p className="mt-6 text-lg font-semibold text-navy-deep">
          R. Martim Afonso de Souza, 375 — Santo André, SP
        </p>
        <p className="mt-3 text-base text-navy/75">
          Confira a localização exata no mapa abaixo antes de vir até a clínica.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10">
          <iframe
            title="Mapa da localização da Vero Odontologia em Santo André"
            src="https://www.google.com/maps?q=R.+Martim+Afonso+de+Souza,+375,+Santo+Andr%C3%A9,+SP&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[240px] w-full sm:h-[340px]"
          />
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-[48px] items-center rounded-xl border border-navy/25 px-6 text-base font-medium text-navy transition-colors hover:bg-navy/5"
        >
          Ver no mapa
        </a>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "A Vero Odontologia atende convênio?",
    a: "Isso pode variar. O jeito mais rápido de confirmar é chamar a clínica no WhatsApp antes da sua consulta.",
  },
  {
    q: "Como eu agendo uma consulta ou avaliação?",
    a: "Basta chamar a Vero Odontologia no WhatsApp — (11) 99396-7923 — e informar o que você precisa. A própria clínica confirma o melhor horário com você.",
  },
  {
    q: "Não sei exatamente qual tratamento eu preciso — posso chamar mesmo assim?",
    a: "Sim. Muitas pessoas entram em contato só para tirar uma dúvida ou marcar uma avaliação inicial, sem saber ainda o próximo passo. É justamente para isso que serve o primeiro contato.",
  },
  {
    q: "A nota 4,9 é real?",
    a: "Sim — é a nota pública da Vero Odontologia no Google, com 162 avaliações de pacientes reais. Você pode conferir diretamente no Google Maps.",
  },
  {
    q: "Qual o horário de atendimento?",
    a: "O horário pode variar. Chame a clínica no WhatsApp para confirmar a disponibilidade mais próxima da sua data preferida.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-cream-soft px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold text-navy-deep sm:text-4xl">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {FAQ.map((item) => (
            <AccordionItem
              key={item.q}
              value={item.q}
              className="border-b border-navy/10"
            >
              <AccordionTrigger className="min-h-[56px] py-4 text-left text-base font-semibold text-navy-deep hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-navy/75">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-navy px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <RatingSeal />
        <h2 className="mt-6 text-2xl leading-snug font-semibold text-cream sm:text-4xl">
          162 pacientes já confiaram na Vero Odontologia. Chame no WhatsApp e
          marque a sua consulta.
        </h2>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <WhatsAppButton className="w-full py-1 text-lg sm:w-auto" />
          <PhoneButton />
        </div>
        <p className="mt-4 text-sm text-cream/55">
          Atendimento em Santo André — R. Martim Afonso de Souza, 375
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep px-5 py-14">
      <div className="mx-auto max-w-3xl">
        <Logo className="text-3xl text-cream" />
        <p className="mt-2 text-sm text-cream/60">
          Cuidamos dos sorrisos de todas as idades.
        </p>
        <address className="mt-6 space-y-1 text-sm text-cream/75 not-italic">
          <p>R. Martim Afonso de Souza, 375 — Santo André, SP</p>
          <p>WhatsApp: (11) 99396-7923</p>
          <p>Telefone: (11) 4453-8633</p>
        </address>
        <div className="mt-7">
          <WhatsAppButton className="w-full sm:w-auto" />
        </div>
        <p className="mt-10 text-xs text-cream/40">
          © 2026 Vero Odontologia — Todos os direitos reservados
        </p>
      </div>
      <div className="h-16 md:hidden" />
    </footer>
  );
}

export function StickyBar({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-deep/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <WhatsAppButton className="w-full" />
    </div>
  );
}

export function useHeroPassed() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [passed, setPassed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setPassed(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, passed };
}
