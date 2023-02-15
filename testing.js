const increasing = [
    {
        "name": "Product",
        "message": "Rep's history with \"Suite\" deals",
        "weight": {
            "value": 1,
            "description": "Weak Positive"
        }
    },
    {
        "name": "Age",
        "message": "History of similar deals at 29 days old",
        "weight": {
            "value": 1,
            "description": "Weak Positive"
        }
    },
    {
        "name": "Last Activity",
        "message": "Rep last reached out to the customer 1 day ago",
        "weight": {
            "value": 3,
            "description": "Strong Positive"
        }
    },
    {
        "name": "Distance to Stadium",
        "message": "Customer's main address is 32 miles from stadium",
        "weight": {
            "value": 1,
            "description": "Weak Positive"
        }
    },
    {
        "name": "Marketing Emails",
        "message": "Customer has opened 3 emails sent in the last 6 months",
        "weight": {
            "value": 2,
            "description": "Medium Positive"
        }
    },
    {
        "name": "Inbound Emails",
        "message": "Customer has sent the sales team 2 emails",
        "weight": {
            "value": 3,
            "description": "Strong Positive"
        }
    },
    {
        "name": "Calls Logged",
        "message": "Rep's historical success with deals with 2 logged phone calls",
        "weight": {
            "value": 2,
            "description": "Medium Positive"
        }
    },
    {
        "name": "Last Purchase Date",
        "message": "Customer's last purchase was 191 days ago",
        "weight": {
            "value": 1,
            "description": "Weak Positive"
        }
    },
    {
        "name": "Account Profile",
        "message": "Rep's history with mid-sized B2B customers",
        "weight": {
            "value": 1,
            "description": "Weak Positive"
        }
    },
    {
        "name": "Account Industry",
        "message": "Rep's history with B2B customers in Services",
        "weight": {
            "value": 2,
            "description": "Medium Positive"
        }
    }
]
const decreasing = [
    {
        "name": "Amount",
        "message": "Rep's history working on deals similar in value to $68,989",
        "weight": {
            "value": -1,
            "description": "Weak Negative"
        }
    },
    {
        "name": "Stage",
        "message": "Rep's tendency to close similar deals in stage \"3. Initial Conversation\"",
        "weight": {
            "value": -2,
            "description": "Medium Negative"
        }
    },
    {
        "name": "Lead Source",
        "message": "Team's historical success with \"Single Game Buyer\" leads",
        "weight": {
            "value": -2,
            "description": "Medium Negative"
        }
    },
    {
        "name": "Lifetime Ticket Spend",
        "message": "Customer's total team spend is $161",
        "weight": {
            "value": -2,
            "description": "Medium Negative"
        }
    },
    {
        "name": "Pushed Close",
        "message": "Rep has pushed the expected close date 1 time",
        "weight": {
            "value": -3,
            "description": "Strong Negative"
        }
    }
]


function factorsAffecting(increasing, decreasing) {
    let test = {
        strongN: { strength: "strong-", "strong-": 0, "strong-Color": "hsl(189, 70%, 50%)", messages: [] },
        mediumN: { strength: "medium-", "medium-": 0, "medium-Color": "hsl(189, 70%, 50%)", messages: [] },
        weakN: { strength: "weak-", "weak-": 0, "weak-Color": "hsl(189, 70%, 50%)", messages: [] },
        weakP: { strength: "weak+", "weak+": 0, "weak+Color": "hsl(189, 70%, 50%)", messages: [] },
        mediumP: { strength: "medium", "medium+": 0, "medium+Color": "hsl(189, 70%, 50%)", messages: [] },
        strongP: { strength: "strong+", "strong+": 0, "strong+Color": "hsl(189, 70%, 50%)", messages: [] }
    }
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
                test.weakP["weak+"]++;
                test.weakP.messages.push(item.message);
            } else if (weight === 2) {
                test.mediumP["medium+"]++;
                test.mediumP.messages.push(item.message);
            } else  {
                test.strongP["strong+"]++;
                test.strongP.messages.push(item.message);
            }
        })
    }
    if (decreasing) {
        decreasing.map((item) => {
            const weight = item.weight.value;
            if (weight === -1) {
                test.weakN["weak-"]++
                test.weakN.messages.push(item.message);
            } else if (weight === -2) {
                test.mediumN["medium-"]++
                test.mediumN.messages.push(item.message);
            } else {
                test.strongP["strong-"]++
                test.strongP.messages.push(item.message);
            }
        })
    }
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
            res[1].messages.push(item.message);
        }
    })
    console.log(res)
    console.log('--------------')
    return [...Object.values(test)];
}
let data = (factorsAffecting(increasing, decreasing));


console.log(data);
