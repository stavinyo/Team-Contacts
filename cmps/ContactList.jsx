import { ContactPreview } from "./ContactPreview.jsx"

export function ContactList({ contacts }) {
    if (!contacts) return <div>Loading...</div>
    return (
        <section className="contacts-list-container">
            <ul>
                {contacts.map(contact =>
                    <li key={contact._id}>
                        <ContactPreview contact={contact} />
                    </li>
                )}
            </ul>
        </section >
    )
}