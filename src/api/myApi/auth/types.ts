import { Anime } from '../anime/types'

export interface User {
	_id?: string
	login?: string
	email: string
	password: string
	description?: string
	avatar?: string
	animeList?: Anime[]
}

export interface UserSafity {
	_id: string
	login: string
	email?: string
	password?: string
	description: string
	avatar: string
	animeList?: Anime[]
}

export interface UserProperties {
	_id?: string
	login?: string
	email?: string
	password?: string
	description?: string
	avatar?: string
}

export interface Login {
	access_token: string
	userId: string
}

export interface Token {
	id: string
	name: string
	email: string
}
