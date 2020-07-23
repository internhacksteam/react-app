import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
			<Route>
			<Button
			className="btn-round"
			color="success"
			href="/levels-page"
			size="lg"
			>
			Start Playing!
			</Button>
			</Route>
			)}
		</Nav>
		);
	};

	export default StartButton;