import {
  ContainerStyle,
  Hero,
  InputContainer,
  InputSectionContainer,
  GapContent,
  CepInput,
  CityInput,
  ComplementInput,
  DistrictInput,
  NumberInput,
  RoadInput,
  UfInput,
  LabelStyle,
  PaymentMethodContainer,
} from './styles'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import { defaultTheme } from '../../../../styles/themes/defaultTheme'

export function InputsArea() {
  return (
    <InputSectionContainer>
      <h2>Complete seu pedido</h2>

      <GapContent>
        <ContainerStyle>
          <Hero>
            <MapPinLine color={defaultTheme['yellow-dark']} size="1.375rem" />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Hero>

          <InputContainer>
            <CepInput type="text" placeholder="CEP" />
            <RoadInput type="text" placeholder="Rua" />
            <NumberInput type="tel" placeholder="Número" />

            <ComplementInput>
              <input type="text" placeholder="Complemento" />
              <span>Opcional</span>
            </ComplementInput>

            <DistrictInput type="text" placeholder="Bairro" />
            <CityInput type="text" placeholder="Cidade" />
            <UfInput type="text" placeholder="UF" />
          </InputContainer>
        </ContainerStyle>

        <ContainerStyle>
          <Hero>
            <CurrencyDollar
              size="1.375rem"
              color={defaultTheme['purple-dark']}
            />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Hero>

          <PaymentMethodContainer>
            <input type="radio" name="PaymentMethod" id="Credit" />
            <LabelStyle htmlFor="Credit">
              <CreditCard size="1rem" color={defaultTheme['purple-dark']} />{' '}
              CARTÃO DE CRÉDITO
            </LabelStyle>

            <input type="radio" name="PaymentMethod" id="Debit" />
            <LabelStyle htmlFor="Debit">
              <Bank size="1rem" color={defaultTheme['purple-dark']} /> CARTÃO DE
              DÉBITO
            </LabelStyle>

            <input type="radio" name="PaymentMethod" id="Money" />
            <LabelStyle htmlFor="Money">
              <Money size="1rem" color={defaultTheme['purple-dark']} /> DINHEIRO
            </LabelStyle>
          </PaymentMethodContainer>
        </ContainerStyle>
      </GapContent>
    </InputSectionContainer>
  )
}
