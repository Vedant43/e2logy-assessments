import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div 
          style={{
            display: 'flex',
            width: '100vw',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: theme === 'light' ? '#f4f4f4' : '#222',
            color: theme === 'light' ? '#000' : '#fff',
          }}
        >
            <p>{theme}</p>
          
            <button 
              onClick={toggleTheme}
            >
              Toggle Theme
            </button>
        </div>
    )
}

export default ThemeToggle