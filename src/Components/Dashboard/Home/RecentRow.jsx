import React from 'react';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons"
import { IconButton, Typography, Table, TableBody, Collapse, TableHead, TableCell, TableRow, Box, } from '@material-ui/core';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset'
        }
    }
});

export default function RecentRow(props) {
    const { row } = props;
    const [open,
        setOpen] = React.useState(false);
    const classes = useRowStyles();
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open
                            ? <KeyboardArrowUp />
                            : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Typography variant="caption">{row.name}</Typography>
                </TableCell>
                <TableCell align="right"><Typography variant="caption">{row.age}</Typography></TableCell>
                <TableCell align="right"><Typography variant="caption">{row.gender}</Typography></TableCell>
                <TableCell align="right"><Typography variant="caption">{row.no}</Typography></TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{
                        paddingBottom: 0,
                        paddingTop: 0
                    }}
                    colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><Typography variant="caption">Date</Typography></TableCell>
                                        <TableCell><Typography variant="caption">Issue</Typography></TableCell>
                                        <TableCell align="right"><Typography variant="caption">Attended By</Typography></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row
                                        .history
                                        .map((historyRow) => (
                                            <TableRow key={historyRow.key}>
                                                <TableCell component="th" scope="row">
                                                    <Typography variant="caption">{historyRow.date}</Typography>
                                                </TableCell>
                                                <TableCell><Chip color="primary" variant="outlined" label={historyRow.issue} /></TableCell>
                                                <TableCell align="right"><Typography variant="caption">{historyRow.attend}</Typography></TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}
