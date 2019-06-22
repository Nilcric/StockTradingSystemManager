import axios from 'axios';

const accountServer = '/';
const stockServer = '/';

const log = function (...text) {
    // eslint-disable-next-line
    console.log('[Server]', ...text)
}

const getStockList = function (data, success, failure) {
    axios.post(stockServer + 'manage/stocklist', {
        auth: localStorage['accessToken'],
        from: data.from,
        to: data.to
    }).then(response => {
        if (response.data.successful) {
            success(response.data.data);
        }
        else {
            failure(response.data.data);
        }
    })
    if (Math.random() > 0.1) {
        success(require('./stockList.json'));
    }
    else {
        failure("为什么会失败呢，因为只是测试而已。");
    }
}

const setStockStatus = function (data, success, failure) {
    axios.post(stockServer + 'stockstatus', {
        auth: localStorage['accessToken'],
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
    success();
}

const setStockLimit = function (data, success, failure) {
    axios.post(stockServer + 'stocklimit', {
        auth: localStorage['accessToken'],
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
    success();
}

export default {
    getStockList,
    setStockStatus,
    setStockLimit,
}