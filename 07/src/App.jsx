import { ThemeProvider } from './contexts/ThemeContext.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

function App() {

  return (
    <>
       <ThemeProvider>
            <ThemeToggle />
        </ThemeProvider>
    </>
  )
}

export default App
