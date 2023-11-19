

import React, { useState } from 'react';
import '../App.css';
import UserCartComponent from './UserCartComponent';
import Navbar from './Navbar';
import Footer from './Footer';
function Cart() {
	const [cartCourses, setCartCourses] = useState([]);
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
	return (
		<div className="App">
            <Navbar/>
			<main className="App-main">

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

export default Cart;
