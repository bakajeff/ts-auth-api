import express from "express";
import { SignInController } from "../application/controllers/SignInController";
import { SignUpController } from "../application/controllers/SignUpController";
import { SignInUseCase } from "../application/useCases/SignInUseCase";
import { SignUpUseCase } from "../application/useCases/SignUpUseCase";

const app = express();

app.use(express.json());

app.post("/sign-up", async (request, response) => {
	const SALT = 10;
	const signUpUseCase = new SignUpUseCase(SALT);
	const signUpController = new SignUpController(signUpUseCase);

	const { statusCode, body } = await signUpController.handle({
		body: request.body,
	});

	return response.status(statusCode).json(body);
});

app.post("/sign-in", (request, response) => {
	response.send("Hello World");
});

app.listen(3333, () => console.log("Server is running"));
