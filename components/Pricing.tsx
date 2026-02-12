import { Button } from "@/components/ui/button";
import { IconCheck, IconShieldCheck } from "@tabler/icons-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-pg-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-pg-green/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Simple, Transparent <span className="text-pg-green">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            One plan. All features. Maximum security for your digital life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-linear-to-r from-pg-green/50 to-pg-green/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
              {/* Left Section: Title & Price */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-pg-green/10 p-3 rounded-full mb-6">
                  <IconShieldCheck className="h-8 w-8 text-pg-green" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">Premium Shield</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold text-foreground">$4.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <Button className="w-full md:w-auto px-10 bg-pg-green text-pg-dark hover:bg-pg-green/90 font-bold h-12 shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all hover:shadow-[0_0_25px_rgba(0,255,65,0.5)]">
                  Protect My Account
                </Button>
              </div>

              {/* Right Section: Features List */}
              <div className="flex-1 w-full border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-16">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">What's Included</h4>
                <ul className="space-y-4 mb-0">
                  {[
                    "Unlimited Password Storage",
                    "Cross-Platform Syncing",
                    "End-to-End Encryption",
                    "24/7 Priority Support",
                    "Secure File Storage (5GB)",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-base text-foreground/80">
                      <IconCheck className="h-5 w-5 text-pg-green shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="mt-8 text-xs text-muted-foreground text-center md:text-left">
                  No hidden fees. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
