import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { CoffeeCheckout } from './pages/CoffeeCheckout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/coffeeCheckout" element={<CoffeeCheckout />} />
      </Route>
    </Routes>
  )
}
