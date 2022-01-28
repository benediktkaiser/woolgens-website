import {Land} from "../additional";

const DemoLand: Land = {
    "bank": {
        "balance": 19149,
        "transactions": [
            {
                "amount": 29000,
                "issuer": "CalypsoKunde",
                "timestamp": 1643230689136,
                "type": "DEPOSIT"
            },
            {
                "amount": 10000,
                "issuer": "CalypsoKunde",
                "timestamp": 1643230705994,
                "type": "BUY_UPGRADE"
            },
            {
                "amount": 3000,
                "issuer": "CalypsoKunde",
                "timestamp": 1643230710443,
                "type": "BUY_UPGRADE"
            },
            {
                "amount": 6000,
                "issuer": "CalypsoKunde",
                "timestamp": 1643230710918,
                "type": "BUY_UPGRADE"
            },
            {
                "amount": 9000,
                "issuer": "CalypsoKunde",
                "timestamp": 1643230711078,
                "type": "BUY_UPGRADE"
            },
            {
                "amount": 18149,
                "issuer": "CalypsoKunde",
                "timestamp": 1643238505035,
                "type": "DEPOSIT"
            }
        ]
    },
    "chunks": [],
    "id": "myland",
    "invites": [
        "fb72b90f-a97b-464d-b5c2-263a56bceddb",
        "6fc34392-2261-4c1b-be56-9b34e7b8d8f0"
    ],
    "members": {},
    "name": "Myland",
    "owner": {
        "name": "CalypsoKunde",
        "role": "owner",
        "uuid": "b2d820fe-3777-4a00-a792-f0d91a33c7b7"
    },
    "registered": 1642364563518,
    "roles": {
        "member": {
            "color": "LIME",
            "defaultRole": true,
            "name": "Member",
            "permissions": [],
            "priority": 0
        }
    },
    "upgrades": {
        "MEMBERS": 3,
        "ROLES": 1
    }
}

export default DemoLand
