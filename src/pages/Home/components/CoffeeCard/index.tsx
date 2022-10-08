import { CoffeeAmountButton } from '../../../../components/CoffeeAmountButton'
import { ShoppingCartSimple } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeFooter,
  CoffeeHeader,
  CoffeeInfo,
  CoffeeCategory,
  AddCoffeeButton,
} from './styles'

import Exemple from '../../../../assets/CafesImg/coffee1.png'
import { defaultTheme } from '../../../../styles/themes/defaultTheme'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeHeader>
        <img src={Exemple} alt="" />
        <CoffeeCategory>
          <span>Tradicional</span>
        </CoffeeCategory>
      </CoffeeHeader>
      <CoffeeInfo>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeInfo>
      <CoffeeFooter>
        <p>R$9,90</p>

        <div>
          <CoffeeAmountButton />

          <AddCoffeeButton>
            <ShoppingCartSimple
              color={defaultTheme.white}
              weight="fill"
              size={'1.375rem'}
            />
          </AddCoffeeButton>
        </div>
      </CoffeeFooter>
    </CoffeeCardContainer>
  )
}
