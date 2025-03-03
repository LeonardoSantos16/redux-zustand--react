import './styles/global.css'
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
import { Player } from "./pages/Player"

function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <Player />
      </ReduxProvider>
    </div>
  )
}

export default App
