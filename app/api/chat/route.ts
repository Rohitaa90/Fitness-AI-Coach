import { NextRequest, NextResponse } from 'next/server'

const DEMO_RESPONSES = {
  weight_loss: [
    "**Daily Calorie Intake**: 1800-2200 calories for weight loss\n- Reduce 300-500 calories below maintenance\n- Track using MyFitnessPal or similar\n**Pro Tip**: Combine calorie deficit with cardio 30 mins daily",
    "**Best Cardio for Fat Loss**: Running, cycling, swimming\n- 30-45 mins at moderate intensity\n- 4-5x per week\n**Pro Tip**: HIIT burns more fat in less time",
    "**7-Day Beginner Weight Loss Plan**:\n- Monday: 30 min jog + core workout\n- Tuesday: Rest day (light stretching)\n- Wednesday: Swimming or cycling 45 min\n- Thursday: Strength training (30 min)\n- Friday: HIIT cardio (20 min)\n- Saturday: Long walk (60 min)\n- Sunday: Rest\n**Diet**: Eat at 500 calorie deficit daily",
    "**Best Exercises to Lose Belly Fat**:\n- Plank: 3x30-60 seconds\n- Mountain climbers: 3x20\n- Burpees: 3x15\n- Leg raises: 3x15\n- High knees: 3x30 seconds\n**Key**: Consistency beats intensity. Do these 4x per week",
    "**Pre and Post Workout Nutrition**:\n- **Before (30 min)**: Banana + almonds or oatmeal\n- **After (within 30 min)**: Protein + carbs (chicken + rice, Greek yogurt + berries)\n**Pro Tip**: Stay hydrated - drink 3-4 liters daily",
    "**Weight Loss Meal Plan** (2000 calories/day):\n- Breakfast: 400 cal - Eggs + whole wheat toast + fruit\n- Lunch: 600 cal - Grilled chicken + brown rice + vegetables\n- Snack: 200 cal - Greek yogurt + nuts\n- Dinner: 700 cal - Fish + sweet potato + salad\n- Bonus: 100 cal - Green tea, water",
    "**How Much Protein Per Day**: For weight loss: 0.7-0.9g per pound of bodyweight\n- Example: 150 lbs = 105-135g protein daily\n- Spread across 4-5 meals\n**Sources**: Chicken, fish, turkey, eggs, beans, Greek yogurt",
    "**Tracking Progress**: Weigh yourself 1-2x per week (same day, same time)\n- Don't obsess over daily changes\n- Take progress photos every 2 weeks\n- Measure waist, chest, arms weekly\n**Reality**: Expect 1-2 lbs per week safely",
  ],
  muscle_gain: [
    "**Daily Protein**: 0.8-1g per pound of bodyweight\n- Split into 4-5 meals\n- Prioritize: chicken, fish, eggs, protein powder\n**Pro Tip**: Eat in a 300-500 calorie surplus",
    "**5-Minute Strength Routine**:\n- Push-ups: 3x12\n- Squats: 3x12\n- Plank: 3x30sec\n**Pro Tip**: Add weight as it gets easier",
    "**7-Day Beginner Strength Training Plan**:\n- Monday: Chest + Triceps (Push)\n- Tuesday: Back + Biceps (Pull)\n- Wednesday: Legs\n- Thursday: Rest (protein + hydration)\n- Friday: Shoulders + Core\n- Saturday: Full body (compound lifts)\n- Sunday: Rest + meal prep",
    "**Best Exercises for Bigger Arms and Chest**:\n- **Chest**: Bench press, incline press, push-ups, cable flyes\n- **Arms**: Barbell curls, tricep dips, overhead press\n- **Rep range**: 8-12 reps × 3-4 sets for muscle growth\n**Pro Tip**: Progressive overload - increase weight each week",
    "**Calorie Surplus for Muscle Gain**: Eat 300-500 calories MORE than maintenance\n- Calculate maintenance first\n- Add high-protein foods\n- Track macros: 40% protein, 40% carbs, 20% fat\n**Example**: 2500 cal maintenance → 2800-3000 cal daily",
    "**High-Protein Meal Plan** (3000 calories, 180g protein):\n- Breakfast: 600 cal - 4 eggs + oatmeal + banana\n- Lunch: 800 cal - 200g chicken + rice + vegetables\n- Snack: 400 cal - Protein shake + peanut butter + apple\n- Dinner: 900 cal - 200g steak + sweet potato + broccoli\n- Bedtime: 300 cal - Cottage cheese + almonds",
    "**Protein Sources for Muscle Building**:\n- **Lean meats**: Chicken (31g/100g), turkey (25g), lean beef (26g)\n- **Fish**: Salmon (25g), tuna (30g)\n- **Eggs**: 6g per egg\n- **Dairy**: Greek yogurt (20g), cottage cheese (11g)\n- **Plant-based**: Lentils (9g), chickpeas (15g)",
    "**Recovery Tips for Muscle Growth**:\n- Sleep 7-9 hours nightly (muscle grows during sleep)\n- Stretch 10 mins after workouts\n- Massage sore muscles\n- Foam roll 2-3x per week\n- Stay hydrated - 4-5 liters daily\n**Never skip recovery** - that's when gains happen!",
  ],
}

export async function POST(req: NextRequest) {
  try {
    const { messages, goal } = await req.json()
    
    // Validate goal
    if (!goal || !DEMO_RESPONSES[goal as keyof typeof DEMO_RESPONSES]) {
      const responses = DEMO_RESPONSES.weight_loss
      const reply = responses[Math.floor(Math.random() * responses.length)]
      return NextResponse.json({ reply })
    }
    
    // Demo mode - return sample responses
    const responses = DEMO_RESPONSES[goal as keyof typeof DEMO_RESPONSES]
    const reply = responses[Math.floor(Math.random() * responses.length)]
    
    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat error:', error)
    // Return a default response instead of error
    const defaultReply = "**Tips for Success**:\n- Start small and build consistency\n- Track your progress\n- Adjust based on results\n- Stay hydrated\n- Get quality sleep\n**Remember**: Results take time. Stay committed!"
    return NextResponse.json({ reply: defaultReply })
  }
}
