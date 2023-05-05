__webpack_require__ = {
    m: __webpack_modules__,
    p: scriptUrl,
    r: (exports) => {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'}); // 将exports标为 Module对象
        }
        Object.defineProperty(exports, '__esModule', {value: true}); // 设置对象属性 __esModule值为true
    },
    o: (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop)),
    d: (exports, definition) => {
        for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            }
        }
    },
    e: (chunkId) => {
        return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
            __webpack_require__.f[key](chunkId, promises);
            return promises;
        }, []));
    },
    f: {
        j: (chunkId, promises) => {
            // JSONP chunk loading for javascript
            var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
                ? installedChunks[chunkId]
                : undefined;
            if (installedChunkData !== 0) { // 0 means "already installed".

                // a Promise means "currently loading".
                if (installedChunkData) {
                    promises.push(installedChunkData[2]);
                } else {
                    if (true) { // all chunks have JS
                        // setup Promise in chunk cache
                        var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
                        promises.push(installedChunkData[2] = promise);

                        // start chunk loading
                        var url = __webpack_require__.p + __webpack_require__.u(chunkId);
                        // create error before stack unwound to get useful stacktrace later
                        var error = new Error();
                        var loadingEnded = (event) => {
                            if (__webpack_require__.o(installedChunks, chunkId)) {
                                installedChunkData = installedChunks[chunkId];
                                if (installedChunkData !== 0) 
                                    installedChunks[chunkId] = undefined;
                                if (installedChunkData) {
                                    var errorType = event && (event.type === 'load'
                                        ? 'missing'
                                        : event.type);
                                    var realSrc = event && event.target && event.target.src;
                                    error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                                    error.name = 'ChunkLoadError';
                                    error.type = errorType;
                                    error.request = realSrc;
                                    installedChunkData[1](error);
                                }
                            }
                        };
                        __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
                    } else 
                        installedChunks[chunkId] = 0;
                    }
                }
        }
    },
    g: function () {
        if (typeof globalThis === 'object') 
            return globalThis;
        try {
            return this || new Function('return this')();
        } catch (e) {
            if (typeof window === 'object') 
                return window;
            }
        },
    u: (chunkId) => {
        // return url for filenames based on template
        return "" + chunkId + ".bundle.js";
    },
    l: (url, done, key, chunkId) => {
        if (inProgress[url]) {
            inProgress[url].push(done);
            return;
        }
        var script,
            needAttach;
        if (key !== undefined) {
            var scripts = document.getElementsByTagName("script");
            for (var i = 0; i < scripts.length; i++) {
                var s = scripts[i];
                if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
                    script = s;
                    break;
                }
            }
        }
        if (!script) {
            needAttach = true;
            script = document.createElement('script');

            script.charset = 'utf-8';
            script.timeout = 120;
            if (__webpack_require__.nc) {
                script.setAttribute("nonce", __webpack_require__.nc);
            }
            script.setAttribute("data-webpack", dataWebpackPrefix + key);
            script.src = url;
        }
        inProgress[url] = [done];
        var onScriptComplete = (prev, event) => {
            // avoid mem leaks in IE.
            script.onerror = script.onload = null;
            clearTimeout(timeout);
            var doneFns = inProgress[url];
            delete inProgress[url];
            script.parentNode && script
                .parentNode
                .removeChild(script);
            doneFns && doneFns.forEach((fn) => (fn(event)));
            if (prev) 
                return prev(event);
            }
        var timeout = setTimeout(onScriptComplete.bind(null, undefined, {
            type: 'timeout',
            target: script
        }), 120000);
        script.onerror = onScriptComplete.bind(null, script.onerror);
        script.onload = onScriptComplete.bind(null, script.onload);
        needAttach && document
            .head
            .appendChild(script);
    }
}

// ---

(self["webpackChunktesting"] = self["webpackChunktesting"] || []).push([["src_temp_js"],{

  "./src/temp.js": ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      "default": () => (__WEBPACK_DEFAULT_EXPORT__),
      /* harmony export */   
      "minus": () => (minus)
        /* harmony export */ 
    });

    function add (a, b) {
      console.log(a, b);
      return a + b;
    }

    const minus = (a, b) => {
      console.log('a, b: ', a, b);
      return a - b;
    }
    /* harmony default export */
    const __WEBPACK_DEFAULT_EXPORT__ = (add);

    //# sourceURL=webpack://testing/./src/temp.js?
  })
}]);

(__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  __webpack_require__.r(__webpack_exports__);

  __webpack_require__.d(__webpack_exports__, {
    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  });

  const calc = async () => {
    const module = await __webpack_require__.e("src_temp_js").then(__webpack_require__.bind(__webpack_require__, "./src/temp.js"))
    
    module.default(1,2);
    module.minus(2, 2)
  }

  (() => {
    document.querySelector('.div').addEventListener('click', calc)
  })()

  /* harmony default export */ 
  const __WEBPACK_DEFAULT_EXPORT__ = (calc);
  //# sourceURL=webpack://testing/./src/index.js?"

}