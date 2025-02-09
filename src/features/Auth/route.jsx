import { Outlet } from 'react-router-dom'
import { SignIn } from './ui/signIn'
import { SignUp } from './ui/signUp'

export const AuthRouter = {
	path: '', 
	element: <Outlet />, 
	children: [ 
    { 
					path: 'sign-in', 
					element: <SignIn />
				}, 
				{ 
					path: 'sign-up', 
					element: <SignUp />
				},
	]
}