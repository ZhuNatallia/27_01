import React from 'react';
import s from './style.module.css';

export default function Product({
	id,
	title,
	photo,
	price,
	count,
	deleteProduct,
	changeCount,
}) {
	return (
		<div className={s.card}>
			<img src={photo} alt='flowers' />
			<p>{title}</p>
			<p>Стоимость: {price}</p>
			<p>Количество: {count}</p>
			<button onClick={() => changeCount(id, 1)}>Добавить</button>
			{count !== 0 ? (
				<button onClick={() => changeCount(id, -1)}>Уменьшить</button>
			) : (
				<button onClick={() => deleteProduct(id)}>Уменьшить</button>
			)}
		</div>
	);
}
