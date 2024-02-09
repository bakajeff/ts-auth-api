import { SignUpUseCase } from "../application/useCases/SignUpUseCase";

export function makeSignUpUseCase(): SignUpUseCase {
	const SALT = 10;

	return new SignUpUseCase(SALT);
}
