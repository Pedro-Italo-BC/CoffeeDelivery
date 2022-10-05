import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;

    gap: 0.75rem;
  }

  a:hover {
    cursor: pointer;
  }
`
export const LocalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['purple-light']};

  border-radius: 6px;

  span {
    color: ${(props) => props.theme['purple-dark']};
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.1rem;
  }
`

export const PaymentAreaLink = styled.a`
  height: 2.375rem;
  width: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
`
