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

export const colorCodes = {
    "&0": "#000000",
    "&1": "#4169E1",
    "&2": "#88b52d",
    "&3": "#00AAAA",
    "&4": "#AA0000",
    "&5": "#AA00AA",
    "&6": "#FFAA00",
    "&7": "#AAAAAA",
    "&8": "#555555",
    "&9": "#5555FF",
    "&a": "#55FF55",
    "&b": "#55FFFF",
    "&c": "#FF5555",
    "&d": "#FF55FF",
    "&e": "#FFFF55",
    "&f": "#FFFFFF",
}
