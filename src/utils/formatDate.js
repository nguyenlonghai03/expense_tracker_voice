const formatDate = (date) => {
    const d = new Date(date);
    let day = `${d.getDate()}`;
    let month = `${d.getMonth()}`;
    const year = d.getFullYear();

    // 2-> 02, 1=> 01
    if (month.length < 2) {
        month = `0${month}`;
    }

    if (day.length < 2) {
        day = `0${day}`;
    }

    return [year, month, day].join('-');
}

export default formatDate

