export function formatMillisecondsToTime(duration: number, text = false, long = false): string | number {
    const minutes = Math.floor((duration / (1000 * 60)) % 60)
    const hours = Math.floor((duration / (1000 * 60 * 60)));

    if (text) {
        if (!long) {
            return `${hours ? (hours + " hrs") : ""} ${minutes ? (minutes + " min"): ""}`
        }
        const hoursText = `${hours} Hour${hours !== 1 ? "s": ""}`
        const minutesText = `${minutes} Minute${minutes !== 1 ? "s" : ""}`
        return `${hours ? hoursText : ""} ${minutes ? minutesText: ""}`
    }

    return hours;
}

export function formatMoney(number: number): string {
    const formattedMoney = (number).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    return formattedMoney.substring(0, formattedMoney.length - 2);
}

export function formatSeasonName(name: string): string {
    return name.replace(/_/g, ' ');
}

export function getPassedTime(date: Date): string | number {
    const now = new Date()
    const dif = Math.abs(now.getTime() - date.getTime())
    return formatMillisecondsToTime(dif, true, false)
}

export function formatDateToTime(date: Date, withSeconds = false): string {
    const hours = date.getHours().toString()
    const minutes = date.getUTCMinutes().toString()
    const seconds = date.getSeconds().toString()

    const formattedHours = `${hours.length === 1 ? '0' : ''}${hours}`
    const formattedMinutes = `${minutes.length === 1 ? '0' : ''}${minutes}`
    const formattedSeconds = `${seconds.length === 1 ? '0' : ''}${seconds}`

    if (!withSeconds) {
        return `${formattedHours}:${formattedMinutes}`
    }
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}
