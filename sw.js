/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/06/python爬虫/index.html","7fc857410c80e8b98c6e2baee1af5737"],["/2020/04/06/安装Hexo环境/index.html","9de2206d63a2d45e7d79a112b49c7f2e"],["/2020/04/07/XML解析器/index.html","6468a16213edb3ccbaf14ab19b045580"],["/2020/04/08/tomcat及Servlet/index.html","7eb00ad7fdce2e6e7bab69693e81372f"],["/2020/04/10/http/index.html","8a8152523f58410b5c8501a0c1cafaac"],["/2020/04/11/BeanUtils工具类的使用/index.html","1ad14a38df35ed0df74edc0650d11cc1"],["/2020/04/15/Jetbrains系列产品2020-1最新激活方法/index.html","1bec52400c19e4c41157e721cbea0613"],["/2020/04/23/Filter过滤器/index.html","84574b70bc344019fdaa3d0893d3f917"],["/2020/04/26/JQuery笔记/index.html","632b90fd3911e694ce333d02a978061a"],["/2020/04/28/ajax和JSON/index.html","f3cf52ec0cc083f91fbca646fba05cc2"],["/2020/05/01/redis数据库/index.html","83c0ecf2e577031db58b0b84af4a99b1"],["/2020/05/13/抽取Servlet/index.html","f7219aed57544ab0c2984cfcbe476aec"],["/2020/05/19/mybatis框架-一/index.html","09801bc263a20e365ef03bd02a94c310"],["/2020/05/21/PicGo-GitHub图床，让Markdown飞/index.html","17d82a65e72840a9d7399fe2bb46ce71"],["/2020/05/22/mybatis框架-二/index.html","7b0acd64fe405342f1771ae085c43aa0"],["/2020/05/22/ngork内网穿透/index.html","917a60be3d0136ec64e2b907c8e84da6"],["/2020/05/24/mybatis框架-三/index.html","c3d49e006c535ef31cfd38eb3ff93919"],["/2020/05/27/mybatis框架-四/index.html","7fc1b3091ce385ad1cbc4c6db68e7c0f"],["/2020/05/31/Java多线程/index.html","d621de15dc4217268af8a19ac2c33bca"],["/2020/06/03/Spring学习笔记-一/index.html","7f719a0e27c7371f608430d2727800f0"],["/2020/06/03/Spring学习笔记-二/index.html","6441ca916aa42954a6c1006e64f9808b"],["/2020/06/06/Spring学习笔记-三/index.html","854a3a5f43db3447f7902564092d8e11"],["/2020/06/10/Spring学习笔记-四/index.html","304b2300cacdcade600a36e33ffdf380"],["/2020/06/12/注解和反射/index.html","7f23f565352627a3bf8d426966e97657"],["/2020/06/23/SpringMVC笔记-一/index.html","7f8a25577a152044e5c3b83e44f674b3"],["/2020/07/03/SpringMVC笔记-三/index.html","fdcd5264aae3ec52d74cd0a7783ea90e"],["/2020/07/03/SpringMVC笔记-二/index.html","f258d7b5cfde98ae9d3403d3a5f4be93"],["/2020/07/03/SpringMVC笔记-五/index.html","7be2177a4bcf451ee043a42c89526448"],["/2020/07/03/SpringMVC笔记-四/index.html","17067aa53a817dbcb101ca1e0a8a0e92"],["/2020/07/16/Java位运算符/index.html","5b4da566b3d29bf6c4972c90e2d682a4"],["/2020/07/19/Java类加载机制/index.html","66169248e9ff3a2a1b3c80d0a5ca17d6"],["/2020/07/21/Java的堆区、栈区和方法区简单分析/index.html","92d350bee2f7d3bf0924793efa5dece1"],["/2020/07/23/Java单例模式/index.html","4523f88915ed581cff1043bd1fbb4b4b"],["/2020/07/24/Java静态工厂/index.html","3440d272044a19a3504516e1c0e6e22a"],["/2020/07/27/Java抽象工厂模式/index.html","99ab391ce4a12014f8f63125bfda9b2d"],["/2020/07/27/Java模板模式/index.html","6adcd904612c092732156d12e3329c16"],["/2020/07/28/Object类Clone-方法/index.html","6ad720e2ef1f0b2eeeacf02c212e0823"],["/2020/07/30/正则表达式的基本使用/index.html","8e4dd49fc2261f0feb57f9de5d3c560a"],["/2020/08/01/Java集合比较器规则/index.html","ecafe2bcb13b85848ac067f8207c3618"],["/2020/08/09/NIO/index.html","e0390c3c162982a017a2ef342db64a89"],["/2020/09/08/Servlet生命周期/index.html","8c774e0d7f2308824c33930777b5c7ac"],["/2020/09/22/Mybatis巩固/index.html","21950f3e0d12d547ce3e5d565f9557c5"],["/2020/09/29/SpringMVC/index.html","78442d526c215e89f058f4cb9cdcdca2"],["/404.html","dcfc1c7cde1eaa59f7ab32d481de462d"],["/about/index.html","4c7c41be0e081883634e274cccb3f88b"],["/archives/2020/04/index.html","8ddec33f3d8fa7a5239e13f9e21bc655"],["/archives/2020/05/index.html","0a9ad280a8bf6127302eb65cae4ed3b7"],["/archives/2020/06/index.html","76c620dc0b127d549c148552b61b578a"],["/archives/2020/07/index.html","f931a5c86ce558d06979473723798041"],["/archives/2020/07/page/2/index.html","6a7b1e9232927992c95f1ff70fdfb253"],["/archives/2020/08/index.html","454e6cdef3492f9aa98e978552bbc7cf"],["/archives/2020/09/index.html","20b6df3f6468f210062f677342fa7e39"],["/archives/2020/index.html","e4b63fa9920e18b8411aa75e697458c1"],["/archives/2020/page/2/index.html","f586225f4f9fdf9710d15e02c87dfc2d"],["/archives/2020/page/3/index.html","bfc30e15df17283fd396edf3fbee0feb"],["/archives/2020/page/4/index.html","14140484bec8ac7c43770e596afd1ef9"],["/archives/2020/page/5/index.html","8326022adfead28f1ce7a0a54e0ba48a"],["/archives/index.html","ab98b06fde2c553c8e7a1ecb7a2e86ed"],["/archives/page/2/index.html","ab98b06fde2c553c8e7a1ecb7a2e86ed"],["/archives/page/3/index.html","ab98b06fde2c553c8e7a1ecb7a2e86ed"],["/archives/page/4/index.html","ab98b06fde2c553c8e7a1ecb7a2e86ed"],["/archives/page/5/index.html","ab98b06fde2c553c8e7a1ecb7a2e86ed"],["/categories/index.html","f15b80bfed166bf076577d4fd706fb03"],["/css/style.css","9ef44bcb440e989d6992635c98bc6266"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","27376cc26b9f29a46cb9ff9bd2c5d66a"],["/img/1.png","e662837f3402c7364d187c6bf2904b3a"],["/img/2.png","499d8182cefa7a56bfd22567cc09d877"],["/img/3.png","9f3ae5dff358000361b2890389cdde35"],["/img/4.png","351e90e38c34fb3e63c65c35b0c4fedb"],["/img/5.png","c98b39dff1b60938b407c491079be23d"],["/img/6.png","ccf84690523b35be3adda66aeb548926"],["/img/BeanUtils1.png","61d0bff3b934adc02df9a0b234e5e2e9"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/qq.png","4f3ba4d6f6bf0b3719d914d389fdadd1"],["/img/tomcat1.png","9a7f5a8776680f0dd722c2938de16b9f"],["/img/touxiang.jpg","3c68b53e1c6f31fa425d53395080f2d8"],["/img/weixin.jpg","e905cc6e0ffe18faff62ed1eeb1780ab"],["/img/wx.png","8277441bdf3e30075e0d28906d20d5ff"],["/img/zhifubao.jpg","69f11d691aa03ed257a9fba7d51b7d08"],["/img/爬虫1.png","fabde21a1ff0eb780d650ec49d6c06ed"],["/img/爬虫2.png","58217333d5eb43c8e313d50926870f14"],["/img/爬虫3.png","e775ad11e8f84b77633a24e90a85a795"],["/index.html","d17b6b2acc969ae6cce2b647fd6d3eaa"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/page/2/index.html","c9ea41ef8791ce5c171e88ae0a30ba53"],["/page/3/index.html","33edacf820fa921bb5c9391b4bb6c2c7"],["/page/4/index.html","1ee07c1dfd9eedc093ccc9b15cb43da1"],["/page/5/index.html","7e828c5f477f78bc2e08b9866a2579d5"],["/sw-register.js","13097235c8c7c98ef33afd8c30ac1367"],["/tags/JAVA/index.html","8de97661dcaa936c7540b6d7ec450417"],["/tags/JAVA/page/2/index.html","f2c739bb845868679ddc240986fe2ed7"],["/tags/JAVA/page/3/index.html","d333070605b1f00c35c70f1f85211af5"],["/tags/JavaWeb/index.html","a8bc3d4ca7861a9ba51f290fc503cf3e"],["/tags/SpringMVC/index.html","be3a725daf1769ec0778caf8a4dc474d"],["/tags/Spring框架/index.html","cf1658b15b8b1361955da6ea0eefbaa3"],["/tags/XML/index.html","a871db6a730e798d860cff4cd578d0d9"],["/tags/hexo/index.html","af698c42a50a88d918552ecf46f1bf9d"],["/tags/index.html","6c466975088d929c7ff481a6ba5afabd"],["/tags/mybatis/index.html","27aa70df133b88e095b197d380f645ee"],["/tags/python/index.html","c310ee59245da0c2ee5bd80cf78221f6"],["/tags/数据库/index.html","f6262c35fbfcfbb5124fa285dfc895c7"],["/tags/爬虫/index.html","a1e1846f900fa49b62e2c244745091aa"],["/tags/设计模式/index.html","e1cdc3d079fdd586a9d0cd16afac459b"],["/tags/软件/index.html","29e475e139918af5818606fa3b2a41e5"]];
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
