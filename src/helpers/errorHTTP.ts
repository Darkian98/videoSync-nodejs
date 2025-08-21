export interface IException {
	name: string;
	statusCode: number;
	controlled: true;
	message?: string;
}

interface IErrorHttp {
	code: number;
	message?: any;
}

export const errorHTTP = ({ code, message }: IErrorHttp) => {
	const exception: Partial<IException> = new Error();
	exception.statusCode = code ?? 500;
	exception.message = message;

	throw exception;
};
