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

// Hardcoded responses for known queries
const HARDCODED_RESPONSES = {
  // Weight Loss queries
  "Give me a 7-day beginner weight loss workout plan": "**7-Day Beginner Weight Loss Workout Plan**:\n- **Monday**: 30 min jog + core workout (planks, crunches)\n- **Tuesday**: Rest day (light stretching 10 min)\n- **Wednesday**: Swimming or cycling 45 min\n- **Thursday**: Strength training (30 min - dumbbells, bodyweight)\n- **Friday**: HIIT cardio (20 min - high intensity intervals)\n- **Saturday**: Long walk or hike (60 min - pace doesn't matter)\n- **Sunday**: Complete rest + meal prep\n\n**Pro Tips**:\n- Eat at 500 calorie deficit daily\n- Stay hydrated - 3-4 liters water\n- Progressive overload - increase difficulty weekly",
  
  "What should I eat before and after cardio?": "**Pre-Cardio Nutrition** (30 mins before):\n- Banana + 1 tbsp almond butter\n- Or: bowl of oatmeal with berries\n- Or: apple + granola bar\n- Keep it light - don't eat heavy\n\n**Post-Cardio Nutrition** (within 30 mins):\n- Protein shake + banana\n- Chicken breast + white rice + vegetables\n- Greek yogurt + granola + berries\n- Tuna sandwich on whole wheat\n\n**Hydration**: Drink water throughout workout\n**Pro Tip**: Post-workout meal aids recovery and prevents muscle loss",
  
  "How many calories should I eat daily to lose weight?": "**How to Calculate Your Calorie Target**:\n\n1. **Find Your Maintenance Calories** (use online calculator):\n   - Sedentary person: BMR × 1.2\n   - Lightly active: BMR × 1.4\n   - Very active: BMR × 1.7\n\n2. **Subtract 500 calories** for 1 lb loss/week\n   - Example: 2500 maintenance → 2000 calories daily\n\n**General Guidelines**:\n- **Small person** (130 lbs): 1600-1800 cal/day\n- **Average person** (160 lbs): 1800-2200 cal/day\n- **Large person** (200 lbs): 2200-2600 cal/day\n\n**Pro Tips**:\n- Never go below 1200 calories\n- Track with app like MyFitnessPal\n- Adjust after 2 weeks if no progress",
  
  "Best exercises to lose belly fat fast": "**Best Exercises to Lose Belly Fat**:\n\n**Core Exercises** (3 sets each):\n- Plank: 30-60 seconds\n- Mountain climbers: 20 reps\n- Russian twists: 30 reps\n- Leg raises: 15 reps\n- Bicycle crunches: 20 reps\n\n**Cardio** (most important for belly fat):\n- Running: 30-45 mins, 4x/week\n- HIIT: 20 mins, 5x/week (burns more fat faster)\n- Cycling: 45 mins, 3x/week\n- Swimming: 30 mins, 3x/week\n\n**Pro Tips**:\n- Consistency > intensity\n- Combine cardio + strength + diet\n- You can't spot-reduce fat - full body cardio works best\n- Reduce sugar and processed foods",
  
  "How do I track my weight loss progress?": "**Ways to Track Weight Loss Progress**:\n\n**1. Scale Weight** (weigh 1-2x/week, same time, same day):\n- Don't obsess over daily changes\n- Water retention can vary 2-3 lbs\n- Track weekly average, not daily\n\n**2. Measurements** (measure weekly):\n- Waist, chest, arms, thighs\n- Take note: inches lost matter more than scale\n\n**3. Progress Photos** (take every 2 weeks):\n- Same lighting, same pose, same time of day\n- Visual changes are motivating\n\n**4. How Clothes Fit**:\n- Clothes getting looser = success\n- Belt notches tightening = proof\n\n**5. Energy & Strength**:\n- More energy during workouts?\n- Lifting heavier weights?\n- That's progress!\n\n**Realistic Rate**: 1-2 lbs/week is healthy and sustainable",
  
  "Create a calorie deficit meal plan for me": "**2000 Calorie Weight Loss Meal Plan**:\n\n**Breakfast** (400 cal):\n- 2 eggs scrambled\n- 1 slice whole wheat toast\n- 1 cup fruit (berries/orange)\n- Black coffee or tea\n\n**Lunch** (600 cal):\n- 150g grilled chicken breast\n- 1 cup brown rice\n- 1 cup steamed broccoli\n- 1 tbsp olive oil for cooking\n\n**Snack** (200 cal):\n- Greek yogurt (150g)\n- 1 oz almonds\n- Or: apple + 1 tbsp peanut butter\n\n**Dinner** (700 cal):\n- 150g grilled fish or lean beef\n- 1 medium sweet potato\n- Large salad (mixed greens + vegetables)\n- 1 tbsp olive oil dressing\n\n**Evening** (100 cal optional):\n- Green tea or water\n- No late-night eating\n\n**Total: ~2000 calories, 150g protein**",
  
  // Muscle Gain queries
  "Give me a 7-day beginner strength training plan": "**7-Day Beginner Strength Training Plan**:\n\n**Monday - Chest & Triceps**:\n- Bench press: 4x8\n- Incline press: 3x10\n- Tricep dips: 3x12\n- Push-ups: 3x15\n\n**Tuesday - Back & Biceps**:\n- Barbell rows: 4x8\n- Pull-ups: 3x10\n- Barbell curls: 3x10\n- Lat pulldowns: 3x12\n\n**Wednesday - Legs**:\n- Squats: 4x8\n- Leg press: 3x10\n- Leg curls: 3x12\n- Calf raises: 3x15\n\n**Thursday - Rest Day**:\n- Light stretching\n- Protein + hydration focus\n\n**Friday - Shoulders & Core**:\n- Overhead press: 4x8\n- Lateral raises: 3x12\n- Shrugs: 3x12\n- Planks: 3x60 sec\n\n**Saturday - Full Body**:\n- Deadlifts: 3x5\n- Bench press: 3x8\n- Rows: 3x8\n- Squats: 3x8\n\n**Sunday - Rest**\n\n**Pro Tip**: Progressive overload - increase weight 5-10% every week",
  
  "What should I eat before and after weightlifting?": "**Pre-Weightlifting** (1-2 hours before):\n- Banana + 1 tbsp almond butter\n- Oatmeal + honey\n- Rice cakes + jam\n- Target: Easy carbs + some protein\n\n**Pre-Workout** (10-15 mins before):\n- Black coffee (caffeine boost)\n- Or: small banana\n\n**Post-Weightlifting** (within 30-60 mins):\n- Protein shake with berries (fast digesting)\n- Chicken + white rice\n- Steak + sweet potato\n- Eggs + bread\n- Target: 30-40g protein + 40-60g carbs\n\n**Why It Matters**:\n- Pre: fuel for intense lifts\n- Post: muscle recovery and growth\n\n**Pro Tip**: Shake is fastest - drink it immediately after workout",
  
  "How much protein do I need per day for muscle gain?": "**Protein Calculation for Muscle Gain**:\n\n**Formula**: 0.8-1g per pound of bodyweight\n\n**Examples**:\n- 130 lbs → 104-130g protein daily\n- 160 lbs → 128-160g protein daily\n- 190 lbs → 152-190g protein daily\n- 220 lbs → 176-220g protein daily\n\n**How to Distribute**:\n- Split across 4-5 meals\n- Example (160 lbs): 35g × 4-5 meals\n\n**Best Protein Sources**:\n- Chicken: 31g per 100g\n- Fish (salmon/tuna): 25-30g per 100g\n- Eggs: 6g per egg\n- Greek yogurt: 20g per 150g\n- Cottage cheese: 11g per 100g\n- Beef: 26g per 100g\n- Lentils: 9g per cooked cup\n\n**Pro Tip**: Spread protein evenly throughout day for best results",
  
  "Best exercises to build bigger arms and chest": "**Chest Building Exercises**:\n- Barbell bench press: 4x6-8 (heavy)\n- Incline dumbbell press: 3x8-10\n- Cable flyes: 3x12-15\n- Push-ups: 3x12-15 (bodyweight)\n- Dumbbell press: 3x8-10\n\n**Arm Building Exercises**:\n- Barbell curls: 4x6-8 (biceps)\n- Tricep dips: 4x8-10 (triceps)\n- Overhead rope extension: 3x12\n- Hammer curls: 3x10-12\n- Close-grip bench press: 3x8-10\n\n**Rep Ranges for Growth**:\n- 6-12 reps is optimal for muscle growth\n- 3-4 sets per exercise\n- Rest 60-90 seconds between sets\n\n**Progressive Overload**:\n- Increase weight 5% when you hit top of rep range\n- Or add 1-2 reps each week\n- Track your lifts\n\n**Frequency**: Hit chest/arms 2x per week for best growth",
  
  "How many calories should I eat to gain muscle?": "**Calorie Surplus for Muscle Gain**:\n\n**Step 1: Find Maintenance**:\n- Use online TDEE calculator\n- Or track for 2 weeks and average\n\n**Step 2: Add Surplus**:\n- Eat 300-500 calories MORE than maintenance\n- This fuels muscle growth\n\n**Examples**:\n- Maintenance 2500 → Eat 2800-3000\n- Maintenance 2200 → Eat 2500-2700\n- Maintenance 2800 → Eat 3100-3300\n\n**Macros for Muscle Gain**:\n- Protein: 40% (highest priority)\n- Carbs: 40% (fuel for workouts)\n- Fat: 20% (hormone production)\n\n**Example (3000 cal)**:\n- Protein: 300g (1200 cal)\n- Carbs: 300g (1200 cal)\n- Fat: 100g (900 cal)\n\n**Tracking**:\n- Use MyFitnessPal or Cronometer\n- Track for 2 weeks\n- If no weight gain → add 200 more calories\n\n**Pro Tip**: Expect 0.5-1 lb gain per week (mostly muscle if lifting heavy)",
  
  "Create a high-protein meal plan for muscle gain": "**3000 Calorie, 180g Protein Muscle Gain Plan**:\n\n**Breakfast** (600 cal):\n- 4 whole eggs (scrambled)\n- 1 cup oatmeal\n- 1 banana\n- Black coffee\n\n**Mid-Morning Snack** (400 cal):\n- Protein shake:\n  - 1 scoop whey protein (25g)\n  - 1 tbsp peanut butter (9g protein)\n  - 1 banana\n  - 1 cup whole milk (8g protein)\n\n**Lunch** (800 cal):\n- 200g grilled chicken breast (56g protein)\n- 2 cups white rice\n- Steamed vegetables\n- 1 tbsp olive oil\n\n**Pre-Workout Snack** (200 cal):\n- Rice cakes + jam (fast carbs)\n- Or banana\n\n**Post-Workout** (600 cal):\n- Protein shake with 1.5 scoops\n- 1 cup dextrose or white rice\n\n**Dinner** (900 cal):\n- 200g lean beef or fish (50g protein)\n- 1 large sweet potato\n- Large salad with olive oil\n- 1 cup brown rice\n\n**Bedtime Snack** (300 cal):\n- 250g cottage cheese (28g protein)\n- 1 oz almonds\n- No sugar\n\n**Total: ~3000 calories, 180g protein**",
  
  "Recovery tips for muscle growth": "**Essential Recovery Tips for Muscle Growth**:\n\n**Sleep** (MOST IMPORTANT):\n- 7-9 hours nightly (muscles grow during sleep)\n- Go to bed same time daily\n- Dark, cool room\n- No screens 30 mins before bed\n\n**Nutrition**:\n- Eat protein within 30-60 mins post-workout\n- Stay hydrated: 4-5 liters daily\n- Don't skip meals\n\n**Active Recovery**:\n- Light walking: 20 mins on rest days\n- Stretching: 10 mins daily\n- Foam rolling: 5 mins, 2-3x weekly\n- Yoga: 1x weekly\n\n**Mobility Work** (greatly underrated):\n- Shoulder dislocations\n- Hip mobility flows\n- Leg swings\n- 10 mins daily\n\n**Stress Management**:\n- Stress increases cortisol (breaks down muscle)\n- Meditation: 5-10 mins daily\n- Deep breathing: anytime\n\n**Ice & Heat**:\n- Cold shower: reduces inflammation\n- Hot bath: relaxes muscles\n\n**Deload Weeks** (every 4-6 weeks):\n- Reduce volume by 40-50%\n- Prevents overtraining\n- Allows full recovery\n\n**Pro Tip**: Recovery is where gains happen - never skip it!",
}

interface ChatWindowProps {
  goal: Goal
  onHome: () => void
}

export default function ChatWindow({ goal, onHome }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

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

    // Add delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800))

    try {
      // Check if user input matches any hardcoded response
      const responseKey = Object.keys(HARDCODED_RESPONSES).find(
        key => key.toLowerCase() === input.trim().toLowerCase()
      )

      let reply: string

      if (responseKey) {
        // Direct match found
        reply = HARDCODED_RESPONSES[responseKey as keyof typeof HARDCODED_RESPONSES]
      } else {
        // No direct match - return generic response
        reply = "**Great Question!**\n\nI'm here to help with fitness advice. Try asking me about:\n- Workout plans\n- Nutrition guidance\n- Exercise techniques\n- Recovery tips\n- Goal strategies\n\nOr click one of the **SUGGESTED QUERIES** below to get instant answers!"
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: reply,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: '**Error Processing Message**\n\nPlease try again or click one of the suggested queries above.',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-zinc-950">
      {/* Chat Messages - Scrollable Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto w-full px-4 py-3">
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

      {/* Bottom Controls - Always Visible */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 bg-white dark:bg-zinc-950 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-2">
            <Badge
              variant="outline"
              className="rounded-none font-mono text-xs border-zinc-300 dark:border-zinc-700 text-zinc-500"
            >
              Goal: {goal?.replace('_', ' ').toUpperCase()}
            </Badge>
          </div>
        </div>
      </div>

      {/* Input Section - Fixed at Bottom */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-4 bg-white dark:bg-zinc-950 flex-shrink-0 mb-4 sticky bottom-0 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3">
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
              rows={3}
              className="rounded-none resize-none flex-1 border border-zinc-200 dark:border-zinc-800 font-mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-zinc-400 placeholder:font-mono p-3 min-h-[72px]"
            />
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="rounded-none h-auto px-6 self-end bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-mono text-xs tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-30 cursor-pointer"
            >
              SEND →
            </Button>
            <Button
              onClick={() => setMessages([])}
              className="rounded-none h-auto px-6 self-end bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 font-mono text-xs tracking-widest hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer"
            >
              CLEAR CHAT
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
