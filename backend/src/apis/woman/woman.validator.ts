import {Schema} from 'express-validator';

export const womanValidator : Schema = {
    womanId: {
        isUUID: {
            errorMessage: 'please provide a valid womanId'
        }
    },
    womanAliases: {
        isLength: {
            errorMessage: 'woman Aliases cannot be longer than 40 characters',
            options: {max: 40}
        },
        trim: true,
        escape: true
    },
    womanDateOfDisappearance: {
        isLength: {
            errorMessage: 'please provide valid date format',
            options: {max: 50}
        },
        trim: true,
        escape: true
    },

    womanDateOfBirth: {
        isString: {
            errorMessage: 'please provide valid date format',
            options: []
        },
        trim: true,
        escape: true
    },

    womanEyeColor: {
        isLength: {
            errorMessage: ' Eye color cannot be more then 30 characters',
            options: {max: 30}
        },
        trim: true,
        escape: true
    },
        womanFavoriteHangOutPlace: {
            isLength: {
                errorMessage: 'Favorite hang out place cannot be more then 150 characters ',
                options: { max: 150 }
            },
            trim: true,
            escape: true
        },

        womanFirstName: {
            isLength: {
                errorMessage: 'First name cannot be more then 40 characters',
                options: { max: 40 }
            },
            trim: true,
            escape: true
        },

        womanHairColor: {
            isLength: {
                errorMessage: 'hair color cannot be more then 40 characters',
                options: {max: 40}
            },
            trim: true,
            escape: true
        },

    womanHeight: {
        isLength: {
            errorMessage: 'height cannot be more then 10 characters',
            options: {max: 10}
        },
        trim: true,
        escape: true
    },

    womanHobbiesAndInterests: {
        isLength: {
            errorMessage: 'Hobbies and interest cannot be more then 150 characters',
            options: {max: 150}
        },
        trim: true,
        escape: true
    },

    womanIdentifyingMarks: {
        isLength: {
            errorMessage: 'Identifying marks cannot be more then 150 characters',
            options: {max: 150}
        },
        trim: true,
        escape: true
    },

    womanLastName: {
        isLength: {
            errorMessage: 'last name cannot be more then 40 characters',
            options: {max: 40}
        },
        trim: true,
        escape: true
    },

    womanLastLocation: {
        isLength: {
            errorMessage: 'last location cannot be more then 60 characters',
            options: {max: 60}
        },
        trim: true,
        escape: true
    },

    womanLatitude: {
        isDecimal: {
            errorMessage: 'please provide valid latitude format',
            options: {}
        },
        trim: true,
        escape: true
    },

    womanLongitude: {
        isDecimal: {
            errorMessage: 'please provide valid longitude format',
            options: {}
        },
        trim: true,
        escape: true
    },

    womanPhoto1: {
        isLength: {
            errorMessage: 'photo file name cannot be over 160 characters ',
            options: {max: 160}
        },
        trim: true,
        escape: true
    },

    womanTribe: {
        isLength: {
            errorMessage: 'tribe name cannot be over 150 characters',
            options: {max: 150}
        },
        trim: true,
        escape: true
    },

    womanWeight: {
        isLength: {
            errorMessage: 'please provide valid weight in LBS',
            options: {max: 4}
        },
        trim: true,
        escape: true
    },


};
