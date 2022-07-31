import React from 'react';
import PropTypes from 'prop-types';
import './Steps.css';
import History from './History/History';
import NewStep from './NewStep/NewStep';
import DayDistance from '../../models/DayDistance';
import { nanoid } from 'nanoid';

function Steps(props) {
    const initHistory = [
        new DayDistance(nanoid(), new Date('01.01.2022'), 10),
        new DayDistance(nanoid(), new Date('10.01.2022'), 1.5),
        new DayDistance(nanoid(), new Date('01.06.2022'), 13),
        new DayDistance(),
    ]

    const [history, setHistory] = React.useState(initHistory);

    const addHistory = (date, distance) => {
        console.log('addHistory');
        console.log(date);
        setHistory((prevHistory) => {
            let result;
            console.log(prevHistory);

            let index = prevHistory.findIndex((item) => (item.date - date) === 0);
            console.log('index = ' + index);
            if (index === -1) {
                result = [...prevHistory, new DayDistance(nanoid(), date, distance)]
            } else {
                result = [...prevHistory];
                result[index].distance += +distance;
                // result = prevHistory.map((item, idx) => new DayDistance(item.id, item.date, item.distance + idx === index ? distance : 0))
            }
            result.sort((a, b) => Math.sign(b.date - a.date));
            return result;
        });

    }

    const deleteHistory = (id) => {
        setHistory((prevHistory) => prevHistory.filter((item) => item.id !== id));
    }

    const editHistory = () => {
        console.log('editHistory');
    }

  return (
    <div className='Steps'>
        <NewStep addHistory={addHistory}/>
        <History history={history} onDelete={deleteHistory}/>
    </div>
  )
}

Steps.propTypes = {
    props: PropTypes.any,
}

export default Steps
