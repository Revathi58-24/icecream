

import React, { useState } from 'react';
import '../App.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';
import Navbar from './Navbar';
import Footer from './Footer';
function Kone() {
	const [courses, setCourses] = useState([
		{ id: 9, 
		name: 'Dark Chocolate Chip Cookie', 
		price: 109, 
		image: 
'https://kindkones.com/cdn/shop/products/DarkChocolateChipCookie.jpg?v=1656596613'
		},
		{ id: 10, 
		name: 'Oatmeal Almond Cookie', 
		price: 102, 
		image: 
'https://kindkones.com/cdn/shop/products/OatmealAlmondCrispCookie.jpg?v=1656596624'
		},
        { id: 11, 
            name: 'Flourless Gluten-free Waffle Kone', 
            price: 100, 
            image: 
            'https://kindkones.com/cdn/shop/products/WholemealWaffleKone.jpg?v=1656596626'
            },
            { id: 12, 
                name: 'Wholemeal Waffle Kone', 
                price: 100, 
                image: 
        'https://kindkones.com/cdn/shop/products/DECEMBERCONTENT_5b032ad9-5e57-467a-9473-fa3ec31e7402.jpg?v=1656596614'
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

export default Kone;
