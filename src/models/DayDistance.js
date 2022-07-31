import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';


class DayDistance {
    static propTypes = {
        id: PropTypes.string,
        date: PropTypes.date,
        distance: PropTypes.number,
    }

    constructor (id = nanoid(), date = new Date(), distance = 0) {
        this.id = id;
        this.date = date;
        this.distance = +distance;
    }
}

export default DayDistance;

