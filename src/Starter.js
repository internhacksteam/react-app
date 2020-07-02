import { render } from 'react-dom'
import './Starter.css';
import XMLHttpRequest from 'xmlhttprequest';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Axios from 'axios';

class Starter extends React.Component{
	constructor(props){
		super(props)
	}
	state = {
			persons: [],
			women: []
		}

	componentDidMount(){
		//this api would work locally
		/*
		Axios.get("http://127.0.0.1:5000/api/womenInTech").then(res =>{
			const women = res.data;
			this.setState({ women });})
		*/

		Axios.get("https://jsonplaceholder.typicode.com/users").then(res =>{ 
			const persons = res.data;
			this.setState({ persons });})


	}

	render(){
		return(
			<div className="starter">
			<h1> Hello There! </h1>
			<p> Here are API calls: </p>
			<ul>
			{this.state.persons.map(person => <li>{person.company.name}</li>)}
			</ul>
			<p> Women In Tech from Flask API </p>
			<ul>
			{this.state.women.map(women => <li>{women.name}</li>)}
			</ul>
			</div>

			)
		}
	}
	export default Starter;