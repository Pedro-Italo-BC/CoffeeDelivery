import styled from 'styled-components'

export const CoffeeCartItemContainer = styled.li`
  display: flex;
  gap: 1.25rem;

  width: 100%;

  padding-bottom: 2rem;
  padding-right: 18px;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeeCartContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`

export const CoffeeCartInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CoffeeCartButtonsArea = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const DeleteButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.40625rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;

  font-size: 0.75rem;
  font-weight: 400;

  color: ${(props) => props.theme['base-text']};

  text-align: center;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`
