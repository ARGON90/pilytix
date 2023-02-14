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
    let res = [
        { strength: "strong-", "strong-": 0, "strong-Color": "hsl(189, 70%, 50%)", messages: [] },
        { strength: "medium-", "medium-": 0, "medium-Color": "hsl(189, 70%, 50%)", messages: [] },
        { strength: "weak-", "weak-": 0, "weak-Color": "hsl(189, 70%, 50%)", messages: [] },
        { strength: "weak+", "weak+": 0, "weak+Color": "hsl(189, 70%, 50%)", messages: [] },
        { strength: "medium", "medium+": 0, "medium+Color": "hsl(189, 70%, 50%)", messages: [] },
        { strength: "strong+", "strong+": 0, "strong+Color": "hsl(189, 70%, 50%)", messages: [] }
    ]

    if (increasing) {
        increasing.map((item) => {
            const weight = item.weight.value;
            if (weight === 1) {
                res[3]["weak+"]++;
                res[3].messages.push(item.message);
            } else if (weight === 2) {
                res[4]["medium+"]++;
                res[4].messages.push(item.message);
            } else {
                res[5]["strong+"]++;
                res[5].messages.push(item.message);
            }
        })
    }

    if (decreasing) {
        decreasing.map((item) => {
            const weight = item.weight.value;
            if (weight === -1) {
                res[2]["weak-"]++
                res[2].messages.push(item.message);
            } else if (weight === -2) {
                res[1]["medium-"]++
                res[1].messages.push(item.message);
            } else {
                res[0]["strong-"]++
                res[0].messages.push(item.message);
            }
        })
    }
    console.log(increasing)
    return res;
}
