(function () {
    function getCookieDomain() {
        var host = location.hostname;
        var ip =
            /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        if (ip.test(host) == true || host == 'localhost') return host;
        var regex = /([^/]*).*/;
        var match = host.match(regex);
        if (typeof match !=
            "undefined" && null != match) host = match[1];
        if (typeof host !=
            "undefined" && null != host) {
            var strAry = host.split(".");
            if (strAry.length > 1) {
                host = strAry[strAry.length - 2] + "." +
                    strAry[strAry.length - 1];
            }
        }
        return '.' + host;
    }

    var domain = getCookieDomain();

    function setCookie(name, value, type) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = type + '_' + name + "=" + encodeURIComponent(JSON.stringify(value)) + ";expires=" + exp.toGMTString() + ";path=/; domain=" + domain + ';';
    }

    function getCookie(name, type) {
        var arr, reg;
        reg = new RegExp("(^| )" + type + '_' + name + "=([^;]*)(;|$)");
        arr = document.cookie.match(reg);
        if (arr) {
            return JSON.parse(decodeURIComponent(arr[2]) || '{}')
        } else {
            return null
        }
    }

    function delCookie(name, type) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        if (name != type) {
            document.cookie = type + '_' + name + "=" + "" + ";expires=" + exp.toGMTString() + ";path=/; domain=" + domain + ';';
        } else {
            document.cookie.split(';').forEach(function (cookie) {
                if (cookie.indexOf(type) > -1) {
                    var name = cookie.split('=')[0].trim();
                    document.cookie = name + "=" + "" + ";expires=" + exp.toGMTString() + ";path=/; domain=" + domain + ';';
                }
            })
        }
    }
    if (!window.localStorage) {
        if (navigator.cookieEnabled) {
            (function (window) {
                window.localStorage.setItem = function (key, value) {
                    return setCookie(key, value, 'localStorage')
                };
                window.localStorage.getItem = function (key) {
                    return getCookie(key, 'localStorage')
                };
                window.localStorage.removeItem = function (key) {
                    return delCookie(key, 'localStorage')
                };
                window.localStorage.clear = function () {
                    return delCookie('localStorage', 'localStorage')
                }
            })(window)
        } else {
            (function (window) {
                var _data = {};
                window.localStorage.setItem = function (key, value) {
                    return _data[id] = String(val)
                };
                window.localStorage.getItem = function (key) {
                    return _data.hasOwnProperty(id) ? _data[id] : undefined
                };
                window.localStorage.removeItem = function (key) {
                    return delete _data[id]
                };
                window.localStorage.clear = function () {
                    return _data = {}
                }
            })(window)
        }
    } else {
        try {
            window.localStorage.setItem('_localStorage_test', 'test');
            window.localStorage.removeItem('_localStorage_test')
        } catch (e) {
            if (navigator.cookieEnabled) {
                (function (window) {
                    window.localStorage.setItem = function (key, value) {
                        return setCookie(key, value, 'localStorage')
                    };
                    window.localStorage.getItem = function (key) {
                        return getCookie(key, 'localStorage')
                    };
                    window.localStorage.removeItem = function (key) {
                        return delCookie(key, 'localStorage')
                    };
                    window.localStorage.clear = function () {
                        return delCookie('localStorage', 'localStorage')
                    }
                })(window)
            } else {
                (function (window) {
                    var _data = {};
                    window.localStorage.setItem = function (key, value) {
                        return _data[id] = String(val)
                    };
                    window.localStorage.getItem = function (key) {
                        return _data.hasOwnProperty(id) ? _data[id] : undefined
                    };
                    window.localStorage.removeItem = function (key) {
                        return delete _data[id]
                    };
                    window.localStorage.clear = function () {
                        return _data = {}
                    }
                })(window)
            }
        }
    }
    if (!window.sessionStorage) {
        if (navigator.cookieEnabled) {
            (function (window) {
                window.sessionStorage.setItem = function (key, value) {
                    return setCookie(key, value, 'sessionStorage')
                };
                window.sessionStorage.getItem = function (key) {
                    return getCookie(key, 'sessionStorage')
                };
                window.sessionStorage.removeItem = function (key) {
                    return delCookie(key, 'sessionStorage')
                };
                window.sessionStorage.clear = function () {
                    return delCookie('sessionStorage', 'sessionStorage')
                }
            })(window)
        } else {
            (function (window) {
                var _data = {};
                window.sessionStorage.setItem = function (key, value) {
                    return _data[id] = String(val)
                };
                window.sessionStorage.getItem = function (key) {
                    return _data.hasOwnProperty(id) ? _data[id] : undefined
                };
                window.sessionStorage.removeItem = function (key) {
                    return delete _data[id]
                };
                window.sessionStorage.clear = function () {
                    return _data = {}
                }
            })(window)
        }
    } else {
        try {
            window.sessionStorage.setItem('_sessionStorage_test', 'test');
            window.sessionStorage.removeItem('_sessionStorage_test');
        } catch (e) {
            if (navigator.cookieEnabled) {
                (function (window) {
                    window.sessionStorage.setItem = function (key, value) {
                        return setCookie(key, value, 'sessionStorage')
                    };
                    window.sessionStorage.getItem = function (key) {
                        return getCookie(key, 'sessionStorage')
                    };
                    window.sessionStorage.removeItem = function (key) {
                        return delCookie(key, 'sessionStorage')
                    };
                    window.sessionStorage.clear = function () {
                        return delCookie('sessionStorage', 'sessionStorage')
                    }
                })(window)
            } else {
                (function (window) {
                    var _data = {};
                    window.sessionStorage.setItem = function (key, value) {
                        return _data[id] = String(val)
                    };
                    window.sessionStorage.getItem = function (key) {
                        return _data.hasOwnProperty(id) ? _data[id] : undefined
                    };
                    window.sessionStorage.removeItem = function (key) {
                        return delete _data[id]
                    };
                    window.sessionStorage.clear = function () {
                        return _data = {}
                    }
                })(window)
            }
        }
    }
})(window)