import React from 'react'
import PropTypes from 'prop-types'

function DeleteButton(props) {
    const {onClick: handleDelete} = props;

  return (
    <button onClick = {handleDelete}>✘</button>
  )
}

DeleteButton.propTypes = {
    handleDelete: PropTypes.func.isRequired,
}


export default DeleteButton
