import React, { FC } from 'react'
import { Menu as MenuAntd } from 'antd'
import { UserOutlined, LockOutlined, SwapOutlined } from '@ant-design/icons'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { ViewType } from 'store/reducers/optionsReducer/types'
import { setViewType } from 'store/reducers/optionsReducer'
import { useWindowSize } from 'hooks/useWindowSize'

export const Menu: FC = () => {
	const { isMobile } = useWindowSize()

	const dispatch = useAppDispatch()

	const viewType = useAppSelector(state => state.options.viewType)

	const onClickSetViewType = (event: any) => {
		const type: ViewType = event.key
		dispatch(setViewType(type))
	}

	return (
		<MenuAntd
			mode={isMobile ? 'inline' : 'horizontal'}
			selectedKeys={[viewType]}
			onClick={onClickSetViewType}
		>
			<MenuAntd.Item key='profile' icon={<UserOutlined />}>
				Профиль
			</MenuAntd.Item>
			<MenuAntd.Item key='security' icon={<LockOutlined />}>
				Безопасность
			</MenuAntd.Item>
			<MenuAntd.Item key='themes' icon={<SwapOutlined />}>
				Темы
			</MenuAntd.Item>
		</MenuAntd>
	)
}
