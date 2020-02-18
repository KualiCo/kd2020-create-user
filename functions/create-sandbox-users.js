'use strict'

const { default: axios } = require('axios')

const { KUALI_HOST, EMAIL_KEY, PASSWORD } = process.env

exports.handler = async (event, context) => {
  const { authorization } = event.headers
  if (!authorization) return { statusCode: 401 }
  const token = authorization.replace(/^bearer\s+/i, '')
  if (!token) return { statusCode: 401 }
  const body = JSON.parse(event.body)
  const email = body[EMAIL_KEY]
  const createUserURL = `${KUALI_HOST}/api/v1/users`
  const user = {
    email,
    password: PASSWORD
  }
  const headers = {
    Authorization: `Bearer ${token}`
  }
  const response = await axios.post(createUserURL, user, { headers })
  return {
    statusCode: 200,
    body: 'ok'
  }
}