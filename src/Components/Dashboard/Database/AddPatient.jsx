import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Button, Avatar, Paper, Box, TextField, Chip } from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab'


export class AddPatient extends Component {
    state = {
        name: "",

    }
    render() {
        return (
            <Grid container direction="column" style={{ height: "100%", maxHeight: window.screen.availHeight }}>
                <Paper style={{ height: "100%", backgroundColor: "#1E1E1E", padding: 20 }}>
                    <Box height="100%" overflow="auto" maxHeight="100%">
                        <Grid container direction="column" style={{ height: "100%" }} justify="space-between">
                            <form autoSave spellCheck="false" autoComplete="off">
                                <Grid container>
                                    <Grid item sm={3} xs={12} direction="row">
                                        <Grid container justify="center" style={{ width: '100%' }}>
                                            <Avatar style={{ width: 100, height: 100 }}>H</Avatar>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={9} xs={12} >
                                        <TextField
                                            id="outlined-secondary"
                                            size="small"
                                            label="Name"
                                            variant="outlined"
                                            color="secondary"
                                            fullWidth="true" />
                                        <Autocomplete
                                            freeSolo
                                            multiple
                                            limitTags={2}
                                            id="multiple-limit-tags"
                                            options={this.props.tags}
                                            renderTags={(value, getTagProps) =>
                                                value.map((option, index) => (
                                                    <Chip variant="outlined" label={option}  {...getTagProps({ index })} />
                                                ))
                                            }
                                            renderInput={(params) => (
                                                <TextField {...params} variant="outlined" label="Issues" color="primary" style={{ marginTop: 20 }} />
                                            )}
                                        />
                                    </Grid>
                                </Grid>
                            </form>
                            <Grid container justify="space-around" alignContent="space-around">
                                <Button variant="text" > Cancel</Button>
                                <Button variant="outlined">Add To database</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Grid >
        )
    }
}
const mapStatesToProps = (state) => {
    return { tags: state.firestore.data.orgDetails.issueTags }
}
export default connect(mapStatesToProps)(AddPatient)

