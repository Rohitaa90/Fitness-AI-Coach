'use client'

import { Message } from '@/lib/types'
import { FaUser } from 'react-icons/fa'

interface MessageBubbleProps {
  message: Message
}

function formatTime(date: Date): string {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

function parseMessageContent(content: string) {
  const lines = content.split('\n')
  return lines.map((line, idx) => {
    // Check for bold text wrapped in **text**
    if (line.includes('**')) {
      const parts = line.split(/\*\*(.*?)\*\*/g)
      return (
        <div key={idx}>
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="font-bold text-zinc-950 dark:text-zinc-100 block mt-3 mb-1">
                {part}
              </strong>
            ) : part ? (
              <span key={i} className="block">
                {part}
              </span>
            ) : null
          )}
        </div>
      )
    }
    // Check for bullet points starting with "- "
    if (line.startsWith('- ')) {
      return (
        <span key={idx} className="block pl-3 py-0.5 text-zinc-600 dark:text-zinc-400 before:content-['—'] before:mr-2 before:text-zinc-400">
          {line.substring(2)}
        </span>
      )
    }
    // Empty line
    if (line.trim() === '') {
      return <br key={idx} />
    }
    // Regular line
    return (
      <span key={idx} className="block">
        {line}
      </span>
    )
  })
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const time = formatTime(message.timestamp)

  if (message.role === 'user') {
    return (
      <div className="flex justify-end gap-3 items-start">
        <div className="max-w-xs lg:max-w-md px-4 py-4 bg-zinc-950 dark:bg-zinc-100">
          <p className="font-mono text-xs text-zinc-500 dark:text-zinc-600 mb-2">
            YOU · {time}
          </p>
          <p className="font-mono text-sm text-white dark:text-zinc-950 leading-relaxed">
            {message.content}
          </p>
        </div>
        <div className="flex-shrink-0 mt-1">
          <FaUser className="text-lg text-zinc-950 dark:text-zinc-100" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-3 items-start">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-none bg-zinc-950 dark:bg-zinc-100 flex items-center justify-center border border-zinc-800 dark:border-zinc-200">
          <p className="font-mono text-xs font-bold text-white dark:text-zinc-950 tracking-tight">
            FI
          </p>
        </div>
      </div>
      <div className="max-w-2xl flex-1 px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border-l-2 border-zinc-950 dark:border-zinc-100 pl-5">
        <p className="font-mono text-xs text-zinc-400 mb-2">
          FITCOACH · {time}
        </p>
        <div className="font-mono text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {parseMessageContent(message.content)}
        </div>
      </div>
    </div>
  )
}
