import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem/HistoryItem';

function History(props) {
    const {history, header, onDelete: handleDelete} = props;


const handleEdit = (evt) => {
    // @todo handle edition
    console.log('handleEdit');
}

  return (
    <table>
        <thead>
            <tr>
                {header.map((item, index) => <th key={index}>{item}</th>)}
            </tr>
        </thead>
        <tbody>
            {history.map((item) => <HistoryItem key={item.id} item={item} onEdit={handleEdit} onDelete={handleDelete}/>)}
        </tbody>
    </table>
  )
}

History.defaultProps = {
    header: ['Дата (ДД.ММ.ГГГГ)', 'Пройдено, км', 'Действия']
}


History.propTypes = {
    history: PropTypes.instanceOf(Array),
    header: PropTypes.instanceOf(Array),
}

export default History
