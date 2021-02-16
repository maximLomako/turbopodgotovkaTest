import {createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";
import React from "react";

interface AddItemFormPropsType {
  type: string
  value: number
  onChangeHandler: (event: React.ChangeEvent<{ value: unknown }>) => void
  data: Array<any>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
  }),
);

export const AddItemForm: React.FC<AddItemFormPropsType> = (props) => {
  const {type, value, onChangeHandler, data} = props;
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
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
  )
}