import { SignUpController } from "../application/controllers/SignUpController";
import { IController } from "../application/interfaces/IController";
import { makeSignUpUseCase } from "./makeSignUpUseCase";

export function makeSignUpController(): IController {
	const signUpUseCase = makeSignUpUseCase();

	return new SignUpController(signUpUseCase);
}
