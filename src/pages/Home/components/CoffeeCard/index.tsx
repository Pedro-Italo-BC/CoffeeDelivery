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

import { defaultTheme } from '../../../../styles/themes/defaultTheme'

import {
  CoffeeInfoType,
  CoffeeContext,
} from '../../../../Context/CoffeeContext'
import { useState, useContext } from 'react'

interface CoffeeCardProps {
  value: CoffeeInfoType
}

export function CoffeeCard({ value }: CoffeeCardProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  const { handleAddCoffeeToList } = useContext(CoffeeContext)

  function incrementCoffeeAmount() {
    setCoffeeAmount((state) => state + 1)
  }

  function decrementCoffeeAmount() {
    setCoffeeAmount((state) => (state <= 1 ? (state = 1) : state - 1))
  }

  function handleAddNewCoffee() {
    const newValue = { ...value, amount: coffeeAmount }
    handleAddCoffeeToList(newValue)
  }

  return (
    <CoffeeCardContainer>
      <CoffeeHeader>
        <img src={value.img} alt="" />
        <CoffeeCategory>
          {value.category.map((value) => {
            return <span key={value}>{value}</span>
          })}
        </CoffeeCategory>
      </CoffeeHeader>
      <CoffeeInfo>
        <h3>{value.name}</h3>
        <p>{value.description}</p>
      </CoffeeInfo>
      <CoffeeFooter>
        <p>
          {value.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>

        <div>
          <CoffeeAmountButton
            incrementFunction={incrementCoffeeAmount}
            decrementFunction={decrementCoffeeAmount}
            amountValue={coffeeAmount}
          />

          <AddCoffeeButton onClick={handleAddNewCoffee}>
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
