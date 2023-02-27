const initState = {
    themeId: 1,
}

type initStateType = typeof initState


type ActionsType = ReturnType<typeof changeThemeId>

export const themeReducer = (state: initStateType = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => {
    return {
        type: 'SET_THEME_ID',
        id
    } as const
}// fix any

