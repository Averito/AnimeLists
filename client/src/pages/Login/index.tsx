import { FormEventHandler } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './Login.module.scss'
import { Input } from '@components/Input'
import { Meta } from '@utils/Meta'
import { useInput } from '@hooks/useInput'
import { AuthLayout } from '@layouts/AuthLayout'
import { averlist } from '@averlistApi/averlist'
import { errorToast, successToast } from '@helpers/toasts'

export const Login: NextPage = () => {
	const router = useRouter()

	const { value: email, setValue: setEmail } = useInput()
	const { value: password, setValue: setPassword } = useInput()

	const onSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()

		try {
			await averlist.auth.login({
				email,
				password
			})

			successToast('Успешный вход')
			await router.push('/lk')
		} catch {
			errorToast('Что-то пошло не так. Проверьте данные или попробуйте позже.')
		}
	}

	const additionalText = (
		<div className={styles.additionalText}>
			<div className={styles.resetPassword}>
				<p>Забыли пароль?</p>
				<Link href='/reset-password'>Сбросить пароль</Link>
			</div>
			<div className={styles.registration}>
				<p>Ещё нет аккаунта?</p>
				<Link href='/registration'>Регистрация</Link>
			</div>
		</div>
	)

	return (
		<>
			<Meta title='Averlist | Вход' description='Логин Averlist' />
			<AuthLayout
				title='Логин'
				buttonText='Войти'
				onSubmit={onSubmit}
				additionalText={additionalText}
			>
				<div className={styles.block}></div>
				<div className={styles.block}>
					<Input
						type='email'
						value={email}
						onChange={setEmail}
						placeholder='example@gmail.com'
						width='100%'
						label='Почта'
					/>
				</div>
				<div className={styles.block}>
					<Input
						type='password'
						value={password}
						onChange={setPassword}
						placeholder='Пароль'
						width='100%'
						label='Пароль'
					/>
				</div>
			</AuthLayout>
		</>
	)
}
