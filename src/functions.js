function formatProbabilities(history) {
    let result = [
        {
            id: "Rep",
            color: "hsl(226, 70%, 50%)",
            data: []
        },
        {
            id: "PILYTIX",
            color: "hsl(84, 70%, 50%)",
            data: []
        }
    ]

    history.forEach((item) => {
        const probabilityDifference = item.pilytixProb - item.repProb
        result[0].data.push({x: item.daysAgo, y: item.repProb  })
        result[1].data.push({x: item.daysAgo, y: (probabilityDifference) })
    })
    return result;
}

export default formatProbabilities;
