import { createContext, ReactNode, useReducer, useEffect } from 'react'

import { coffeeReducer } from '../reducers/coffee/reducer'
import {
  addCoffeeToList,
  updateCoffeeAmountValue,
  deleteCoffeeFromTheList,
  clearCoffeeList,
} from '../reducers/coffee/actions'

export interface CoffeeInfoType {
  id: number
  img: string
  name: string
  description: string
  category: string[]
  price: number
  amount: number
}

interface CoffeeContextType {
  coffeeList: CoffeeInfoType[]
  handleAddCoffeeToList: (coffee: CoffeeInfoType) => void
  handleUpdateCoffeeAmountValue: (coffeeAmountValue: number, id: number) => void
  handleDeleteCoffeeFromTheList: (id: number) => void
  handleClearCoffeeList: () => void
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    {
      coffeeList: [],
    },
    () => {
      const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:coffee-state-1.0.0',
      )
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      } else {
        return {
          coffeeList: [],
        }
      }
    },
  )

  const { coffeeList } = coffeeState

  useEffect(() => {
    const stateJson = JSON.stringify(coffeeState)

    localStorage.setItem('@coffee-delivery:coffee-state-1.0.0', stateJson)
  }, [coffeeState])

  function handleAddCoffeeToList(coffee: CoffeeInfoType) {
    dispatch(addCoffeeToList(coffee))
  }

  function handleUpdateCoffeeAmountValue(coffeeAmount: number, id: number) {
    dispatch(updateCoffeeAmountValue(coffeeAmount, id))
  }

  function handleDeleteCoffeeFromTheList(id: number) {
    dispatch(deleteCoffeeFromTheList(id))
  }

  function handleClearCoffeeList() {
    dispatch(clearCoffeeList())
  }

  return (
    <CoffeeContext.Provider
      value={{
        handleClearCoffeeList,
        coffeeList,
        handleDeleteCoffeeFromTheList,
        handleAddCoffeeToList,
        handleUpdateCoffeeAmountValue,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
