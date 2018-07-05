import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {

	render(){
		return (
			<div style={{ background:'#000', padding: '20px', textAlign:'center'}}>				
				<Grid>
					<Row>
						<Col md={3}></Col>
						<Col md={6}>
							<p style={{ color:'#fff'}}>Start Bootstrap is a project created and maintained by David Miller at Blackrock Digital. Themes and templates licensed MIT</p>
						</Col>
						<Col md={3}></Col>
					</Row>
				</Grid>					
			</div>
		)

	}

}