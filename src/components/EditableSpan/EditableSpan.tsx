import React, {useState} from "react";
import {createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";
import {LogStateType} from "../../App";

interface EditableSpanPropsType {
  stringId: number
  type: string
  data: Array<any>
  logState: Array<LogStateType>
  title: string
  onChange: (stringId: number, userId: number) => void
}

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  formControl: {
    margin: theme.spacing(1),
    padding: 1,
    maxWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}),
);

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
  const classes = useStyles();
  const [localState, setLocalState] = useState('')
  const {type, onChange, data, title, stringId, logState} = props;
  const [editMode, setEditMode] = useState(false);
  const getTitle = () => {
    let res: string;
    if (type === 'Name') {
      // @ts-ignore
      res = (logState.find(t => t.id === stringId).userId);
    } else {
      // @ts-ignore
      res = (logState.find(t => t.id === stringId).eventId);
    }
    return res
  }

  const activateEditMode = () => {
    setEditMode(true);
    setLocalState(getTitle);
  };

  const activateViewMode = () => {
    setEditMode(false)

  };
  const onChangeHandler = (event: React.ChangeEvent<{ value: unknown }>) => {
    activateViewMode();
    onChange(stringId, Number(event.target.value))
  }

  return (
    editMode
      ? <FormControl className={classes.formControl} size={"small"}>
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="name-select-label"
          id="name-select"
          value={localState}
          onChange={onChangeHandler}
        >
          {data.map(u => <MenuItem key={u.id} value={u.id}>{u.firstName || u.name}</MenuItem>)}
        </Select>
      </FormControl>
      : <span onDoubleClick={activateEditMode}>{title}</span>
  )
}