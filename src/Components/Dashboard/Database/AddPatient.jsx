import React, { Component } from 'react'
import firebase from 'firebase/app'

import { connect } from 'react-redux'
import { Grid, Button, Avatar, Paper, Box, TextField, Chip, Divider, IconButton } from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab'
import { CameraAltOutlined } from '@material-ui/icons';


export class AddPatient extends Component {
    state = {
        name: "",
        image: null,
        height: null,
        weight: null,
        age: null,
        gender: null,
        imageSelected: false,
        issueTags: null,
        records: null,
        notes: null,

        isUploading: false
    }


    handleChange = (e) => {
        var value = isNaN(parseInt(e.target.value)) ? e.target.value : parseInt(e.target.value)
        this.setState({
            [e.target.id]: value,
        })
    }
    handleIssueChange = (e, value) => {
        this.setState({
            [e.target.id]: value,
        })
    }
    handleSubmit = () => {
        // const metadata = {
        //     contentType: this.state.image.type,
        // };
        const id = "TO" + this.props.totalPatients
        // const storageRef = firebase.storage().ref();
        // const uploadTask = storageRef.child('testorg/patients/' + id + '/' + id + "Pic.jpg").put(this.state.image, metadata)
        // var image = null;
        // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        //     (snapshot) => {
        //         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log("Upload is" + progress + '% done')
        //     }, (error) => {
        //         console.error("problem in uploading", error.code);
        //     }, () => {
        //         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        //             console.log('File available at', downloadURL);
        //             image = downloadURL;
        //         });
        //     }
        // )
        const user = {
            name: this.state.name,
            height: this.state.height,
            weight: this.state.weight,
            issues: this.state.issueTags,
            notes: this.state.notes,
            id: id,
            hasClientApp: false
        }
        const db = firebase.firestore()
        db.collection("testorg").doc("orgPatients").collection("patients").doc(user.id).set(user)
        console.log(this.state)
    }

    handleProfileClick = e => {
        this.setState({
            image: e.target.files[0],
            imageSelected: true
        })
    }
    render() {
        return (
            <Grid container direction="column" style={{ height: "100%", maxHeight: window.screen.availHeight }}>
                <Paper style={{ height: "100%", backgroundColor: "#1E1E1E", padding: 20 }}>
                    <Box height="100%" overflow="auto" maxHeight="100%">
                        <Grid container direction="column" style={{ height: "100%", padding: 10 }} justify="space-between">
                            <form spellCheck="false" autoComplete="off">
                                <Grid container>
                                    <Grid item sm={3} xs={12} direction="row">
                                        <Grid container style={{ width: '100%' }}>
                                            <input
                                                accept="image/*"
                                                style={{ display: "none" }}
                                                id="contained-button-file"
                                                type="file"
                                                onChange={this.handleProfileClick}
                                            />
                                            <label htmlFor="contained-button-file">
                                                {!this.state.imageSelected ?
                                                    <IconButton style={{ width: 120, height: 120 }} component="span" color="primary">
                                                        <CameraAltOutlined />
                                                    </IconButton> :
                                                    <Avatar variant="rounded" style={{ width: 120, height: 120 }} component="span" src={this.state.image.path}>?</Avatar>
                                                }
                                            </label>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={9} xs={12} >
                                        <Grid container justify="space-evenly" direction="column">
                                            <TextField
                                                id="name"
                                                size="small"
                                                label="Name"
                                                variant="outlined"
                                                color="secondary"
                                                onChange={this.handleChange}
                                                fullWidth="true" />
                                            <Autocomplete
                                                freeSolo
                                                multiple
                                                limitTags={4}
                                                id="issueTags"
                                                options={this.props.tags}
                                                onChange={this.handleIssueChange}
                                                renderTags={(value, getTagProps) =>
                                                    value.map((option, index) => (
                                                        <Chip variant="outlined" label={option}  {...getTagProps({ index })} />
                                                    ))
                                                }
                                                renderInput={(params) => (
                                                    <TextField {...params} variant="outlined" label="Issues" color="primary" style={{ marginTop: 20 }} />
                                                )}
                                            />
                                            <Grid container justify="space-between" style={{ marginTop: "5%" }}>
                                                <TextField variant="outlined" id="age" label="Age" size="small" style={{ marginTop: 20, width: "45%" }} onChange={this.handleChange} />
                                                <TextField variant="outlined" id="gender" label="Gender" size="small" style={{ marginTop: 20, width: "45%" }} onChange={this.handleChange} />
                                            </Grid>
                                            <Grid container justify="space-between" >
                                                <TextField variant="outlined" id="height" label="Height" size="small" style={{ marginTop: 20, width: "45%" }} onChange={this.handleChange} />
                                                <TextField variant="outlined" id="weight" label="Weight" size="small" style={{ marginTop: 20, width: "45%" }} onChange={this.handleChange} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                            <Divider variant="fullWidth" />
                            <Grid container direction="column" alignItems="flex-end" >

                                <TextField id="notes" label="Patient Notes" multiline variant="filled" fullWidth onChange={this.handleChange} />
                                <Button variant="contained" style={{ width: 180, marginTop: 20 }} onClick={this.handleSubmit} >Add To database</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Grid >
        )
    }
}
const mapStatesToProps = (state) => {
    return {
        tags: state.firestore.data.orgDetails.issueTags,
        totalPatients: state.firestore.data.testorg.orgPatients.totalPatients
    }
}
export default connect(mapStatesToProps)(AddPatient)

