'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  IconShieldCheck, 
  IconMail, 
  IconLock, 
  IconArrowRight, 
  IconLoader2,
  IconEye,
  IconEyeOff,
  IconAlertCircle,
} from '@tabler/icons-react'

const Login = () => {
  const router = useRouter()
  const supabase = createClient()
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    if (error) setError(null)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (signInError) throw signInError

      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-pg-dark flex items-center justify-center p-4 pt-20">

      <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-3xl border border-gray-200 dark:border-neutral-800 overflow-hidden shadow-xl dark:shadow-none animate-fade-in-up">

        <div className="p-8 md:p-10">
          {/* Logo & Heading */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 bg-pg-green rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.4)] mb-5">
              <IconShieldCheck className="text-pg-dark w-7 h-7" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Welcome back</h1>
            <p className="text-gray-500 dark:text-neutral-400 text-sm">Sign in to your Pass-Guard vault.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-pg-red/10 border border-pg-red/25 text-pg-red px-4 py-3 rounded-xl flex items-center gap-3">
                <IconAlertCircle className="w-5 h-5 shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-neutral-300 ml-1">Email Address</Label>
              <div className="relative group">
                <IconMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-neutral-500 group-focus-within:text-pg-green transition-colors" />
                <Input 
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-11 h-12 bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500 focus:border-pg-green/50 focus:ring-pg-green/20 transition-all rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <Label htmlFor="password" className="text-gray-700 dark:text-neutral-300">Master Password</Label>
                <Link href="/forgot-password" className="text-xs text-pg-green hover:underline font-medium">
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <IconLock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-neutral-500 group-focus-within:text-pg-green transition-colors" />
                <Input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-11 pr-11 h-12 bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500 focus:border-pg-green/50 focus:ring-pg-green/20 transition-all rounded-xl"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300 transition-colors"
                >
                  {showPassword ? <IconEyeOff className="w-5 h-5" /> : <IconEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full h-12 bg-pg-green text-pg-dark hover:bg-pg-green/90 font-bold text-base rounded-xl transition-all shadow-[0_0_20px_rgba(0,255,65,0.15)] hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] disabled:opacity-70"
            >
              {loading ? (
                <IconLoader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>Sign In <IconArrowRight className="ml-2 w-5 h-5" /></>
              )}
            </Button>

            <div className="pt-4 text-center">
              <p className="text-gray-400 dark:text-neutral-500 text-sm">
                Don't have an account?{' '}
                <Link href="/register" className="text-pg-green hover:underline font-medium">
                  Create one
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login