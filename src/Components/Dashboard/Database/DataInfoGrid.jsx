import React from 'react'
import { connect } from 'react-redux'
import { Grid, Divider, Button } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

import FieldValue from '../Home/FieldValue'
import InfoTemplate from './InfoTemplate'

function DataInfoGrid(props) {
    return (

        <Grid container direction="column" justify="space-between" style={{ height: "100%" }}>

            <Grid item >
                <FieldValue variant="h5" field="Database" value="Info" scolor="primary" />
                <Divider style={{ width: "100%", padding: 1, backgroundColor: grey[500], alignSelf: 'center', marginTop: 5 }} />
            </Grid>
            <InfoTemplate Title="Organization" variant="caption" keyValue={Object.entries(props.org)} />
            <InfoTemplate Title="Members" variant="caption" keyValue={Object.entries(props.membersDetails)} />

            <InfoTemplate Title="Patients" variant="caption" keyValue={Object.entries(props.patientsDetails)} />
            <Grid container justify="space-between" style={{ width: "100%" }}>
                <Button variant="text" color="default">Import</Button>
                <Button variant="text" color="default">Export</Button>
                <Button variant="contained" color="primary" onClick={props.patientClick}>Add Patient</Button>
            </Grid>
        </Grid>
    )
}
const mapStateToProps = (state) => {
    const data = {
        org: state.firestore.data.orgDetails,
        membersDetails: state.firestore.data.testorg.orgMembers,
        patientsDetails: state.firestore.data.testorg.orgPatients
    }
    return data
}
export default connect(mapStateToProps)(DataInfoGrid)
