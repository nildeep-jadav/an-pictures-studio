const clients = [
  "BMW",
  "MINI",
  "Motorrad",
  "Hyundai",
  "Kia",
  "Hamleys",
  "Vantara",
  "WantASanta",
];

export default function ClientLogos() {
  return (
    <section className="py-16 border-y border-border">
      <div className="container-full">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8 text-center">
          Brands I've Worked With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client) => (
            <span
              key={client}
              className="text-lg md:text-xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
