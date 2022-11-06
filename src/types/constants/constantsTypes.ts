export interface ErrorMessagesTypes {
  AUTHORIZATION: string
  SOMETHING_WRONG: string
}

export interface TableColumnsTypes {
  key: 'title' | 'content'
  label: string
  minWidth?: number
  align?: 'center'
}

export interface RoutesTypes {
  DASHBOARD: string
  BASE_POSTS: string
  ADD_POST: string
  EDIT_POST: string
}

export interface ValidationMessagesTypes {
  INVALID_INPUT: string
  REQUIRED_FIELD: string
}
