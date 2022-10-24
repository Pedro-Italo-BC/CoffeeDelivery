import { CoffeeInfoType } from '../../Context/CoffeeContext'

export enum ActionTypes {
  ADD_COFFEE_TO_LIST = 'ADD_COFFEE_TO_LIST',
  UPDATE_COFFEE_AMOUNT_VALUE = 'UPDATE_COFFEE_AMOUNT_VALUE',
  DELETE_COFFEE_FROM_THE_LIST = 'DELETE_COFFEE_FROM_THE_LIST',
  CLEAR_COFFEE_LIST = 'CLEAR_COFFEE_LIST',
}

export function addCoffeeToList(coffee: CoffeeInfoType) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_LIST,
    payload: {
      coffee,
    },
  }
}

export function updateCoffeeAmountValue(coffeeAmountValue: number, id: number) {
  return {
    type: ActionTypes.UPDATE_COFFEE_AMOUNT_VALUE,
    payload: {
      id,
      coffeeAmountValue,
    },
  }
}

export function deleteCoffeeFromTheList(id: number) {
  return {
    type: ActionTypes.DELETE_COFFEE_FROM_THE_LIST,
    payload: {
      id,
    },
  }
}

export function clearCoffeeList() {
  return {
    type: ActionTypes.CLEAR_COFFEE_LIST,
  }
}
