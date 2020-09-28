export default (state = '', action) => {
    switch(action.type) {
        case 'LOG_SEARCH':
            return action.searchTerm
        default:
            return state
    }
}
