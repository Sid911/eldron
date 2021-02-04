import React from 'react'
import { Grid, Typography, Box, Container } from "@material-ui/core";
import { yellow, grey } from "@material-ui/core/colors/index";

export function GridLeft() {
    return (
        <Grid item sm={6} xs={12} style={{ height: "100%" }} >
            <Grid container justify="space-between" style={{ height: "100%" }} >
                <Grid item>

                    <Grid container >
                        <Typography variant="h3" >
                            <Box fontWeight="fontWeightBold" color={grey[100]}>
                                Hello
                                    </Box>
                        </Typography>
                        <Typography variant="h3" color="textSecondary">
                            <Box fontWeight="fontWeightLight" marginLeft="10px">
                                There !
                                    </Box>
                        </Typography>
                    </Grid>
                    <br />
                    <br />
                    <Grid container>
                        <Typography color="textSecondary">
                            <Box fontWeight="fontWeightRegular">
                                Welcome To Project
                                    </Box>
                        </Typography>
                        <Typography >
                            <Box fontWeight="fontWeightBold" color={yellow["A200"]} marginLeft="5px">
                                ELDRON
                                    </Box>
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container alignItems="flex-end">
                    <Typography variant="h5" color="textPrimary">
                        Sign In !
                            </Typography>
                    <Grid container>
                        <Typography >
                            <Box fontWeight="fontWeightBold" color={yellow["A200"]} marginRight="5px">
                                or NOT
                                    </Box>
                        </Typography>
                        <Typography color="textSecondary">
                            <Box fontWeight="fontWeightRegular" color={grey[600]}>
                                if you don't want to! We got you covered for getting started.
                                    </Box>
                        </Typography>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
