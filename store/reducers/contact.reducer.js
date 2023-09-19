export const SET_CONTACTS = 'SET_CONTACTS'

const initialState = {
    contacts: [],
    filterBy: {},
}

export function contactReducer(state = initialState, action = {}) {
    let contacts
    console.log('action.type')
    switch (action.type) {

        case SET_CONTACTS:
            return { ...state, contacts: action.contacts }

        default:
            return state
    }
}