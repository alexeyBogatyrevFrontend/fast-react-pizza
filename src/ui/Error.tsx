import { useNavigate, useRouteError } from 'react-router-dom'

type RouteError = {
	data?: string
	message: string
	stack: string
	status: number
	statusText: string
}

function Error() {
	const navigate = useNavigate()
	const error: RouteError = useRouteError() as RouteError

	return (
		<div>
			<h1>Something went wrong 😢</h1>
			<p>{error.data || error.message}</p>
			<button onClick={() => navigate(-1)}>&larr; Go back</button>
		</div>
	)
}

export default Error
