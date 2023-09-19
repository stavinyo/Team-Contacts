const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Provider } = ReactRedux

import { store } from './store/store.js'
import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './views/About.jsx'
import { Home } from './views/Home.jsx'
import { ContactIndex } from './views/ContactIndex.jsx'
import { ContactDetails } from './cmps/ContactDetails.jsx'

export function App() {
    return (
        <Provider store={store}>
            <Router>
                <section className="app">
                    <AppHeader />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<ContactIndex />} />
                        <Route path="/contact/:contactId" element={<ContactDetails  />} />

                        
                    </Routes>
                </section>
            </Router>
        </Provider>
    )
}
