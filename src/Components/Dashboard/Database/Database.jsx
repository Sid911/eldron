import React, { Component } from 'react'
import { Box, Grid, Paper, Fade } from '@material-ui/core'
import DataInfoGrid from './DataInfoGrid'
import DataSearch from './DataSearch'
import AddPatient from './AddPatient'

class Database extends Component {
    state = {
        openAddPatient: false,
    }

    setAddPatient = (b) => {
        this.setState({
            openAddPatient: b,
        })
    }
    render() {
        return (
            <Grid item sm={11} xs={12} style={{ padding: 10, height: "100%", maxHeight: window.screen.availHeight }}>
                <Box height="100%" overflow="auto">
                    <Fade in>
                        <Grid container style={{ height: "100%" }} direction="row">
                            <Grid item sm={4} xs={12} style={{ height: "100%" }}>
                                <Paper style={{ height: "100%", padding: "5%", backgroundColor: "#000" }}>
                                    <DataInfoGrid patientClick={() => { this.setAddPatient(true) }} searchClick={() => { this.setAddPatient(false) }} b={this.state.openAddPatient} />
                                </Paper>
                            </Grid>
                            <Grid item sm={8} xs={12} style={{ height: "100%", paddingInline: 20, }}>
                                {this.state.openAddPatient ? <AddPatient /> : <DataSearch />}
                            </Grid>
                        </Grid>
                    </Fade>
                </Box>
            </Grid>
        )
    }
}



export default Database