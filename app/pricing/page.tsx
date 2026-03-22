'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Badge variant="outline" className="rounded-none font-mono text-xs tracking-widest border-zinc-300 dark:border-zinc-700 text-zinc-500">
            FITCOACH AI — v1.0
          </Badge>

          <h1 className="font-mono text-3xl font-bold mt-6 text-zinc-950 dark:text-zinc-100 tracking-tight">
            SIMPLE PRICING
          </h1>

          <p className="font-mono text-xs text-zinc-500 mt-2 tracking-wide">
            Choose the plan that works best for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Free Plan */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">
              <h2 className="font-mono font-bold text-lg text-zinc-950 dark:text-zinc-100">FREE</h2>
              <p className="font-mono text-3xl font-bold text-zinc-950 dark:text-zinc-100 mt-4">$0</p>
              <p className="font-mono text-xs text-zinc-500 mt-1">/month</p>

              <ul className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-8 space-y-3">
                <li>✓ 10 messages/day</li>
                <li>✓ Basic fitness advice</li>
                <li>✓ Goal-specific guidance</li>
                <li>✗ Advanced analytics</li>
                <li>✗ Priority support</li>
              </ul>

              <Button className="w-full mt-8 rounded-none bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-mono text-xs tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-300 cursor-pointer">
                GET STARTED
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-zinc-950 dark:border-zinc-100 p-8 bg-zinc-50 dark:bg-zinc-900">
              <div className="font-mono font-bold text-xs text-zinc-950 dark:text-zinc-100 mb-2">MOST POPULAR</div>
              <h2 className="font-mono font-bold text-lg text-zinc-950 dark:text-zinc-100">PRO</h2>
              <p className="font-mono text-3xl font-bold text-zinc-950 dark:text-zinc-100 mt-4">$9.99</p>
              <p className="font-mono text-xs text-zinc-500 mt-1">/month</p>

              <ul className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-8 space-y-3">
                <li>✓ Unlimited messages</li>
                <li>✓ Advanced fitness plans</li>
                <li>✓ Nutrition tracking</li>
                <li>✓ Progress analytics</li>
                <li>✗ Priority support</li>
              </ul>

              <Button className="w-full mt-8 rounded-none bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-mono text-xs tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-300 cursor-pointer">
                UPGRADE NOW
              </Button>
            </div>

            {/* Elite Plan */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">
              <h2 className="font-mono font-bold text-lg text-zinc-950 dark:text-zinc-100">ELITE</h2>
              <p className="font-mono text-3xl font-bold text-zinc-950 dark:text-zinc-100 mt-4">$19.99</p>
              <p className="font-mono text-xs text-zinc-500 mt-1">/month</p>

              <ul className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-8 space-y-3">
                <li>✓ Everything in Pro</li>
                <li>✓ 1-on-1 coach access</li>
                <li>✓ Custom meal plans</li>
                <li>✓ Video form analysis</li>
                <li>✓ Priority 24/7 support</li>
              </ul>

              <Button className="w-full mt-8 rounded-none bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-mono text-xs tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-300 cursor-pointer">
                UPGRADE NOW
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
