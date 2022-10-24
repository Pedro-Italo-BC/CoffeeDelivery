import {
  CoffeeCheckoutContainer,
  CartSection,
  SubmitButton,
  CartContainer,
  CartListContainer,
} from './styles'

import { useNavigate } from 'react-router-dom'

import { InputsArea } from './components/InputsArea'
import { PayTable } from './components/PayTable'

import { SelectedCoffeeCart } from './components/SelectedCoffeeCart'

import { useContext } from 'react'

import { CoffeeContext } from '../../Context/CoffeeContext'
import { PersonalInformationContext } from '../../Context/PersonalInformationContext'

import * as zod from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

enum PaymentMethod {
  credit = 'Caratão de credito',
  debit = 'Debito',
  money = 'Dinheiro',
}

const newCoffeeFormValidationSchema = zod.object({
  cep: zod.string().min(1),
  road: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().optional(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(1),
  paymentMethodInput: zod.nativeEnum(PaymentMethod),
})

type NewPersonalInformationFormData = zod.infer<
  typeof newCoffeeFormValidationSchema
>

export function CoffeeCheckout() {
  const { coffeeList, handleClearCoffeeList } = useContext(CoffeeContext)

  const { addPersonalInformationToState } = useContext(
    PersonalInformationContext,
  )

  const newPersonalForm = useForm<NewPersonalInformationFormData>({
    resolver: zodResolver(newCoffeeFormValidationSchema),
    defaultValues: {
      city: '',
      complement: '',
      cep: '',
      district: '',
      number: '',
      road: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = newPersonalForm

  const navigate = useNavigate()

  function handleCompleteCoffeeOrder(data: NewPersonalInformationFormData) {
    addPersonalInformationToState(data)

    handleClearCoffeeList()

    navigate('/success')

    reset()
  }

  return (
    <CoffeeCheckoutContainer>
      <form onSubmit={handleSubmit(handleCompleteCoffeeOrder)}>
        <FormProvider {...newPersonalForm}>
          <InputsArea />
        </FormProvider>

        <CartSection>
          <h2>Cafés selecionados</h2>

          <CartContainer>
            <CartListContainer>
              {coffeeList.map((value) => {
                return <SelectedCoffeeCart key={value.id} value={value} />
              })}
            </CartListContainer>

            <PayTable />

            <SubmitButton type="submit" disabled={coffeeList.length === 0}>
              CONFIRMAR PEDIDO
            </SubmitButton>
          </CartContainer>
        </CartSection>
      </form>
    </CoffeeCheckoutContainer>
  )
}
