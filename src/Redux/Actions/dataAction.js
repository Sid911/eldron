// import firebase from "firebase/app"
export const SET_ENCRYPTION = "SET_ENCRYPTION";
export const ADD_PINNED = "ADD_PINNED"
export const ADD_RECENT = "ADD_RECENT"


export function setUserEncryption(Password, OrgKey) {
    return {
        type: SET_ENCRYPTION,
        Password: Password,
        OrgKey: OrgKey,
    }
}

export function add_pinned(uid) {

}

export function add_recent(uid) {

}