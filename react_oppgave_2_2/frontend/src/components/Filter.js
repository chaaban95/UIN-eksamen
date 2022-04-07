export default function Filter() {
  return (
    <>
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
    </>
  )
}
