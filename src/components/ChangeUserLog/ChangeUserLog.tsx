import React from "react";
import {Button, createStyles, makeStyles, TextField, Theme} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {EventLogType, UserStateType} from "../../state/state";

interface ChangeUserLogPropsType {
  userIdFromUser: number
  eventIdFromEventLog: number
  setUserId: (value: number) => void
  setEventId: (value: number) => void
  setTimer: (value: string) => void
  addItemLog: () => void
  usersState: Array<UserStateType>
  eventLog: Array<EventLogType>
  time: string
}

export const useStyles = makeStyles((theme: Theme) =>
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
    },
    itemsWrapper: {
      display: 'flex',
      alignItems: 'center'
    }
  }))

export const ChangeUserLog: React.FC<ChangeUserLogPropsType> = (props) => {
  const {
    usersState, eventLog, userIdFromUser,
    eventIdFromEventLog, setUserId, setEventId,
    time, setTimer, addItemLog
  } = props;
  const classes = useStyles();

  const handleChangeName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUserId(Number(event.target.value));
  };
  const handleChangeEvent = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEventId(Number(event.target.value));
  };
  const handleChangeTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTimer(event.target.value as string);
  };
  const onCLickHandler = () => {
    addItemLog();
    setUserId(1);
    setEventId(1);
    setTimer('00:00');
  }

  return (
    <div>
      <div className={classes.itemsWrapper}>
        <AddItemForm
          type='Name'
          value={userIdFromUser}
          onChangeHandler={handleChangeName}
          data={usersState}/>
        <AddItemForm
          type='Event'
          value={eventIdFromEventLog}
          onChangeHandler={handleChangeEvent}
          data={eventLog}/>
        <TextField
          id="time"
          label="Time"
          type="time"
          value={time}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 900, // 5 min
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