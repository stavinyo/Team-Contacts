import { SET_CONTACTS } from '../reducers/contact.reducer.js'
import { store } from '../store.js'
import { contactService } from '../../services/contact.service.js'

export function loadContacts() {

    return contactService.query()
        .then(contacts => {
            console.log('contacts', contacts)
            store.dispatch({ type: SET_CONTACTS, contacts })
        })
        .catch(err => {
            console.log('cannot load contacts', err)
            throw err
        })
}