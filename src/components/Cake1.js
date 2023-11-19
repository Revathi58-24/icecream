

import React, { useState } from 'react';
import '../App.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';
import Navbar from './Navbar';
import Footer from './Footer';
function Cake1() {
	const [courses, setCourses] = useState([
		{ id: 9, 
		name: 'Vegan Ice Cream Cake', 
		price: 109, 
		image: 
'https://kindkones.com/cdn/shop/products/VeganIceCreamCake01.jpg?v=1656596733'
		},
		{ id: 10, 
		name: 'Midnight Baby Chocolate Cake', 
		price: 102, 
		image: 
'https://kindkones.com/cdn/shop/products/unnamed2_2c1fbd9b-67da-4359-bb76-622c31933856.jpg?v=1675992741'
		},
        { id: 11, 
            name: 'No Bake Peanut Butter Cheesecake', 
            price: 100, 
            image: 
            'https://kindkones.com/cdn/shop/products/27.jpg?v=1656596705'
            },
            { id: 12, 
                name: 'Dark Chocolate Ganache Cake', 
                price: 100, 
                image: 
        'https://kindkones.com/cdn/shop/products/26.jpg?v=1656596629'
                },
		{ id: 13, 
		name: 'Flourless Sweet Potato Brownie', 
		price: 107, 
		image: 
'https://kindkones.com/cdn/shop/products/32.png?v=1656596634'
		},
        { id: 14, 
            name: 'Baby Gáteaux Mousse Cake', 
            price: 106, 
            image: 
    'https://kindkones.com/cdn/shop/files/2_8dc8acfb-caac-4284-a88e-f3020f2f4cc6.jpg?v=1684831779'
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

export default Cake1;
