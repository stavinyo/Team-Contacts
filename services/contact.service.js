import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const CONTACT_KEY = 'contactDB'
_createContacts()

export const contactService = {
    query,
    remove,
    save,
    getEmptyContact,
    get
}

function query() {
    return storageService.query(CONTACT_KEY)
}

function get(contactId){
    return storageService.get(CONTACT_KEY, contactId)
}

function remove(contactId) {
    return storageService.remove(CONTACT_KEY, contactId)
}

function save(contact) {
    if (contact._id) {
        return storageService.put(CONTACT_KEY, contact)
    } else {
        return storageService.post(CONTACT_KEY, contact)
    }
}

function _createContacts() {
    let contacts = utilService.loadFromStorage(CONTACT_KEY)
    if (!contacts || !contacts.length)
        contacts = [
            {
                _id: '2h7d7',
                firstName: "Stav",
                lastName: 'Cohen',
                createdAt: 1684612263615,
                email: 'stavco28@gail.com',
                phone: '0526909629'
            },
            {
                _id: '2h7d8',
                firstName: "Tal",
                lastName: 'Cohen',
                createdAt: 1684612263123,
                email: 'talco22@gail.com',
                phone: '0523333333'
            },
            {
                _id: '2h7d9',
                firstName: "yossi",
                lastName: 'Cohen',
                createdAt: 1684612263615,
                email: 'yossico28@gail.com',
                phone: '0526343553'
            },

        ]
    utilService.saveToStorage(CONTACT_KEY, contacts)
}

function getEmptyContact() {
    return {
        firstName: "",
        lastName: '',
        createdAt: Date.now(),
        email: '',
        phone: ''
    }
}
