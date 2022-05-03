import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    borderBottom: isActive ? '2px solid currentColor' : 'none',
  })

  const linkStyle2 = ({ isActive }) => ({
    backgroundColor: isActive ? 'mediumturquoise' : 'teal',
  })

  return (
    <header>
      <nav>
        <h1 className="logo" data-testid="logo">
          <NavLink style={linkStyle} to="/" data-testid="logo_link">
            Tjenesteweb
          </NavLink>
        </h1>
        <ul data-testid="nav">
          <li data-testid="nav_services">
            <NavLink
              style={linkStyle}
              to="services"
              data-testid="services_link"
            >
              Tjenester
            </NavLink>
          </li>
          <li data-testid="nav_new">
            <NavLink
              style={linkStyle2}
              className="btn"
              to="new"
              data-testid="create_link"
            >
              Ny tjeneste
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
