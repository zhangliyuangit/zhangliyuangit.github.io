/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/06/python爬虫/index.html","816a597d7bef12ce75e1bd5b755f60bc"],["/2020/04/06/安装Hexo环境/index.html","7be0fb9855e8ece4088fcf6ed8684b58"],["/2020/04/07/XML解析器/index.html","35efcaf2c1365bf65b42b7686ff01c93"],["/2020/04/08/tomcat及Servlet/index.html","46c893cf8d103dc1c31495fa73c042e1"],["/2020/04/10/http/index.html","2438b9a59bdfe286100a2d35ac272095"],["/2020/04/11/BeanUtils工具类的使用/index.html","413ae3ffaa621c2f403b061e88977fd3"],["/2020/04/15/Jetbrains系列产品2020-1最新激活方法/index.html","3246d547a9a695e1278ef18cf43748d5"],["/2020/04/23/Filter过滤器/index.html","2685a36a533dbc0ae41fd21dfd44d8ff"],["/2020/04/26/JQuery笔记/index.html","2b4934a6a23ff3fe51f7e966379a72a0"],["/2020/04/28/ajax和JSON/index.html","d6cf3528b967708a3dc63a1fb2f95621"],["/2020/05/01/redis数据库/index.html","8ced551747c82194d832de64634a6e37"],["/2020/05/13/抽取Servlet/index.html","fc9596e3b0bb97f8c99170a9d6abb3b0"],["/2020/05/19/mybatis框架-一/index.html","7e4aad3cfa34fa1d1cf1c8afcbecc2bd"],["/2020/05/21/PicGo-GitHub图床，让Markdown飞/index.html","be9d5f0d364b2cb61de8f3ddd3adcbcd"],["/2020/05/22/mybatis框架-二/index.html","60427c61862757a0477559b88e358f41"],["/2020/05/22/ngork内网穿透/index.html","447624a2188de6f75dbff3614b51fd03"],["/2020/05/24/mybatis框架-三/index.html","d69fa20db5f0012b145024572e335bf4"],["/2020/05/27/mybatis框架-四/index.html","3c01ec5a190285bef206645a03b671d5"],["/2020/05/31/Java多线程/index.html","28b51db1bfa79ff51d8ec482094b89cb"],["/2020/06/03/Spring学习笔记-一/index.html","b32b38d80acfdbaa7eed01c27e01bf44"],["/2020/06/03/Spring学习笔记-二/index.html","e8fb4f8821aa5eae5aeffaf8c8c6609f"],["/2020/06/06/Spring学习笔记-三/index.html","73ec9ff647225064fd1d3b9fc50f4530"],["/2020/06/10/Spring学习笔记-四/index.html","aff11f99e9a4e6f51df0506294b13805"],["/2020/06/12/注解和反射/index.html","2c5e460771749b4d8e3d4c7a45baf2fc"],["/2020/06/23/SpringMVC笔记-一/index.html","4fe1b3959c6474cb5efe02068844b5d2"],["/2020/07/03/SpringMVC笔记-三/index.html","a722c3b81d1faf33cdc15436b9cb07dd"],["/2020/07/03/SpringMVC笔记-二/index.html","f5b8c79ad029950a3ca13509681ed381"],["/2020/07/03/SpringMVC笔记-五/index.html","224e75f4636dac05e87eef3b14aed93e"],["/2020/07/03/SpringMVC笔记-四/index.html","7b57246f9c839af6e50bfade34490665"],["/2020/07/16/Java位运算符/index.html","9a7b94cfb98b2a7d23cd33551282d0b7"],["/2020/07/19/Java类加载机制/index.html","dc94bd6f7cc0b18cfc53626466885489"],["/2020/07/21/Java的堆区、栈区和方法区简单分析/index.html","c7ad34df2464f7046bf28ba156d5dd10"],["/2020/07/23/Java单例模式/index.html","97b2164d0f45d6490544325dfc4a43d4"],["/2020/07/24/Java静态工厂/index.html","17aa94c3d36a6fa178f2c3e19fc431bb"],["/2020/07/27/Java抽象工厂模式/index.html","3f67ce22c9224df6e5e5cc6485b9e6ee"],["/2020/07/27/Java模板模式/index.html","4889235b64e6622c075f0085869cb8e9"],["/2020/07/28/Object类Clone-方法/index.html","451dcece041b87fc0dbd65c7b25e2f12"],["/2020/07/30/正则表达式的基本使用/index.html","a45750ef441aa784a465c051ae68fd02"],["/2020/08/01/Java集合比较器规则/index.html","cd3bae3c244b759bd8064ef85b593e53"],["/2020/08/09/NIO/index.html","f58ea14b6e4e3273eec52eb8eb7c25a4"],["/2020/09/08/Servlet生命周期/index.html","512be432c41286fae9e58a38e1a9028a"],["/2020/09/22/Mybatis巩固/index.html","9720a13f362114a1320a67aac0285371"],["/2020/09/29/SpringMVC/index.html","a93d230b31802ed57e0769d9e49d9251"],["/2020/10/12/SpringBoot笔记/index.html","59f227892e669be8280ca9f76e154351"],["/2020/10/13/SpringBoot集成editor-md/index.html","d5e0e88bc12dffc2231993bd25fdf6d3"],["/2020/10/24/Dubbo和Zookeeper集成/index.html","3af63dab82bde3dbdb8745c14d300bdd"],["/2020/12/21/Docker学习笔记/index.html","27d61f1f3ecd1973e65885abd9846847"],["/2020/12/22/java动态代理/index.html","a301ef98c5b64c82825258c10a7ecc7c"],["/2020/12/27/数据结构学习笔记/index.html","8384c1d5211848332c2b2f5fcd79bf33"],["/2021/01/15/RabbitMQ/index.html","d8709f6397dd316d0588578786e07137"],["/2021/03/02/JWT/index.html","ca405148aa78679c48968547a27a8eff"],["/2021/03/04/SpringBoot整合Redis/index.html","d1b49c7c6b371c6120faee5cec0b3363"],["/2021/04/18/SpringCloud学习笔记/index.html","90b73cbbfa58abddb6238ecaeeb633fb"],["/404.html","99f57d9fad259440e8585e21b5e89ea6"],["/about/index.html","81cf14c3dd4e560ec1fc22b1e2e8bfcf"],["/archives/2020/04/index.html","96c2444e59a52418839abeea285fe8aa"],["/archives/2020/05/index.html","561d4bce7f58edcc99241c8fa11c0e37"],["/archives/2020/06/index.html","1cb836701977de2816738064c934a7af"],["/archives/2020/07/index.html","e424f739d660621de8302c689162b03a"],["/archives/2020/07/page/2/index.html","8434b0219fb2cb3f4c1676eedf94bf39"],["/archives/2020/08/index.html","71a192a007749f9dadcf52569003486e"],["/archives/2020/09/index.html","e5c856dc3fc2a521fa04200f8baf5576"],["/archives/2020/10/index.html","f97a1a5e22a4fda1b74e9f2ead173665"],["/archives/2020/12/index.html","e53179a4d567d7a37224db6e95888432"],["/archives/2020/index.html","da2e34b5b5a8e6d5ea4e9a4507eb04d5"],["/archives/2020/page/2/index.html","8b3095f7931bbcd02f4da365a18c040b"],["/archives/2020/page/3/index.html","70e2b7bb0934eeaa03ca1f9abbee0fce"],["/archives/2020/page/4/index.html","1021353703707e8f6bc94322b26e5e1b"],["/archives/2020/page/5/index.html","35d5d20d0b00f9d1459ed2348ee3260d"],["/archives/2021/01/index.html","359324cb41113db8f507409e1ba08a75"],["/archives/2021/03/index.html","01fe3685fdd1e33f90e572aaecb13a61"],["/archives/2021/04/index.html","16530e2939d88ca4feeebcca37794156"],["/archives/2021/index.html","72548a78174a501156e744ed7ddcaf76"],["/archives/index.html","b19c90d0cce08cc8ba882972c2f12a18"],["/archives/page/2/index.html","b19c90d0cce08cc8ba882972c2f12a18"],["/archives/page/3/index.html","b19c90d0cce08cc8ba882972c2f12a18"],["/archives/page/4/index.html","b19c90d0cce08cc8ba882972c2f12a18"],["/archives/page/5/index.html","b19c90d0cce08cc8ba882972c2f12a18"],["/archives/page/6/index.html","b19c90d0cce08cc8ba882972c2f12a18"],["/categories/index.html","278a43769fcc30c2d6104b29b452d59b"],["/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","2535b1041dab03a9922b593d9866bd6d"],["/img/1.png","e662837f3402c7364d187c6bf2904b3a"],["/img/2.png","499d8182cefa7a56bfd22567cc09d877"],["/img/3.png","9f3ae5dff358000361b2890389cdde35"],["/img/4.png","351e90e38c34fb3e63c65c35b0c4fedb"],["/img/5.png","c98b39dff1b60938b407c491079be23d"],["/img/6.png","ccf84690523b35be3adda66aeb548926"],["/img/BeanUtils1.png","61d0bff3b934adc02df9a0b234e5e2e9"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/qq.png","4f3ba4d6f6bf0b3719d914d389fdadd1"],["/img/tomcat1.png","9a7f5a8776680f0dd722c2938de16b9f"],["/img/touxiang.jpg","3c68b53e1c6f31fa425d53395080f2d8"],["/img/weixin.jpg","e905cc6e0ffe18faff62ed1eeb1780ab"],["/img/wx.png","8277441bdf3e30075e0d28906d20d5ff"],["/img/zhifubao.jpg","69f11d691aa03ed257a9fba7d51b7d08"],["/img/爬虫1.png","fabde21a1ff0eb780d650ec49d6c06ed"],["/img/爬虫2.png","58217333d5eb43c8e313d50926870f14"],["/img/爬虫3.png","e775ad11e8f84b77633a24e90a85a795"],["/index.html","fdb8fc8a45cb46d73c65424eee86d705"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/page/2/index.html","6e592c9a841fc7371a73fe70d405c845"],["/page/3/index.html","36cc15d5c7000069f6a28078bb7f7b38"],["/page/4/index.html","2297371b6281e4c7dae4866c2add3ff5"],["/page/5/index.html","4903000816d51fd0828fba4a855bdbd9"],["/page/6/index.html","66b1339d95599aa876bb8f05ea8e449d"],["/sw-register.js","bc34c881dfd713d4449b9819a6adfa2b"],["/tags/Docker/index.html","6332819177c1a9d0225ffeed7fea0c00"],["/tags/JAVA/index.html","7704d6ec48422fa65b46322f274d12ab"],["/tags/JAVA/page/2/index.html","50eb1ff54f559276482578d582c538d4"],["/tags/JAVA/page/3/index.html","8cdfcd83857ab50a568ffc2b3d4b9c0f"],["/tags/JAVA/page/4/index.html","fe07516b85043cf13d5a5ea2386c9f1e"],["/tags/JWT/index.html","2df14444b068dcca786d73afc4ced83a"],["/tags/JavaWeb/index.html","42c80b1be3245b8e983bff542e8b3515"],["/tags/RabbitMQ/index.html","2d1d643be7fcef117f461db873e9b916"],["/tags/SpringBoot/index.html","a3707ee61ac292c5c3d116ebe492334a"],["/tags/SpringCloud/index.html","0527580d0e0efdb5a5bf78abe8b833e6"],["/tags/SpringMVC/index.html","3e86c7122ab44989762091d5a766ed31"],["/tags/Spring框架/index.html","40f69d1642d378d51e3a35844e102e22"],["/tags/XML/index.html","5322a0af8dbf5110576de0e9d723108f"],["/tags/hexo/index.html","630b052f4125b3920761925d3d3d661f"],["/tags/index.html","8245b867ebc2adbf5cfe5a2906a0fc76"],["/tags/mybatis/index.html","fe3e0c809e1a014264cf0620eb8c3867"],["/tags/python/index.html","f5367dda68d4d2e44520ac80bf39ef43"],["/tags/数据库/index.html","f6815ff6c8cd290db0b6074cbcac1eee"],["/tags/数据结构/index.html","49ca95a0cfe03086db44c86d773c3186"],["/tags/爬虫/index.html","113e14a9ccef20bfac6e90369a37f925"],["/tags/设计模式/index.html","0d53c7ccb89e39674eb96a2f5bd6ee10"],["/tags/软件/index.html","0dfabe58697054f88a66f784dc0143da"]];
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
