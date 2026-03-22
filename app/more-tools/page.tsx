'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { FiTrendingUp, FiShoppingCart, FiTarget, FiSmartphone, FiClock } from 'react-icons/fi'
import { FaDumbbell } from 'react-icons/fa'

export default function MoreTools() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Badge variant="outline" className="rounded-none font-mono text-xs tracking-widest border-zinc-300 dark:border-zinc-700 text-zinc-500">
            FITCOACH AI — v1.0
          </Badge>

          <h1 className="font-mono text-3xl font-bold mt-6 text-zinc-950 dark:text-zinc-100 tracking-tight">
            MORE TOOLS & FEATURES
          </h1>

          <p className="font-mono text-xs text-zinc-500 mt-2 tracking-wide">
            Explore additional fitness and wellness tools coming soon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Tool 1 */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">
              <FiTrendingUp className="text-3xl text-zinc-950 dark:text-zinc-100" />
              <h2 className="font-mono font-bold text-lg text-zinc-950 dark:text-zinc-100 mt-4">PROGRESS TRACKER</h2>
              <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-4">
                Track your workouts, weight, and measurements over time. Visualize your progress with detailed analytics.
              </p>
              <p className="font-mono text-xs text-zinc-400 mt-4">COMING SOON</p>
            </div>

            {/* Tool 2 */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">
              <FiShoppingCart className="text-3xl text-zinc-950 dark:text-zinc-100" />
              <h2 className="font-mono font-bold text-lg text-zinc-950 dark:text-zinc-100 mt-4">MEAL PLANNER</h2>
              <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-4">
                Get personalized meal plans based on your goals, preferences, and dietary restrictions.
              </p>
              <p className="font-mono text-xs text-zinc-400 mt-4">COMING SOON</p>
            </div>

            {/* Tool 3 */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">
              <FaDumbbell className="text-3xl text-zinc-950 dark:text-zinc-100" />
              <h2 className="font-mono font-bold text-lg text-zinc-950 dark:text-zinc-100 mt-4">WORKOUT BUILDER</h2>
              <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-4">
                Create custom workouts with form guides, exercise variations, and recovery recommendations.
              </p>
              <p className="font-mono text-xs text-zinc-400 mt-4">COMING SOON</p>
            </div>

            {/* Tool 4 */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">
              <FiTarget className="text-3xl text-zinc-950 dark:text-zinc-100" />
              <h2 className="font-mono font-bold text-lg text-zinc-950 dark:text-zinc-100 mt-4">GOAL ANALYZER</h2>
              <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-4">
                Set SMART fitness goals and get AI-powered insights on how to achieve them faster.
              </p>
              <p className="font-mono text-xs text-zinc-400 mt-4">COMING SOON</p>
            </div>

            {/* Tool 5 */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">
              <FiSmartphone className="text-3xl text-zinc-950 dark:text-zinc-100" />
              <h2 className="font-mono font-bold text-lg text-zinc-950 dark:text-zinc-100 mt-4">MOBILE APP</h2>
              <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-4">
                Take FITCOACH AI with you on iOS and Android. Get notifications and quick access to your coach.
              </p>
              <p className="font-mono text-xs text-zinc-400 mt-4">COMING SOON</p>
            </div>

            {/* Tool 6 */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">
              <FiClock className="text-3xl text-zinc-950 dark:text-zinc-100" />
              <h2 className="font-mono font-bold text-lg text-zinc-950 dark:text-zinc-100 mt-4">WEARABLE SYNC</h2>
              <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-4">
                Sync your fitness tracker or smartwatch data for automatic progress insights.
              </p>
              <p className="font-mono text-xs text-zinc-400 mt-4">COMING SOON</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
