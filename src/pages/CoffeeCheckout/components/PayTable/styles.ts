import styled from 'styled-components'

export const TableStile = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.845rem;
`

export const TBodyStyle = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 0.845rem;
  tr {
    display: flex;
    justify-content: space-between;

    td:first-child {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.13rem;
      text-align: right;

      color: ${(props) => props.theme['base-text']};
    }

    td:last-child {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.13rem;
      text-align: right;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const TFootStyle = styled.tfoot`
  tr {
    display: flex;

    justify-content: space-between;

    td:first-child {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.6rem;
      align-items: right;

      color: ${(props) => props.theme['base-subtitle']};
    }

    td:last-child {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.6rem;
      align-items: right;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
