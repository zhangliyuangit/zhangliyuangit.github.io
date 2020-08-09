/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/06/python爬虫/index.html","342a066e9196c4f954b29bc41659848e"],["/2020/04/06/安装Hexo环境/index.html","3b414c73d5a34961d48f63feeac10680"],["/2020/04/07/XML解析器/index.html","862be7da4d6b13f61ada048d16eaed8d"],["/2020/04/08/tomcat及Servlet/index.html","9e0501cc5fb23d78ff81b76d99f411ba"],["/2020/04/10/http/index.html","0e3c4f723739fa57674d3f54deb3ddc4"],["/2020/04/11/BeanUtils工具类的使用/index.html","403ab300cb0dcaef48b4013cb3d84dbe"],["/2020/04/15/Jetbrains系列产品2020-1最新激活方法/index.html","e6a5e5f09f313c3ea5dc139f4f59069d"],["/2020/04/23/Filter过滤器/index.html","c8191d0cf94f78f99f93e02d510b7e39"],["/2020/04/26/JQuery笔记/index.html","9da8b3466b158bfc098aee3f39bb6986"],["/2020/04/28/ajax和JSON/index.html","b0ddfc66e18dd97dd4039ff4a08127c1"],["/2020/05/01/redis数据库/index.html","410fec6a2f830abdc5ef8fcd1cefe31b"],["/2020/05/13/抽取Servlet/index.html","1648ff570c72c19b6051c1be38b5cf9a"],["/2020/05/19/mybatis框架-一/index.html","11806d323987d460c97b65eb0530c277"],["/2020/05/21/PicGo-GitHub图床，让Markdown飞/index.html","17563a3ca6a4f5b40b098c619f3c9bc6"],["/2020/05/22/mybatis框架-二/index.html","eab86d76ac96937734b44520daa63157"],["/2020/05/22/ngork内网穿透/index.html","66c057e4563521c1f82e3786741ce9b2"],["/2020/05/24/mybatis框架-三/index.html","89a19c46bf715cced1fae81708a8af8a"],["/2020/05/27/mybatis框架-四/index.html","0cdd771b9c299f381ed6e941a92b07d0"],["/2020/05/31/Java多线程/index.html","c61a08a0bea0a5d041556ae4eeaf8b2e"],["/2020/06/03/Spring学习笔记-一/index.html","9c214d86db21005b9f95dcaf86478d3e"],["/2020/06/03/Spring学习笔记-二/index.html","35d73d1f4a1a5acba5a33438d130060e"],["/2020/06/06/Spring学习笔记-三/index.html","5c002b0683ad4a14f49bb86acafba63b"],["/2020/06/10/Spring学习笔记-四/index.html","effd39e3a731e2c33f6bcb54c8109f5e"],["/2020/06/12/注解和反射/index.html","8a49a0320becc310a4cdaafa664d56ca"],["/2020/06/23/SpringMVC笔记-一/index.html","9bf4c86975f27032b126b3b52575993b"],["/2020/07/03/SpringMVC笔记-三/index.html","8eee253ae8aa7ed0d4a9e3557766882c"],["/2020/07/03/SpringMVC笔记-二/index.html","7cd14565c9ea653df7792dfb75214868"],["/2020/07/03/SpringMVC笔记-五/index.html","93968d82e456a14cdb3bb0893ff22b22"],["/2020/07/03/SpringMVC笔记-四/index.html","6738d874658131b0a1933abea3f00610"],["/2020/07/16/Java位运算符/index.html","260ecca38cfae17c0eb659e38923feb0"],["/2020/07/19/Java类加载机制/index.html","27e6021578e0d73445ddd1ea452b10b1"],["/2020/07/21/Java的堆区、栈区和方法区简单分析/index.html","9a4547bbc1f3cc033dca28614f40d485"],["/2020/07/23/Java单例模式/index.html","ffa3fef4ee915beed2cefb32c659c75e"],["/2020/07/24/Java静态工厂/index.html","633df71803a5f2298690e5e050e39f82"],["/2020/07/27/Java抽象工厂模式/index.html","b48e7d4148806544334308a0476c1c2b"],["/2020/07/27/Java模板模式/index.html","7be49b490d13b3df2644d60ce981a7d8"],["/2020/07/28/Object类Clone-方法/index.html","8b27416eb7a466a23ad21c00bb9e4a78"],["/2020/07/30/正则表达式的基本使用/index.html","0a9f2625f0301da4775880b5a8f1a37b"],["/2020/08/01/Java集合比较器规则/index.html","3fa15d2e1c460ae064d05da8b2af13ea"],["/2020/08/09/NIO/index.html","1947206e96c92f8b6a67bb69e33d34b6"],["/404.html","1c18bbaea7bdf64a24a4e53e316fa455"],["/about/index.html","21fee406161bc680ded433ac9998458d"],["/archives/2020/04/index.html","f46ca4cd7254f31aba87034dcac7d756"],["/archives/2020/05/index.html","4df02a05b9e0d7dc369fad8b25fed9df"],["/archives/2020/06/index.html","223194d17057c52768adbd36a8d00675"],["/archives/2020/07/index.html","02787835993f4f90210de614e3d17298"],["/archives/2020/07/page/2/index.html","7550be120c70d75d77e5fe2978828cf4"],["/archives/2020/08/index.html","e5abfb39d272e8fa2f37a6892f82ca28"],["/archives/2020/index.html","ed4c3887f1b26006aee354c029723e3c"],["/archives/2020/page/2/index.html","1a8d3b5b1790df71c035a2874c9a56d3"],["/archives/2020/page/3/index.html","2cd6dc10ebcfcd5c2708af2e59e56a92"],["/archives/2020/page/4/index.html","4078561abe747bf81081fb8e3d4ca559"],["/archives/index.html","514b13709e4a40ff0e3cb4881aea6855"],["/archives/page/2/index.html","514b13709e4a40ff0e3cb4881aea6855"],["/archives/page/3/index.html","514b13709e4a40ff0e3cb4881aea6855"],["/archives/page/4/index.html","514b13709e4a40ff0e3cb4881aea6855"],["/categories/index.html","ef2efc7b3d247c1ebf575e73b8ea6a3d"],["/css/style.css","9ef44bcb440e989d6992635c98bc6266"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","4ef8452afbee98cb95e275ff5286f374"],["/img/1.png","e662837f3402c7364d187c6bf2904b3a"],["/img/2.png","499d8182cefa7a56bfd22567cc09d877"],["/img/3.png","9f3ae5dff358000361b2890389cdde35"],["/img/4.png","351e90e38c34fb3e63c65c35b0c4fedb"],["/img/5.png","c98b39dff1b60938b407c491079be23d"],["/img/6.png","ccf84690523b35be3adda66aeb548926"],["/img/BeanUtils1.png","61d0bff3b934adc02df9a0b234e5e2e9"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/qq.png","4f3ba4d6f6bf0b3719d914d389fdadd1"],["/img/tomcat1.png","9a7f5a8776680f0dd722c2938de16b9f"],["/img/touxiang.jpg","3c68b53e1c6f31fa425d53395080f2d8"],["/img/weixin.jpg","e905cc6e0ffe18faff62ed1eeb1780ab"],["/img/wx.png","8277441bdf3e30075e0d28906d20d5ff"],["/img/zhifubao.jpg","69f11d691aa03ed257a9fba7d51b7d08"],["/img/爬虫1.png","fabde21a1ff0eb780d650ec49d6c06ed"],["/img/爬虫2.png","58217333d5eb43c8e313d50926870f14"],["/img/爬虫3.png","e775ad11e8f84b77633a24e90a85a795"],["/index.html","9b690aab054c980bff2c2e2ed6f7ca23"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/page/2/index.html","90aa75264f6ddf8a2c4a93c0a582bdc4"],["/page/3/index.html","e8a0c8788f3ad2d1aefbf00928ef9084"],["/page/4/index.html","c5d880868dc5849be46df2e180ca9089"],["/sw-register.js","9e8d755bc11ede39d72c9f84ff738a3c"],["/tags/JAVA/index.html","36f45ad273cdbb021eb40b6e602560ad"],["/tags/JAVA/page/2/index.html","c1a8a8e4fd5092018f6877164b7bd65b"],["/tags/JAVA/page/3/index.html","26505f9b6602f515b83a00d946b3a487"],["/tags/JavaWeb/index.html","e62e834bc20c924e349823d80b146a81"],["/tags/SpringMVC/index.html","8cb489d00cfa29268d4ca32a3ee1df5e"],["/tags/Spring框架/index.html","d4c809dddfa9a6a515e18a2ea99d2b36"],["/tags/XML/index.html","4314eb852b1e90b3547d2e227fd6cd2e"],["/tags/hexo/index.html","e7becaa852579ad669395f2fe719a2de"],["/tags/index.html","2682169a8f0b1d9d4cf71a31d6c87462"],["/tags/mybatis/index.html","6c3252cd3cfc647def4f9b887caa4374"],["/tags/python/index.html","4a402a3df68502079120f09ca7765a69"],["/tags/数据库/index.html","5ed7ee24ffcd39f1d8826e6b5ee481f4"],["/tags/爬虫/index.html","44ad2e1b83c9395c899d6bf8ba5d08f6"],["/tags/设计模式/index.html","d96c0a5cd443fa9fe837fdb2e31099fc"],["/tags/软件/index.html","8aa2b266497d17e1ec0b4a3043cd2cfc"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
