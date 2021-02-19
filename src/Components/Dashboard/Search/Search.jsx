import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import Powered from './powered'

import algoliasearch from 'algoliasearch/lite';
import { SearchBox, InstantSearch, Hits } from 'react-instantsearch-dom'
import 'instantsearch.css/themes/satellite-min.css';
import './search.css'

export default class Search extends Component {

    render() {
        const Hit = ({ hit }) => (<p>{hit.name}</p>)
        const searchClient = algoliasearch(
            'PE7TK68BSA',

            'f5d515ac9cd37d8022c14bb0ce3cfedc'
        );
        return (
            <Grid item sm={11} xs={12} style={{ padding: 10 }}>
                <Grid container direction="row" justify="flex-e">

                    <Powered />
                </Grid>
                <Grid style={{ marginTop: 20 }}>
                    <InstantSearch indexName="prod_orgPatients" searchClient={searchClient}>
                        <SearchBox showLoadingIndicator />
                        <Hits hitComponent={Hit} />
                    </InstantSearch>
                </Grid>
            </Grid>
        )
    }
}
