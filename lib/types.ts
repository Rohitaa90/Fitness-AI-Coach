export type Goal = 'weight_loss' | 'muscle_gain' | null
export type MessageRole = 'user' | 'model'
export interface Message {
  id: string
  role: MessageRole
  content: string
  timestamp: Date
}
