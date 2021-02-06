export const SET_ENCRYPTION = "SET_ENCRYPTION";
export const SET_NAV = "SET_NAV"


export function setUserEncryption(Password, OrgKey) {
    return {
        type: SET_ENCRYPTION,
        Password: Password,
        OrgKey: OrgKey,
    }
}