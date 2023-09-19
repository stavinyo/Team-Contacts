export const SET_CONTACT = 'SET_CONTACT'

const initialState = {
    contacts: [],
    filterBy: {},
}

export function contactReducer(state = initialState, action = {}) {
    let contact
    switch (action.type) {

        case SET_CONTACT:
            return { ...state, contact: action.contact }

        default:
            return state
    }
}