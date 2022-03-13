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
    postDate: {
        isDate: {
            errorMessage: 'a postDate must be a valid date',
        },
        trim: true,
        escape: true
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
