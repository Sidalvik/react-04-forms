import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputDate from './InputDate/InputDate';
import InputDistance from './InputDistance/InputDistance';
import SubmitButton from './SubmitButton/SubmitButton';


function NewStep(props) {
    const {addHistory} = props;

    const clearForm = {
        date: '',
        distance: 0,
    }

    const [step, setStep] = useState(clearForm);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!step.date) {
            return;
        }

        addHistory(new Date(step.date), Number(step.distance));
        setStep(clearForm);
    }

    const handelChange = (evt) => {
        const {type, name, value} = evt.target;
        setStep((prevStep) => ({...prevStep, [name]: value}));
    }

  return (
    <form onSubmit={handleSubmit}>
        <InputDate date={step.date} onChange = {handelChange}/>
        <InputDistance distance={step.distance} onChange = {handelChange}/>
        <SubmitButton/>
    </form>
  )
}

NewStep.propTypes = {
    addHistory: PropTypes.func.isRequired,
}


export default NewStep
