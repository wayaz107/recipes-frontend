const initialState = {
    allRecipes: [],
    searchResults: []
}

export default function manageRecipes(state = initialState, action) {
    switch (action.type) {
        case "SET_ALL_RECIPES":
            return {
                ...state,
                allRecipes: action.allRecipes
            }
    }
}