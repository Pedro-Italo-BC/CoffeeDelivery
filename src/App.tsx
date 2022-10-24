import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CoffeeContextProvider } from './Context/CoffeeContext'
import { PersonalInformationProvider } from './Context/PersonalInformationContext'

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <PersonalInformationProvider>
            <CoffeeContextProvider>
              <Router />
            </CoffeeContextProvider>
          </PersonalInformationProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}
