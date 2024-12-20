import { ConversationContainer } from './components/conversation'
import { Sidebar } from './components/sidebar'

export function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <ConversationContainer />
    </div>
  )
}
