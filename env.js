// 环境判断
/**
 * 设备判断：android、ios、web
 */
const isDevice = function () { // 判断是android还是ios还是web
    const ua = navigator.userAgent.toLowerCase()
    if (ua.match(/iPhone\sOS/i) === 'iphone os' || ua.match(/iPad/i) === 'ipad') { // ios
        return 'iOS'
    }
    if (ua.match(/Android/i) === 'android') {
        return 'Android'
    }
    return 'Web'
}

/**
 * 判断是否为微信
 */
const isWx = function () { // 判断是否为微信
    const ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
        return true
    }
    return false
}

/**
 * 判断是否为小程序
 */
const isMiniProgram = function (req) {
    const UA = req.headers['user-agent'] || '';
    return UA.toLowerCase().match(/miniProgram/i) === 'miniprogram';
};


/**
 * 是否为PC端
 */
const isPC = function () { // 是否为PC端
    const userAgentInfo = navigator.userAgent
    const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    let flag = true
    for (const v of Agents) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false
            break
        }
    }
    return flag
}

/**
 * 判断是否为客户端环境
 */
const isApp = function (req) {
    'use strict';
    // 新版本是在header中写的字段，其他版本在中cookie或者url中才有以下下字段
    return req.headers.loginos === 'IOS' ||
        req.headers.loginos === 'ANDROID' ||
        req.cookies.loginos === 'IOS' ||
        req.cookies.loginos === 'ANDROID' ||
        req.query.os && req.query.os.toUpperCase() === 'IOS' ||
        req.query.os && req.query.os.toUpperCase() === 'ANDROID';
};