import React from "react"

const Header = props => {
	return (
		<nav>
			<div className="logo">Find_Ma_Movie</div>
			<ul>
				<li>
					<a href="/">Best Movies</a>
				</li>
				<li>
					<a href="/">Most Popular</a>
				</li>
				<li>
					<a href="/">Latest</a>
				</li>
			</ul>
		</nav>
	)
}
export default Header
