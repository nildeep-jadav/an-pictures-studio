const clients = [
  { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "MINI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/MINI_logo.svg" },
  { name: "Motorrad", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/BMW_Motorrad_logo.svg" },
  { name: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Hyundai_symbol.svg" },
  { name: "Kia", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/KIA_logo3.svg" },
  { name: "Hamleys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hamleys_Logo.png/640px-Hamleys_Logo.png" },
  // Keeping these as text/without logo reference if no clear public URL found, 
  // or you can add them if you have a source. 
  // For now I will assume these might be rendered as text or we skip logo for them.
  { name: "Vantara", logo: null },
  { name: "WantASanta", logo: null },
];

export default function ClientLogos() {
  return (
    <section className="py-16 border-y border-border overflow-hidden bg-background">
      <div className="container-full">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-12 text-center">
          Brands I've Worked With
        </p>

        <div className="relative w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent">
          <div className="flex w-full overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap min-w-full items-center">
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="mx-8 md:mx-12 shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-8 md:h-12 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-lg md:text-xl font-bold text-foreground">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-duplicate-${index}`}
                  className="mx-8 md:mx-12 shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-8 md:h-12 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-lg md:text-xl font-bold text-foreground">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
