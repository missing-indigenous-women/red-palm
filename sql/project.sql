
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
                       womanLastLocation VARCHAR (150),
                       womanLatitude VARCHAR (40),
                       womanLongitude VARCHAR (40),
                       womanPhoto1 VARCHAR (40),
                       womanTribe VARCHAR (150),
                       womanWeight VARCHAR (3),

    -- this creates an index before making a foreign key
                       INDEX(tweetProfileId),
    -- this creates the actual foreign key relation
                       FOREIGN KEY(tweetProfileId) REFERENCES profile(profileId),
    -- and finally create the primary key
                       PRIMARY KEY(tweetId)
);
-- create the tweetImage entity
CREATE TABLE socialMedia (
                       imageId BINARY(16) NOT NULL,
                       imageTweetId BINARY(16) NOT NULL,
                       imageCloudinaryToken VARCHAR(255) NOT NULL,
                       imageUrl VARCHAR(128) NOT NULL ,
                       INDEX(imageId),
                       INDEX(imageTweetId),
                       FOREIGN KEY(imageTweetId) REFERENCES tweet(tweetId),
                       PRIMARY KEY (imageId)
);
-- create the like entity (a weak entity from an m-to-n for profile --> tweet)
CREATE TABLE vehicle (
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