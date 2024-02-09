import { SignInController } from "../application/controllers/SignInController";
import { IController } from "../application/interfaces/IController";
import { makeSignInUseCase } from "./makeSignInUseCase";

export function makeSignInController(): IController {
	const signInUseCase = makeSignInUseCase();

	return new SignInController(signInUseCase);
}
