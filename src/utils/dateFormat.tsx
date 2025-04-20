function dateFormat(str: string): string {
    const date = new Date(str)
    const dateFormatted = new Intl.DateTimeFormat('en-GB', {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(date)

    return dateFormatted
}

function toPercent(num : number): string {
    return Math.round(num * 100) + '%'
}

export default {
    dateFormat,
    toPercent
}
