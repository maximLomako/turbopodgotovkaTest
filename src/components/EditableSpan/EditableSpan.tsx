import React, {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {useStyles} from "../AddItemForm/AddItemForm";


interface EditableSpanPropsType {
  stringId: number
  type: string
  value: number
  data: Array<any>
  title: string
  onChange: (stringId: number, userId: number) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
  const classes = useStyles();

  const {type, value, onChange, data, title, stringId} = props;
  let [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
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
      ? <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="name-select-label"
          id="name-select"
          value={value}
          onChange={onChangeHandler}
        >
          {data.map(u => <MenuItem key={u.id} value={u.id}>{u.firstName || u.name}</MenuItem>)}
        </Select>
      </FormControl>
      : <span onDoubleClick={activateEditMode}>{title}</span>
  )
}