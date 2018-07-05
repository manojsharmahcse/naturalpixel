import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import TopNavigation from '../../components/TopNavbar';
import FooterWidget from '../../components/FooterWidget';
import Index from '../../components/index';
import About from '../../components/aboutus';

export default class Home extends Component{

	render(){
		return(

 		<Router>

			<div>	

				<TopNavigation logo="NaturalPixel" home="Home" aboutus="About us" blog="Blog" service="Services" login="Login" signup="Sign up" />

				  <Route exact path="/" component={Index} />
				  
				  <Route path="/aboutus" component={About} />

			    <FooterWidget />
									
			</div>

 		</Router>

			)
	}
}