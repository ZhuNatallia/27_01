import React from 'react';
import { useState } from 'react';
import Product from '../Product';
import s from './style.module.css';

export default function ProductContainer() {
	const defoult_products = [
		{
			id: 1,
			title: 'Роза',
			price: 2,
			count: 9,
			photo:
				'https://venusinfleurs.ru/image/catalog/izomod/3712/51-nezhnaya-kustovaya-roza_3.jpg',
		},
		{
			id: 2,
			title: 'Гортензия',
			price: 5,
			count: 7,
			photo:
				'https://cdn.botanichka.ru/wp-content/uploads/2021/06/1.Gortenzia_av.jpg',
		},
		{
			id: 3,
			title: 'Ландыши',
			price: 4,
			count: 5,
			photo: 'https://rukkola-flowers.ru/files/img_products/lily-51-02.webp',
		},
		{
			id: 4,
			title: 'Орхидея',
			price: 7,
			count: 2,
			photo:
				'https://fitosystems.ru/images/stories/virtuemart/product/DSC03126.jpg',
		},
	];

	const [products, setProducts] = useState(defoult_products);

	const deleteProduct = (delId) => {
		const newArr = products.filter(({ id }) => id !== delId);
		setProducts(newArr);
	};

	const totalPrice = products.reduce(
			(prev, product) => (prev + (product.price > 0)) ? product.price : 0 ,0)
		; 

	const changeCount = (changeId, value) => {
		const target = products.find(({ id }) => id === changeId);

		if (target.count + value < 0) {
			target.count = 0;
		} else {
			target.count += value;
		}
		setProducts([...products]);
	};

	return (
		<div className={s.wrapper}>
			{products.map((product) => (
				<Product
					key={product.id}
					{...product}
					deleteProduct={deleteProduct}
					changeCount={changeCount}
				/>
			))}
			totalPrice={totalPrice}
		</div>
	);
}
