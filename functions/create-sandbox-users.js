'use strict'

const { default: axios } = require('axios')

const { KUALI_ADMIN_TOKEN, KUALI_HOST, EMAIL_KEY, PASSWORD } = process.env

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)
  console.log({ EMAIL_KEY, body })
  const email = body[EMAIL_KEY]
  const createUserURL = `${KUALI_HOST}/api/v1/users`
  const user = {
    email,
    password: PASSWORD
  }
  const headers = {
    Authorization: `Bearer ${KUALI_ADMIN_TOKEN}`
  }
  const response = await axios.post(createUserURL, user, { headers })
  return {
    statusCode: 200,
    body: 'ok'
  }
}
