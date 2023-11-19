
import React from 'react';

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
	return (
		<header className="App-header">
			<h1>Welcome to our world of Products</h1>
            <p>Choose from our range of products that are rich in milk and mouth-wateringly delicious</p>
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search for Classic Treats Products..."
					value={searchCourse}
					onChange={courseSearchUserFunction}
				/>
			</div>
		</header>
	);
}

export default SearchComponent;
