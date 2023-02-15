import { Star, StarBorder } from "@mui/icons-material"


export function returnStars(string) {
    let starNumber = Number(string[0]);
    let result = [];
    while (starNumber > 0) {
        result.push(<Star />)
        starNumber --
    }
    while (result.length < 5) {
        result.push(<StarBorder />)
    }
    return result
}

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
    let res = {
        strongN: { strength: "strong-", "strong-": 0, "strong-Color": "hsl(189, 70%, 50%)", messages: [] },
        mediumN: { strength: "medium-", "medium-": 0, "medium-Color": "hsl(189, 70%, 50%)", messages: [] },
        weakN: { strength: "weak-", "weak-": 0, "weak-Color": "hsl(189, 70%, 50%)", messages: [] },
        weakP: { strength: "weak+", "weak+": 0, "weak+Color": "hsl(189, 70%, 50%)", messages: [] },
        mediumP: { strength: "medium", "medium+": 0, "medium+Color": "hsl(189, 70%, 50%)", messages: [] },
        strongP: { strength: "strong+", "strong+": 0, "strong+Color": "hsl(189, 70%, 50%)", messages: [] }
    }

    if (increasing) {
        increasing.map((item) => {
            const weight = item.weight.value;
            if (weight === 1) {
                res.weakP["weak+"]++;
                res.weakP.messages.push(item.message);
            } else if (weight === 2) {
                res.mediumP["medium+"]++;
                res.mediumP.messages.push(item.message);
            } else {
                res.strongP["strong+"]++;
                res.strongP.messages.push(item.message);
            }
        })
    }
    if (decreasing) {
        decreasing.map((item) => {
            const weight = item.weight.value;
            if (weight === -1) {
                res.weakN["weak-"]++
                res.weakN.messages.push(item.message);
            } else if (weight === -2) {
                res.mediumN["medium-"]++
                res.mediumN.messages.push(item.message);
            } else {
                res.strongN["strong-"]++
                res.strongN.messages.push(item.message);
            }
        })
    }
    return res;
}
