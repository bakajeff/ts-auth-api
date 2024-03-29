export interface IRequest {
	body: Record<string, unknown>;
	params: Record<string, string>;
	accountId?: string;
}

export interface IResponse {
	statusCode: number;
	body: Record<string, unknown> | null;
}

export interface IController {
	handle(request: IRequest): Promise<IResponse>;
}
