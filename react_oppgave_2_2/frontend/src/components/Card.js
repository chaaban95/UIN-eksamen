import { Link } from 'react-router-dom'

export default function Card({ data, searchFilter }) {
  const filtered = data.filter((service) =>
    service.title.toLowerCase().includes(searchFilter.toLowerCase())
  )
  let filteredData = []

  searchFilter ? (filteredData = filtered) : (filteredData = data)
  return (
    <section className="services" data-testid="services">
      {/* TODO: Bruk .map til å skrive ut tjenester */}
      {filteredData.map((service) => (
        <article
          className="service"
          key={service.slug}
          data-testid="service_wrapper"
          style={{ backgroundColor: service?.box }}
        >
          <h3 data-testid="services_title">{service?.title}</h3>
          <p data-testid="services_preamble">{service?.preAmble}</p>
          <Link to={`/services/${service.slug}`} data-testid="services_url">
            Til tjeneste
          </Link>
        </article>
      ))}
      {/* TODO: Hvis ingen tjenester ved filtrering. Vis denne */}
      {filteredData.length === 0 && <p data-testid="empty">Ingen tjenester</p>}
    </section>
  )
}
