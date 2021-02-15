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
import {EventLogType, LogStateType, UserStateType} from "../../App";

interface ChangeUserLogPropsType {
  usersState: Array<UserStateType>
  eventLog: Array<EventLogType>
  logState: Array<LogStateType>
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
  const {usersState, eventLog, logState} = props;
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [event, setEvent] = React.useState('');

  const handleChangeName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as string);
  };
  const handleChangeEvent = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEvent(event.target.value as string);
  };

  return (
    <div className={s.log}>
      <div className={s.logWrapper}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select
            labelId="name-select-label"
            id="name-select"
            value={name}
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
            value={event}
            onChange={handleChangeEvent}
          >
            {eventLog.map(u => <MenuItem key={u.id} value={u.id}>{u.name}</MenuItem>)}
          </Select>
        </FormControl>
        <TextField
          id="time"
          label="Time"
          type="time"
          defaultValue="00:00"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddBoxIcon/>}
        >
          Add
        </Button>
      </div>
    </div>
  )
}