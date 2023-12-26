import { FC } from 'react'
import { formatCurrency } from '../../utils/helpers'
import { PizzaType } from '../../App'

type MenuItemProps = {
	pizza: PizzaType
}

const MenuItem: FC<MenuItemProps> = ({ pizza }) => {
	const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

	return (
		<li>
			<img src={imageUrl} alt={name} />
			<div>
				<p>
					{id} {name}
				</p>
				<p>{ingredients.join(', ')}</p>
				<div>
					{!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
				</div>
			</div>
		</li>
	)
}

export default MenuItem
