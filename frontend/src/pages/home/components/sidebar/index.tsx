import { Conversations } from './components/conversations'
import { LogoutButton } from './components/logout-button'
import { SearchInput } from './components/search-input'

export function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <LogoutButton />
    </div>
  )
}
