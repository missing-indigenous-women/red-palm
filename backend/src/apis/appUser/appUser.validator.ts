import {Schema} from 'express-validator';

export const appUserValidator : Schema = {
    appUserId: {
        isUUID: {
            errorMessage: 'please provide a valid appUserId'
        }
    },
    statusColor: {
        isLength: {
            errorMessage: 'a statusColor cannot be longer than 50 characters',
            options: { max: 50 }
        },
        trim: true,
        escape: true
    },
    statusValue: {
        isLength: {
            errorMessage: 'a statusValue cannot be longer than 50 characters',
            options: { max: 50 }
        },
        trim: true,
        escape: true
    }
};
