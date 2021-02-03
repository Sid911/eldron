import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core";
import { yellow, grey } from "@material-ui/core/colors/index";

export function GridLeft() {
    return (
        <Grid xs={5} alignContent="flex-end" style={{ height: "100%" }}>
            <Grid item>

                <Grid container >
                    <Typography variant="h3" component="div">
                        <Box fontWeight="fontWeightBold" color={grey[100]}>
                            Hello
							</Box>
                    </Typography>
                    <Typography variant="h3" component="div" color="textSecondary">
                        <Box fontWeight="fontWeightLight" marginLeft="10px">
                            There !
							</Box>
                    </Typography>
                </Grid>
                <br />
                <br />
                <Grid container>
                    <Typography component="div" color="textSecondary">
                        <Box fontWeight="fontWeightRegular">
                            Welcome To Project
							</Box>
                    </Typography>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" color={yellow["A200"]} marginLeft="5px">
                            ELDRON
							</Box>
                    </Typography>
                </Grid>

            </Grid>
            <Grid item style={{ marginTop: "65%" }}>
                <Typography variant="h5" color="textPrimary">
                    Sign In !
					</Typography>
                <Grid container>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" color={yellow["A200"]} marginRight="5px">
                            or NOT
							</Box>
                    </Typography>
                    <Typography component="div" color="textSecondary">
                        <Box fontWeight="fontWeightRegular" color={grey[600]}>
                            if you don't want to! We got you covered for getting started.
							</Box>
                    </Typography>

                </Grid>
            </Grid>
        </Grid>
    )
}
