'use client'

import { QUICK_CHIPS } from '@/lib/constants'
import { Goal } from '@/lib/types'

interface QuickChipsProps {
  onChipClick: (text: string) => void
  goal?: Goal
}

export default function QuickChips({ onChipClick, goal }: QuickChipsProps) {
  const chips = goal && goal in QUICK_CHIPS 
    ? QUICK_CHIPS[goal as keyof typeof QUICK_CHIPS]
    : QUICK_CHIPS.weight_loss

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <p className="font-mono text-xs text-zinc-400 tracking-widest mb-3">SUGGESTED QUERIES</p>
      <div className="grid grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => onChipClick(chip)}
            className="bg-white dark:bg-zinc-950 p-4 text-left text-xs font-mono text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  )
}
