
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS vehicle;
DROP TABLE IF EXISTS socialMedia;
DROP TABLE IF EXISTS woman;
DROP TABLE IF EXISTS appUser;

CREATE TABLE appUser (
    -- this creates the attribute for the primary key
    -- auto_increment tells mySQL to number them {1, 2, 3, ...}
    -- not null means the attribute is required!
                         userId BINARY(16) NOT NULL,
                         userActivationToken CHAR(32) NOT NULL,
                         userDisplayName VARCHAR(32) NOT NULL,
                         userEmail  VARCHAR(255) NOT NULL,
    -- to make sure duplicate data cannot exist, create a unique index
                         userFirstName VARCHAR(40) NOT NULL,
    -- to make something optional, exclude the not null
                         userHash CHAR(97) NOT NULL,
                         userLastName VARCHAR(40) NOT NULL,
                         UNIQUE(userEmail),
                         UNIQUE(userDisplayName),
                         INDEX(userEmail),
    -- this officiates the primary key for the entity
                         PRIMARY KEY(userId)
);
-- create the tweet entity
CREATE TABLE woman (
    -- this is for yet another primary key...
                       womanId BINARY(16) NOT NULL,
    -- this is for a foreign key; auto_incremented is omitted by design
                       womanAliases VARCHAR(40),
                       womanDateOfDisappearance dATETIME(140) NOT NULL,
    -- notice dates don't need a size parameter
                       womanDateOfBirth DATETIME(6) NOT NULL,
                       womanEyeColor VARCHAR (30),
                       womanFavoriteHangoutPlaces VARCHAR(150),
                       womanFirstName VARCHAR (40),
                       womanHairColor VARCHAR (40),
                       womanHeight VARCHAR (10),
                       womanHobbiesAndInterests VARCHAR (150),
                       womanIdentifyingMarks VARCHAR (150),
                       womanLastName VARCHAR (40),
                       womanLastLocation VARCHAR (60),
                       womanLatitude DECIMAL(9,7),
                       womanLongitude DECIMAL (9,7),
                       womanPhoto1 VARCHAR (160),
                       womanTribe VARCHAR (150),
                       womanWeight VARCHAR (4),
                       PRIMARY KEY(womanId),
);
-- create the tweetImage entity
CREATE TABLE socialMedia (
                       socialMediaId BINARY(16) NOT NULL,
                       socialMediaWomanId BINARY(16) NOT NULL,
                       socialMediaFacebook VARCHAR(160),
                       socialMediaInstagram VARCHAR (160),
                       socialMediaTicktock VARCHAR (160),
                       socialMediaTwitter VARCHAR (160),
                       INDEX(socialMediaWomanId),
                       FOREIGN KEY(socialMediaWomanId) REFERENCES woman (womanId),
                       PRIMARY KEY (socialMediaId)
);
-- create the like entity (a weak entity from an m-to-n for profile --> tweet)
CREATE TABLE vehicle (
    -- these are not auto_increment because they're still foreign keys
                        vehicleId BINARY(16) NOT NULL,
                        vehicleWomanId BINARY(16) NOT NULL,
                        vehicleColor VARCHAR(60),	-- index the foreign keys
                        vehicleDescription VARCHAR (60),
                        vehicleMake VARCHAR (60),
                        vehicleModel VARCHAR (60),
                        vehiclePlateNumber VARCHAR (60),
                        vehicleYear VARCHAR (60),
                        FOREIGN KEY(vehicleWomanId) REFERENCES woman(womanId),
                        PRIMARY KEY(vehicleId)
);

CREATE TABLE post (
    -- these are not auto_increment because they're still foreign keys
                         likeTweetId BINARY(16) NOT NULL,
                         likeProfileId BINARY(16) NOT NULL,
                         likeDate DATETIME(6) NOT NULL,	-- index the foreign keys
                         INDEX(likeProfileId),
                         INDEX(likeTweetId),
    -- create the foreign key relations
                         FOREIGN KEY(likeTweetId) REFERENCES tweet(tweetId),
                         FOREIGN KEY(likeProfileId) REFERENCES profile(profileId),
    -- finally, create a composite foreign key with the two foreign keys
                         PRIMARY KEY(likeProfileId, likeTweetId)
);