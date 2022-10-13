import { HeaderContainer, LocalInfo, PaymentAreaLink } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/defaultTheme'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <div>
        <LocalInfo>
          <MapPin
            size={'1.375rem'}
            color={defaultTheme['purple-normal']}
            weight="fill"
          />
          <span>Porto Alegre, RS</span>
        </LocalInfo>
        <PaymentAreaLink>
          <NavLink to="coffeeCheckout" title="Checkout">
            <ShoppingCart
              size={'1.375rem'}
              color={defaultTheme['yellow-dark']}
              weight="fill"
            />
          </NavLink>
        </PaymentAreaLink>
      </div>
    </HeaderContainer>
  )
}
