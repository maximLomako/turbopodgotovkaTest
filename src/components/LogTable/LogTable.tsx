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
import {LogStateType} from "../../App";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {EditableTime} from "../EditTime/EditableTime";
import {EventLogType, UserStateType} from "../../state/state";

interface LogTablePropsType {
  usersState: Array<UserStateType>
  logState: Array<LogStateType>
  eventLog: Array<EventLogType>
  deleteItemLog: (id: number) => void
  changeNameLog: (stringId: number, userId: number) => void
  changeEventLog: (stringId: number, eventId: number) => void
  changeTimeLog: (stringId: number, time: string) => void
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
    deleteItemLog,
    changeNameLog, changeEventLog, eventLog, changeTimeLog
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
      return " "
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
                  onChange={changeNameLog}
                  data={usersState}
                  logState={logState}
                  title={getName(row.userId)}
                />

              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                <EditableSpan
                  stringId={row.id}
                  type={'Event'}
                  onChange={changeEventLog}
                  data={eventLog}
                  logState={logState}
                  title={getEvent(row.eventId)}
                />

              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                <EditableTime stringId={row.id} changeTimeLog={changeTimeLog} title={row.eventTime} logState={logState}/>
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  className={classes.margin}
                  onClick={() => deleteItemLog(row.id)}
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