import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { hexColors } from '../data/services'
import { newServices } from '../lib/services/newServices'

// TODO: Denne egner seg for /ny

export default function Create() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [slogan, setSlogan] = useState('')
  const [preAmble, setPreAmble] = useState('')
  const [box, setBox] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setLoading(true)
    setError(false)
    setSuccess(false)

    try {
      await newServices(data)
      setSuccess(true)
    } catch (error) {
      setError(error.message)
    } finally {
      setTimeout(() => {
        setLoading(false)
        navigate('/services')
      }, 500)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title.length < 1) {
      setErrorMessage(true)
    } else if (slug.length < 1) {
      setErrorMessage(true)
    } else if (slogan.length < 1) {
      setErrorMessage(true)
    } else if (preAmble.length < 1) {
      setErrorMessage(true)
    } else if (box.length < 1) {
      setErrorMessage(true)
    } else {
      setErrorMessage(false)
      onSubmit({ title, slug, slogan, preAmble, box })
    }
  }

  return (
    <main>
      <h2 data-testid="title">Ny tjeneste</h2>
      <section>
        <span>"Hvis vi ikke har en tjeneste, så lager vi en"</span>
        <span>CEO, Tjenesteweb</span>
      </section>
      {/* TODO: Gjør det mulig å sende skjema med alt av verdier */}
      <form data-testid="form" onSubmit={handleSubmit} method="POST" action="#">
        <label htmlFor="title">
          <span>Tittel*</span>
          <input
            data-testid="form_title"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            //required
          />
        </label>
        <label htmlFor="slug">
          <span>Slug*</span>
          <input
            data-testid="form_slug"
            type="text"
            name="slug"
            id="slug"
            value={slug}
            onChange={(event) => setSlug(event.target.value)}
            //required
          />
        </label>
        <label htmlFor="preAmble">
          <span>Ingress*</span>
          <input
            data-testid="form_preAmble"
            type="text"
            name="preAmble"
            id="preAmble"
            value={preAmble}
            onChange={(event) => setPreAmble(event.target.value)}
            //required
          />
        </label>
        <label htmlFor="slogan">
          <span>Slogan*</span>
          <input
            data-testid="form_slogan"
            type="text"
            name="slogan"
            id="slogan"
            value={slogan}
            onChange={(event) => setSlogan(event.target.value)}
            //required
          />
        </label>
        <label htmlFor="box">
          <span>Farge på boks*</span>
          <select
            data-testid="form_box"
            name="box"
            id="box"
            value={box}
            onChange={(event) => setBox(event.target.value)}
            //required
          >
            <option disabled value="">
              Velg hex-farge
            </option>
            {hexColors.map((hex) => (
              <option key={hex} value={hex}>
                {hex}
              </option>
            ))}
          </select>
        </label>
        <button data-testid="form_submit" type="submit">
          {loading ? 'Lager...' : 'Lag tjeneste'}
        </button>
        {/* TODO: Vis riktig p avhengig av tilstanden */}
        {error ? <p>{error}</p> : null}
        {errorMessage ? (
          <p data-testid="form_error">Fyll ut alle felter med *</p>
        ) : null}
        {success ? <p data-testid="form_success">Tjenesten er lagret</p> : null}
      </form>
    </main>
  )
}
