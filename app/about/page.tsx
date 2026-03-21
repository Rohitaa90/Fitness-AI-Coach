'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <Badge variant="outline" className="rounded-none font-mono text-xs tracking-widest border-zinc-300 dark:border-zinc-700 text-zinc-500">
            FITCOACH AI — v1.0
          </Badge>

          <h1 className="font-mono text-3xl font-bold mt-6 text-zinc-950 dark:text-zinc-100 tracking-tight">
            ABOUT FITCOACH AI
          </h1>

          <div className="mt-8 space-y-6 font-mono text-sm text-zinc-700 dark:text-zinc-300">
            <p>
              <strong>FITCOACH AI</strong> is a revolutionary fitness coaching platform powered by artificial intelligence. We combine expert fitness knowledge with cutting-edge AI technology to provide personalized workout and nutrition guidance tailored to your specific goals.
            </p>

            <h2 className="font-bold text-lg text-zinc-950 dark:text-zinc-100 mt-6">OUR MISSION</h2>
            <p>
              To democratize fitness coaching by making expert guidance accessible, affordable, and personalized for everyone. We believe fitness should be scientific, motivating, and actually achievable.
            </p>

            <h2 className="font-bold text-lg text-zinc-950 dark:text-zinc-100 mt-6">HOW IT WORKS</h2>
            <ul className="space-y-2">
              <li>→ Select your fitness goal (Weight Loss or Muscle Gain)</li>
              <li>→ Chat with FITCOACH AI about your fitness questions</li>
              <li>→ Get personalized workout plans and nutrition advice</li>
              <li>→ Track progress and adjust your routine</li>
            </ul>

            <h2 className="font-bold text-lg text-zinc-950 dark:text-zinc-100 mt-6">WHY CHOOSE US?</h2>
            <ul className="space-y-2">
              <li>✓ AI-Powered Personalization</li>
              <li>✓ Expert Fitness Knowledge</li>
              <li>✓ 24/7 Availability</li>
              <li>✓ Goal-Specific Guidance</li>
              <li>✓ Simple & Easy to Use</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
