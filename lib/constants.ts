export const QUICK_CHIPS = {
  weight_loss: [
    "Give me a 7-day beginner weight loss workout plan",
    "What should I eat before and after cardio?",
    "How many calories should I eat daily to lose weight?",
    "Best exercises to lose belly fat fast",
    "How do I track my weight loss progress?",
    "Create a calorie deficit meal plan for me",
  ],
  muscle_gain: [
    "Give me a 7-day beginner strength training plan",
    "What should I eat before and after weightlifting?",
    "How much protein do I need per day for muscle gain?",
    "Best exercises to build bigger arms and chest",
    "How many calories should I eat to gain muscle?",
    "Create a high-protein meal plan for muscle gain",
  ],
}
export const GOALS = [
  { id: 'weight_loss' as const, label: 'Weight Loss', description: 'Burn fat, improve cardio, calorie deficit', icon: '↓' },
  { id: 'muscle_gain' as const, label: 'Muscle Gain', description: 'Build strength, hypertrophy, calorie surplus', icon: '↑' },
]
