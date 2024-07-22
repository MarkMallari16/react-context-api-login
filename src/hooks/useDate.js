
const useDate = () => {
    const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st'
            case 2: return 'nd'
            case 3: return 'rd'
            default: return 'th';
        }
    }
    const formatDate = (date) => {
        const day = date.getDate();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getMonth()].slice(0,3);
        const ordinalSuffix = getOrdinalSuffix(day);
        const year = date.getFullYear();

        return `${day}${ordinalSuffix} ${month} ${year}`
    }

    const date = new Date();
    const formattedDate = formatDate(date);

    return { formattedDate };
}

export default useDate