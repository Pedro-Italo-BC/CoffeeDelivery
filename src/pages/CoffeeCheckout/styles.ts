import styled from 'styled-components'

export const CoffeeCheckoutContainer = styled.div`
  padding: 2.5rem 0;
  form {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    @media (max-width: 1399px) {
      justify-content: center;
    }
  }
`
export const CartSection = styled.section`
  width: 28rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.43rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 1399px) {
    width: 40rem;
  }
`

export const CartContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  border-radius: 6px 44px 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1399px) {
    width: 40rem;
  }
`

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;
  width: 100%;

  background-color: ${(props) => props.theme['yellow-normal']};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.375rem;
  border: none;
  border-radius: 6px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`
export const CartListContainer = styled.ul`
  height: 14.5rem;
  list-style: none;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: scroll;
  overflow-x: hidden;
`
