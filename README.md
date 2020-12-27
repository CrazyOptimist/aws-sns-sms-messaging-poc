# AWS SNS SMS Messaging POC

## How to use
```bash
npm i
cp env.example .env
```
Edit your .env file and run the app
```bash
npm start
```

## Good to know
In your dotenv file, `AWS_SNS_SMS_TYPE` can be `Promotional` or `Transactional`.  
`Promotional` is cheaper & less reliable and `Transactional` is more expensive & more reliable, according to aws documentation.  
As far as I experienced, `Transactional` can even deliver SMS to VOIP numbers while `Promotional` can't.  
What to choose is up to your reference.  
Hope you find this helpful! :star::sunglasses:  

## LICENSE
MIT  
Created by [CrazyOptimist](https://crazyoptimist.net) with :heart:  
Dec 27, 2020
