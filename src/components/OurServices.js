import React, { Component } from 'react';

import {Grid, Row, Thumbnail, Col, Button} from 'react-bootstrap';

export default class OurService extends Component {

	constructor(props){

		super(props);

		this.state = {

			services: [
				{
					img: 'assets/slider/head-1.png',
					heading: 'Sturdy Templates',
					text: 'Our templates are updated regularly so they don',

				},
				{
					img: 'assets/slider/head-2.png',
					heading: 'Ready to Ship',
					text: 'Our templates are updated regularly so they don',

				},
				{
					img: 'assets/slider/head-3.png',
					heading: 'Up to Date',
					text: 'Our templates are updated regularly so they don',

				},
				{
					img: 'assets/slider/head-4.png',
					heading: 'Made with Love',
					text: 'Our templates are updated regularly so they don',

				}
			]
		}
	}

	render(){

		let divstyle = {
				textAlign:"center",
				marginBottom:'50px'
		}

		return(
			<div>
				<Grid>
					<Row>
						<div style={divstyle} >
							<h3 style={{ fontWeight:'bold', marginTop:'50px'}}>Our Services</h3>
							<p style={{ fontSize:'18px'}}>You have to make your websites with love these days!</p>
						</div>
						{this.state.services.map((item, key) => {							
							return (

								<Col xs={12} md={3} key={key}>
									<Thumbnail src={item.img} alt="242x200" width={200} height={200}>
										<h3>{item.heading}</h3>
										<p>{item.text}</p>
										<p>
											<Button bsStyle="primary">Button</Button> &nbsp;
											<Button bsStyle="default">Button</Button>
										</p>
									</Thumbnail >
								</Col>
							)

						})}						

					</Row>
				</Grid>
			</div>
			)
	}

}