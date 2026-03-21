'use client'

import { useState } from 'react'
import { Goal } from '@/lib/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoalSelector from '@/components/GoalSelector'
import ChatWindow from '@/components/ChatWindow'

export default function Home() {
  const [goal, setGoal] = useState<Goal>(null)
  const [started, setStarted] = useState(false)

  const handleGoHome = () => {
    setStarted(false)
    setGoal(null)
  }

  if (!started) {
    return (
      <>
        <Header onHome={handleGoHome} />
        <GoalSelector onGoalSelect={(g) => { setGoal(g); setStarted(true) }} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header onHome={handleGoHome} />
      <ChatWindow goal={goal} onHome={handleGoHome} />
      <Footer />
    </>
  )
}
