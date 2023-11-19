

import React, { useState } from 'react';
import '../App.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';
import Navbar from './Navbar';
import Footer from './Footer';
function Bliss() {
	const [courses, setCourses] = useState([
		{ id: 9, 
		name: 'Chocolate Hazelnut Superfood Bliss Ball', 
		price: 109, 
		image: 
'https://kindkones.com/cdn/shop/products/ChocoHazelnut.png?v=1656596571'
		},
		{ id: 10, 
		name: 'Chocolate Pistachio Superfood Bliss Ball', 
		price: 102, 
		image: 
'https://kindkones.com/cdn/shop/products/ChocolatePistachio.png?v=1656596572'
		},
        { id: 11, 
            name: 'Cranberry, Fig, Chia Seed Superfood Bliss Ball', 
            price: 100, 
            image: 
            'https://kindkones.com/cdn/shop/products/Cranberry.png?v=1656596609'
            },
            { id: 12, 
                name: 'Maca Espresso Fudge Superfood Bliss Ball', 
                price: 100, 
                image: 
        'https://kindkones.com/cdn/shop/products/SEPTEMBERCONTENT.png?v=1656596610'
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

export default Bliss;
