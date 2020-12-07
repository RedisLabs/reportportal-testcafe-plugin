
const axios = require('axios');

class API {

    constructor (options) {
        this.client = axios.create({
            baseURL: `${options.protocol}://${options.domain}${options.apiPath}`,
            headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${options.token}` }
        });
        this.debug = options.debug;
    }

    async checkConnect () {
        try {
            return this.handleResponse(await this.client.get('/user'));
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    }

    async createLaunch (projectName, options) {
        try {
            return this.handleResponse(await this.client.post(`/${projectName}/launch`, options));
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    }

    async finishLaunch (projectName, launchId, options) {
        try {
            return this.handleResponse(await this.client.put(`/${projectName}/launch/${launchId}/finish`, options));
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    }

    async forceStopLaunch (projectName, launchId, options) {
        try {
            return this.handleResponse(await this.client.put(`/${projectName}/launch/${launchId}/stop`, options));
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    }

    async createTestItem (projectName, options) {
        try {
            return this.handleResponse(await this.client.post(`/${projectName}/item`, options));
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    }

    async createChildTestItem (projectName, parentItem, options) {
        try {
            return this.handleResponse(await this.client.post(`/${projectName}/item/${parentItem}`, options));
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    }

    async finishTestItem (projectName, testItemId, options) {
        try {
            return this.handleResponse(await this.client.put(`/${projectName}/item/${testItemId}`, options));
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    }

    async sendLog (projectName, options) {
        try {
            return this.handleResponse(await this.client.post(`/${projectName}/log`, options));
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    }

    now () {
        return new Date().valueOf();
    }

    handleResponse (response) {
        return response.data;
    }

    log (level, message) {
        if (level === 'info')
            console.log(message);
        if (level === 'debug')
            console.debug(message);
        if (level === 'error')
            console.error(message);
    }
}

module.exports = API;
