# FITCOACH AI

Your Personal AI Fitness Coach

## Overview

**FITCOACH AI** is a modern, user-friendly fitness coaching application powered by artificial intelligence. Get personalized workout plans, nutrition advice, and fitness guidance tailored to your specific goals.

## Features

✅ **Personalized Coaching** - Select your goal (Weight Loss or Muscle Gain) and get customized advice  
✅ **AI-Powered Chat** - Ask anything about fitness, workouts, and nutrition  
✅ **Goal-Specific Suggestions** - Different workout plans and meal suggestions for each goal  
✅ **Clean & Modern UI** - Minimalist design with monospace font and zinc color palette  
✅ **Fully Responsive** - Works seamlessly on desktop and mobile devices  
✅ **Multiple Pages** - Home, About, Pricing, and More Tools sections  

## Tech Stack

- **Frontend:** Next.js 16 with TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** React Icons
- **Response System:** Hardcoded demo responses (12 goal-specific answers)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd fitness-coach-ai
npm install
```

### Environment Setup

**Note:** API integration is currently commented out. Responses are hardcoded for demo purposes. Full API integration will be implemented in future updates.

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

1. **Select Your Goal** - Choose between "Weight Loss" or "Muscle Gain"
2. **Start Chatting** - Ask your coach about fitness and nutrition
3. **Get Personalized Advice** - Receive AI-powered coaching
4. **Use Quick Suggestions** - Click suggested queries for quick access

## Project Structure

```
fitness-coach-ai/
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── pricing/page.tsx         # Pricing page
│   ├── more-tools/page.tsx      # More tools page
│   └── api/chat/route.ts        # AI chat API
├── components/
│   ├── Header.tsx               # Navigation
│   ├── Footer.tsx               # Footer with map
│   ├── ChatWindow.tsx           # Chat interface
│   ├── GoalSelector.tsx         # Goal selection
│   ├── MessageBubble.tsx        # Message display
│   ├── QuickChips.tsx           # Suggested queries
│   └── ui/                      # UI components
├── lib/
│   ├── types.ts                 # TypeScript types
│   └── constants.ts             # App constants
└── public/                      # Static files
```

## Pages

| Page | Purpose |
|------|---------|
| **Home (/)** | Goal selection & main chat |
| **About (/about)** | Learn about FITCOACH AI |
| **Pricing (/pricing)** | View pricing plans |
| **More Tools (/more-tools)** | Upcoming features |

## Design Features

- **Color Scheme:** Zinc palette only
- **Typography:** Space Mono (monospace font)
- **Style:** No rounded corners, no gradients, no shadows
- **Layout:** Centered, clean, minimal design

## Live Demo

🌐 **[Deployment: https://fitness-ai-coach-rose.vercel.app/](https://fitness-ai-coach-rose.vercel.app/)**

💻 **[GitHub: https://github.com/Rohitaa90/Fitness-AI-Coach](https://github.com/Rohitaa90/Fitness-AI-Coach)**

## Response System

**Demo Mode:** 12 hardcoded responses (6 weight loss, 6 muscle gain). Each suggested query returns complete fitness guidance instantly.

**Future:** Full API integration with Google Gemini for production.

## Building for Production

```bash
npm run build
npm start
```

## Version

**v1.0** - March 2026

## License

MIT License

---

Built with ❤️ by developers, for fitness enthusiasts
