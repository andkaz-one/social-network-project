import {TypeOfAC} from "./store";


export type sidebarType = {
    id: number
    value: string
}

let initialState = [
    {id: 1, value: "https://cdn-icons-png.flaticon.com/128/174/174858.png" },
    {id: 2, value: "https://cdn-icons-png.flaticon.com/128/2111/2111615.png" },
    {id: 3, value: "https://cdn-icons-png.flaticon.com/128/888/888879.png" },
]

export const sideBarReducer = (state = initialState,
                               action: TypeOfAC) => {
    switch (action.type) {
        case 'SIDEBAR' : {
            return state
        }
        default: return state

    }
}


export type sidebarActionType = ReturnType<typeof sidebarAC>

export const sidebarAC = () => {
    return (
        {
            type: 'SIDEBAR'
        } as const
    )
}



