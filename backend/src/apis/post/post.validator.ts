import {Schema} from 'express-validator';

export const postValidator : Schema = {
    statusId: {
        isUUID: {
            errorMessage: 'please provide a valid statusId'
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
