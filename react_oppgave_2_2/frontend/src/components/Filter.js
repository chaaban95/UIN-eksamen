export default function Filter({ searchFilter, setSearchFilter }) {
  return (
    <>
      {/* TODO: Få filter til å virke */}
      <label className="search" htmlFor="search">
        <input
          size="15"
          className="inSearch"
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
