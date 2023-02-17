import { Star, StarBorder } from "@mui/icons-material"
import InsertChartIcon from '@mui/icons-material/InsertChart';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import DiamondIcon from '@mui/icons-material/Diamond';

//misc functions here to save space in componenets

export function returnStars(string, view) {
    let starNumber = Number(string[0]);
    let result = [];
    while (starNumber > 0) {
        result.push(<Star className="star" />)
        starNumber --
    }
    if (view !== 'table') {
        while (result.length < 5) {
            result.push(<StarBorder className="star" />)
        }
    }
    return result
}

export function formatProbabilities(history) {
    let result = [
        {
            id: "Sales Rep",
            color: "hsl(226, 70%, 50%)",
            data: []
        },
        {
            id: "Pilytix",
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

export function nivoBarYAxis(data) {
    let maxYAxis = 0;
    for (let key in data) {
        let currentData = data[key]
        let msgLength = currentData.messages.length
        maxYAxis = Math.max(maxYAxis, msgLength)
    }
    return maxYAxis
}

export function nivoProbabilities(num) {
    return [
        {
            "id": "",
            "data": [
                {
                    "x": "",
                    "y": num
                },
            ]
        },
    ]
}

export function percentageColor(num) {
    const roundedDownNum =  Math.floor(num / 10) * 10;
    const colorsObject = {
        0: '#CA191D',
        10: '#D13639',
        20: '#D75356',
        30: '#DE6F72',
        40: '#E58C8E',
        50: '#9FC8B0',
        60: '#80B695',
        70: '#60A47B',
        80: '#409261',
        90: '#207f46',
        100: '#006D2C'

    }
    return colorsObject[roundedDownNum]
}

export function planIcons(plan) {
    const iconMap = {
        'Mini-Plan' : <InsertChartIcon />,
        'Half Season' : <HourglassBottomIcon />,
        'Full Season' : <HourglassFullIcon />,
        'Suite' : <DiamondIcon />
    }
    return iconMap[plan]
}
