import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import "../../fonts.css";
import "./Login.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="Login">
			<img
				className="BackLogo"
				alt="Website Logo"
				// src="../../images/main_logo.svg"
			></img>
			<Form onSubmit={handleSubmit}>
				<Form.Group size="lg" controlId="email">
					<Form.Control
						autoFocus
						type="email"
						value={email}
						placeholder="Username"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group size="lg" controlId="password">
					<Form.Control
						type="password"
						value={password}
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button block size="lg" type="submit" disabled={!validateForm()}>
					Sign In
				</Button>
			</Form>
		</div>
	);
}
