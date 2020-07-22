import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button 
    onClick={()=> loginWithRedirect()} 
    tag={Link}
    className="btn-neutral btn-icon"
    variant="primary"
    color="default"
    target="_blank"
    >
    <span className="btn-inner--icon">
    <i className="fa fa-arrow-circle-right" />
    </span>
    <span className="nav-link-inner--text ml-1">
    Log In
    </span>
    </Button>
    );
  };

  export default LoginButton;