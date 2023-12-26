import { useLoaderData } from 'react-router-dom'
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'
import { PizzaType } from '../../App'

function Menu() {
	const menu: PizzaType[] = useLoaderData() as PizzaType[]

	return (
		<ul>
			{menu.map(pizza => (
				<MenuItem pizza={pizza} key={pizza.id} />
			))}
		</ul>
	)
}

export const loader = async () => {
	const menu = await getMenu()

	return menu
}

export default Menu
