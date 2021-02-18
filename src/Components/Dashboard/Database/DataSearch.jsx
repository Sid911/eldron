import React, { Component } from 'react'

import { Grid, Paper, InputBase, IconButton, FormControl, NativeSelect, Divider, Fade } from '@material-ui/core'
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

class DataSearch extends Component {
    state = {
        searchTerm: "",
        searchField: "name",
    }
    handleChange = (e) => {
        var value = isNaN(parseInt(e.target.value)) ? e.target.value : parseInt(e.target.value)
        this.setState({
            [e.target.id]: value,
        })
    }
    render() {
        return (
            <Grid container direction="column" style={{ height: "100%" }}>
                <Fade in >
                    <Paper component="form" style={root}>
                        <Grid container justify="space-between" alignContent="center" style={{ height: "100%", padding: 5 }}>
                            <FormControl style={{ width: "20%", margin: 5 }}>
                                <NativeSelect id="searchField" onChange={this.handleChange}>
                                    <option value={"name"}>Name</option>
                                    <option value={"mobile_no"}>Mobile No.</option>
                                </NativeSelect>
                            </FormControl>
                            <Divider orientation="vertical" variant="middle" />
                            <InputBase
                                style={{ flex: 1, marginLeft: 10 }}
                                placeholder="Search Database"
                                id="searchTerm"
                                onChange={this.handleChange}
                                inputProps={{ 'aria-label': 'search database' }}
                            />

                            <IconButton type="submit" style={{ padding: 10 }} aria-label="search">
                                <Search />
                            </IconButton>
                        </Grid>
                    </Paper>
                </Fade>
                <Grid container direction="column" style={{ marginTop: 10 }}>
                    <DataSearchResults />
                    <DataSearchResults />
                    <DataSearchResults />
                    <DataSearchResults />
                </Grid>
            </Grid>
        )
    }
}

export default DataSearch
