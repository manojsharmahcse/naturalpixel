import React from 'react'

import { FormGroup, Col, ControlLabel, FormControl, Form, Checkbox, Navbar, NavItem, NavDropdown, MenuItem, Nav, Popover, Tooltip, Button, Modal, } from 'react-bootstrap'

export default class TopNavBar extends React.Component{
	
	 constructor(props, context) {
	    super(props, context);

	    this.signin = this.signin.bind(this);
	    this.signup = this.signup.bind(this);

	    this.state = {
	      signinshow: false,
	      signupshow: false
	    };
	  }

	  signin() {
	    this.setState({ signinshow: false });
	  }

 	signup() {
	    this.setState({ signupshow: false });
	  }



	render(){

		 const popover = (
		      <Popover id="modal-popover" title="popover">
		        very popover. such engagement
		      </Popover>
		    );
		    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

		
		return (
				<div>
					<Navbar inverse collapseOnSelect>
					  <Navbar.Header>
					    <Navbar.Brand>
					      <a href="#brand">{this.props.logo}</a>
					    </Navbar.Brand>
					    <Navbar.Toggle />
					  </Navbar.Header>
					  <Navbar.Collapse>
					    <Nav>
					      <NavItem eventKey={1} href="/">
					       	 {this.props.home}
					      </NavItem>					     

					       <NavItem eventKey={2} href="/aboutus">
					       	 {this.props.aboutus}
					      </NavItem>

						  
					      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					        <MenuItem eventKey={3.1}>{this.props.blog}</MenuItem>
					        <MenuItem eventKey={3.2}>{this.props.service}</MenuItem> 
					      </NavDropdown>
					    </Nav>
					    <Nav pullRight>
					      <NavItem eventKey={1}>
					      	 
							<Button bsSize="small"  onClick={() => this.setState({ signinshow: true })}>
							    {this.props.login}
							  </Button>


					      	 	<Modal show={this.state.signinshow} onHide={this.signin}
						        >
						          <Modal.Header closeButton>
							            <Modal.Title id="contained-modal-title">
							              Sign in
							            </Modal.Title>
						          </Modal.Header>

						          <Modal.Body>					           

						          	<Form horizontal>
										  <FormGroup controlId="formHorizontalEmail">
										    <Col componentClass={ControlLabel} sm={2}>
										      Email
										    </Col>
										    <Col sm={10}>
										      <FormControl type="email" placeholder="Email" />
										    </Col>
										  </FormGroup>

										  <FormGroup controlId="formHorizontalPassword">
										    <Col componentClass={ControlLabel} sm={2}>
										      Password
										    </Col>
										    <Col sm={10}>
										      <FormControl type="password" placeholder="Password" />
										    </Col>
										  </FormGroup>

										  <FormGroup>
										    <Col smOffset={2} sm={10}>
										      <Checkbox>Remember me</Checkbox>
										    </Col>
										  </FormGroup>

										  <FormGroup>
										    <Col smOffset={2} sm={10}>
										      <Button type="submit">Sign in</Button>
										    </Col>
										  </FormGroup>
										</Form>	

						          </Modal.Body>

						        </Modal>

					      </NavItem>
					      <NavItem eventKey={2}>					         

							<Button bsSize="small"  onClick={() => this.setState({ signupshow: true })}>
							    {this.props.signup}
							</Button>

					        <Modal show={this.state.signupshow} onHide={this.signup}
						        >
						          <Modal.Header closeButton>
							            <Modal.Title id="contained-modal-title">
							              Sign in
							            </Modal.Title>
						          </Modal.Header>

						          <Modal.Body>					           

						          	<Form horizontal>
										  <FormGroup controlId="formHorizontalEmail">
										    <Col componentClass={ControlLabel} sm={3}>
										      Email
										    </Col>
										    <Col sm={9}>
										      <FormControl type="email" placeholder="Email" />
										    </Col>
										  </FormGroup>

										  <FormGroup controlId="formHorizontalPassword">
										    <Col componentClass={ControlLabel} sm={3}>
										      Password
										    </Col>
										    <Col sm={9}>
										      <FormControl type="password" placeholder="Password" />
										    </Col>
										  </FormGroup>

										   <FormGroup controlId="formHorizontalPassword">
										    <Col componentClass={ControlLabel} sm={3}>
										      Confirm Password
										    </Col>
										    <Col sm={9}>
										      <FormControl type="password" placeholder="Password" />
										    </Col>
										  </FormGroup>										  

										  <FormGroup>
										    <Col smOffset={3} sm={9}>
										      <Button type="submit">Sign Up</Button>
										    </Col>
										  </FormGroup>
										</Form>	

						          </Modal.Body>

						        </Modal>

					      </NavItem>

					    </Nav>
					  </Navbar.Collapse>
					</Navbar>
				</div>
			 )
	}

}