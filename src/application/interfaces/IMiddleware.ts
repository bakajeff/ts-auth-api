export interface IRequest {
	headers: Record<string, string>;
}

export interface IResponse {
	statusCode: 200 | number;
	body: Record<string, unknown> | null;
}

export interface IData {
	data: Record<string, unknown>;
}

export interface IMiddleware {
	handle(request: IRequest): Promise<IResponse | IData>;
}
