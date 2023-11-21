

export const generateHistoricalDraw = (totalDays, totalNumbersDrawn) => {
    let drawDetails = []
    let currentDate = new Date()

    const generateNumbers = () => {
        const from = 1
        const to = 11
        let drawResults = []

        Array.from({length: totalNumbersDrawn}, () => {
            drawResults.push(Math.floor(Math.random() * to) + from)
        })
        return drawResults
    }


    Array.from({length: totalDays}, () => {
        drawDetails.push({
            date: currentDate.toISOString().split("T")[0],
            numbers: generateNumbers()
        })

        currentDate.setHours(currentDate.getHours() + 24)
    })

    return drawDetails
}