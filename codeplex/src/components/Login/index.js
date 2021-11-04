import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
	auth,
	signInWithEmailAndPassword,
	// signInWithGoogle,
} from "../../Firebase";
// eslint-disable-next-line
import { useAuthState } from "react-firebase-hooks/auth";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import "../../fonts.css";
import "./Login.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading] = useAuthState(auth);
	const history = useHistory();

	useEffect(() => {
		if (user) history.replace("/dashboard");
	}, [user, loading]);

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="Login">
			<img className="BackLogo" alt="Website Logo"></img>
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
				<Button
					block
					size="lg"
					type="submit"
					disabled={!validateForm()}
					onClick={() => signInWithEmailAndPassword(email, password)}
				>
					Sign In
				</Button>
				{/* <Button
					block
					size="lg"
					type="submit"
					onClick={() => signInWithGoogle()}
				>
					Sign in with Google
				</Button> */}
			</Form>
		</div>
	);
}
