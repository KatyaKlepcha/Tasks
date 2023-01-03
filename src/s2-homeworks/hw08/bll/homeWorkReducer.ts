import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state]
            return copyState.sort(function (a, b) {
                if (action.payload === 'up') {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                }
                if (action.payload === 'down') {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    }
                }

                return 0
            }) // need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
