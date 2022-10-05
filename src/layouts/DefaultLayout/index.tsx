import { DefaultLayoutConatiner } from './styles'
import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <DefaultLayoutConatiner>
      <Header />
      <Outlet />
    </DefaultLayoutConatiner>
  )
}
