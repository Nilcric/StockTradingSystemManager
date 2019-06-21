import axios from 'axios';

const accountServer = '/';
const stockServer = '/';

const log = function (...text) {
    // eslint-disable-next-line
    console.log('[Server]', ...text)
}

const stockList = function (data, success, failure) {
    axios.post(stockServer + 'stocklist', {
        auth: localStorage['accessToken'],
        from: data.from,
        to: data.to,
    }).then(response => {
        log(response.data);
        success(response.data);
    })
}

const stockStatus = function (data, success, failure) {
    axios.post(stockServer + 'stockstatus', {
        auth: localStorage['accessToken'],
        status: data.status,
    }).then(response => {
        log(response.data);
        success(response.data);
    })
}

const stockLimit = function (data, success, failure) {
    axios.post(stockServer + 'stocklimit', {
        auth: localStorage['accessToken'],
        limitup: data.limitup,
        limitdown: data.limitdown,
    }).then(response => {
        log(response.data);
        success(response.data);
    })
}

export default {
    stockList,
    stockStatus,
    stockLimit,
}