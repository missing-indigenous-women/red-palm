import {Schema} from 'express-validator';

export const appUserValidator : Schema = {
    appUserId: {
        isUUID: {
            errorMessage: 'please provide a valid appUserId'
        }
    },
    appUserDisplayName: {
        isLength: {
            errorMessage: 'a   App UserDisplayName cannot be longer than 32 characters',
            options: { max: 32 }
        },
        trim: true,
        escape: true
    },
    appUserActivationToken: {
        isLength: {
            errorMessage: 'a   App UserDisplayName cannot be longer than 32 characters',
            options: { max: 32 }
        },
        trim: true,
        escape: true
    },
    appUserEmail: {
        isLength: {
            errorMessage: 'a app user email cannot be longer than 50 characters',
            options: { max: 255 }
        },
        trim: true,
        escape: true
    },
    appUserFirstName: {
        isLength: {
            errorMessage: 'a app user email cannot be longer than 40 characters',
            options: { max: 40 }
        },
        trim: true,
        escape: true
    },
    appUserHash: {
        isLength: {
            errorMessage: 'a app user  cannot be longer than 97 characters',
            options: { max: 97 }
        },
        trim: true,
        escape: true
    },
    appUserLastName: {
        isLength: {
            errorMessage: ' app user last name cannot be longer than 50 characters',
            options: { max: 50 }
        },
        trim: true,
        escape: true
    }



};





