import { CoffeeAmountButton } from '../../../../components/CoffeeAmountButton'

import {
  CoffeeCartContent,
  CoffeeCartInfoContainer,
  CoffeeCartItemContainer,
  CoffeeCartButtonsArea,
  DeleteButton,
} from './styles'

import { Trash } from 'phosphor-react'

import { defaultTheme } from '../../../../styles/themes/defaultTheme'

import imageTest from '../../../../assets/CafesImg/coffee1.png'

export function SelectedCoffeeCart() {
  return (
    <CoffeeCartItemContainer>
      <img src={imageTest} alt="" />

      <CoffeeCartContent>
        <CoffeeCartInfoContainer>
          <p>Expresso Tradicional</p>
          <span>R$ 9,90</span>
        </CoffeeCartInfoContainer>
        <CoffeeCartButtonsArea>
          <CoffeeAmountButton />
          <DeleteButton type="button">
            <Trash color={defaultTheme['purple-normal']} size="1rem" />
            REMOVER
          </DeleteButton>
        </CoffeeCartButtonsArea>
      </CoffeeCartContent>
    </CoffeeCartItemContainer>
  )
}
