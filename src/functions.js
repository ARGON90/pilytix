import { CleaningServices } from "@mui/icons-material"

export function formatProbabilities(history) {
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
        result[0].data.push({ x: item.daysAgo, y: item.repProb })
        result[1].data.push({ x: item.daysAgo, y: (probabilityDifference) })
    })
    return result;
}

export function factorsAffectingProbability(increasing, decreasing) {
    let res =[
        { strength: "strong-", "strong-": 0, "strong-Color": "hsl(189, 70%, 50%)" },
        { strength: "medium-", "medium-": 0, "medium-Color": "hsl(189, 70%, 50%)" },
        { strength: "weak-", "weak-": 0, "weak-Color": "hsl(189, 70%, 50%)" },
        { strength: "weak+", "weak+": 0, "weak+Color": "hsl(189, 70%, 50%)" },
        { strength: "medium", "medium+": 0, "medium+Color": "hsl(189, 70%, 50%)" },
        { strength: "strong+", "strong+": 0, "strong+Color": "hsl(189, 70%, 50%)" }
    ]


    increasing.map((item) => {
        const weight = item.weight.value;
        if (weight === 1) {
            res[3]["weak+"]++;
        } else if (weight === 2) {
            res[4]["medium+"]++;
        } else {
            res[5]["strong+"]++;
        }

    })
    decreasing.map((item) => {
        const weight = item.weight.value;
        if (weight === -1) {
            res[2]["weak-"]++
        } else if (weight === -2) {
            res[1]["medium-"]++
        } else {
            res[0]["strong-"]++
        }
    })
    return res;
}
