import { useState } from 'react'
import Dropdown from './components/Dropdown/Dropdown'
import IceCream from './components/IceCream/IceCream'
import MainLayout from './components/MainLayout/MainLayout'
import OptionSection from './components/OptionSection/OptionSection'
import Title from './components/Title/Title'

export default function App() {
  // TODO: Gjør nødvendige endringer slik at 'Chocolate' vise i tittel når applikasjonen starter
  const [flavour, setFlavour] = useState('Chocolate')
  // TODO: Gjør nødvendige endringer slik at bakgrunnen på isen er chocolate når applikasjonen starterr
  const [css, setCss] = useState('chocolate')

  const List = [
    {
      title: 'Jordbær',
      value: 'strawberry',
    },
    {
      title: 'Banan',
      value: 'banana',
    },
    {
      title: 'Lime',
      value: 'lime',
    },
    {
      title: 'Blåbær',
      value: 'blueberry',
    },
    {
      title: 'Sjokolade',
      value: 'chocolate',
    },
  ]

  // TODO: Trigg funksjonen under ved endring i select
  const handleFlavourChange = (event) => {
    const { value } = event.target
    // TODO: Gjør nødvendig endring slik at tittel blir oppdatert med verdien valgt i select
    setFlavour(value)

    // #### DO NOT CHANGE -- Ikke gjør endringer på koden under
    const cssFlavour = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--${value}`)
    const cssBackground = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--bg-${value}`)
    document.documentElement.style.setProperty('--flavour', `${cssFlavour}`)
    document.documentElement.style.setProperty('--bg', `${cssBackground}`)
    setCss(value)
    // #### DO NOT CHANGE END
  }

  // TODO: Gjør om til komponenter. HINT: Se på testid navnene som matcher krav til komponenter
  return (
    <MainLayout>
      <OptionSection>
        <Title value={flavour} />
        <Dropdown list={List} onSelection={handleFlavourChange} />
      </OptionSection>
      <IceCream css={css} />
    </MainLayout>
  )
}
