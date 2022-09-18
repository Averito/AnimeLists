import { FC } from 'react'
import Image from 'next/image'

import styles from './AnimePageMobile.module.scss'
import { Title } from '@anilibriaApi/types'
import { StatusYearType } from '@pages/AnimePage/components/StatusYearType'
import { Button } from '@components/Button'
import { Description } from './components/Description'
import { Dropdown, DropdownMenu } from '@components/Dropdown'
import { Averlist } from '@averlistApi/types'
import { AnimeListStats } from '@components/AnimeListStats'

interface AnimePageMobileProps {
	title: Title
	dropdownOptions: DropdownMenu[]
	animeList: Averlist.Anime[]
}

const ANILIBRIA_URI = process.env.NEXT_PUBLIC_ANILIBRIA_URI

export const AnimePageMobile: FC<AnimePageMobileProps> = ({
	title,
	dropdownOptions,
	animeList
}) => {
	return (
		<div className={styles.mobile}>
			<div className={styles.posterWrapper}>
				<Image
					className={styles.poster}
					src={`${ANILIBRIA_URI}${title.posters?.original?.url}`}
					alt={title.names.ru}
					width={270}
					height={380}
				/>
			</div>
			<div>
				<h2 className={styles.titleName}>{title.names.ru}</h2>
				<StatusYearType
					status={title.status.string}
					year={title.season.year}
					type={title.type.string}
				/>
				<Button>Смотреть онлайн</Button>
				<Dropdown options={dropdownOptions} margin='15px 0 0 0' onClick>
					<Button>Добавить в список</Button>
				</Dropdown>
			</div>
			<Description title={title} />
			<div className={styles.description}>
				<h2 className={styles.descriptionTitle}>Описание:</h2>
				<p>{title.description}</p>
			</div>
			<AnimeListStats
				backgroundColor='transparent'
				padding='0'
				animeList={animeList}
			/>
		</div>
	)
}
