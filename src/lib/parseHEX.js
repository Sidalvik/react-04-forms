import PropTypes from 'prop-types';

export const parseHEX = (hex) => {
    const checkFormat = (hexString) => {
            const regular =  /^#[0-9A-Fa-f]{6}/;
            return regular.test(hexString);
        }
    
    if (!checkFormat(hex)) {
        return false;
    } else {
        let result = [];
        for (let i = 0; i < hex.length - 1; i += 2) {
            let subHex = hex.slice(1 + i, 3 + i)
            result.push(parseInt(subHex, 16));
        }
        return  result;
    }
}
    
parseHEX.propTypes = {
    hex: PropTypes.string,
}