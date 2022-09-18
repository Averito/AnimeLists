import { AnimePage } from '@pages/AnimePage'
import { GetStaticPaths, GetStaticProps } from 'next'

import { anilibria } from '@anilibriaApi/anilibria'
import { averlist } from '@averlistApi/averlist'

export default AnimePage

export const getStaticPaths: GetStaticPaths = async () => {
	const queryObject = {
		filter: ['code'],
		limit: -1
	}
	const titleList = await anilibria.getUpdates(queryObject)
	const paths = titleList.map(title => ({ params: { code: title.code } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async context => {
	const title = await anilibria.getTitle({ code: context.params?.code ?? '' })

	return {
		props: {
			title
		},
		revalidate: 3600
	}
}
