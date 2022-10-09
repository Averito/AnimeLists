import { QueryKey, UseQueryOptions } from '@tanstack/react-query'

import { QueryObject } from '@helpers/queryParamsString'

export interface Torrent {
	id: number
	hash: string
	leechers: number
	seeders: number
	completed: number
	quality: {
		string: string
	}
	series: {
		string: string
	}
	total_size: number
	url: string
}

export interface SeriesUsually {
	serie: number
	preview: string
	hls: {
		fhd?: string
		hd: string
		sd: string
	}
}

export interface Series {
	[key: number | string]: {
		preview: string
		serie: number
		hls: {
			hd: string
			sd: string
		}
	}
}

export interface Block {
	blocked: boolean
	reason?: string
}

export interface ChosenOne {
	rating: number
	added: boolean
}

export type Years = number[]
export type Genres = string[]

export interface Title {
	id: number
	code: string
	names: {
		ru: string
		en: string
	}
	announce: string
	series: string
	posters: {
		original: {
			url: string
		}
		small: {
			url: string
		}
	}
	season: {
		string: string
		year: string
	}
	favorite: ChosenOne
	last: number
	moon: string
	status: {
		string: string
	}
	type: {
		full_string: string
		string: string
		series: number
		length: number
	}
	last_changes: number
	updated: number
	team: {
		voice: string[]
		timing: string[]
		translator: string[]
		editing: string[]
		decor: string[]
	}
	genres: Genres
	year: number
	day: number
	description: string
	blocked: Block
	player: {
		host: string
		playlist: Series | SeriesUsually[]
		series: {
			first: number
			last: number
			string: string
		}
	}
	torrents?: {
		list: Torrent[]
	}
}

export interface Schedule {
	day: number
	list: Title[]
}

export interface ScheduleRequest {
	params: QueryObject
	days: number[]
}

export type UseQueryTypesSearchTitles = Omit<
	UseQueryOptions<Title[], unknown, Title[], QueryKey>,
	'initialData' | 'queryKey'
>
