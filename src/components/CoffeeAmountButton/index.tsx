import { CoffeeAmountButtonContainer, ButtonShape } from './styles'

import { defaultTheme } from '../../styles/themes/defaultTheme'

import { Plus, Minus } from 'phosphor-react'

interface CoffeeAmountButtonProps {
  incrementFunction: () => void
  decrementFunction: () => void
  amountValue: number
}

export function CoffeeAmountButton({
  amountValue,
  decrementFunction,
  incrementFunction,
}: CoffeeAmountButtonProps) {
  return (
    <CoffeeAmountButtonContainer>
      <ButtonShape type="button" onClick={decrementFunction}>
        <Minus size={14} color={defaultTheme['purple-normal']} />
      </ButtonShape>
      <span>{amountValue}</span>
      <ButtonShape type="button" onClick={incrementFunction}>
        <Plus size={14} color={defaultTheme['purple-normal']} />
      </ButtonShape>
    </CoffeeAmountButtonContainer>
  )
}
