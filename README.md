# kd2020-sandbox-users

A netlify function to create a user on a Kuali Build workflow step.

You'll need to setup the following environment variables in the netlify
deployment configuration screen.

- `KUALI_HOST` - The host of the Kuali tenant to create the users for. e.g. `https://monsters.kuali.co`
- `EMAIL_KEY` - The key for your email field on your form (under advanced configuration for the gadget)
- `NAME_KEY` - The key for the name field on your form (under advanced configuration for the gadget)
- `PASSWORD` - The password to set for the user. e.g. `kd2020build`

When you create the integration in Build, you'll need to use the host that
netlify gives you, plus the path to the function. e.g. `https://your-netlify-app-domain.netlify.com/.netlify/functions/create-sandbox-users`

You'll also need to create an API token in your target instance from a user
that is an `admin` (as those are the only users that have access to create users
with emails and passwords).
