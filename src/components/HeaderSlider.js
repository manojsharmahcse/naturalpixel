import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';

export default class HeaderSlider extends Component {	

	constructor(props){
		super(props);
		this.state = {
			slider:[
				{
					img :'assets/slider/carousel-1.jpg',
					heading:'First slide label',
					para:'Nulla vitae elit libero, a pharetra augue mollis interdum.',
				},
				{
					img :'assets/slider/carousel-2.jpg',
					heading:'First slide label',
					para:'Nulla vitae elit libero, a pharetra augue mollis interdum.',
				}
			]
		}		
	}

	render () {

		return(
				<div className="container">
					<Carousel>
						{this.state.slider.map((item, key) => {
							return (
									<Carousel.Item key={key}>
									    <img width={1500} height={400} alt="900x500" src={item.img} />
									    <Carousel.Caption>
									      <h3>{item.heading}</h3>
									      <p>{item.para}</p>
									    </Carousel.Caption>
									</Carousel.Item>	
								)
						})}	
					</Carousel>					  
				</div>
			)
	}

}