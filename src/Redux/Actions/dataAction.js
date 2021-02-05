export const SET_USER_INFO = "SET_USER_INFO";


export function setUserInfo(Password, OrgKey) {
    return {
        type: SETB_USER_INFO,
        Password: Password,
        OrgKey: OrgKey,
    }
}