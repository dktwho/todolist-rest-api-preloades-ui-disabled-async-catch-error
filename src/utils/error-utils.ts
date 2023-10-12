
import { Dispatch } from 'redux'
import { ResponseType } from '../api/todolists-api'
import {setErrorAC, SetErrorACType, setStatusAC, SetStatusACType} from '../app/app-reducer'

// generic function
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(setStatusAC('failed'))
}

export const handleServerNetworkError = (errorMessage: string, dispatch: ErrorUtilsDispatchType) => {
    dispatch(setErrorAC(errorMessage))
    dispatch(setStatusAC('failed'))
}

type ErrorUtilsDispatchType = Dispatch<SetErrorACType | SetStatusACType>
