import { hash } from "bcryptjs";
import { prismaClient } from "../../libs/prismaClient";
import { AccountAlreadyExists } from "../errors/AccountAlreadyExists";

interface IInput {
	name: string;
	email: string;
	password: string;
}

export class SingUpUseCase {
	async execute({ email, name, password }: IInput): Promise<void> {
		const accountAlreadyExists = await prismaClient.account.findUnique({
			where: {
				email,
			},
		});

		if (accountAlreadyExists) {
			throw new AccountAlreadyExists();
		}

		const hashedPassword = await hash(password, 8);

		await prismaClient.account.create({
			data: {
				email,
				name,
				password: hashedPassword,
			},
		});
	}
}
