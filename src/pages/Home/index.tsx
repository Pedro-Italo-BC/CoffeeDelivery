import {
  HomeContainer,
  Featurues,
  Hero,
  HeroContainer,
  ImageContainer,
  MainSection,
  CatalogSection,
  CoffeeList,
} from './styles'

import { Package, Timer, ShoppingCart, Coffee } from 'phosphor-react'

import MainCoffee from '../../assets/MainCoffee.png'

import { coffeeListInfo } from '../../CoffeeInfo/CoffeeInfoList'

import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <MainSection>
        <HeroContainer>
          <Hero>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Hero>
          <Featurues>
            <div>
              <div>
                <ShoppingCart color="#fff" weight="fill" size={'1rem'} />
              </div>{' '}
              <span>Compra simples e segura</span>
            </div>

            <div>
              <div>
                <Timer color="#fff" weight="fill" size={'1rem'} />
              </div>{' '}
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <div>
                <Package color="#fff" size={'1rem'} />
              </div>{' '}
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <div>
                <Coffee color="#fff" weight="fill" size={'1rem'} />
              </div>{' '}
              <span>O café chega fresquinho até você</span>
            </div>
          </Featurues>
        </HeroContainer>

        <ImageContainer>
          <img src={MainCoffee} alt="" />
        </ImageContainer>
      </MainSection>

      <CatalogSection>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffeeListInfo.map((value) => {
            return <CoffeeCard key={value.id} value={value} />
          })}
        </CoffeeList>
      </CatalogSection>
    </HomeContainer>
  )
}
