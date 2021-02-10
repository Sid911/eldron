import React, { Component } from 'react'

import { Grid, Paper, InputBase, IconButton, Typography, FormControl, NativeSelect, Divider, Fade } from '@material-ui/core'
import { Search, } from '@material-ui/icons';

const root = {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: "20",
    marginRight: "20",
    backgroundColor: "#1E1E1E",
    width: "100%"
}

class DataSearch extends Component {
    state = {

    }
    render() {
        return (
            <Grid container direction="column" style={{ height: "100%" }}>
                <Fade in >
                    <Paper component="form" style={root}>
                        <Grid container justify="space-between" alignContent="center" style={{ height: "100%", padding: 5 }}>
                            <FormControl style={{ width: "20%", margin: 5 }}>
                                <NativeSelect id="query_select">
                                    <option value={"name"}>Name</option>
                                    <option value={"mobile_no"}>Mobile No.</option>
                                </NativeSelect>
                            </FormControl>
                            <Divider orientation="vertical" variant="middle" />
                            <InputBase
                                style={{ flex: 1, marginLeft: 10 }}
                                placeholder="Search Database"
                                inputProps={{ 'aria-label': 'search database' }}
                            />

                            <IconButton type="submit" style={{ padding: 10 }} aria-label="search">
                                <Search />
                            </IconButton>
                        </Grid>
                    </Paper>
                </Fade>
            </Grid>
        )
    }
}

export default DataSearch
