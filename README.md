# aws-server-less-boilerplate-nodejs
This a simple boilerplate for deploying a NodeJS application in AWS server less service (Lambda function)

### Prerequisites
Install and configure the Serverless Framework

```
$ npm install -g serverless
```

Configure Serverless Framework with your AWS credentials

```
$ sls config credentials --provider aws --key PUBLIC_KEY --secret SECRET_KEY
```

### Install dependencies

```
npm install
```
### Deployment

```
$ sls deploy --stage dev
```
### Varibles and environment

You can add more variables in secrets.json and declare them in serverless.yml file