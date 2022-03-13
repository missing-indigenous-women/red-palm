import {NextFunction, Request, Response} from 'express';
import {verify, VerifyErrors} from 'jsonwebtoken';
import {Status} from '../interfaces/Status';
import {AppUser} from '../interfaces/AppUser';
import {IncomingHttpHeaders} from 'http';

export function isLoggedIn(request: Request, response: Response, next: NextFunction): Response | void {

	let status: Status = {status: 400, message: 'Please login', data: null};

	const sessionAppUser = (request: Request): AppUser | undefined => request.session?.appUser ?? undefined;
	console.log(request.sessionID)

	const signature = (request: Request): string => request.session?.signature ?? 'no signature'

	const isSessionActive = (isAppUserActive: AppUser | undefined): boolean => isAppUserActive ? true : false;

	const getJwtTokenFromHeader = (headers: IncomingHttpHeaders): string | undefined => {

		return headers['authorization']
	};


	const unverifiedJwtToken: string | undefined = getJwtTokenFromHeader(request.headers);

	// const isJwtValid: boolean|void = unverifiedJwtToken
	//   ? verify(
	//         unverifiedJwtToken,
	//         signature(request),
	//         {maxAge: "3hr"},
	//
	//     )
	//   : false;

	const isJwtValid = (unverifiedJwtToken: string | undefined): boolean => {
		if (unverifiedJwtToken === undefined) {
			return false
		}
		const result: unknown = verify(
			unverifiedJwtToken,
			signature(request),
			{maxAge: '3hr'},
			(error: VerifyErrors | null): boolean => error ? false : true
		) as unknown

		console.log(result)
		return result as boolean

	}

	return isJwtValid(unverifiedJwtToken) && isSessionActive(sessionAppUser(request)) ? next() : response.json(status);

}


