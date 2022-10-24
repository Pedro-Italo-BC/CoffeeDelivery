import { TBodyStyle, TFootStyle, TableStile } from './styles'

import { CoffeeContext } from '../../../../Context/CoffeeContext'

import { useContext } from 'react'

export function PayTable() {
  const { coffeeList } = useContext(CoffeeContext)

  const total = coffeeList.reduce((acc, cur) => {
    return acc + cur.price * cur.amount
  }, 0)

  return (
    <TableStile>
      <TBodyStyle>
        <tr>
          <td>Total de itens</td>
          <td>
            {total.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </td>
        </tr>
        <tr>
          <td>Entrega</td>
          <td>R$ 3,50</td>
        </tr>
      </TBodyStyle>

      <TFootStyle>
        <tr>
          <td>Total</td>
          <td>
            {total === 0
              ? 0
              : (total + 3.5).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
          </td>
        </tr>
      </TFootStyle>
    </TableStile>
  )
}
