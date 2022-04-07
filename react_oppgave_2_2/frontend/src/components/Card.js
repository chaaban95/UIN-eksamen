export default function Card() {
  return (
    <section data-testid="services">
      {/* TODO: Bruk .map til å skrive ut tjenester */}
      <article data-testid="service_wrapper">
        <h3 data-testid="services_title">Tjeneste tittel</h3>
        <p data-testid="services_preamble">Tjeneste ingress</p>
        <a data-testid="services_url">Til tjeneste</a>
      </article>
      {/* TODO: Hvis ingen tjenester ved filtrering. Vis denne */}
      <p data-testid="empty">Ingen tjenester</p>
    </section>
  )
}
