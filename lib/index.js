const WEDNESDAY = 3;

/**
 * @param date {Date}
 *
 * @return boolean
 */
function isWednesday(date) {
    const dayOfTheWeek = date.getUTCDay();

    return dayOfTheWeek === WEDNESDAY;
}

module.exports = {
    isWednesday
}
