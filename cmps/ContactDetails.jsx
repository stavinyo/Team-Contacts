import { contactService } from "../services/contact.service.js"

const { useParams, useNavigate } = ReactRouterDOM
const { useEffect, useState } = React


export function ContactDetails() {

    const { contactId } = useParams()
    const [contact, setContact] = useState(null)

    useEffect(() => {
        contactService.get(contactId).then(contact => {
            setContact(contact)
        })
    }, [])

    if(!contact) return <div>Loading...</div>
    return <section className="contact-details-container">
        <h1>{contact.firstName + ' ' + contact.lastName}</h1>
        <p>{'email: ' + contact.email}</p>
        <p>{'phone: ' + contact.phone}</p>
    </section>
}