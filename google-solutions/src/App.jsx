import { TechStack, MainComponent, ChatBot } from "./components"
function App() {
  return (
    <>
      <div className="mainDiV flex flex-row w-full">
        <TechStack />
        <MainComponent />
        <ChatBot />
      </div>
    </>
  )
}

export default App