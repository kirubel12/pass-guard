"use client"

import * as React from "react"
import { IconBell, IconSearch } from "@tabler/icons-react"

import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/ThemeToggle"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white dark:bg-background sticky top-0 z-10 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 text-muted-foreground" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="font-semibold text-lg text-foreground">Dashboard</h1>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="relative hidden sm:block">
          <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-[200px] lg:w-[300px] pl-9 bg-white dark:bg-muted/50 border-input"
          />
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
                <IconBell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
            </Button>
            <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
