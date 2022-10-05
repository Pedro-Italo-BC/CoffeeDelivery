import { HeaderContainer, LocalInfo, PaymentAreaLink } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/defaultTheme'

export function Header() {
  return (
    <HeaderContainer>
      <a>
        <img src={Logo} alt="" />
      </a>

      <div>
        <LocalInfo>
          <MapPin
            size={22}
            color={defaultTheme['purple-normal']}
            weight="fill"
          />
          <span>Porto Alegre, RS</span>
        </LocalInfo>
        <PaymentAreaLink>
          <ShoppingCart
            size={22}
            color={defaultTheme['yellow-dark']}
            weight="fill"
          />
        </PaymentAreaLink>
      </div>
    </HeaderContainer>
  )
}
