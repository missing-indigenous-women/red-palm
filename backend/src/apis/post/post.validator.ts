import {Schema} from 'express-validator';

export const postValidator : Schema = {
    postAppUserId: {
        isUUID: {
            errorMessage: 'please provide a valid postAppUserId'
        }
    },
    postWomanId: {
        isUUID: {
            errorMessage: 'please provide a valid postWomanId'
        }
    },

    postText: {
        isLength: {
            errorMessage: 'a postText cannot be longer than 1000 characters',
            options: { max: 1000 }
        },
        trim: true,
        escape: true
    }
};
