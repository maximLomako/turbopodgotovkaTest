import React, {useState} from "react";
import {createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";

interface EditableSpanPropsType {
  stringId: number
  type: string
  value: number
  data: Array<any>
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

  const {type, value, onChange, data, title, stringId} = props;
  const [editMode, setEditMode] = useState(false);
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
      ? <FormControl className={classes.formControl} size={"small"}>
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