import {
  CoffeeCheckoutContainer,
  CartSection,
  SubmitButton,
  CartContainer,
  CartListContainer,
} from './styles'

import { InputsArea } from './components/InputsArea'
import { PayTable } from './components/PayTable'

import { SelectedCoffeeCart } from './components/SelectedCoffeeCart'

export function CoffeeCheckout() {
  return (
    <CoffeeCheckoutContainer>
      <form>
        <InputsArea />

        <CartSection>
          <h2>Cafés selecionados</h2>

          <CartContainer>
            <CartListContainer>
              <SelectedCoffeeCart />
              <SelectedCoffeeCart />
              <SelectedCoffeeCart />
              <SelectedCoffeeCart />
              <SelectedCoffeeCart />
            </CartListContainer>

            <PayTable />

            <SubmitButton type="submit">CONFIRMAR PEDIDO</SubmitButton>
          </CartContainer>
        </CartSection>
      </form>
    </CoffeeCheckoutContainer>
  )
}
