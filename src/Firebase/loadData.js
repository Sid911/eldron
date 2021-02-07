
import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

export default function LoadData() {
    const uid = useSelector(state => state.firebase.auth.uid)
    useFirestoreConnect({ collection: "testorg", doc: "orgMembers", subcollections: [{ collection: "members", doc: uid }], storeAs: "userDetails" })
    useFirestoreConnect({ collection: "testorg", doc: "orgInfo", storeAs: "orgDetails" })
    return (
        <div>

        </div>
    )
}
