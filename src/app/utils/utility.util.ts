export function calculatePercent(value, base) {
    const percent = (value / base) * 100
    return percent.toFixed(2);
}

export function refactorRatioFormat(value) {
    if (typeof value === "string") {
        let valueInNumber = Number(value);
        return valueInNumber.toFixed(2);
    } else {
        return value.toFixed(2)
    }
}
