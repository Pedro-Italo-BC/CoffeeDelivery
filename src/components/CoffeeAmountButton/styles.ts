import styled from 'styled-components'

export const CoffeeAmountButtonContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  display: inline-flex;

  width: 4.5rem;
  height: 2.375rem;

  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 6px;

  span {
    font-weight: 400;
    font-size: 1rem;
    align-items: center;
  }
`

export const ButtonShape = styled.button`
  width: 0.875rem;
  height: 0.875rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;

  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`
