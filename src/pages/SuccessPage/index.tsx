import illustration from '../../assets/illustration.svg'

import {
  SuccessContainer,
  Hero,
  InformationContainer,
  InformationContent,
} from './styles'

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import { useContext } from 'react'

import { PersonalInformationContext } from '../../Context/PersonalInformationContext'

export function SuccessPage() {
  const { personalInformation } = useContext(PersonalInformationContext)

  return (
    <SuccessContainer>
      <div>
        <Hero>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Hero>

        <InformationContainer>
          <InformationContent>
            <div>
              <MapPin color="#fff" weight="fill" size="1rem" />
            </div>

            <div>
              <p>
                Entrega em{' '}
                <span>
                  {personalInformation.road}, {personalInformation.number}
                </span>
              </p>

              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </InformationContent>
          <InformationContent>
            <div>
              <Timer color="#fff" weight="fill" size="1rem" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min </span>
            </div>
          </InformationContent>
          <InformationContent>
            <div>
              <CurrencyDollar color="#fff" weight="fill" size="1rem" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <span>{personalInformation.paymentMethodInput}</span>
            </div>
          </InformationContent>
        </InformationContainer>
      </div>

      <img src={illustration} alt="" />
    </SuccessContainer>
  )
}
