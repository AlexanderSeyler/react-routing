import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from './themes/tealTheme';
import { orangeTheme } from './themes/myTheme';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={orangeTheme}>
    <NavBar></NavBar>
    <AppRoutes></AppRoutes>
    </ThemeProvider>
    </>
  )
}

export default App
