import { configureStore } from '@reduxjs/toolkit'
import reduxThunk from 'redux-thunk'

import { userReducer } from './reducers/userReducer'
import { landingReducer } from './reducers/landingReducer'
import { optionsReducer } from './reducers/optionsReducer'
import { usersReducer } from './reducers/usersReducer'
import { chatReducer } from './reducers/chatReducer'
import { newsReducer } from './reducers/newsReducer'

export const store = configureStore({
	reducer: {
		user: userReducer,
		landing: landingReducer,
		options: optionsReducer,
		users: usersReducer,
		chat: chatReducer,
		news: newsReducer
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(reduxThunk)
	}
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch