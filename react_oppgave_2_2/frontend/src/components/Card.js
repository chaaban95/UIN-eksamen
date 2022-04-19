import { Link } from 'react-router-dom'

export default function Card({ data, searchFilter }) {
  return (
    <section data-testid="services">
      {/* TODO: Bruk .map til å skrive ut tjenester */}
      {data
        .filter((service) => {
          if (searchFilter == '') {
            return service
          } else if (
            service.title.toLowerCase().includes(searchFilter.toLowerCase())
          ) {
            return service
          }
        })
        .map((service) => (
          <article key={service.slug} data-testid="service_wrapper">
            <h3 data-testid="services_title">{service?.title}</h3>
            <p data-testid="services_preamble">{service?.preAmble}</p>
            <Link to={`/services/${service.slug}`} data-testid="services_url">
              Til tjeneste
            </Link>
          </article>
        ))}
      {/* TODO: Hvis ingen tjenester ved filtrering. Vis denne */}
      <p data-testid="empty">Ingen tjenester</p>
    </section>
  )
}
