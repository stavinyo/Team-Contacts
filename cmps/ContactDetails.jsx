
export function ContactDetails({contact}) {


    return <section className="contact-details-container">
        <h1>{contact.firstName + ' ' + contact.lastName}</h1>
        <p>{'email: ' + contact.email}</p>
        <p>{'phone: ' + contact.phone}</p>
    </section>
}