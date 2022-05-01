import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserSafity } from 'api/myApi/auth/types'
import { getAllUsersThunk } from './usersThunks'
import { errorMessage } from 'helpers/messages'
import {
	acceptInvitationThunk,
	removeFriendThunk
} from '../userReducer/userThunks'

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		getUsersError: false,
		users: [] as UserSafity[]
	},
	reducers: {
		setGetUsersError(state, { payload }: PayloadAction<boolean>) {
			state.getUsersError = payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getAllUsersThunk.fulfilled, (state, { payload }) => {
				const mappedUsersArr = payload.users.map(user => {
					return {
						_id: user._id,
						login: user.login,
						description: user?.description || '',
						avatar: user?.avatar || '',
						animeList: user.animeList,
						friendList: user.friendList
					}
				})
				state.getUsersError = false
				state.users = mappedUsersArr
			})
			.addCase(getAllUsersThunk.rejected, state => {
				state.getUsersError = true
				errorMessage('Не удалось получить список пользователей...')
			})
			.addCase(removeFriendThunk.fulfilled, (state, { payload }) => {
				const friendIndex = state.users.findIndex(
					user => user._id === payload.friendId
				)
				const currentUserFriendList = state.users[friendIndex].friendList

				state.users[friendIndex].friendList = currentUserFriendList.filter(
					friend => friend._id !== payload.myId
				)
			})
			.addCase(acceptInvitationThunk.fulfilled, (state, { payload }) => {
				const friendIndex = state.users.findIndex(
					user => user._id === payload.senderUser._id
				)
				const [newFriend] = state.users.filter(
					user => user._id === payload.invitedUser._id
				)
				state.users[friendIndex].friendList.push(newFriend)
			})
	}
})

export const { setGetUsersError } = usersSlice.actions
export const usersReducer = usersSlice.reducer
