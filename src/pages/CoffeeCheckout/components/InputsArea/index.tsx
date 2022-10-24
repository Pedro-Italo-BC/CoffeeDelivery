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

import { useFormContext } from 'react-hook-form'

export function InputsArea() {
  const { register } = useFormContext()

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
            <CepInput type="text" placeholder="CEP" {...register('cep')} />
            <RoadInput type="text" placeholder="Rua" {...register('road')} />
            <NumberInput
              type="tel"
              placeholder="Número"
              {...register('number')}
            />

            <ComplementInput>
              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
              <span>Opcional</span>
            </ComplementInput>

            <DistrictInput
              type="text"
              placeholder="Bairro"
              {...register('district')}
            />

            <CityInput type="text" placeholder="Cidade" {...register('city')} />

            <UfInput type="text" placeholder="UF" {...register('uf')} />
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
            <input
              type="radio"
              id="Credit"
              value="Caratão de credito"
              {...register('paymentMethodInput')}
            />
            <LabelStyle htmlFor="Credit">
              <CreditCard size="1rem" color={defaultTheme['purple-dark']} />{' '}
              CARTÃO DE CRÉDITO
            </LabelStyle>

            <input
              type="radio"
              id="Debit"
              value="Debito"
              {...register('paymentMethodInput')}
            />
            <LabelStyle htmlFor="Debit">
              <Bank size="1rem" color={defaultTheme['purple-dark']} /> CARTÃO DE
              DÉBITO
            </LabelStyle>

            <input
              type="radio"
              id="Money"
              value="Dinheiro"
              {...register('paymentMethodInput')}
            />
            <LabelStyle htmlFor="Money">
              <Money size="1rem" color={defaultTheme['purple-dark']} /> DINHEIRO
            </LabelStyle>
          </PaymentMethodContainer>
        </ContainerStyle>
      </GapContent>
    </InputSectionContainer>
  )
}
