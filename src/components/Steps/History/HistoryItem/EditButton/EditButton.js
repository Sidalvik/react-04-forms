import React from 'react';
import PropTypes from 'prop-types';

function EditButton(props) {
    const {onClick: handleEdit} = props;
  return (
    <button onClick={handleEdit}>✎</button>
  )
}

EditButton.propTypes = {
    handleEdit: PropTypes.func.isRequired,
}

export default EditButton
