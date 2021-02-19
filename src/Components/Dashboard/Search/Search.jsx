import { Avatar, Box, Divider, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import Powered from './powered'

import algoliasearch from 'algoliasearch/lite';
import { SearchBox, InstantSearch, Hits, Highlight, Configure, Index } from 'react-instantsearch-dom'
import './search.css'
import 'instantsearch.css/themes/satellite-min.css';


export default class Search extends Component {

    render() {
        const HitP = ({ hit }) => {
            return (
                <Grid container alignItems="center" justify="space-between">
                    <Avatar src={hit.profilePic}>{hit.name}</Avatar><Highlight hit={hit} attribute="name" />
                    <Highlight hit={hit} attribute="mobile_no" />
                </Grid>
            )
        }
        const HitE = ({ hit }) => {
            return (
                <Grid container alignItems="center" justify="space-between">
                    <Avatar src={hit.profilePic}>{hit.name}</Avatar><Highlight hit={hit} attribute="name" />
                    <Highlight hit={hit} attribute="jobTitle" />
                </Grid>
            )
        }
        const searchClient = algoliasearch(
            'PE7TK68BSA',

            'f5d515ac9cd37d8022c14bb0ce3cfedc'
        );
        return (
            <Grid item sm={11} xs={12} style={{ padding: 10 }}>
                <Grid style={{ margin: 20 }}>
                    <InstantSearch indexName="prod_orgPatients" searchClient={searchClient} stalledSearchDelay={500}>
                        <Grid container direction="row" style={{ width: "100%" }}>
                            <Grid item sm={3}>
                                <Powered />
                            </Grid>
                            <Grid item sm={9}>
                                <Grid container direction="column" justify="flex-end" style={{ height: "100%" }}>
                                    <SearchBox showLoadingIndicator />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Configure hitsPerPage={3} />
                        <Divider variant="fullWidth" style={{ marginTop: 30, marginBottom: 20 }} />
                        <Grid container>
                            <Grid item sm={6} xs={12} style={{ padding: 10 }}>
                                <Typography color="textSecondary"><Box fontWeight="fontWeightLight" padding="10px">Patient Results</Box></Typography>
                                <Grid container direction="column" style={{ margin: 10, background: "#181818", borderRadius: "10px" }}>
                                    <Index indexName="prod_orgPatients">

                                        <Hits hitComponent={HitP} />
                                    </Index>
                                </Grid>
                            </Grid>
                            <Grid item sm={6} xs={12} style={{ padding: 10 }}>
                                <Typography color="textSecondary"><Box fontWeight="fontWeightLight" padding="10px">Employee Results</Box></Typography>
                                <Grid container direction="column" style={{ margin: 10, background: "#181818", borderRadius: "10px" }}>
                                    <Index indexName="prod_orgMembers">
                                        <Hits hitComponent={HitE} />
                                    </Index>
                                </Grid>
                            </Grid>
                        </Grid>
                    </InstantSearch>
                </Grid>
            </Grid>
        )
    }
}
