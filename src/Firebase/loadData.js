
import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function LoadData() {
    const uid = useSelector(state => state.firebase.auth.uid)
    useFirestoreConnect({ collection: "testorg", doc: "orgMembers", subcollections: [{ collection: "members", doc: uid }], storeAs: "userDetails" })
    useFirestoreConnect({ collection: "testorg", doc: "orgInfo", storeAs: "orgDetails" })
    useFirestoreConnect({ collection: "testorg", doc: "orgPatients" })
    useFirestoreConnect({ collection: "testorg", doc: "orgMembers" })
    useHistory().push("/")
    return (
        <div>

        </div>
    )
}
