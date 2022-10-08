import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 5.875rem 0;
`

export const MainSection = styled.section`
  display: flex;
  justify-content: space-between;

  padding-bottom: 6.75rem;

  @media (max-width: 610px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
  }
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4.125rem;

  max-width: 584px;
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 3.875rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};

    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
  }

  @media (max-width: 610px) {
    text-align: center;
  }
`

export const Featurues = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;

  height: 5.25rem;
  width: 100%;

  div {
    display: flex;
    gap: 0.75rem;

    width: auto;
    height: 2rem;
    align-items: center;

    span {
      color: ${(props) => props.theme['base-text']};

      font-size: 1rem;
      font-weight: 400;
      line-height: 1.25rem;
    }

    div {
      width: 2rem;
      height: 2rem;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  div:nth-child(1) {
    div {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }

  div:nth-child(2) {
    div {
      background-color: ${(props) => props.theme['yellow-normal']};
    }
  }

  div:nth-child(3) {
    div {
      background-color: ${(props) => props.theme['base-text']};
    }
  }

  div:nth-child(4) {
    div {
      background-color: ${(props) => props.theme['purple-normal']};
    }
  }

  @media (max-width: 610px) {
    align-items: center;
  }

  @media (max-width: 425px) {
    flex-wrap: nowrap;
    height: auto;
    margin: 0 auto;
    div {
      width: 18.375rem;
    }
  }
`

export const ImageContainer = styled.div`
  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`
export const CatalogSection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 3.375rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.5rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeList = styled.ul`
  display: flex;
  gap: 2.5rem 2rem;
  flex-wrap: wrap;

  list-style: none;

  @media (max-width: 1399px) {
    justify-content: center;
  }
`
