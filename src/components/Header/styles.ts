import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;

    gap: 0.75rem;
  }

  a {
    img {
      width: 5.3125rem;
      height: 2.5rem;
    }
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
  }
`

export const PaymentAreaLink = styled.div`
  a {
    height: 2.375rem;
    width: 2.375rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;

    transition: filter 0.3s;

    outline: none;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
