import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'
import {
	getAnilibriaUpdates,
	GetAnilibriaUpdatesQueryParams,
	Title
} from 'anilibria-api-wrapper'

import { queryObjectByDefault } from '@anilibriaApi/anilibria'

export type UseQueryTypesGetUpdates = Omit<
	UseQueryOptions<Title[], unknown, Title[], QueryKey>,
	'initialData' | 'queryKey'
>

export const useGetUpdates = (
	queryObject: GetAnilibriaUpdatesQueryParams = queryObjectByDefault,
	useQueryOptions?: UseQueryTypesGetUpdates
) => {
	return useQuery<Title[]>(
		['getUpdates', queryObject],
		() => getAnilibriaUpdates(queryObject).then(response => response.data),
		useQueryOptions
	)
}
