import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import navItems from '../../config/Sections.json';

function AppNav() {
	return (
		<Navbar color="light">
			<Link key={'login-nav'} to={'/login'}>
				Login
			</Link>
			<Link key={'add-article-nav'} to={'/add-article'}>
				Add An Article
			</Link>
			{navItems.map((navItem) => (
				<Link key={`${navItem.value}-nav`} to={`/sections/${navItem.value}`}>
					{navItem.label}
				</Link>
			))}
		</Navbar>
	);
}

export default AppNav;
