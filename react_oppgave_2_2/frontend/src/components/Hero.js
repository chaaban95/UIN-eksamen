import circles from '../images/design2.png'

export default function Hero() {
  return (
    <section className="hero" data-testid="hero">
      <div className="cite">
        <cite data-testid="cite">
          «Vi tilbyr alle tjenester til alle mennesker over alt. Rett og slett
          best på tjenester.»
        </cite>
        <span className="ceo">CEO, Tjenesteweb</span>
      </div>
      <div data-testid="circles">
        <img className="circles" src={circles} alt="" />
      </div>
    </section>
  )
}
