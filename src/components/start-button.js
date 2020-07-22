import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const StartButton = () => {
	const {
		isAuthenticated,
		loginWithRedirect,
	} = useAuth0();
	return (
		<Nav className="mr-auto" navbar>
		{isAuthenticated && (
			<Button
			className="btn-round"
			color="success"
			href="#pablo"
			onClick={e => e.preventDefault()}
			size="lg"
			>
			Start Playing!
			</Button>
			)}
		</Nav>
		);
	};

	export default StartButton;