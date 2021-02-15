import React from "react";
import {
  createStyles,
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Theme
} from "@material-ui/core";
import {EventStateType, LogStateType, UserStateType} from "../../App";
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

interface LogTablePropsType {
  usersState: Array<UserStateType>
  eventState: Array<EventStateType>
  logState: Array<LogStateType>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

export const LogTable: React.FC<LogTablePropsType> = (props) => {
  const classes = useStyles();
  const {usersState, eventState, logState} = props;
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {logState.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.userId}</TableCell>
              <TableCell align="center">{row.eventId}</TableCell>
              <TableCell align="center">{row.eventTime}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" className={classes.margin}>
                  <SwapHorizIcon fontSize="default" color="primary"/>
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteForeverIcon fontSize="default" color="secondary"/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}