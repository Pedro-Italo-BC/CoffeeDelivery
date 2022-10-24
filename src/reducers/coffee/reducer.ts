import { ActionTypes } from './actions'
import { produce } from 'immer'

import { CoffeeInfoType } from '../../Context/CoffeeContext'

interface CyclesState {
  coffeeList: CoffeeInfoType[]
}

export function coffeeReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_LIST:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffeeList.findIndex(
          (value) => value.id === action.payload.coffee.id,
        )

        if (coffeeIndex !== -1) {
          draft.coffeeList[coffeeIndex].amount += action.payload.coffee.amount
        } else {
          draft.coffeeList.push(action.payload.coffee)
        }
      })
    case ActionTypes.UPDATE_COFFEE_AMOUNT_VALUE:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffeeList.findIndex(
          (value) => value.id === action.payload.id,
        )

        draft.coffeeList[coffeeIndex].amount = action.payload.coffeeAmountValue
      })

    case ActionTypes.DELETE_COFFEE_FROM_THE_LIST:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffeeList.findIndex(
          (value) => value.id === action.payload.id,
        )
        draft.coffeeList.splice(coffeeIndex, 1)
      })

    case ActionTypes.CLEAR_COFFEE_LIST:
      return produce(state, (draft) => {
        draft.coffeeList = []
      })

    default:
      return state
  }
}
