'use strict';
const os = require('os');

function IP() {
    let _o = [],
        _ips = [];
    const deepObj = function deepObj(obj) {
        if (typeof obj === 'object') {
            Object.keys(obj).forEach(function (i) {
                return Array.isArray(obj) ? (_o = _o.concat(obj[i])) : deepObj(obj[i]);
            });
        }
        return _o;
    };
    deepObj(os.networkInterfaces())
        .filter(function (i) {
            return i.family === "IPv4" && !i.internal;
        })
        .map(function (i) {
            return _ips.push(i.address);
        });
    return _ips[0];
};

module.exports = IP();