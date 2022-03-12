DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS vehicle;
DROP TABLE IF EXISTS socialMedia;
DROP TABLE IF EXISTS woman;
DROP TABLE IF EXISTS appUser;

CREATE TABLE appUser (
    -- this creates the attribute for the primary key
    -- auto_increment tells mySQL to number them {1, 2, 3, ...}
    -- not null means the attribute is required!
                         appUserId BINARY(16) NOT NULL,
                         appUserActivationToken CHAR(32) ,
                         appUserDisplayName VARCHAR(32) NOT NULL,
                         appUserEmail  VARCHAR(255) NOT NULL,
    -- to make sure duplicate data cannot exist, create a unique index
                         appUserFirstName VARCHAR(40) NOT NULL,
    -- to make something optional, exclude the not null
                         appUserHash CHAR(97) NOT NULL,
                         appUserLastName VARCHAR(40) NOT NULL,
                         appUserAvatarUrl VARCHAR(255),
                         UNIQUE(appUserEmail),
                         UNIQUE(appUserDisplayName),
                         INDEX(appUserEmail),
    -- this officiates the primary key for the entity
                         PRIMARY KEY(appUserId)
);
-- create the tweet entity
CREATE TABLE woman (
    -- this is for yet another primary key...
                       womanId BINARY(16) NOT NULL,
    -- this is for a foreign key; auto_incremented is omitted by design
                       womanAliases VARCHAR(40),
                       womanDateOfDisappearance DATETIME(6) NOT NULL,
    -- notice dates don't need a size parameter
                       womanDateOfBirth DATETIME(6) NOT NULL,
                       womanEyeColor VARCHAR (30),
                       womanFavoriteHangoutPlaces VARCHAR(150),
                       womanFirstName VARCHAR (40),
                       womanHairColor VARCHAR (40),
                       womanHeight VARCHAR (25),
                       womanHobbiesAndInterests VARCHAR (150),
                       womanIdentifyingMarks VARCHAR (150),
                       womanLastName VARCHAR (40),
                       womanLastLocation VARCHAR (60),
                       womanLatitude DECIMAL(9,7),
                       womanLongitude DECIMAL (9,7),
                       womanPhoto1 VARCHAR (160),
                       womanTribe VARCHAR (150),
                       womanWeight VARCHAR (4),
                       PRIMARY KEY(womanId)
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

CREATE TABLE vehicle (
                        vehicleId BINARY(16) NOT NULL,
                        vehicleWomanId BINARY(16) NOT NULL,
                        vehicleColor VARCHAR(60),
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
                         postId BINARY(16) NOT NULL,
                         postAppUserId BINARY(16),
                         postWomanId BINARY(16) NOT NULL,
                         postDate DATETIME(6) NOT NULL,
                         postText VARCHAR(1000) NOT NULL,
                        FOREIGN KEY(postWomanId) REFERENCES woman(womanId),
                         FOREIGN KEY(postAppUserId) REFERENCES appUser (appUserId),
                        PRIMARY KEY(postId)
);