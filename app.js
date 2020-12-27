require('dotenv').config();
const AWS = require('aws-sdk');

const sns = new AWS.SNS({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    apiVersion: '2010-03-31'
});

const smsParams = {
    Message: 'Hooray! You are reading SMS message sent by AWS SNS service.',
    PhoneNumber: process.env.TARGET_PHONE_NUMBER,
    MessageAttributes: {
        'AWS.SNS.SMS.SenderID': {
            'DataType': 'String',
            'StringValue': process.env.SMS_FROM || '15556667777'
        },
        'AWS.SNS.SMS.SMSType': {
            'DataType': 'String',
            'StringValue': process.env.AWS_SNS_SMS_TYPE || 'Transactional'
        }
    }
};

const publishTextPromise = sns.publish(smsParams).promise();

publishTextPromise
    .then(data => console.log(data))
    .catch(err => console.log(JSON.stringify({ Error: err })));
