(function () {
    function setCookie(name, value, type) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        var tmp = getCookie(type, type);
        if (!tmp) {
            tmp = {}
        }
        tmp[name] = value;
        document.cookie = type + "=" + JSON.stringify(tmp) + ";expires=" + exp.toGMTString();
    }

    function getCookie(name, type) {
        var arr, reg;
        reg = new RegExp("(^| )" + type + "=([^;]*)(;|$)");
        arr = document.cookie.match(reg);
        if (arr) {
            if (name != type) {
                return JSON.parse(arr[2] || '{}')[name]
            } else {
                return arr[2]
            }
        } else {
            return null
        }
    }

    function delCookie(name, type) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        var tmp = {};
        if (name != type) {
            tmp = getCookie(type, type);
            delete tmp[name]
        }
        document.cookie = type + "=" + JSON.stringify(tmp) + ";expires=" + exp.toGMTString();
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