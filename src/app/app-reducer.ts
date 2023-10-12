export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as string | null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export type SetStatusACType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}

export type SetErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (error: null | string) => {
    return {type: 'APP/SET-ERROR', error} as const
}

type ActionsType = SetStatusACType | SetErrorACType
