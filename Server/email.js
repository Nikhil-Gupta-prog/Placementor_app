// var postmark = require("postmark");

// // Send an email:
// const client = new postmark.ServerClient( process.env.MAIL || "625bec9c-c8f0-41eb-97a8-42ddbac66d81");

// const sendMail = async (name, mail) => {
//     try {
//     const mssg = `Welcome to Placementor, we are pleased to have you with us ${name}.
// We Know that you are as excited as us and are ready to predict your placements with us.
// We hope that you will have a good time with us..
// Regards:-  Placementor dev team..`
//      const resp = await client.sendEmail({
//         "From": "2018pietcsnikhil100@poornima.org",
//         "To": mail,
//         "Subject": "Welcome To Placementor",
//         "TextBody": mssg,
//         "MessageStream": "outbound"
//       })
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// module.exports = {sendMail};

const mailjet = require ('node-mailjet')
.connect('d98c0f76d2a26de5d5829f1bbee579a8', '154c5611de7d2265f250e66056db5219')


let mailSender = (email,name)=>{
    
    mailjet
    .post("send", {'version': 'v3.1'})
    .request({
    "Messages":[
        {
        "From": {
            "Email": "2018pietcsnikhil100@poornima.org",
            "Name": "Placementor"
        },
        "To": [
            {
            "Email": `${email}`
            }
        ],
        "Subject": "Welcome to Placementor",
        "TextPart": "Final year project",
        "HTMLPart": ` we are pleased to have you with us ${name}.
        We Know that you are as excited as us and are ready to predict your placements with us.
        We hope that you will have a good time with us.. <br/> <br/>
        Regards:-  Placementor dev team... <br/> <br/> `,
        "CustomID": "AppGettingStartedTest"
        }
    ]
    })
}

module.exports=mailSender;
