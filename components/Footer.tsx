import Link from "next/link";
import { IconShieldLock, IconBrandTwitter, IconBrandGithub } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-pg-dark border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <IconShieldLock className="h-6 w-6 text-pg-green" />
          <span className="text-lg font-bold font-heading tracking-tight text-foreground">
            Pass-Guard
          </span>
          <span className="text-sm text-muted-foreground ml-2">
            © {new Date().getFullYear()}
          </span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="text-muted-foreground hover:text-pg-green transition-colors">Privacy</Link>
            <Link href="#" className="text-muted-foreground hover:text-pg-green transition-colors">Terms</Link>
          </div>
          
          <div className="flex items-center gap-4">
             <Link href="#" className="text-muted-foreground hover:text-pg-green transition-colors">
                <IconBrandTwitter className="h-5 w-5" />
             </Link>
             <Link href="#" className="text-muted-foreground hover:text-pg-green transition-colors">
                <IconBrandGithub className="h-5 w-5" />
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

