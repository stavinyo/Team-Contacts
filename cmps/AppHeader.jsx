const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    return (
        <header className="app-header-container">
            <Link to="/">
                <h3>LOGO!</h3>
            </Link>
            <nav className="nav-link-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Todo</NavLink>
            </nav>
        </header>
    )
}
