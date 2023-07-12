const INITIAL_STATE = {
    listHadith: []
}

export const hadithReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_HADITH" :
            console.log("test data", action.payload.data)
            return {
                ...state,
                listHadith: action.payload.data
            }
            default :
            return state
    }
}