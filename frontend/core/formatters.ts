export function formatMillisecondsToTime(duration: number, long = false): string | number {
    const minutes = Math.floor((duration / (1000 * 60)) % 60)
    const hours = Math.floor((duration / (1000 * 60 * 60)));

    if (long) {
        return hours + " Hours " + minutes + " Minutes";
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
