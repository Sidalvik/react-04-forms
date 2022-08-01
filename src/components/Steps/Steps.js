import React from 'react';
import PropTypes from 'prop-types';
import './Steps.css';
import History from './History/History';
import NewStep from './NewStep/NewStep';
import DayDistance from '../../models/DayDistance';

function Steps(props) {
    const initHistory = [
        new DayDistance(new Date('01.01.2022'), 10),
        new DayDistance(new Date('10.01.2022'), 1.5),
        new DayDistance(new Date('01.06.2022'), 13),
    ]

    const sortingFunc  = (a, b) => (b.date - a.date);
    
    const [history, setHistory] = React.useState(initHistory.sort(sortingFunc));
    
    const [newStep, setStep] = React.useState({date: '', distance: '0',});

    const addHistory = (date, distance) => {
        setHistory((prevHistory) => {
            let result  = [...prevHistory];
            let index = prevHistory.findIndex((item) => (item.date.toLocaleDateString() === date.toLocaleDateString()));
            if (index === -1) {
                result.push(new DayDistance(date, distance));
            } else {
                result[index].distance += +distance;
            }

            return result.sort(sortingFunc);
        });
    }

    const deleteHistory = (id) => {
        setHistory((prevHistory) => prevHistory.filter((item) => item.id !== id));
    }

    const editHistory = (id) => {
        let  editItem = history.find((item) => item.id === id);

        setStep(() => ({
            date: editItem.date4html(),
            distance: editItem.distance.toString()
        }));

        deleteHistory(id);
    }


  return (
    <div className='Steps'>
        <NewStep newStep={newStep} setStep={setStep} addHistory={addHistory}/>
        <History history={history} onDelete={deleteHistory} onEdit={editHistory}/>
    </div>
  )
}

Steps.propTypes = {
    props: PropTypes.any,
}

export default Steps
