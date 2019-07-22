import { v4 } from 'uuid';

const transactions = [
  { amount: 112.98, date: '27-01-2018T12:34', card_last_four: '2544' },
  { amount: 0.45, date: '01-12-2017T09:36', card_last_four: '4434' },
  { amount: 95.99, date: '23-11-2017T14:34', card_last_four: '3011' },
  { amount: 7774.32, date: '17-07-2017T03:34', card_last_four: '6051' },
  { amount: 1345.98, date: '22-06-2017T10:33', card_last_four: '0059' },
  { amount: 2850.70, date: '27-01-2018T12:34', card_last_four: '4444' },
  { amount: 45.00, date: '10-02-2018T02:34', card_last_four: '0110' },
  { amount: 1.00, date: '17-02-2018T18:34', card_last_four: '1669' },
  { amount: 4.69, date: '01-02-2018T02:34', card_last_four: '8488' },
  { amount: 1111.11, date: '15-01-2018T21:34', card_last_four: '9912' }
];

const normalizeTransactions = data => data.map(item => {
  const { date } = item;
  const dateDate = date.substring(0, date.indexOf("T"));
  const dateTime = date.substring(date.indexOf("T") + 1);
  const dateDateReverse = dateDate.split('-').reverse().join('-');
  const newDate = `${ dateDateReverse }T${ dateTime }`;
  const momentDate = new Date(newDate);
  
  return { ...item, momentDate, key: v4() };
});

export const headers = [ 'AMOUNT', 'DATE', 'CARD' ];
export const transactionsSortedByDate = normalizeTransactions(transactions).sort((a, b) => a.momentDate - b.momentDate);