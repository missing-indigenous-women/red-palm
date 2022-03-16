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
import * as fs from 'fs'
//import {httpConfig} from "../http-config";
import fetch from "node-fetch";
require('dotenv').config();

function redPalmDataDownloader() : Promise<any> {

	async function main() {
		try{
			await downloadUsers()

		} catch (error) {
			console.error(error)
		}

	}

	return main()

	async function getLatLongFromAddress(address: string): Promise<{ lat:number ,long: number }> {
		//a random lat, long in northern NM
		console.log("address: ", [address])
		//console.log("geocod url: ","https://api.geocod.io/v1.7/geocode?api_key="+process.env.GEOCODIO_SECRET)
		""
		let latlong = {lat: 35.33, long: -106.65}
		const response = await fetch("https://api.geocod.io/v1.7/geocode?api_key="+process.env.GEOCODIO_SECRET, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(`${[address]}`),
		});
		const data:any = await response.json();
		if (data.results[0].response.results[0] !== undefined) {
			console.log(data.results[0].response.results[0].location);
			// response.json().then(data => {
			// 	console.log(data);
			// }).catch(error => {
			// 	console.error(error)
			// });
			/*httpConfig.post("https://api.geocod.io/v1.7/geocode?api_key="+process.env.GEOCODIO_SECRET, ["Silver City NM, 88061"])
                .then(reply => {
                    console.log("reply: ", reply)
                        if (reply.status === 200) {
                            console.log("successfully retrieved lat and lon")
                            const results = reply.data
                            console.log("results: " + results)
                            latlong = {lat: Number(results.lat), long: Number(results.long)}
                        }
                    }
                )
                .catch(error => {
                    console.error(error)
                });
             */
			latlong = {
				lat: data.results[0].response.results[0].location.lat,
				long: data.results[0].response.results[0].location.lng
			}
		}
		console.log("latlong: ", latlong)
		return latlong
	};

	async function downloadUsers() {
		try {
			//let buffer = fs.readFileSync('../MissingPersonsDataNewMexicoSingleExample.json')
			let buffer = fs.readFileSync('./nmdps.json')
			const data = buffer.toJSON()
			const results = JSON.parse(buffer.toString())
			console.log("results", results)

			//A fake appUser must be created to own the tweets being imported for the data downloader
			const appUserHash = await setHash("ILikeFakePasswordsWithNoSpaces");
			const appUserId: string = uuid();
			const appUser: AppUser = {
				appUserId,
				appUserActivationToken: null,
				appUserDisplayName: appUserId.substring(0, 32),
				appUserEmail: appUserId + "@fake-acounts.com",
				appUserFirstName: "fakefirstname",
				appUserHash,
				appUserLastName: "fakelastname",
				appUserAvatarUrl: ""
			}
			console.log(await insertAppUser(appUser))

			for (let result of results) {
				const womanId: string = uuid()
				const firstName = result.womanFirstName
				const lastName = result.womanLastName
				const weightTo = result.womanWeight
				const heightFrom = result.womanHeight
				//const currentMinAge = result.woman
				const missingDate = result.womanDateOfDisappearance
				const identifyingMarks = result.womanIdentifyingMarks
				const dob = result.womanDateOfBirth
				const address = result.womanLastLocation
				const {lat, long} = await getLatLongFromAddress(address)
					//.then(latlongobject => console.log(latlongobject))
				const eyeColor = result.womanEyeColor
				const hairColor = result.womanHairColor
				const photo = result.womanPhoto1

				const woman: Woman = {
					womanId,
					womanAliases:"",
					womanDateOfDisappearance: missingDate,
					womanDateOfBirth: dob,
					womanEyeColor: eyeColor,
					womanFavoriteHangoutPlaces: "",
					womanFirstName: firstName,
					womanHairColor: hairColor,
					womanHeight: heightFrom,
					womanHobbiesAndInterests: "",
					womanIdentifyingMarks: identifyingMarks,
					womanLastName: lastName,
					womanLastLocation: address,
					womanLatitude: lat,
					womanLongitude: long,
					womanPhoto1: photo,
					womanWeight: weightTo,
					womanTribe: ""
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
				const socialMediaObj: SocialMedia = {
					socialMediaId,
					socialMediaWomanId: womanId,
					socialMediaFacebook: "facebookHandle",
					socialMediaInstagram: "instragramHandle",
					socialMediaTicktock: "ticktockHandle",
					socialMediaTwitter: "twitterHandle"
				}
				console.log(await insertSocialMedia(socialMediaObj))

				let postId: string = uuid()
				let post: Post = {
					postId,
					postAppUserId: appUserId,
					postWomanId: womanId,
					postDate: "2005-12-10",
					postText: "lorem ipsem imor senso post #1"
				}
				console.log(await insertPost(post))

				// postId = uuid()
				// post = {
				// 	postId,
				// 	postAppUserId: appUserId,
				// 	postWomanId: womanId,
				// 	postDate: "2005-12-10",
				// 	postText: "lorem ipsem imor senso post #2"
				// }
				// console.log(await insertPost(post))
				//
				// postId = uuid()
				// post = {
				// 	postId,
				// 	postAppUserId: appUserId,
				// 	postWomanId: womanId,
				// 	postDate: "2005-12-10",
				// 	postText: "lorem ipsem imor senso post #3"
				// }
				// console.log(await insertPost(post))
				//
				// postId = uuid()
				// post = {
				// 	postId,
				// 	postAppUserId: appUserId,
				// 	postWomanId: womanId,
				// 	postDate: "2005-12-10",
				// 	postText: "lorem ipsem imor senso post #4"
				// }
				// console.log(await insertPost(post))
				//
				// postId = uuid()
				// post = {
				// 	postId,
				// 	postAppUserId: appUserId,
				// 	postWomanId: womanId,
				// 	postDate: "2005-12-10",
				// 	postText: "lorem ipsem imor senso post #5"
				// }
				// console.log(await insertPost(post))
			}
		} catch (error) {
			throw error
		}
	}
}

redPalmDataDownloader()
	.then(finished =>{
		console.log("finished")
		//return Promise.reject("finished")
		//exit out of node
		process.exit(1)
	}).catch(error => {
	console.error(error)
})

