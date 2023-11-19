

import React, { useState } from 'react';
import '../App.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';
import Navbar from './Navbar';
import Footer from './Footer';
function Cake() {
	const [courses, setCourses] = useState([
		{ id: 9, 
		name: 'Dark Chocolate Ganache Cake', 
		price: 109, 
		image: 
'https://kindkones.com/cdn/shop/products/DarkChocolateGanacheCake02.jpg?v=1656596558'
		},
		{ id: 10, 
		name: 'Flourless Sweet Potato Brownie', 
		price: 102, 
		image: 
'https://kindkones.com/cdn/shop/products/34.png?v=1656596608'
		},
        { id: 11, 
            name: 'Baked Chocolate Donut', 
            price: 100, 
            image: 
            'https://kindkones.com/cdn/shop/products/18_0980ec7c-2200-43d3-b6e7-3e86e29489d9.png?v=1656596608'
            },
            { id: 12, 
                name: 'Midnight Classique Chocolate Cupcake', 
                price: 100, 
                image: 
        'https://kindkones.com/cdn/shop/products/Screenshot2020-05-11at3.30.20PM.png?v=1656596619'
                },
		{ id: 13, 
		name: 'Lemon Raspberry Cake', 
		price: 107, 
		image: 
'https://kindkones.com/cdn/shop/products/Screenshot2020-05-11at3.29.36PM.png?v=1656596621'
		},
        { id: 14, 
            name: 'Peanut Butter & Caramel Chocolate Bar', 
            price: 106, 
            image: 
    'https://kindkones.com/cdn/shop/products/PeanutButter_CaramelChocolateBar02.jpg?v=1656596622'
            },
		{ id: 15, 
				name: 'Keto Dark Chocolate Raspberry Cake', 
				price: 106, 
				image: 
		'https://kindkones.com/cdn/shop/products/Untitleddesign-5.jpg?v=1656596929'
			},
		{ id: 16, 
				name: 'Midnight Classique Trio Cupcakes', 
				price: 106, 
				image: 
		'https://kindkones.com/cdn/shop/products/SW9A7007.jpg?v=1656596950'
		},
		{ id: 17, 
            name: 'Keto Carrot Cake', 
            price: 106, 
            image: 
    'https://kindkones.com/cdn/shop/products/2_ed9f09e5-a871-4e79-9aec-66e6836e02a3.png?v=1659344499'
            },
			{ id: 18, 
				name: 'Keto Vanilla Coconut Cake', 
				price: 106, 
				image: 
		'https://kindkones.com/cdn/shop/products/1_a3761d98-1966-47b4-8d52-b339e2d38e26.png?v=1659344576'
				},
		{ id: 19, 
		name: 'Keto Black Forest Cake', 
		price: 106, 
		image: 
		'https://kindkones.com/cdn/shop/files/ShopifyImages-3_724ce127-a211-4687-a4eb-637fae03ea82.jpg?v=1688705568'
		},
		{ id: 20, 
			name: 'Keto Hazelnut Chocolate & Blackberry Cake', 
			price: 106, 
			image: 
			'https://kindkones.com/cdn/shop/files/ShopifyImages-4_595b1801-8758-41a5-b0f2-bc3cc27b16b4.jpg?v=1688712907'
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

export default Cake;
