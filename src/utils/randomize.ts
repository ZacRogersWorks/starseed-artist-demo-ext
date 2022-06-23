const randomize = (currentAmount: number, lastWeekTotal:number, returnPercent:boolean): number => {
    const range = (currentAmount - lastWeekTotal) / 10

    if (returnPercent) {
        console.log('PERCENTAGE MINED', Math.round((range / 10) * 100) / 100)
        return Math.round((range / 10) * 100) / 100
    }
    if (currentAmount < 10) {
        return Math.round(((Math.random() * range)+ Number.EPSILON) * 1000) / 1000
    }
    if ((currentAmount % 1) === 0 ) {
        return Math.round((Math.random() * range) + Number.EPSILON)
    } 
    if (currentAmount > 1000) {
        const smallerRange = (Math.random() * range) / 1000
        console.log('Tokens Mined', (Math.round((smallerRange + Number.EPSILON) * 100) / 100))
        return (Math.round((smallerRange + Number.EPSILON) * 100) / 100)
    }
    else {
        return Math.round(((Math.random() * range) + Number.EPSILON) * 100) / 100
    }
}

export default randomize