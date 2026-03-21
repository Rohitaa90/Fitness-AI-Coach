'use client'

import Link from 'next/link'
import { useState } from 'react'

interface HeaderProps {
  onHome?: () => void
}

export default function Header({ onHome }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleHomeClick = () => {
    if (onHome) {
      onHome()
    }
  }

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        {onHome ? (
          <button 
            onClick={handleHomeClick}
            className="font-mono font-bold text-sm text-zinc-950 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer transition-colors"
          >
            FITCOACH AI
          </button>
        ) : (
          <Link 
            href="/"
            className="font-mono font-bold text-sm text-zinc-950 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer transition-colors"
          >
            FITCOACH AI
          </Link>
        )}

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {onHome ? (
            <button onClick={handleHomeClick} className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors cursor-pointer">
              HOME
            </button>
          ) : (
            <Link href="/" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              HOME
            </Link>
          )}
          <Link href="/about" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
            ABOUT
          </Link>
          <Link href="/pricing" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
            PRICING
          </Link>
          <Link href="/more-tools" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
            MORE TOOLS
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden font-mono text-xs text-zinc-950 dark:text-zinc-100 cursor-pointer"
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-4 flex flex-col gap-4">
          {onHome ? (
            <button onClick={handleHomeClick} className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors cursor-pointer">
              HOME
            </button>
          ) : (
            <Link href="/" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              HOME
            </Link>
          )}
          <Link href="/about" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
            ABOUT
          </Link>
          <Link href="/pricing" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
            PRICING
          </Link>
          <Link href="/more-tools" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
            MORE TOOLS
          </Link>
        </div>
      )}
    </header>
  )
}
