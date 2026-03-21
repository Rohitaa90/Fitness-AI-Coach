export default function TypingIndicator() {
  return (
    <div className="px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border-l-2 border-zinc-950 dark:border-zinc-100 pl-5">
      <p className="font-mono text-xs text-zinc-400 mb-2">FITCOACH</p>
      <p className="font-mono text-xs text-zinc-500">
        analyzing<span className="animate-pulse">...</span>
      </p>
    </div>
  )
}
