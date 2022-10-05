import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <a>
        <img src={Logo} alt="" />
      </a>

      <div>
        <div></div>
        <button></button>
      </div>
    </HeaderContainer>
  )
}
