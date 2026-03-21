'use client'

import { useState, useRef, useEffect } from 'react'
import { Message, Goal } from '@/lib/types'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'
import QuickChips from './QuickChips'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { FaDumbbell } from 'react-icons/fa'

interface ChatWindowProps {
  goal: Goal
  onHome: () => void
}

export default function ChatWindow({ goal, onHome }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          goal,
        }),
      })

      const data = await response.json()
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: data.reply || 'CONNECTION ERROR — PLEASE RETRY.',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: 'CONNECTION ERROR — PLEASE RETRY.',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-zinc-950">
      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto flex flex-col">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4 py-8">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 gap-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <FaDumbbell className="text-3xl text-zinc-950 dark:text-zinc-100" />
                </div>
                <p className="font-mono text-sm text-zinc-400 tracking-widest mb-2">
                  {goal === 'weight_loss' ? 'WEIGHT LOSS' : 'MUSCLE GAIN'} COACH
                </p>
                <p className="font-mono text-xl font-bold text-zinc-950 dark:text-zinc-100 tracking-tight">
                  {goal === 'weight_loss' ? 'BURN FAT & GET FIT' : 'BUILD STRENGTH & MASS'}
                </p>
                <p className="font-mono text-xs text-zinc-500 mt-3 max-w-md">
                  {goal === 'weight_loss' 
                    ? 'Ask me anything about workouts, nutrition, and achieving your weight loss goals.'
                    : 'Ask me anything about strength training, nutrition, and building muscle mass.'
                  }
                </p>
              </div>
              <QuickChips onChipClick={(t) => setInput(t)} goal={goal} />
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {messages.map((m) => (
                <MessageBubble key={m.id} message={m} />
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input Section */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-3 bg-white dark:bg-zinc-950">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  sendMessage()
                }
              }}
              placeholder="Ask your coach..."
              rows={1}
              className="rounded-none resize-none flex-1 border border-zinc-200 dark:border-zinc-800 font-mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-zinc-400 placeholder:font-mono p-3 min-h-[48px]"
            />
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="rounded-none h-auto px-6 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-mono text-xs tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-30 cursor-pointer"
            >
              SEND →
            </Button>
          </div>
          
          {/* Bottom Info */}
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-2">
              <Badge
                variant="outline"
                className="rounded-none font-mono text-xs border-zinc-300 dark:border-zinc-700 text-zinc-500"
              >
                Goal: {goal?.replace('_', ' ').toUpperCase()}
              </Badge>
            </div>
            <button
              onClick={() => setMessages([])}
              className="font-mono text-xs text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
