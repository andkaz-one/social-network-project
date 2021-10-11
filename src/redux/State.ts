let renderPage = () => {
    console.log('rendering')
}

export const subscribe = (observer: () => void) => {
    renderPage = observer
}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}

type profilePageType = {
    postsData: Array<postType>


}

type dialogsPageType = {
    dialogsData: Array<dialogType>
    messagesData: Array<messageType>


}

type dialogType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}

type postType = {
    id: number
    message: string
    like: number
}


type sidebarType = Array<string>






export const state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'React', like: 45},
            {id: 2, message: 'JavaScript', like: 20},
            {id: 3, message: 'TypeScript', like: 30},
        ],

    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Andrei', },
            {id: 2, name: 'Viktoria', },
            {id: 3, name: 'John', },
        ],
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Whats up'},
            {id: 3, message: 'Hi'},
        ],
    },
    sidebar: [
        "https://cdn-icons-png.flaticon.com/128/174/174858.png",
        "https://cdn-icons-png.flaticon.com/128/2111/2111615.png",
        "https://cdn-icons-png.flaticon.com/128/888/888879.png",
    ]


}

export const addPostMessage = (postMessage: string) => {
    let newPost = {
        id: 4,
        message: postMessage,
        like: 0
    }
    state.profilePage.postsData.push(newPost)
    renderPage()
}






