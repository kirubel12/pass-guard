import { Button } from "@/components/ui/button";
import { IconArrowRight, IconLock } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-pg-dark">
     
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pg-green/10 dark:bg-pg-green/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground mb-6 max-w-4xl animate-fade-in-up delay-100">
          Secure Your Digital Life with{" "}
          <span className="text-pg-green drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]">
            Pass-Guard
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in-up delay-200">
          Bank-grade encryption for your passwords, 2FA, and notes. Accessible
          everywhere, anytime. Experience the future of security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
          <Button
            size="lg"
            className="bg-pg-green text-pg-dark hover:bg-pg-green/90 font-semibold text-lg h-12 px-8 shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,255,65,0.6)]"
          >
            Start for Free <IconArrowRight className="ml-2 h-5 w-5" />
          </Button>
         
        </div>


       
      </div>
    </section>
  );
}
