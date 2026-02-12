"use client";

import Link from "next/link";
import { IconShieldLock } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/80 dark:bg-pg-dark/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <IconShieldLock className="h-8 w-8 text-pg-green" />
          <span className="text-xl font-bold font-heading tracking-tight text-foreground">
            Pass-Guard
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-pg-green transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-pg-green transition-colors">
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
            Sign In
          </Link>
          <Button className="bg-pg-green text-pg-dark hover:bg-pg-green/90 font-semibold shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all hover:shadow-[0_0_25px_rgba(0,255,65,0.5)]">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
