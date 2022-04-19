export default function Filter({ searchFilter, setSearchFilter }) {
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
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />
      </label>
    </>
  )
}
