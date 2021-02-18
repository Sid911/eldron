import React, { useState } from 'react'
import firebase from 'firebase/app'

import { Grid, Paper, InputBase, IconButton, FormControl, NativeSelect, Divider, Fade, Typography } from '@material-ui/core'
import { Search, } from '@material-ui/icons';

import DataSearchResults from './DataSearchResults';

const root = {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: "20",
    marginRight: "20",
    backgroundColor: "#1E1E1E",
    width: "100%"
}

function DataSearch() {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchField, setSearchField] = useState("name")
    const [searchResult, setSearchResult] = useState(null)
    const [resultsfound, setResultsFound] = useState(false)
    const [searched, setSearched] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearched(true)
        console.log(searchTerm, searchField)
        const db = firebase.firestore()
        const patientRef = db.collection('testorg').doc('orgPatients').collection('patients')
        patientRef.where(searchField, '==', searchTerm).get()
            .then((querySnapshot) => {
                const result = querySnapshot.docs.map((doc) => doc.data())
                setSearchResult(result)
                result.length !== 0 ? setResultsFound(true) : setResultsFound(false)

            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
    return (
        <Grid container direction="column" style={{ height: "100%" }}>
            <Fade in >
                <Paper component="form" style={root}>
                    <Grid container justify="space-between" alignContent="center" style={{ height: "100%", padding: 5 }}>
                        <FormControl style={{ width: "20%", margin: 5 }}>
                            <NativeSelect id="searchField" onChange={(e) => { setSearchField(e.target.value) }}>
                                <option value={"name"}>Name</option>
                                <option value={"mobile_no"}>Mobile No.</option>
                            </NativeSelect>
                        </FormControl>
                        <Divider orientation="vertical" variant="middle" />
                        <InputBase
                            style={{ flex: 1, marginLeft: 10 }}
                            placeholder="Search Database"
                            id="searchTerm"
                            onChange={(e) => { setSearchTerm(e.target.value) }}
                            inputProps={{ 'aria-label': 'search database' }}
                            autoComplete="off"
                        />

                        <IconButton style={{ padding: 10 }} aria-label="search" onClick={handleSubmit}>
                            <Search />
                        </IconButton>
                    </Grid>
                </Paper>
            </Fade>
            <Grid container direction="column" style={{ marginTop: 10, flexGrow: 1 }}>
                {
                    searched ?
                        resultsfound ?
                            searchResult.map((result) => (
                                <DataSearchResults src={result.profilePic} name={result.name} mobile={result.mobile_no} key={result.id} />
                            ))
                            :
                            <Paper style={{ backgroundColor: "#1E1E1E", padding: 20 }}>
                                <Typography color="textSecondary">No Results found make sure you typed it correctly! 🤔</Typography>
                            </Paper>
                        :
                        <Paper style={{ backgroundColor: "#1E1E1E", padding: 20 }}>
                            <Typography color="textSecondary">Nothing searched yet!</Typography>
                        </Paper>
                }
            </Grid>
        </Grid>
    )
}

export default DataSearch
