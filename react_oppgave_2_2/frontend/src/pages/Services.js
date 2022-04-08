// TODO: Denne egner seg for /tjenester og /

import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Filter from '../components/Filter'
import Title from '../components/Title'
import { getServices } from '../lib/services/service'

export default function Services() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    const getServicesData = async () => {
      setLoading(true)
      try {
        const services = await getServices()
        setData(services)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getServicesData()
  }, [])

  if (error) return <div>Noe gikk galt..</div>
  if (loading) return <div>Henter data.. </div>

  return (
    <>
      <Title title="Alle tjenester" />
      <Filter />
      <Card data={data} />
    </>
  )
}
