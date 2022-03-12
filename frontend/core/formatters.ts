export function formatMillisecondsToTime(duration: number, text = false, long = false): string | number {
    const minutes = Math.floor((duration / (1000 * 60)) % 60)
    const hours = Math.floor((duration / (1000 * 60 * 60)));

    if (text) {
        if (!long) {
            return `${hours ? (hours + " hrs") : ""} ${minutes ? (minutes + " min") : ""}`
        }
        const hoursText = `${hours} Hour${hours !== 1 ? "s" : ""}`
        const minutesText = `${minutes} Minute${minutes !== 1 ? "s" : ""}`
        return `${hours ? hoursText : ""} ${minutes ? minutesText : ""}`
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

export function formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

export function timeSince(date: Date): string {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let intervalType;

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                    intervalType = "hour";
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "minute";
                    } else {
                        interval = seconds;
                        intervalType = "second";
                    }
                }
            }
        }
    }

    if (interval !== 1 && interval !== -1) {
        intervalType += 's';
    }

    if (interval < 0) {
        return `in ${Math.abs(interval)} ${intervalType}`
    }

    return `${Math.abs(interval)} ${intervalType} ago`
}
