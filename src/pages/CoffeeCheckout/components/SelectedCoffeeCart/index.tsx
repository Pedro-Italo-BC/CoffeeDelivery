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
import {
  CoffeeInfoType,
  CoffeeContext,
} from '../../../../Context/CoffeeContext'
import { useState, useContext, useEffect } from 'react'

interface SelectedCoffeeCartProps {
  value: CoffeeInfoType
}

export function SelectedCoffeeCart({ value }: SelectedCoffeeCartProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(value.amount)

  const { handleUpdateCoffeeAmountValue, handleDeleteCoffeeFromTheList } =
    useContext(CoffeeContext)

  useEffect(() => {
    handleUpdateCoffeeAmountValue(coffeeAmount, value.id)
  }, [coffeeAmount])

  function incrementCoffeeAmountValue() {
    setCoffeeAmount((state) => state + 1)
  }

  function decrementCoffeeAmountValue() {
    setCoffeeAmount((state) => (state <= 1 ? (state = 1) : state - 1))
  }

  function handleDeleteCoffee() {
    handleDeleteCoffeeFromTheList(value.id)
  }

  return (
    <CoffeeCartItemContainer>
      <img src={value.img} alt="" />

      <CoffeeCartContent>
        <CoffeeCartInfoContainer>
          <p>{value.name}</p>
          <span>
            {value.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </CoffeeCartInfoContainer>
        <CoffeeCartButtonsArea>
          <CoffeeAmountButton
            amountValue={coffeeAmount}
            decrementFunction={decrementCoffeeAmountValue}
            incrementFunction={incrementCoffeeAmountValue}
          />
          <DeleteButton type="button" onClick={handleDeleteCoffee}>
            <Trash color={defaultTheme['purple-normal']} size="1rem" />
            REMOVER
          </DeleteButton>
        </CoffeeCartButtonsArea>
      </CoffeeCartContent>
    </CoffeeCartItemContainer>
  )
}
