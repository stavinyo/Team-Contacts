const { useNavigate, Link } = ReactRouterDOM

export function ContactPreview({ contact }) {
    const navigate = useNavigate()

    return (
        <section className="contact-preview-container">
            <h1>{contact.firstName + ' ' + contact.lastName}</h1>

            <Link to={`/contact/${contact._id}`}>Details</Link>
        </section >
    )
}