"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  IconKey, 
  IconShieldCheck, 
  IconAlertTriangle, 
  IconDeviceMobile 
} from "@tabler/icons-react"

const stats = [
  {
    title: "Total Passwords",
    value: "156",
    description: "+12 from last month",
    icon: IconKey,
    color: "text-pg-green",
    bg: "bg-pg-green/10",
  },
  {
    title: "Secure Notes",
    value: "24",
    description: "All encrypted",
    icon: IconShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Weak Passwords",
    value: "3",
    description: "Requires attention",
    icon: IconAlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "2FA Enabled",
    value: "85%",
    description: "Security score",
    icon: IconDeviceMobile,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in-up">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-heading">Welcome back, User!</h2>
        <p className="text-muted-foreground mt-1">Here is what is happening with your security vault today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`${stat.bg} ${stat.color} p-2 rounded-lg`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-full lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            <IconKey className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium">Password Updated</p>
                            <p className="text-xs text-muted-foreground">Google Account • 2 hours ago</p>
                        </div>
                    </div>
                ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <CardTitle>Security Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
                <div className="p-4 rounded-xl border border-pg-green/20 bg-pg-green/5">
                    <p className="text-sm font-medium text-pg-green mb-1">Update Weak Passwords</p>
                    <p className="text-xs text-muted-foreground">You have 3 weak passwords. Change them to improve your security score.</p>
                </div>
                <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
                    <p className="text-sm font-medium text-blue-500 mb-1">Enable 2FA</p>
                    <p className="text-xs text-muted-foreground">Enable Two-Factor Authentication for all your sensitive accounts.</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}