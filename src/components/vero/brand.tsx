export const WHATSAPP_URL =
  "https://wa.me/5511993967923?text=" +
  encodeURIComponent("Olá! Vim pelo site da Vero Odontologia.");
export const PHONE_HREF = "tel:+551144538633";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("R. Martim Afonso de Souza, 375, Santo André, SP");

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.83 9.83 0 0 0 4.69 1.2h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 19 4.87 9.8 9.8 0 0 0 12.04 2zm0 17.96h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.1-.2-.32a8.16 8.16 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.86 5.8 2.41a8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.2 8.2z" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-script leading-none tracking-tight ${className}`}
      aria-label="Vero Odontologia"
    >
      vero
    </span>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`text-gold ${className}`} aria-hidden="true">
      ★
    </span>
  );
}

export function RatingSeal({ dark = true }: { dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
        dark
          ? "border-white/15 bg-white/5 text-cream"
          : "border-navy/15 bg-navy/5 text-navy"
      }`}
      aria-label="Nota 4,9 de 5 estrelas, baseada em 162 avaliações reais no Google"
    >
      <span aria-hidden="true" className="font-semibold">
        4,9
      </span>
      <Stars />
      <span aria-hidden="true" className="opacity-45">
        ·
      </span>
      <span aria-hidden="true">162 avaliações no Google</span>
    </p>
  );
}

export function WhatsAppButton({
  className = "",
  label = "Falar no WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-whatsapp px-7 text-base font-semibold text-white transition-colors hover:bg-whatsapp-hover ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>{label}</span>
      <span className="sr-only">
        Abrir conversa no WhatsApp com a Vero Odontologia
      </span>
    </a>
  );
}

export function PhoneButton({ dark = true }: { dark?: boolean }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border px-7 text-base font-medium transition-colors ${
        dark
          ? "border-cream/30 text-cream hover:bg-cream/10"
          : "border-navy/25 text-navy hover:bg-navy/5"
      }`}
    >
      <PhoneIcon className="h-[18px] w-[18px]" />
      Ligar para a clínica
    </a>
  );
}
