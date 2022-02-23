import {Schema} from 'express-validator';

export const socialMediaValidator : Schema = {
    socialMediaId: {
        isUUID: {
            errorMessage: 'please provide a valid socialMediaId'
        }
    },
    socialMediaWomanId: {
        isUUID: {
            errorMessage: 'please provide a valid socialMediaWomanId'
        }
    },
    socialMediaFacebook: {
        isLength: {
            errorMessage: 'a socialMediaFacebook cannot be longer than 160 characters',
            options: { max: 160 }
        },
        trim: true,
        escape: true
    },
    socialMediaInstagram: {
        isLength: {
            errorMessage: 'a socialMediaInstagram cannot be longer than 160 characters',
            options: { max: 160 }
        },
        trim: true,
        escape: true
    },
    socialMediaTicktock: {
        isLength: {
            errorMessage: 'a socialMediaTicktock cannot be longer than 160 characters',
            options: { max: 160 }
        },
        trim: true,
        escape: true
    },
    socialMediaTwitter: {
        isLength: {
            errorMessage: 'a socialMediaTwitter cannot be longer than 160 characters',
            options: { max: 160 }
        },
        trim: true,
        escape: true
    }
};
