const request = require('request-promise')
const btoa = require('btoa')
const config = require('../../config/config')

const { issuer, client_id, client_secret, scope } = config

class Client {
    async sendAPIRequest(client = null) {
        let clientId = client_id
        if(client) clientId = client
        const token = btoa(`${clientId}:${client_secret}`)
        try {
            const auth = await request({
                uri: `${issuer}/v1/token`,
                json: true,
                method: 'POST',
                headers: {
                    authorization: `Basic ${token}`
                },
                form: {
                    grant_type: 'client_credentials',
                    scope: scope
                }
            })
            return auth;
        } catch (error) {
            console.log(`Error: ${error.message}`)
            return Promise.reject(error)
        }
    }
}


module.exports = new Client()