import { v4 as uuid } from 'uuid';
import {setHash} from '../auth.utils';
import {insertAppUser} from './insertAppUser';
import {AppUser} from '../interfaces/AppUser';
import {finished} from 'stream';
import {Woman} from "../interfaces/Woman";
import {insertWoman} from "./insertWoman";
import {Vehicle} from "../interfaces/Vehicle";
import {insertVehicle} from "./insertVehicle";
import {SocialMedia} from "../interfaces/SocialMedia";
import {insertSocialMedia} from "./insertSocialMedia";
import {Post} from "../interfaces/Post";
import {insertPost} from "./insertPost";
const fs = require('fs')
const JSONStream = require('JSONStream')

// var getStream = function () {
// 	var jsonData = '../../MissingPersonsDataNewMexicoSingleExample.json',
// 		stream = fs.createReadStream(jsonData, { encoding: 'utf8' }),
// 		parser = JSONStream.parse('*');
// 	return stream.pipe(parser);
// }

function redPalmDataDownloader() : Promise<any> {

	async function main() {
		try{
			await downloadUsers()

		} catch (error) {
			console.error(error)
		}

	}

	return main()

	async function downloadUsers() {
		try {
			const results : any = [];
			//let jsonData = './MissingPersonsDataNewMexicoSingleExample.json'
			let jsonData = './MissingPersonsDataNewMexico.json'
			let parser = JSONStream.parse('*');

			fs.createReadStream(jsonData, { encoding: 'utf8' })
				.pipe(parser)
				.on('data', (data: any) => results.push(data))
				.on('end',  async () => {
					try {
						//A fake appUser must be created to own the tweets being imported for the data downloader
						const appUserHash = await setHash("ILikeFakePasswordsWithNoSpaces");
						const appUserId: string = uuid();
						const appUser: AppUser = {
							appUserId,
							appUserActivationToken: null,
							appUserDisplayName: appUserId.substring(1, 32),
							appUserEmail: appUserId + "@fake-acounts.com",
							appUserFirstName: "fakefirstname",
							appUserHash,
							appUserLastName: "fakelastname"
						}
						 console.log(await insertAppUser(appUser))

						for (let result of results) {
							const womanId: string = uuid()
							const {firstName, lastName, nicknames} = result.subjectIdentification
							const {weightTo,heightFrom, tribeAssociations} = result.subjectDescription
							const {localizedName} = result.physicalDescription.hairColor
							const {name} = result.physicalDescription.leftEyeColor
							const href = result.images[0] === undefined ? "" : result.images[0].files.original.href
							const {city, zipCode} = result.sighting.address
							const {displayName} = result.sighting.address.state

							const woman: Woman = {
							womanId,
							womanAliases: nicknames === undefined? "": nicknames.substring(0,40),
								//womanDateOfDisappearance
							womanDateOfDisappearance: "2021-01-28",
								//womanDateOfBirth
							womanDateOfBirth: "2021-02-18",
							womanEyeColor: name,
								//womanFavoriteHangoutPlaces
							womanFavoriteHangoutPlaces: "hanging out at the clubhouse",
							womanFirstName: firstName,
							womanHairColor: localizedName,
							womanHeight: heightFrom,
								//womanHobbiesAndInterests
							womanHobbiesAndInterests: "running, biking",
								//womanIdentifyingMarks
							womanIdentifyingMarks: "tatoo1, tatoo2",
							womanLastName: lastName,
							womanLastLocation: city + ' ' + displayName + ', ' + zipCode,
								//womanLatitude
							womanLatitude: 72.811,
								//womanLongitude
							womanLongitude: -18.288,
							womanPhoto1: 'https://www.namus.gov'+href,
							womanTribe: tribeAssociations,
							womanWeight: weightTo === undefined ? "" : weightTo
						}
						//console.log(woman)

							const vehicleId: string = uuid()
						console.log(await insertWoman(woman))
							const vehicle: Vehicle = {
								vehicleId,
								vehicleWomanId: womanId,
								vehicleColor: "red",
								vehicleDescription: "old red and black car",
								vehicleMake: "Ford",
								vehicleModel: "Focus",
								vehiclePlateNumber: "832AB3",
								vehicleYear: 2013
							}
							console.log(await insertVehicle(vehicle))

							const socialMediaId: string = uuid()
							const socialMediaObj: SocialMedia= {
								socialMediaId,
								socialMediaWomanId: womanId,
								socialMediaFacebook: "facebookHandle",
								socialMediaInstagram: "instragramHandle",
								socialMediaTicktock: "ticktockHandle",
								socialMediaTwitter: "twitterHandle"
							}
							console.log(await insertSocialMedia(socialMediaObj))

							for (let i = 0; i < ; i++) {
								
							}
							const postId: string = uuid()
							const post: Post = {
								postId,
								postAppUserId: appUserId,
								postWomanId: womanId,
								postDate: "2005-12-10",
								postText: "lorem ipsem imor senso"
							}
							console.log(await insertPost(post))
						}
					} catch (error) {
						throw error
					}
				});
		} catch (error) {
			throw error
		}
	}
}

redPalmDataDownloader()
	.then(finished =>{
		console.log("finished")
	}).catch(error => {
	console.error(error)
})

