import { NextRequest, NextResponse } from 'next/server'

const DEMO_RESPONSES = {
  weight_loss: [
    "**Daily Calorie Intake**: 1800-2200 calories for weight loss\n- Reduce 300-500 calories below maintenance\n- Track using MyFitnessPal or similar\n**Pro Tip**: Combine calorie deficit with cardio 30 mins daily",
    "**Best Cardio for Fat Loss**: Running, cycling, swimming\n- 30-45 mins at moderate intensity\n- 4-5x per week\n**Pro Tip**: HIIT burns more fat in less time",
  ],
  muscle_gain: [
    "**Daily Protein**: 0.8-1g per pound of bodyweight\n- Split into 4-5 meals\n- Prioritize: chicken, fish, eggs, protein powder\n**Pro Tip**: Eat in a 300-500 calorie surplus",
    "**5-Minute Strength Routine**:\n- Push-ups: 3x12\n- Squats: 3x12\n- Plank: 3x30sec\n**Pro Tip**: Add weight as it gets easier",
  ],
}

export async function POST(req: NextRequest) {
  try {
    const { messages, goal } = await req.json()
    
    // Demo mode - return sample responses
    const responses = DEMO_RESPONSES[goal as keyof typeof DEMO_RESPONSES] || DEMO_RESPONSES.weight_loss
    const reply = responses[Math.floor(Math.random() * responses.length)]
    
    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json({ error: 'Failed to get response' }, { status: 500 })
  }
}
