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
import {EventLogType, EventStateType, LogStateType, UserStateType} from "../../App";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {EditableTime} from "../EditTime/EditableTime";

interface LogTablePropsType {
  usersState: Array<UserStateType>
  eventState: Array<EventStateType>
  logState: Array<LogStateType>
  userIdFromUser: number
  eventIdFromEventLog: number
  eventLog: Array<EventLogType>
  deleteItemFromLogState: (id: number) => void
  changeNameLogState: (stringId: number, userId: number) => void
  changeEventLogState: (stringId: number, eventId: number) => void
  changeTimeLogState: (stringId: number, time: string) => void
  time: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      maxWidth: 800,
      justifyContent: 'center'
    },
    tableCell: {
      width: 250
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);


export const LogTable: React.FC<LogTablePropsType> = (props) => {
  const classes = useStyles();
  const {
    usersState, logState,
    deleteItemFromLogState, userIdFromUser,
    changeNameLogState, changeEventLogState, eventLog, eventIdFromEventLog, time, changeTimeLogState
  } = props;
  const getName = (logUserId: number) => {
    const res = usersState.find(u => u.id === logUserId);
    if (res) {
      return res.userName
    } else {
      return ""
    }
  }
  const getEvent = (eventId: number) => {
    const res = eventLog.find(u => u.id === eventId);
    if (res) {
      return res.name
    } else {
      return "Hello"
    }
  }
  return (
    <TableContainer style={{width: '40%'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {logState.map((row) => (
            <TableRow key={row.id} >
              <TableCell className={classes.tableCell} align="center">
                <EditableSpan
                  stringId={row.id}
                  type={'Name'}
                  value={userIdFromUser}
                  onChange={changeNameLogState}
                  data={usersState}
                  title={getName(row.userId)}/>
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                <EditableSpan
                  stringId={row.id}
                  type={'Event'}
                  value={eventIdFromEventLog}
                  onChange={changeEventLogState}
                  data={eventLog}
                  title={getEvent(row.eventId)}/>
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                <EditableTime stringId={row.id} time={time} changeTimeLogState={changeTimeLogState} title={row.eventTime} logState={logState}/>
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