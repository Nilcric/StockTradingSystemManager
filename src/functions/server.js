import axios from 'axios';
import qs from 'qs';

const accountServer = 'http://47.97.74.128:8080/';
const stockServer = 'http://q.xiexun.tech:8877/';

const login = function (username, password, success, failure) {
    axios.post(accountServer + 'finance_admin/login', {
        id: username,
        password: password,
    }).then(response => {
        if (response.data.error_code === 0) {
            success(response.data);
        }
        else {
            failure(response.data);
        }
    })
    success({});
}
const getStockList = function (data, success, failure) {
    axios.post(stockServer + 'manage/stocklist', JSON.stringify({
        auth: {
            financeid: localStorage['username']
        },
        from: data.from,
        to: data.to
    })).then(response => {
        if (response.data.successful) {
            success(response.data.data);
        }
        else {
            failure(response.data);
        }
    })
}

const setStockStatus = function (data, success, failure) {
    axios.post(stockServer + 'manage/stockstatus', {
        auth: {
            financeid: localStorage['username']
        },
        stockid: data.id,
        status: data.status,
    }).then(response => {
        if (response.data.successful) {
            success(response.data.data);
        }
        else {
            failure(response.data.data);
        }
    })
}

const setStockLimit = function (data, success, failure) {
    axios.post(stockServer + 'manage/stocklimit', {
        auth: {
            financeid: localStorage['username']
        },
        stockid: data.id,
        limitup: data.limitup,
        limitdown: data.limitdown,
    }).then(response => {
        if (response.data.successful) {
            success(response.data.data);
        }
        else {
            failure(response.data.data);
        }
    })
}

export default {
    login,
    getStockList,
    setStockStatus,
    setStockLimit,
}