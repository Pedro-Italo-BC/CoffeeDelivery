import styled from 'styled-components'

export const CoffeeCardContainer = styled.li`
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 1.5rem;
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-radius: 6px 36px 6px 36px;

  text-align: center;
`

export const CoffeeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  img {
    margin-top: -1.25rem;
    height: 7.5rem;
    width: 7.5rem;
  }
`
export const CoffeeCategory = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    color: ${(props) => props.theme['yellow-dark']};

    font-weight: 700;
    font-size: 0.625rem;

    text-transform: uppercase;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};

    font-weight: 700;
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    line-height: 1.62rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.1375rem;
  }
`

export const CoffeeFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.4375rem;

  p {
    color: ${(props) => props.theme['base-text']};

    font-size: 1.5rem;
    line-height: 1.14rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const AddCoffeeButton = styled.button`
  height: 2.375rem;
  width: 2.375rem;

  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['purple-dark']};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme['purple-normal']};

    cursor: pointer;
  }
`
