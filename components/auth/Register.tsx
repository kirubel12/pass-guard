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
  IconUser, 
  IconArrowRight, 
  IconLoader2,
  IconEye,
  IconEyeOff,
  IconAlertCircle,
  IconCheck
} from '@tabler/icons-react'

const Register = () => {
  const router = useRouter()
  const supabase = createClient()
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  
  const [formData, setFormData] = useState({
    fullName: '',
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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      })

      if (signUpError) throw signUpError

      router.push('/login')
    } catch (err: any) {
      setError(err.message || 'An error occurred during registration')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-pg-dark flex items-center justify-center p-4 pt-20">

      <div className="w-full max-w-[1100px] grid md:grid-cols-2 bg-white dark:bg-neutral-900 rounded-3xl border border-gray-200 dark:border-neutral-800 overflow-hidden shadow-xl dark:shadow-none animate-fade-in-up">
        
        {/* Brand Side */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-gray-50 dark:bg-neutral-950 border-r border-gray-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-pg-green rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.4)]">
                <IconShieldCheck className="text-pg-dark w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">Pass-Guard</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Secure your <span className="text-pg-green">digital identity</span> in seconds.
            </h2>
            
            <ul className="space-y-4 text-gray-600 dark:text-neutral-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-pg-green/15 flex items-center justify-center shrink-0">
                  <IconCheck className="text-pg-green w-3.5 h-3.5" />
                </div>
                <span>AES-256 military-grade encryption</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-pg-green/15 flex items-center justify-center shrink-0">
                  <IconCheck className="text-pg-green w-3.5 h-3.5" />
                </div>
                <span>Zero-knowledge architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-pg-green/15 flex items-center justify-center shrink-0">
                  <IconCheck className="text-pg-green w-3.5 h-3.5" />
                </div>
                <span>Cross-platform sync anywhere</span>
              </li>
            </ul>
          </div>
          
          <div className="text-sm text-gray-400 dark:text-neutral-600">
            © 2024 Pass-Guard. All rights reserved.
          </div>
        </div>

        {/* Form Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create Account</h1>
            <p className="text-gray-500 dark:text-neutral-400">Start your journey to ultimate security.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
              {error && (
                <div className="bg-pg-red/10 border border-pg-red/25 text-pg-red px-4 py-3 rounded-xl flex items-center gap-3">
                  <IconAlertCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700 dark:text-neutral-300 ml-1">Full Name</Label>
                <div className="relative group">
                  <IconUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-neutral-500 group-focus-within:text-pg-green transition-colors" />
                  <Input 
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="pl-11 h-12 bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500 focus:border-pg-green/50 focus:ring-pg-green/20 transition-all rounded-xl"
                  />
                </div>
              </div>

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
                  <Label htmlFor="password" title="Password" className="text-gray-700 dark:text-neutral-300">Master Password</Label>
                  <span className="text-[10px] text-gray-400 dark:text-neutral-500 italic">Must be at least 12 characters</span>
                </div>
                <div className="relative group">
                  <IconLock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-neutral-500 group-focus-within:text-pg-green transition-colors" />
                  <Input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    required
                    minLength={12}
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
                  <>Create Account <IconArrowRight className="ml-2 w-5 h-5" /></>
                )}
              </Button>

              <div className="pt-4 text-center">
                <p className="text-gray-400 dark:text-neutral-500 text-sm">
                  Already have an account?{' '}
                  <Link href="/login" className="text-pg-green hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register