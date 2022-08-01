import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';


class DayDistance {
    static propTypes = {
        id: PropTypes.string,
        date: PropTypes.date,
        distance: PropTypes.number,
    }

    constructor (date = new Date(), distance = 0, id = nanoid()) {
        this.id = id;
        this.date = date instanceof Date ? date : new Date(date);
        this.distance = Number.isNaN(distance) ? 0 : Number(distance);
    }

    date4html() {
        if (!(this.date instanceof Date)) return;
        const add0 = (a) => a < 10 ? '0' + a.toString() : a.toString();

        let year = this.date.getFullYear().toString();
        let month = this.date.getMonth() + 1;
        let day = this.date.getDate();
        return `${year}-${add0(month)}-${add0(day)}`;
    }
}


export default DayDistance;
