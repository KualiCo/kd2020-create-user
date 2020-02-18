# create-user-integration

A netlify function to create a user on a Kuali Build workflow step.

## Prerequistes

- A [netlify](netlify.com) account
- A Build App that has at least an "Email" field and a "Short Text" field that will represent the user's display name

For local development:

- [nodejs](https://nodejs.org/en/)

## Setup

Once you have a netlify account, you'll need to create a new site from git
(make sure you have forked this repo to your own account). Connect your git
provider, select the repo where you host this. When it asks you for environment
variables, you'll need to set up the following options:

- `KUALI_HOST` - The host of the Kuali tenant to create the users for. e.g. `https://monsters.kuali.co`
- `EMAIL_KEY` - The key for your email field on your form (under advanced configuration for the gadget)
- `NAME_KEY` - The key for the name field on your form (under advanced configuration for the gadget)
- `PASSWORD` - The password to set for the user. e.g. `kd2020build`

In addition to those options, you'll need to create an API token for an "admin"
user in your environment at `KUALI_HOST` that will be responsible for creating
users through the Kuali APIs.

Once that's done, you'll be given a host where your netlify app is hosted. The
URL you'll need to put into your integration will be something like:

`https://{your-netlify-app-domain}.netlify.com/.netlify/functions/create-user`

Next, you'll need to create a System API integration in your Kuali Build
environment.

- **Type of Integration**: Send Data
- **HTTP Method**: POST
- **Integration URL**: http://{your-netlify-app-domain}.netlify.com/.netlify/functions/create-user
- **Authentication Type**: Bearer Authentication
- **API Key Header**: Authorization
- **API Key**: {your API token}

Once that's configured, you should be able to add the integration step in your
workflow and select the integration that you just created, and you should be
set!
