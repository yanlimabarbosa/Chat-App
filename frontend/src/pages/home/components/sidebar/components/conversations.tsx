import { Conversation } from './conversation'

export function Conversations() {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}
