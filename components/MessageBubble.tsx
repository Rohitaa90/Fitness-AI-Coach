'use client'

import { Message } from '@/lib/types'

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
      <div className="px-4 py-4 bg-zinc-950 dark:bg-zinc-100">
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-600 mb-2 text-right">
          YOU · {time}
        </p>
        <p className="font-mono text-sm text-white dark:text-zinc-950 leading-relaxed text-right">
          {message.content}
        </p>
      </div>
    )
  }

  return (
    <div className="px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border-l-2 border-zinc-950 dark:border-zinc-100 pl-5">
      <p className="font-mono text-xs text-zinc-400 mb-2">
        FITCOACH · {time}
      </p>
      <div className="font-mono text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
        {parseMessageContent(message.content)}
      </div>
    </div>
  )
}
