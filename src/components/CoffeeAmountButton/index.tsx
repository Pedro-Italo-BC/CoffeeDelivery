import { CoffeeAmountButtonContainer, ButtonShape } from './styles'

import { defaultTheme } from '../../styles/themes/defaultTheme'

import { Plus, Minus } from 'phosphor-react'

export function CoffeeAmountButton() {
  return (
    <CoffeeAmountButtonContainer>
      <ButtonShape type="button">
        <Minus size={14} color={defaultTheme['purple-normal']} />
      </ButtonShape>
      <span>1</span>
      <ButtonShape type="button">
        <Plus size={14} color={defaultTheme['purple-normal']} />
      </ButtonShape>
    </CoffeeAmountButtonContainer>
  )
}
