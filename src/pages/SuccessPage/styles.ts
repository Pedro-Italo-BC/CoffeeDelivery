import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5.875rem 0;
  flex-wrap: wrap;
  align-items: center;

  img {
    width: 30.75rem;
    height: 18.3125rem;
  }
  @media (max-width: 1272px) {
    justify-content: center;
    gap: 1rem;
  }
`

export const Hero = styled.div`
  margin-bottom: 2.5rem;

  display: flex;
  flex-direction: column;

  gap: 0.25rem;

  h1 {
    font-family: 'Baloo 2', cursive;

    font-weight: 800;
    font-size: 2rem;
    line-height: 2.5rem;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InformationContainer = styled.div`
  width: 32.875rem;
  padding: 2.5rem;

  position: relative;
  border-radius: 6px 36px 6px 36px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';

    position: absolute;
    z-index: -1;

    top: -1px;
    right: -1px;
    left: -1px;
    bottom: -1px;
    background: linear-gradient(to right, #dbac2c, #8047f8);

    border-radius: 6px 36px 6px 36px;
  }
`

export const InformationContent = styled.div`
  display: flex;

  gap: 0.75rem;

  div:first-child {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:last-child {
    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.25rem;

      color: ${(props) => props.theme['base-text']};
    }
    span {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.25rem;

      color: ${(props) => props.theme['base-text']};
    }
  }

  &:nth-child(1) {
    div:first-child {
      background-color: ${(props) => props.theme['purple-normal']};
    }
  }
  &:nth-child(2) {
    div:first-child {
      background-color: ${(props) => props.theme['yellow-normal']};
    }
  }
  &:nth-child(3) {
    div:first-child {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
