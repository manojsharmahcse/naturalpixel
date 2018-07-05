import React from 'react';

import HeaderSlider from './HeaderSlider';
import OurServices from './OurServices';

export default class TopNavBar extends React.Component{
	render(){
		return(
				<div>
					<HeaderSlider />
					<OurServices />	
				</div>
			)
	}

}