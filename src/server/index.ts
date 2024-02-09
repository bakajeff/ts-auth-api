import express from "express";
import { makeSignInController } from "../factory/makeSignInController";
import { makeSignUpController } from "../factory/makeSignUpController";

const app = express();

app.use(express.json());

app.post("/sign-up", async (request, response) => {
	const signUpController = makeSignUpController();

	const { statusCode, body } = await signUpController.handle({
		body: request.body,
	});

	return response.status(statusCode).json(body);
});

app.post("/sign-in", async (request, response) => {
	const signInController = makeSignInController();

	const { statusCode, body } = await signInController.handle({
		body: request.body,
	});

	return response.status(statusCode).json(body);
});

app.listen(3333, () => console.log("Server is running"));
