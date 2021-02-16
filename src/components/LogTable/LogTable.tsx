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
  deleteItemFromLogState: (id: number) => void
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
  const {usersState, eventState, logState, deleteItemFromLogState} = props;
  const getName = (logUserId: number) => {
    const res = usersState.find(u => u.id === logUserId);
    if (res) return res.userName
  }
  const getEvent = (eventId: number) => {
    const res = eventState.find(u => u.id === eventId);
    if (res) return res.name
  }
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {logState.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{getName(row.userId)}</TableCell>
              <TableCell align="center">{getEvent(row.eventId)}</TableCell>
              <TableCell align="center">{row.eventTime}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" className={classes.margin}>
                  <SwapHorizIcon fontSize="default" color="primary"/>
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  className={classes.margin}
                  onClick={() => deleteItemFromLogState(row.id)}
                >
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