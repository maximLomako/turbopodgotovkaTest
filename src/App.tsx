import React, {useState} from 'react';
import {ChangeUserLog} from './components/ChangeUserLog/ChangeUserLog';
import {LogTable} from "./components/LogTable/LogTable";
import uniqueRandom from "unique-random";
import {createStyles, Grid, makeStyles} from '@material-ui/core';
import {eventLog, usersState} from "./state/state";

export interface LogStateType {
  id: number,
  userId: number,
  eventId: number,
  eventTime: string
}

const useStyles = makeStyles(() =>
  createStyles({
    app: {
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
  const [logState, setLogState] = useState<Array<LogStateType>>([]);

  const setUserId = (value: number) => {
    setUserIdFromUser(value);
  }
  const setEventId = (value: number) => {
    setEventIdFromEventLog(value);
  }
  const getTime = (value: string) => {
    setTime(value);
  }
  const addItemLog = () => {
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
  const deleteItemLog = (id: number) => {
    setLogState(logState.filter(l => l.id !== id));
  }
  const changeNameLog = (stringId: number, userId: number) => {
    const copyLogState = logState.map(t => t.id === stringId ? {...t, userId} : t)
    setLogState(copyLogState);
  }
  const changeEventLog = (stringId: number, eventId: number) => {
    const copyLogState = logState.map(t => t.id === stringId ? {...t, eventId} : t)
    setLogState(copyLogState);
  }
  const changeTimeLog = (stringId: number, time: string) => {
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
          setUserId={setUserId}
          setEventId={setEventId}
          getTime={getTime}
          addItemLog={addItemLog}
        />
        <LogTable
          usersState={usersState}
          logState={logState}
          eventLog={eventLog}
          deleteItemLog={deleteItemLog}
          changeNameLog={changeNameLog}
          changeEventLog={changeEventLog}
          changeTimeLog={changeTimeLog}
        />
      </Grid>
    </div>
  );
}

export default App;
