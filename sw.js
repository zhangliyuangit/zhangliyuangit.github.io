/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/06/python爬虫/index.html","816a597d7bef12ce75e1bd5b755f60bc"],["/2020/04/06/安装Hexo环境/index.html","7be0fb9855e8ece4088fcf6ed8684b58"],["/2020/04/07/XML解析器/index.html","35efcaf2c1365bf65b42b7686ff01c93"],["/2020/04/08/tomcat及Servlet/index.html","46c893cf8d103dc1c31495fa73c042e1"],["/2020/04/10/http/index.html","2438b9a59bdfe286100a2d35ac272095"],["/2020/04/11/BeanUtils工具类的使用/index.html","413ae3ffaa621c2f403b061e88977fd3"],["/2020/04/15/Jetbrains系列产品2020-1最新激活方法/index.html","3246d547a9a695e1278ef18cf43748d5"],["/2020/04/23/Filter过滤器/index.html","2685a36a533dbc0ae41fd21dfd44d8ff"],["/2020/04/26/JQuery笔记/index.html","2b4934a6a23ff3fe51f7e966379a72a0"],["/2020/04/28/ajax和JSON/index.html","d6cf3528b967708a3dc63a1fb2f95621"],["/2020/05/01/redis数据库/index.html","8ced551747c82194d832de64634a6e37"],["/2020/05/13/抽取Servlet/index.html","fc9596e3b0bb97f8c99170a9d6abb3b0"],["/2020/05/19/mybatis框架-一/index.html","7e4aad3cfa34fa1d1cf1c8afcbecc2bd"],["/2020/05/21/PicGo-GitHub图床，让Markdown飞/index.html","be9d5f0d364b2cb61de8f3ddd3adcbcd"],["/2020/05/22/mybatis框架-二/index.html","60427c61862757a0477559b88e358f41"],["/2020/05/22/ngork内网穿透/index.html","447624a2188de6f75dbff3614b51fd03"],["/2020/05/24/mybatis框架-三/index.html","d69fa20db5f0012b145024572e335bf4"],["/2020/05/27/mybatis框架-四/index.html","3c01ec5a190285bef206645a03b671d5"],["/2020/05/31/Java多线程/index.html","28b51db1bfa79ff51d8ec482094b89cb"],["/2020/06/03/Spring学习笔记-一/index.html","b32b38d80acfdbaa7eed01c27e01bf44"],["/2020/06/03/Spring学习笔记-二/index.html","e8fb4f8821aa5eae5aeffaf8c8c6609f"],["/2020/06/06/Spring学习笔记-三/index.html","73ec9ff647225064fd1d3b9fc50f4530"],["/2020/06/10/Spring学习笔记-四/index.html","aff11f99e9a4e6f51df0506294b13805"],["/2020/06/12/注解和反射/index.html","2c5e460771749b4d8e3d4c7a45baf2fc"],["/2020/06/23/SpringMVC笔记-一/index.html","4fe1b3959c6474cb5efe02068844b5d2"],["/2020/07/03/SpringMVC笔记-三/index.html","a722c3b81d1faf33cdc15436b9cb07dd"],["/2020/07/03/SpringMVC笔记-二/index.html","f5b8c79ad029950a3ca13509681ed381"],["/2020/07/03/SpringMVC笔记-五/index.html","224e75f4636dac05e87eef3b14aed93e"],["/2020/07/03/SpringMVC笔记-四/index.html","7b57246f9c839af6e50bfade34490665"],["/2020/07/16/Java位运算符/index.html","9a7b94cfb98b2a7d23cd33551282d0b7"],["/2020/07/19/Java类加载机制/index.html","dc94bd6f7cc0b18cfc53626466885489"],["/2020/07/21/Java的堆区、栈区和方法区简单分析/index.html","c7ad34df2464f7046bf28ba156d5dd10"],["/2020/07/23/Java单例模式/index.html","97b2164d0f45d6490544325dfc4a43d4"],["/2020/07/24/Java静态工厂/index.html","17aa94c3d36a6fa178f2c3e19fc431bb"],["/2020/07/27/Java抽象工厂模式/index.html","3f67ce22c9224df6e5e5cc6485b9e6ee"],["/2020/07/27/Java模板模式/index.html","4889235b64e6622c075f0085869cb8e9"],["/2020/07/28/Object类Clone-方法/index.html","451dcece041b87fc0dbd65c7b25e2f12"],["/2020/07/30/正则表达式的基本使用/index.html","a45750ef441aa784a465c051ae68fd02"],["/2020/08/01/Java集合比较器规则/index.html","cd3bae3c244b759bd8064ef85b593e53"],["/2020/08/09/NIO/index.html","f58ea14b6e4e3273eec52eb8eb7c25a4"],["/2020/09/08/Servlet生命周期/index.html","512be432c41286fae9e58a38e1a9028a"],["/2020/09/22/Mybatis巩固/index.html","9720a13f362114a1320a67aac0285371"],["/2020/09/29/SpringMVC/index.html","a93d230b31802ed57e0769d9e49d9251"],["/2020/10/12/SpringBoot笔记/index.html","59f227892e669be8280ca9f76e154351"],["/2020/10/13/SpringBoot集成editor-md/index.html","d5e0e88bc12dffc2231993bd25fdf6d3"],["/2020/10/24/Dubbo和Zookeeper集成/index.html","00230d40adb370344ae835becb6028d0"],["/404.html","99f57d9fad259440e8585e21b5e89ea6"],["/about/index.html","81cf14c3dd4e560ec1fc22b1e2e8bfcf"],["/archives/2020/04/index.html","5f299dfda0c0ef717db1edf99b0dcf33"],["/archives/2020/05/index.html","01abd3775a152f09a3f02a6bfce249ea"],["/archives/2020/06/index.html","db362146ce395a5df85ed9e69dbfbe13"],["/archives/2020/07/index.html","cafff472d334245c1c9614d533b61730"],["/archives/2020/07/page/2/index.html","21faaac6e6e277eb3096bcda4cb1e787"],["/archives/2020/08/index.html","396f52da7a6ee4d858f0125162053a3e"],["/archives/2020/09/index.html","0d30f9317767e85275b018941b84400f"],["/archives/2020/10/index.html","3f8c4b43a14a2216ec1cbbdbdc97d3bc"],["/archives/2020/index.html","9625fa6f0e28610605719e576e707fe2"],["/archives/2020/page/2/index.html","486c919239bb622d4cf24303ff05db3b"],["/archives/2020/page/3/index.html","328e111e8b73a80252dd99e58bff8642"],["/archives/2020/page/4/index.html","a4571f7504a5fc964303d95fb1b0bb33"],["/archives/2020/page/5/index.html","3e5106630735eb864feb63706dfe204d"],["/archives/index.html","971fc1765f51c233de7e980cb4627563"],["/archives/page/2/index.html","971fc1765f51c233de7e980cb4627563"],["/archives/page/3/index.html","971fc1765f51c233de7e980cb4627563"],["/archives/page/4/index.html","971fc1765f51c233de7e980cb4627563"],["/archives/page/5/index.html","971fc1765f51c233de7e980cb4627563"],["/categories/index.html","278a43769fcc30c2d6104b29b452d59b"],["/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","2535b1041dab03a9922b593d9866bd6d"],["/img/1.png","e662837f3402c7364d187c6bf2904b3a"],["/img/2.png","499d8182cefa7a56bfd22567cc09d877"],["/img/3.png","9f3ae5dff358000361b2890389cdde35"],["/img/4.png","351e90e38c34fb3e63c65c35b0c4fedb"],["/img/5.png","c98b39dff1b60938b407c491079be23d"],["/img/6.png","ccf84690523b35be3adda66aeb548926"],["/img/BeanUtils1.png","61d0bff3b934adc02df9a0b234e5e2e9"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/qq.png","4f3ba4d6f6bf0b3719d914d389fdadd1"],["/img/tomcat1.png","9a7f5a8776680f0dd722c2938de16b9f"],["/img/touxiang.jpg","3c68b53e1c6f31fa425d53395080f2d8"],["/img/weixin.jpg","e905cc6e0ffe18faff62ed1eeb1780ab"],["/img/wx.png","8277441bdf3e30075e0d28906d20d5ff"],["/img/zhifubao.jpg","69f11d691aa03ed257a9fba7d51b7d08"],["/img/爬虫1.png","fabde21a1ff0eb780d650ec49d6c06ed"],["/img/爬虫2.png","58217333d5eb43c8e313d50926870f14"],["/img/爬虫3.png","e775ad11e8f84b77633a24e90a85a795"],["/index.html","f36cdfa3d1784af77fcfd17441d687c8"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/page/2/index.html","d6570c9654fb62462bbecc2db812403a"],["/page/3/index.html","b0263ac28e357499d9bbefd29af2a4c7"],["/page/4/index.html","af7fdace4b4b7ae8cb7677a58f85841a"],["/page/5/index.html","5bda36c30be60d9afd9626d531ee8c24"],["/sw-register.js","ba0436815dccee0bb2c75bc1c7ab0b12"],["/tags/JAVA/index.html","dfcd74896e4f53a7b8c6b42521010e08"],["/tags/JAVA/page/2/index.html","6e87559187856606dd27e6e19a276808"],["/tags/JAVA/page/3/index.html","3fbeeda48dc64fff8269df150556d706"],["/tags/JavaWeb/index.html","edd25c39b82dfd91abc8f31b26ae3b8d"],["/tags/SpringBoot/index.html","b34b6fa894143e8a01a6b7a7bbcb9fa6"],["/tags/SpringMVC/index.html","fcfae410e594d7d2fe73dab8cf249c5e"],["/tags/Spring框架/index.html","7127690c935b16bd64a4a01dbfd6fdfb"],["/tags/XML/index.html","5987f0250ccffe2650bcb3d4bba26b75"],["/tags/hexo/index.html","97b1b824f0935dcc8fe9e153503533fa"],["/tags/index.html","d6346e01a92495f6278968445d65f8bf"],["/tags/mybatis/index.html","4957f2cdf962ceb4dd1f98d3d287658e"],["/tags/python/index.html","718050426ea497ef39336dce929df6da"],["/tags/数据库/index.html","d5509c676e4073c62162abc9501ca452"],["/tags/爬虫/index.html","640595edc81423afe719ccefaacb5299"],["/tags/设计模式/index.html","4e9161870e979dce6e33178b528b479d"],["/tags/软件/index.html","ae8115c5dfbdb78d14b2b1c54d4ebe22"]];
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
