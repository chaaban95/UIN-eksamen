// TODO: Denne egner seg for /tjenester/en-eller-annen-tjeneste

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RichTextContent from '../components/RichTextContent'
import { getService } from '../lib/services/service'

export default function Service() {
  const { slug } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    const getServiceData = async () => {
      setLoading(true)
      try {
        const serviceData = await getService(slug)
        setData(serviceData)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getServiceData()
  }, [slug])

  if (!data && error) return <div>Noe gikk galt..</div>
  if (!data && loading) return <div>Henter data.. </div>

  return (
    <>
      <main>
        <h2 data-testid="service_title">{data?.title}</h2>
        <section>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <span data-testid="service_slogan">{data?.slogan}</span>
          <span>CEO, Tjenesteweb</span>
        </section>
        <section>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <p data-testid="service_preamble">{data?.preAmble}</p>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <h3 data-testid="service_content_title">
            {data?.InitialContent?.title}
          </h3>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <p data-testid="service_content_text">{data?.InitialContent?.text}</p>
          <article data-testid="service_text">
            {/* Her kommer tekst fra "text" laget i Ny */}
            <RichTextContent data={data?.PortableText} />
          </article>
        </section>
      </main>
      <aside>
        {/* TODO: Bytte ut Farge med riktig dynamisk verdi */}
        <div data-testid="service_box" data-color="Farge">
          Boks design
        </div>
      </aside>
    </>
  )
}
