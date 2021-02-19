import React from 'react'

import { Tabs, Tab, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import DiseaseGraphs from './Graphs/DiseaseGraphs'
import AppointmentGraphs from './Graphs/AppointmentGraphs';
import PatientsGraphs from './Graphs/PatientsGraphs'
import Employee from './Graphs/Employee'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#000",
        display: 'flex',
        height: "100%"
    },
    tabs: {
        borderRight: `2px solid ${theme.palette.divider}`,
        justifyContent: "center",
        height: "90%"
    },
}));
function GraphTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Typography color="textPrimary" component="div" style={{ flexGrow: 1 }}>
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Disease" {...a11yProps(0)} />
                    <Tab label="Appointment" {...a11yProps(1)} />
                    <Tab label="Patients" {...a11yProps(2)} />
                    <Tab label="Employee" {...a11yProps(3)} />
                    <Tab label="Gender" {...a11yProps(4)} />
                    <Tab label="Age" {...a11yProps(5)} />
                    <Tab label="Public Data 🌎" {...a11yProps(6)} />
                </Tabs>
                <TabPanel value={value} index={0} style={{ flexGrow: 1 }}><DiseaseGraphs /></TabPanel>
                <TabPanel value={value} index={1} style={{ flexGrow: 1 }}><AppointmentGraphs /></TabPanel>
                <TabPanel value={value} index={2} style={{ flexGrow: 1 }}><PatientsGraphs /></TabPanel>
                <TabPanel value={value} index={3} style={{ flexGrow: 1 }}><Employee /></TabPanel>
                <TabPanel value={value} index={4} style={{ flexGrow: 1 }}>Item Five</TabPanel>
                <TabPanel value={value} index={5} style={{ flexGrow: 1 }}>Item Six</TabPanel>
                <TabPanel value={value} index={6} style={{ flexGrow: 1 }}>Item Seven</TabPanel>
            </div>
        </Typography>
    );
}

export default GraphTabs
