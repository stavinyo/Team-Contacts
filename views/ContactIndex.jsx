import { ContactList } from "../cmps/ContactList.jsx"
import { loadContacts } from "../store/actions/contact.actions.js"

const { useState, useEffect } = React
const { useSelector, useDispatch } = ReactRedux

export function ContactIndex() {
    const dispatch = useDispatch()
    const contacts = useSelector(storeState => storeState.contactModule.contacts)

    useEffect(() => {
        loadContacts()
            .catch(err => {
                console.log(err);
            })
    }, [])

    return <section className="contact-index-container">
        <ContactList contacts={contacts} />
    </section>
}