import { Conversations } from "./components/Conversations"
import { LogoutButton } from "./components/LogoutButton"
import { SearchInput } from "./components/SearchInput"

export function Sidebar() {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <LogoutButton />
    </div>
  )
}
