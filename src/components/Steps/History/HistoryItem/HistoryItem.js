import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton/DeleteButton';
import EditButton from './EditButton/EditButton';
import DayDistance from '../../../../models/DayDistance';

function HistoryItem(props) {
    const {item, onEdit: handleEdit, onDelete: handleDelete} = props;
  return (
    <tr>
        <td>{item.date?.toLocaleDateString()}</td>
        <td>{item.distance.toFixed(2)}</td>
        <td>
            <EditButton onClick={() => handleEdit(item.id)}/>
            <DeleteButton onClick={() => handleDelete(item.id)}/>
        </td>

    </tr>
  )
}

HistoryItem.propTypes = {
    item: PropTypes.instanceOf(DayDistance).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}


export default HistoryItem
