import styled from 'styled-components'

export const InputSectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 640px;
  width: 40rem;

  gap: 0.9375rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.43rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const GapContent = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
`

export const ContainerStyle = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Hero = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-subtitle']};
    }
    span {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1rem 0.75rem;
`

const InputRef = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: none;
  padding: 0.75rem;
  border-radius: 4px;

  color: ${(props) => props.theme['base-label']};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
`

export const CepInput = styled(InputRef)`
  width: 12.5rem;
`
export const RoadInput = styled(InputRef)`
  width: 35rem;
`
export const NumberInput = styled(InputRef)`
  width: 12.5rem;
`
export const ComplementInput = styled.div`
  background-color: ${(props) => props.theme['base-input']};

  border-radius: 4px;
  display: flex;

  width: 21.75rem;

  input,
  span {
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
    padding: 0.75rem;
  }

  input {
    background-color: ${(props) => props.theme['base-input']};
    border: none;
    border-radius: 4px;
    display: flex;

    width: 90%;
  }

  span {
    font-style: italic;
  }
`
export const DistrictInput = styled(InputRef)`
  width: 12.5rem;
`
export const CityInput = styled(InputRef)`
  width: 17.25rem;
`
export const UfInput = styled(InputRef)`
  width: 3.75rem;
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  input[type='radio'] {
    display: none;

    &:checked + label {
      background-color: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme['purple-normal']};
      height: calc(3.1875rem - 2px);
    }
  }
`

export const LabelStyle = styled.label`
  width: 11.179375rem;

  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  height: 3.1875rem;
  border-radius: 6px;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`
