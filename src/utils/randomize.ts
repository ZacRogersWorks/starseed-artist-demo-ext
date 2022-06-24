const randomize = (currentAmount: number, lastWeekTotal:number, returnPercent:boolean, precision:number): number => {
    const range: number = (currentAmount - lastWeekTotal) / 10
    let result: number = 0

    if (returnPercent) {
        console.log('PERCENTAGE MINED', Math.round((range / 10) * 100) / 100)
        result = Math.round((range / 10) * 100) / 100
    }
    else if (currentAmount < 10) {
        result = Math.round((Math.random() * range) * 1000000) / 1000000
    }
    else if ((currentAmount % 1) === 0 ) {
        result = Math.round((Math.random() * range))
    }
    else if (currentAmount > 1000) {
        const smallerRange = (Math.random() * range) / 1000
        console.log('Tokens Mined', (Math.round((smallerRange) * 100) / 100))
        result = (Math.round((smallerRange + Number.EPSILON) * 100) / 100)
    }
    else {
        result = Math.round(((Math.random() * range)) * 100) / 100
    }
    return +result.toFixed(precision)
}

export default randomize