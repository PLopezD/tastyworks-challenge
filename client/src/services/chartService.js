class ChartService {
    cleanData(data) {
        const cleanData = []
        data.map(row => {
            let temp = []
            temp.push(row.date)
            temp.push(row.low)
            temp.push(row.open)
            temp.push(row.close)
            temp.push(row.high)
            cleanData.push(temp)
        })
        return cleanData
    }
    
}

export default new ChartService()