import {Request, Response} from 'express';
// DB
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Status} from '../../utils/interfaces/Status';
import {insertAppUser} from '../../utils/appUser/insertAppUser';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/dist/lib/client';
import {AppUser} from "../../utils/interfaces/AppUser";


// Interfaces (represent the DB model and types of the columns associated with a specific DB table)


export async function signupAppUserController(request: Request, response: Response): Promise<Response | undefined> {
	try {

		const mailgun: Mailgun = new Mailgun(formData)
		const mailgunClient: Client = mailgun.client({username: "api", key: <string>process.env.MAILGUN_API_KEY})

		const { appUserDisplayName, appUserEmail, appUserFirstName , appUserPassword , appUserLastName} = request.body;
		const appUserHash = await setHash(appUserPassword);
		const appUserActivationToken = setActivationToken();
		console.log(setActivationToken())
		const appUserAvatarUrl = 'http://www.fillmurray.com/100/150'
		const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}/activation/${appUserActivationToken}`
		console.log('okaybrudr:',appUserActivationToken)

		const message = `<h2>Welcome to Red-Palm.</h2>
<p>In order to start using this site you must confirm your account </p>
<p><a href="${basePath}">${basePath}</a></p>
`

		const mailgunMessage = {
			from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
			to: appUserEmail,
			subject: 'One step closer to Sticky Head -- Account Activation',
			html: message
		}


		const appUser: AppUser = {
			appUserId: null,
			appUserActivationToken,
			appUserDisplayName,
			appUserEmail,
			appUserFirstName ,
			appUserLastName,
			appUserHash,
			appUserAvatarUrl
		};
		await insertAppUser(appUser)
		console.log('checkit:',appUser)
		await mailgunClient.messages.create(<string>process.env.MAILGUN_DOMAIN, mailgunMessage)


		const status: Status = {
			status: 200,
			message: 'Profile successfully created please check your email.',
			data: null
		};

		return response.json(status)

	} catch (error: any) {
		if(error.message === "Forbidden") {

			const status: Status = {
				status: 200,
				message: 'profile succesfully created',
				data: null
			};

			return response.json(status);
		}
	}
}
