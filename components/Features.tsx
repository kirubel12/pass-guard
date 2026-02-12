import {
  IconLock,
  IconShieldCheck,
  IconDevices,
  IconMoon,
  IconKey,
  IconCloudLock,
} from "@tabler/icons-react";

const features = [
  {
    title: "Bank-Grade Encryption",
    description:
      "Your data is secured with AES-256 bit encryption, the industry standard for security.",
    icon: <IconLock stroke={1.5} />,
  },
  {
    title: "Multi-Factor Auth",
    description: "Add an extra layer of security with built-in 2FA support.",
    icon: <IconShieldCheck stroke={1.5} />,
  },
  {
    title: "Cross-Platform Sync",
    description: "Access your passwords on any device, anywhere, anytime.",
    icon: <IconDevices stroke={1.5} />,
  },
  {
    title: "Dark Mode Optimized",
    description: "Easy on the eyes with a sleek OLED-friendly dark interface.",
    icon: <IconMoon stroke={1.5} />,
  },
  {
    title: "Password Generator",
    description: "Create strong, unique passwords with a single click.",
    icon: <IconKey stroke={1.5} />,
  },
  {
    title: "Zero-Knowledge Architecture",
    description:
      "We can't read your data. Only you have the keys to your digital vault.",
    icon: <IconCloudLock stroke={1.5} />,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-pg-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4 tracking-tight">
              Uncompromising security. <br /> 
              <span className="text-muted-foreground">By design.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Built with a privacy-first approach. We leverage industry-standard 
              protocols to ensure your digital identity remains yours.
            </p>
          </div>
          <div className="h-[1px] flex-1 bg-border hidden md:block mb-4 mx-8" />
          <div className="text-sm font-mono text-pg-green/60 tracking-widest uppercase">
            [ Security Specs ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-start transition-all duration-300"
            >
              <div className="mb-6 p-2 text-muted-foreground group-hover:text-pg-green transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
                {feature.title}
                <div className="w-1 h-1 rounded-full bg-pg-green opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Subtle bottom border line */}
        <div className="mt-24 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
