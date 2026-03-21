'use client'

import { useState } from 'react'
import { Goal } from '@/lib/types'
import { GOALS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface GoalSelectorProps {
  onGoalSelect: (goal: Goal) => void
}

export default function GoalSelector({ onGoalSelect }: GoalSelectorProps) {
  const [selectedGoal, setSelectedGoal] = useState<Goal>(null)

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col items-center justify-center px-4">
      <Badge variant="outline" className="rounded-none font-mono text-xs tracking-widest border-zinc-300 dark:border-zinc-700 text-zinc-500">
        FITCOACH AI — v1.0
      </Badge>

      <h1 className="font-mono text-3xl font-bold mt-6 text-zinc-950 dark:text-zinc-100 tracking-tight">
        SELECT YOUR GOAL
      </h1>

      <p className="font-mono text-xs text-zinc-500 mt-2 tracking-wide">
        Your coach will personalize everything based on this.
      </p>

      <div className="grid grid-cols-2 mt-10 border border-zinc-200 dark:border-zinc-800 w-full max-w-lg">
        {GOALS.map((goal, index) => {
          const isSelected = selectedGoal === goal.id
          return (
            <div
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`p-8 cursor-pointer ${
                index === 1 ? '' : 'border-r border-zinc-200 dark:border-zinc-800'
              } transition-colors ${
                isSelected
                  ? 'bg-zinc-950 dark:bg-zinc-100'
                  : 'hover:bg-zinc-50 dark:hover:bg-zinc-900'
              }`}
            >
              <span
                className={`font-mono text-2xl ${
                  isSelected
                    ? 'text-white dark:text-zinc-950'
                    : 'text-zinc-950 dark:text-zinc-100'
                }`}
              >
                {goal.icon}
              </span>
              <p
                className={`font-mono text-base font-bold mt-4 ${
                  isSelected
                    ? 'text-white dark:text-zinc-950'
                    : 'text-zinc-950 dark:text-zinc-100'
                }`}
              >
                {goal.label}
              </p>
              <p
                className={`font-mono text-xs mt-1 ${
                  isSelected
                    ? 'text-zinc-400 dark:text-zinc-600'
                    : 'text-zinc-500'
                }`}
              >
                {goal.description}
              </p>
            </div>
          )
        })}
      </div>

      <Button
        onClick={() => selectedGoal && onGoalSelect(selectedGoal)}
        disabled={!selectedGoal}
        className="rounded-none mt-8 w-full max-w-lg bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-mono text-xs tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-300 h-12 disabled:opacity-30 cursor-pointer"
      >
        INITIALIZE COACH →
      </Button>
    </div>
  )
}
