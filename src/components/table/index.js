import React from 'react';
import moment from 'moment';
import './Table.scss';

const renderHeders = headers => 
  <div className="Table-row Table-row--main Table-row--dark">
    { headers.map(item => <div className="Table-column">{ item }</div>) }
  </div>;

const renderData = data => data.map((item, index) => {
  const { amount, date, card_last_four } = item;
  const classColumn = !Object.is(index, data.length - 1) ? 'Table-row' : 'Table-row Table-row--last';
  
  return (
    <div className={ classColumn }>
      <div className="Table-column">{ amount }</div>
      <div className="Table-column">{ date }</div>
      <div className="Table-column"> { card_last_four }</div>
    </div>
  );
});

const Table = props => {
  const { headers, data } = props;

  return (
    <div className="Table">
      <div className="Table-header">
        { renderHeders(headers) }
      </div>
      <div className="Table-content">
        { renderData(data) }
      </div>
    </div>
  );

}

export default Table;