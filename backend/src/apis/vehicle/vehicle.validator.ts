import {Schema} from 'express-validator';

export const vehicleValidator : Schema = {
    vehicleWomanId: {
        isUUID: {
            errorMessage: 'please provide a valid vehicleWomanId'
        }
    },
    vehicleColor: {
        isLength: {
            errorMessage: 'vehicle color cannot be longer than 60 characters',
            options: {max: 60}
        },
        trim: true,
        escape: true
    },
    vehicleDescription: {
        isLength: {
            errorMessage: 'vehicle description cannot be longer than 60 characters',
            options: {max: 60}
        },
        trim: true,
        escape: true
    },
    vehicleMake: {
        isLength: {
            errorMessage: 'vehicle make cannot be longer than 60 characters',
            options: {max: 60}
        },
        trim: true,
        escape: true
    },
    vehicleModel: {
        isLength: {
            errorMessage: 'vehicle model cannot be longer than 60 characters',
            options: {max: 60}
        },
        trim: true,
        escape: true
    },
    vehiclePlateNumber: {
        isLength: {
            errorMessage: 'vehicle license plate number cannot be longer than 60 characters',
            options: {max: 60}
        },
        trim: true,
        escape: true
    },
    vehicleYear: {
        isLength: {
            errorMessage: 'vehicle year cannot be longer than 60 characters',
            options: {max: 60}
        },
        trim: true,
        escape: true
    }
};
