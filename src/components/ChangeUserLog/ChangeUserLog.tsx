import React from "react";
import {
  Button,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme
} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import s from './changeUserLog.module.css';
import {EventLogType, UserStateType} from "../../App";

interface ChangeUserLogPropsType {
  userIdFromUser: number
  eventIdFromEventLog: number
  getUserIdFromUser: (value: number) => void
  getEventIdFromEventLog: (value: number) => void
  getTime: (value: string) => void
  addItemToLogState: () => void
  addEventToEventState: () => void
  usersState: Array<UserStateType>
  eventLog: Array<EventLogType>
  time: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    }
  }),
);

export const ChangeUserLog: React.FC<ChangeUserLogPropsType> = (props) => {
  const {
    usersState, eventLog, userIdFromUser,
    eventIdFromEventLog, getUserIdFromUser, getEventIdFromEventLog,
    time, getTime, addItemToLogState, addEventToEventState
  } = props;
  const classes = useStyles();

  const handleChangeName = (event: React.ChangeEvent<{ value: unknown }>) => {
    getUserIdFromUser(Number(event.target.value));
  };
  const handleChangeEvent = (event: React.ChangeEvent<{ value: unknown }>) => {
    getEventIdFromEventLog(Number(event.target.value));
  };
  const handleChangeTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    getTime(event.target.value as string);
  };
  const onCLickHandler = () => {
    addItemToLogState();
    addEventToEventState();
  }

  return (
    <div className={s.log}>
      <div className={s.logWrapper}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select
            labelId="name-select-label"
            id="name-select"
            value={userIdFromUser}
            onChange={handleChangeName}
          >
            {usersState.map(u => <MenuItem key={u.id} value={u.id}>{u.firstName}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Event</InputLabel>
          <Select
            labelId="age-select-label"
            id="age-select"
            value={eventIdFromEventLog}
            onChange={handleChangeEvent}
          >
            {eventLog.map(u => <MenuItem key={u.id} value={u.id}>{u.name}</MenuItem>)}
          </Select>
        </FormControl>
        <TextField
          id="time"
          label="Time"
          type="time"
          defaultValue={time}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={handleChangeTime}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddBoxIcon/>}
          onClick={onCLickHandler}
        >
          Add
        </Button>
      </div>
    </div>
  )
}