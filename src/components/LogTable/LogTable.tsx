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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {EditableSpan} from "../EditableSpan/EditableSpan";

interface LogTablePropsType {
  usersState: Array<UserStateType>
  eventState: Array<EventStateType>
  logState: Array<LogStateType>
  userIdFromUser: number
  deleteItemFromLogState: (id: number) => void
  changeNameLogState: (stringId: number, userId: number) => void
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
  const {usersState, eventState, logState, deleteItemFromLogState, userIdFromUser, changeNameLogState} = props;
  const getName = (logUserId: number) => {
    const res = usersState.find(u => u.id === logUserId);
    if (res) {
      return res.userName
    } else {
      return ""
    }
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
              <TableCell align="center">
                <EditableSpan
                  stringId={row.id}
                  type={'Name'}
                  value={userIdFromUser}
                  onChange={changeNameLogState}
                  data={usersState}
                  title={getName(row.userId)}/>
              </TableCell>
              <TableCell align="center">{getEvent(row.eventId)}</TableCell>
              <TableCell align="center">{row.eventTime}</TableCell>
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