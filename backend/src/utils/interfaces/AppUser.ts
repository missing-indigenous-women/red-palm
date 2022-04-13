export interface AppUser {
    appUserId: string| null,
    appUserActivationToken: string | null,
    appUserDisplayName: string,
    appUserEmail: string,
    appUserFirstName: string,
    appUserHash: string,
    appUserLastName: string
    appUserAvatarUrl: string | null
}