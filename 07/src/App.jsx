import { ThemeProvider } from './contexts/ThemeContext.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

function App() {
  // screenshots are added in main repo README.md

  return (
    <>
       <ThemeProvider>
            <ThemeToggle />
        </ThemeProvider>
    </>
  )
}

export default App
