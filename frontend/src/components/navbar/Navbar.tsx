import React, { useEffect, useState } from 'react';
import {  BrowserRouter as Router, Route,  NavLink } from "react-router-dom";
import  {Container, Row, Col, Dropdown, Navbar, Nav } from 'react-bootstrap';
import '../../assets/css/navbar.css';

const Navmenu = () => {
  return (
		<div>
			<div className="main-menu" id="main-navbar">
				<Container>
					<Row className='align-items-center'>
						<Col md={3}>
							<div className="category-wrapper">
								 <h3>Easy Generator</h3>
							</div>
						</Col>
						<Col md={9}>
							<Navbar collapseOnSelect expand="lg">
								<Row>
									<Col md="12">
										<Navbar.Toggle aria-controls="responsive-navbar-nav" />
										<Navbar.Collapse id="responsive-navbar-nav">
											<Nav className="navbar-main">
												<ul className="nav">
													<li>
														<Nav.Link
															as={NavLink}
															to="/"
														>
															Home{" "}
														</Nav.Link>
													</li>
													<li>
														<Nav.Link
															as={NavLink}
															to="/login"
														>
															Login
														</Nav.Link>
													</li>
													<li>
														<Nav.Link
															as={NavLink}
															to="/register"
														>
															Register
														</Nav.Link>
													</li>
												</ul>
											</Nav>
										</Navbar.Collapse>
									</Col>
								</Row>
							</Navbar>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Navmenu