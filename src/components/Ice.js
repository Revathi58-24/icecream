

import React, { useState } from 'react';
import '../App.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';
import Navbar from './Navbar';
import Footer from './Footer';
function Ice() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'Black Forest', 
		price: 109, 
		image: 
'https://kindkones.com/cdn/shop/files/kindkones_veganicecream_plantbasedicecream_allnaturalingredients_coconuticecream_coconutshake_blackforest_2.png?v=1699423266'
		},
		{ id: 2, 
		name: 'Blue Planet', 
		price: 102, 
		image: 
'https://kindkones.com/cdn/shop/files/kindkones_veganicecream_plantbasedicecream_allnaturalingredients_coconuticecream_coconutshake_blueplanet_2.png?v=1699423523'
		},
        { id: 3, 
            name: 'Strawberry', 
            price: 100, 
            image: 
    'https://kindkones.com/cdn/shop/files/kindkones_veganicecream_plantbasedicecream_allnaturalingredients_coconuticecream_coconutshake_strawberryicecream_strawberry_2.png?v=1699431650'
            },
            { id: 4, 
                name: 'Mocha Almond', 
                price: 100, 
                image: 
        'https://kindkones.com/cdn/shop/products/32_4c5c773c-e4bf-4b84-9a9f-65f6afcd25f8.png?v=1656596587'
                },
		{ id: 5, 
		name: 'Almond Brittle Fudge', 
		price: 107, 
		image: 
'https://kindkones.com/cdn/shop/files/kindkones_veganicecream_plantbasedicecream_allnaturalingredients_coconuticecream_coconutshake_almondbrittlefudge_2.png?v=1699509698'
		},
        { id: 6, 
            name: 'Keto Avocado Coconut', 
            price: 106, 
            image: 
    'https://kindkones.com/cdn/shop/files/kindkones_veganicecream_plantbasedicecream_allnaturalingredients_coconuticecream_coconutshake_ketoicecream_ketoavocado_2.png?v=1699425040'
            },
			{ id: 7, 
				name: 'Hazelnut Chocolate', 
				price: 103, 
				image: 
		'https://kindkones.com/cdn/shop/files/kindkones_veganicecream_plantbasedicecream_allnaturalingredients_coconuticecream_coconutshake_hazelnutchocolate_oatmilk_oaticecream.png?v=1699424918'
				},
				{ id: 8, 
					name: 'Madagascan Vanilla Bean', 
					price: 103, 
					image: 
			'https://kindkones.com/cdn/shop/files/kindkones_veganicecream_plantbasedicecream_allnaturalingredients_coconuticecream_coconutshake_vanillaicecream_egglessicecream_madagascanvanilla_2.png?v=1699425439'
					},
		{ id: 9, 
		name: 'Pandan Gula Melaka', 
		price: 100, 
		image: 
		'https://kindkones.com/cdn/shop/files/kindkones_veganicecream_plantbasedicecream_allnaturalingredients_coconuticecream_coconutshake_pandangulamelaka_2.png?v=1699430972'
		},
		{ id: 10, 
		name: 'Saffron Pistachio', 
		price: 100, 
		image: 
		'https://kindkones.com/cdn/shop/files/kindkones_veganicecream_plantbasedicecream_allnaturalingredients_coconuticecream_coconutshake_saffronpistachio_diwalispecial.png?v=1699431326'
	    },
		{ id: 11, 
			name: 'Salted Chocolate Chip', 
			price: 100, 
			image: 
			'https://kindkones.com/cdn/shop/files/kindkones_veganicecream_plantbasedicecream_allnaturalingredients_coconuticecream_coconutshake_saltedchocolatechip_2.png?v=1699431507'
			},
			{ id: 12, 
				name: 'Watermelon Strawberry Mint', 
				price: 100, 
				image: 
				'https://kindkones.com/cdn/shop/products/WatermelonStrawberryMint02.jpg?v=1656596597'
				},
		{ id: 13, 
		name: 'Torch Ginger Sorbet', 
		price: 100, 
		image: 
		'https://kindkones.com/cdn/shop/files/torchedgingersorbetsingaporenmsnationalmuseumofsingapore.png?v=1696831041'
		}
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
            <Navbar/>
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
            <Footer/>
		</div>
	);
}

export default Ice;
