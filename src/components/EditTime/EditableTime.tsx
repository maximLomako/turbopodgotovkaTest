import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import {useStyles} from "../ChangeUserLog/ChangeUserLog";
import {LogStateType} from "../../App";

interface EditableTimePropsType {
  stringId: number
  time: string
  changeTimeLogState: (stringId: number, time: string) => void
  title: string
  logState: Array<LogStateType>
}

export const EditableTime: React.FC<EditableTimePropsType> = (props) => {
  const classes = useStyles();
  const {
    stringId,
    time,
    changeTimeLogState,
    title,
    logState
  } = props;

  const [editMode, setEditMode] = useState(false);
  const [localState, setLocalState] = useState('')

  const activateEditMode = () => {
    setEditMode(true);
    // @ts-ignore
    setLocalState(logState.find(t => t.id === stringId).eventTime);
  };
  const activateViewMode = () => {
    setEditMode(false)

  };
  const onChangeHandler = (event: React.ChangeEvent<{ value: unknown }>) => {
    changeTimeLogState(stringId, String(event.target.value))
  }

  return (
    editMode
      ? <TextField
        id="time"
        label="Time"
        type="time"
        defaultValue={localState}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 900, // 5 min
        }}
        onChange={onChangeHandler}
        onBlur={activateViewMode}
      />
      : <span onDoubleClick={activateEditMode}>{title}</span>
  )
}