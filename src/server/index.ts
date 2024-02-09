import express from "express";
import { makeAuthenticationMiddleware } from "../factory/makeAuthenticationMiddleware";
import { makeListLeadsController } from "../factory/makeListLeadsController";
import { makeSignInController } from "../factory/makeSignInController";
import { makeSignUpController } from "../factory/makeSignUpController";
import { middlewareAdapter } from "./adapters/middlewareAdapter";
import { routeAdapter } from "./adapters/routeAdapter";

const app = express();

app.use(express.json());

app.post("/sign-up", routeAdapter(makeSignUpController()));
app.post("/sign-in", routeAdapter(makeSignInController()));

app.get(
	"/leads",
	middlewareAdapter(makeAuthenticationMiddleware()),
	routeAdapter(makeListLeadsController()),
);

app.listen(3333, () => console.log("Server is running"));
