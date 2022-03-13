INSERT INTO appUser (
                         appUserId,
                         appUserActivationToken,
                         appUserDisplayName,
                         appUserEmail,
                         appUserFirstName,
                         appUserHash,
                         appUserLastName,
) VALUES ('18434149-a870-408b-a74c-3c9e149882a3','','testuser','test@test.com','test','','user');

INSERT INTO woman (
                       womanId,
                       womanAliases,
                       womanDateOfDisappearance,
                       womanDateOfBirth,
                       womanEyeColor,
                       womanFavoriteHangoutPlaces,
                       womanFirstName,
                       womanHairColor,
                       womanHeight,
                       womanHobbiesAndInterests,
                       womanIdentifyingMarks,
                       womanLastName,
                       womanLastLocation,
                       womanLatitude,
                       womanLongitude,
                       womanPhoto1,
                       womanTribe,
                       womanWeight,
) VALUES ('c82ef86e-8f56-11ec-b909-0242ac120002','jane, jessy, jackie','',,,,,,,,,,,,,,,);

INSERT INTO socialMedia (
                             socialMediaId,
                             socialMediaWomanId,
                             socialMediaFacebook,
                             socialMediaInstagram,
                             socialMediaTicktock,
                             socialMediaTwitter,
) VALUES (,'c82ef86e-8f56-11ec-b909-0242ac120002',,,,);

INSERT INTO vehicle (
                         vehicleId,
                         vehicleWomanId,
                         vehicleColor,
                         vehicleDescription,
                         vehicleMake,
                         vehicleModel,
                         vehiclePlateNumber,
                         vehicleYear,
) VALUES (,'c82ef86e-8f56-11ec-b909-0242ac120002',,,,,,);

INSERT INTO post (
                      postId,
                      postAppUserId,
                      postWomanId,
                      postDate,
                      postText,
                      
) VALUES (,,'c82ef86e-8f56-11ec-b909-0242ac120002',,);