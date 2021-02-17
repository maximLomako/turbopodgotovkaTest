import React, {useState} from 'react';
import {ChangeUserLog} from './components/ChangeUserLog/ChangeUserLog';
import {LogTable} from "./components/LogTable/LogTable";
import uniqueRandom from "unique-random";
import {createStyles, Grid, makeStyles} from '@material-ui/core';

export interface UserStateType {
  id: number
  userName: string
  firstName: string
  lastName: string
}
export interface EventLogType {
  id: number
  name: string
}
export interface LogStateType {
  id: number,
  userId: number,
  eventId: number,
  eventTime: string
}
export interface EventStateType {
  id: number,
  name: string
}

const useStyles = makeStyles(() =>
  createStyles({
    app : {
      backgroundColor: '#D1F2FE',
      height: '100vh'
    }
  })
);

const random = uniqueRandom(1, 1000);
const App = () => {
  const classes = useStyles();
  const [userIdFromUser, setUserIdFromUser] = useState(1);
  const [eventIdFromEventLog, setEventIdFromEventLog] = useState(1);
  const [time, setTime] = useState('00:00');
  const usersState: Array<UserStateType> = [
    {id: 1, userName: 'Dru', firstName: 'Dru', lastName: 'England'},
    {id: 2, userName: 'Chantel', firstName: 'Chantel', lastName: 'Holder'},
    {id: 3, userName: 'Lynn', firstName: 'Lynn', lastName: 'Blevins'},
    {id: 4, userName: 'Umaiza', firstName: 'Umaiza', lastName: 'Elliot'},
    {id: 5, userName: 'Wayne', firstName: 'Wayne', lastName: 'Hamer'},
    {id: 6, userName: 'Jasper', firstName: 'Jasper', lastName: 'Mcintosh'},
    {id: 7, userName: 'Edmund', firstName: 'Edmund', lastName: 'Nolan'},
    {id: 8, userName: 'Lennon', firstName: 'Lennon', lastName: 'Franklin'},
    {id: 9, userName: 'Arla', firstName: 'Arla', lastName: 'Cash'},
    {id: 10, userName: 'Rae', firstName: 'Rae', lastName: 'Mendez'}
  ]
  const eventLog: Array<EventLogType> = [
    {id: 1, name: 'site'},
    {id: 2, name: 'app'},
    {id: 3, name: 'other'}
  ]
  const [logState, setLogState] = useState<Array<LogStateType>>([]);
  const [eventState, setEventState] = useState<Array<EventStateType>>([])

  const getUserIdFromUser = (value: number) => {
    setUserIdFromUser(value);
  }
  const getEventIdFromEventLog = (value: number) => {
    setEventIdFromEventLog(value);
  }
  const getTime = (value: string) => {
    setTime(value);
  }
  const addItemToLogState = () => {
    setLogState([
      ...logState,
      {
        id: random(),
        userId: userIdFromUser,
        eventId: eventIdFromEventLog,
        eventTime: time
      }
    ])
  }
  const deleteItemFromLogState = (id: number) => {
    setLogState(logState.filter(l => l.id !== id));
  }
  const addEventToEventState = () => {
    const res = eventLog.find(u => u.id === eventIdFromEventLog);
    if (res) {
      setEventState([
        ...eventState,
        {
          id: eventIdFromEventLog,
          name: res.name
        }
      ])
    }
  }
  const changeNameLogState = (stringId: number, userId: number) => {
    const copyLogState = logState.map(t => t.id === stringId ? {...t, userId} : t)
    setLogState(copyLogState);
  }
  const changeEventLogState = (stringId: number, eventId: number) => {
    const copyLogState = logState.map(t => t.id === stringId ? {...t, eventId} : t)
    setLogState(copyLogState);
  }
  const changeTimeLogState = (stringId: number, time: string) => {
    const copyLogState = logState.map(t => t.id === stringId ? {...t, eventTime: time} : t)
    setLogState(copyLogState);
  }
  return (
    <div className={classes.app}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <ChangeUserLog
          userIdFromUser={userIdFromUser}
          eventIdFromEventLog={eventIdFromEventLog}
          time={time}
          usersState={usersState}
          eventLog={eventLog}
          getUserIdFromUser={getUserIdFromUser}
          getEventIdFromEventLog={getEventIdFromEventLog}
          getTime={getTime}
          addEventToEventState={addEventToEventState}
          addItemToLogState={addItemToLogState}
        />
        <LogTable
          usersState={usersState}
          logState={logState}
          eventState={eventState}
          userIdFromUser={userIdFromUser}
          eventIdFromEventLog={eventIdFromEventLog}
          eventLog={eventLog}
          time={time}
          deleteItemFromLogState={deleteItemFromLogState}
          changeNameLogState={changeNameLogState}
          changeEventLogState={changeEventLogState}
          changeTimeLogState={changeTimeLogState}
        />
      </Grid>
    </div>
  );
}

export default App;
