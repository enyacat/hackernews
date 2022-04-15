import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_TYPE_IN_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => {
          return story.objectID !== action.payload
        }),
      }
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 }
    case HANDLE_PAGE:
      if (action.payload === 'inc') {
        let nextPage = state.page + 1
        if (nextPage > state.nbPages - 1) {
          nextPage = 0
        }
        return { ...state, page: nextPage }
      }
      if (action.payload === 'dec') {
        let prevPage = state.page - 1
        if (prevPage < 0) {
          prevPage = state.nbPages - 1
        }
        return { ...state, page: prevPage }
      }
      break
    case HANDLE_TYPE_IN_PAGE:
      if (
        isNaN(action.payload) ||
        action.payload < 1 ||
        action.payload > state.nbPages
      ) {
        return { ...state }
      }
      return { ...state, page: action.payload - 1 }
    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
}
export default reducer
