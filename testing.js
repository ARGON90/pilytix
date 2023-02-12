const data = {"pilytixFactorsIncreasingWin": [
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
],
    "pilytixFactorsDecreasingWin": [
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
};

function factorsAffectingProbability(data) {
    let res = {

    }


}

// console.log(factorsAffectingProbability(data));


let format = {
    strongPositive: ['message1', 'message2'],
    mediumPositive: ['message1', 'message2'],
    weakPositive: ['message1', 'message2'],
    strongNegative: ['message1', 'message2'],
    mediumNegative: ['message1', 'message2'],
    weakNegative: ['message1', 'message2'],


}

console.log(format.strongPositive.length)
