import { TiMessages } from 'react-icons/ti'

export const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:textlg md:text-lg text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome👋 John Doe ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )
}
