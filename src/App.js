import React, { useState } from 'react';
import Table from './components/table';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './App.scss';
import { transactionsSortedByDate, headers } from './app-data';

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: '2em',
  },
}));

const filterTransactions = value => transactionsSortedByDate.filter(item => {
  const { amount, date, card_last_four } = item;

  return amount.toString().includes(value) || date.includes(value) || card_last_four.includes(value);
});

const App = () => {
  const [ transactions, setTransactions ] = useState(transactionsSortedByDate);
  const handleOnChange = e => setTransactions(filterTransactions(e.target.value));
  const classes = useStyles();

  return (
    <div className="App">
      <TextField
        label="Search"
        onChange={ handleOnChange }
        className={ classes.textField }
      />
      <Table headers={ headers } data={ transactions } />
    </div>
  );
}

export default App;
