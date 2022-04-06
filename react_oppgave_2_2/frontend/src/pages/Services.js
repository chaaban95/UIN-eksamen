// TODO: Denne egner seg for /tjenester og /

export default function Services() {
  return (
    <>
      <section data-testid="hero">
        <div>
          <cite data-testid="cite">
            «Vi tilbyr alle tjenester til alle mennesker over alt. Rett og slett
            best på tjenester.»
          </cite>
          <span>CEO, Tjenesteweb</span>
        </div>
        <div data-testid="circles">Sirkler</div>
      </section>
      <main>
        <h2 data-testid="title">Alle tjenester</h2>
        {/* TODO: Få filter til å virke */}
        <label htmlFor="search">
          Søk:
          <input
            data-testid="search"
            id="search"
            name="search"
            type="search"
            placeholder="Søk etter tjenester"
          />
        </label>
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
      </main>
    </>
  )
}
