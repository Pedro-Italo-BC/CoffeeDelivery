import { createContext, ReactNode, useEffect, useState } from 'react'

interface PersonalInformationsType {
  cep: string
  city: string
  complement?: string
  district: string
  number: string
  paymentMethodInput: 'Caratão de credito' | 'Debito' | 'Dinheiro'
  road: string
  uf: string
}

interface PersonalInformationContextType {
  personalInformation: PersonalInformationsType
  addPersonalInformationToState: (value: PersonalInformationsType) => void
}

interface PersonalInformationProviderProps {
  children: ReactNode
}

export const PersonalInformationContext = createContext(
  {} as PersonalInformationContextType,
)

export function PersonalInformationProvider({
  children,
}: PersonalInformationProviderProps) {
  const storedStateAsJson = localStorage.getItem(
    '@coffee-delivery:pesonal-information-1.0.0',
  )
  const [personalInformation, setPersonalInformation] =
    useState<PersonalInformationsType>(JSON.parse(storedStateAsJson))

  useEffect(() => {
    const stateJson = JSON.stringify(personalInformation)

    localStorage.setItem(
      '@coffee-delivery:pesonal-information-1.0.0',
      stateJson,
    )
  }, [personalInformation])

  function addPersonalInformationToState(value: PersonalInformationsType) {
    setPersonalInformation(value)
  }
  return (
    <PersonalInformationContext.Provider
      value={{ personalInformation, addPersonalInformationToState }}
    >
      {children}
    </PersonalInformationContext.Provider>
  )
}
