import { TBodyStyle, TFootStyle, TableStile } from './styles'

export function PayTable() {
  return (
    <TableStile>
      <TBodyStyle>
        <tr>
          <td>Total de itens</td>
          <td>R$ 29,70</td>
        </tr>
        <tr>
          <td>Entrega</td>
          <td>R$ 3,50</td>
        </tr>
      </TBodyStyle>

      <TFootStyle>
        <tr>
          <td>Total</td>
          <td>R$ 33,20</td>
        </tr>
      </TFootStyle>
    </TableStile>
  )
}
