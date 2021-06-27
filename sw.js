/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/06/python爬虫/index.html","7fc857410c80e8b98c6e2baee1af5737"],["/2020/04/06/安装Hexo环境/index.html","9de2206d63a2d45e7d79a112b49c7f2e"],["/2020/04/07/XML解析器/index.html","6468a16213edb3ccbaf14ab19b045580"],["/2020/04/08/tomcat及Servlet/index.html","7eb00ad7fdce2e6e7bab69693e81372f"],["/2020/04/10/http/index.html","8a8152523f58410b5c8501a0c1cafaac"],["/2020/04/11/BeanUtils工具类的使用/index.html","1ad14a38df35ed0df74edc0650d11cc1"],["/2020/04/15/Jetbrains系列产品2020-1最新激活方法/index.html","1bec52400c19e4c41157e721cbea0613"],["/2020/04/23/Filter过滤器/index.html","84574b70bc344019fdaa3d0893d3f917"],["/2020/04/26/JQuery笔记/index.html","632b90fd3911e694ce333d02a978061a"],["/2020/04/28/ajax和JSON/index.html","f3cf52ec0cc083f91fbca646fba05cc2"],["/2020/05/01/redis数据库/index.html","61a86a6fd607d8a4b92c1b9a72e307b5"],["/2020/05/13/抽取Servlet/index.html","f7219aed57544ab0c2984cfcbe476aec"],["/2020/05/19/mybatis框架-一/index.html","09801bc263a20e365ef03bd02a94c310"],["/2020/05/21/PicGo-GitHub图床，让Markdown飞/index.html","17d82a65e72840a9d7399fe2bb46ce71"],["/2020/05/22/mybatis框架-二/index.html","7b0acd64fe405342f1771ae085c43aa0"],["/2020/05/22/ngork内网穿透/index.html","917a60be3d0136ec64e2b907c8e84da6"],["/2020/05/24/mybatis框架-三/index.html","c3d49e006c535ef31cfd38eb3ff93919"],["/2020/05/27/mybatis框架-四/index.html","7fc1b3091ce385ad1cbc4c6db68e7c0f"],["/2020/05/31/Java多线程/index.html","d621de15dc4217268af8a19ac2c33bca"],["/2020/06/03/Spring学习笔记-一/index.html","7f719a0e27c7371f608430d2727800f0"],["/2020/06/03/Spring学习笔记-二/index.html","6441ca916aa42954a6c1006e64f9808b"],["/2020/06/06/Spring学习笔记-三/index.html","854a3a5f43db3447f7902564092d8e11"],["/2020/06/10/Spring学习笔记-四/index.html","304b2300cacdcade600a36e33ffdf380"],["/2020/06/12/注解和反射/index.html","7f23f565352627a3bf8d426966e97657"],["/2020/06/23/SpringMVC笔记-一/index.html","7f8a25577a152044e5c3b83e44f674b3"],["/2020/07/03/SpringMVC笔记-三/index.html","fdcd5264aae3ec52d74cd0a7783ea90e"],["/2020/07/03/SpringMVC笔记-二/index.html","f258d7b5cfde98ae9d3403d3a5f4be93"],["/2020/07/03/SpringMVC笔记-五/index.html","7be2177a4bcf451ee043a42c89526448"],["/2020/07/03/SpringMVC笔记-四/index.html","17067aa53a817dbcb101ca1e0a8a0e92"],["/2020/07/16/Java位运算符/index.html","5b4da566b3d29bf6c4972c90e2d682a4"],["/2020/07/19/Java类加载机制/index.html","66169248e9ff3a2a1b3c80d0a5ca17d6"],["/2020/07/21/Java的堆区、栈区和方法区简单分析/index.html","92d350bee2f7d3bf0924793efa5dece1"],["/2020/07/23/Java单例模式/index.html","4523f88915ed581cff1043bd1fbb4b4b"],["/2020/07/24/Java静态工厂/index.html","3440d272044a19a3504516e1c0e6e22a"],["/2020/07/27/Java抽象工厂模式/index.html","99ab391ce4a12014f8f63125bfda9b2d"],["/2020/07/27/Java模板模式/index.html","6adcd904612c092732156d12e3329c16"],["/2020/07/28/Object类Clone-方法/index.html","6ad720e2ef1f0b2eeeacf02c212e0823"],["/2020/07/30/正则表达式的基本使用/index.html","8e4dd49fc2261f0feb57f9de5d3c560a"],["/2020/08/01/Java集合比较器规则/index.html","ecafe2bcb13b85848ac067f8207c3618"],["/2020/08/09/NIO/index.html","e0390c3c162982a017a2ef342db64a89"],["/2020/09/08/Servlet生命周期/index.html","8c774e0d7f2308824c33930777b5c7ac"],["/2020/09/22/Mybatis巩固/index.html","21950f3e0d12d547ce3e5d565f9557c5"],["/2020/09/29/SpringMVC/index.html","ea05a8300c1a14572c7cba4098e13541"],["/2020/10/12/SpringBoot笔记/index.html","b1dd85a307de2596cbe09530e43bd43d"],["/2020/10/13/SpringBoot集成editor-md/index.html","38fdaf2b6e7b677b5149df33a34535d4"],["/2020/10/24/Dubbo和Zookeeper集成/index.html","18f710d07e40eb54b29118d3f56263fe"],["/2020/12/21/Docker学习笔记/index.html","6c86060137ee68d18468c2016e9b3bb7"],["/2020/12/22/java动态代理/index.html","87a23224cb8a6275d7af6f8ead3f9be1"],["/2020/12/27/数据结构学习笔记/index.html","c70b899156978b5d5bb93d2d753bbb0b"],["/2021/01/15/RabbitMQ/index.html","fad1fa477cc17df656ce3ef3484b107b"],["/2021/03/02/JWT/index.html","00a87b97d0a3cc9f1400661661cea0c4"],["/2021/03/04/SpringBoot整合Redis/index.html","cb93e855faab9c6a265b65b201a21f4c"],["/2021/04/18/SpringCloud学习笔记/index.html","6c709a1d05f2089c311b7ef87760d31a"],["/404.html","dcfc1c7cde1eaa59f7ab32d481de462d"],["/about/index.html","4c7c41be0e081883634e274cccb3f88b"],["/archives/2020/04/index.html","d0fcb6f1c27677d0346761344ab6c12a"],["/archives/2020/05/index.html","217291c561b7a273f3ccd519802bc9d1"],["/archives/2020/06/index.html","3d4f024a05d422a6223b14ad48232782"],["/archives/2020/07/index.html","f66031aeb6c1b415fd29dd0163cf0611"],["/archives/2020/07/page/2/index.html","215090f3ae635e1c87b3d91eaed7c640"],["/archives/2020/08/index.html","8e626416e4383850f9816aefebd5a808"],["/archives/2020/09/index.html","2d3446e78ce5f23ee54bfe19c4664ef4"],["/archives/2020/10/index.html","f7992ed0fbe537f3439d9ae2190007a4"],["/archives/2020/12/index.html","092714c2f4b2f91e4ce6fee58d74a72a"],["/archives/2020/index.html","e3e06484751e746f14ed5b45f9018920"],["/archives/2020/page/2/index.html","a751c0956fd14a736b2aadfdba202332"],["/archives/2020/page/3/index.html","1688c58ed3d1d8c9cb43f3e80e960f45"],["/archives/2020/page/4/index.html","c669945c2e5521a9113ec072340fa54c"],["/archives/2020/page/5/index.html","40c0c87916bf72ca11495c68dc235415"],["/archives/2021/01/index.html","dec0d6bf6f505c22df991330d427f5a4"],["/archives/2021/03/index.html","1fd2182cc1c1c06aad6c2fdcbdb47389"],["/archives/2021/04/index.html","4ea37b0df951042d03b477a5f780c37c"],["/archives/2021/index.html","70c0a91bdf9382b029056a322a2da49c"],["/archives/index.html","616e431ef8889e4ba77743097efd1143"],["/archives/page/2/index.html","616e431ef8889e4ba77743097efd1143"],["/archives/page/3/index.html","616e431ef8889e4ba77743097efd1143"],["/archives/page/4/index.html","616e431ef8889e4ba77743097efd1143"],["/archives/page/5/index.html","616e431ef8889e4ba77743097efd1143"],["/archives/page/6/index.html","616e431ef8889e4ba77743097efd1143"],["/categories/index.html","f15b80bfed166bf076577d4fd706fb03"],["/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","27376cc26b9f29a46cb9ff9bd2c5d66a"],["/img/1.png","e662837f3402c7364d187c6bf2904b3a"],["/img/2.png","499d8182cefa7a56bfd22567cc09d877"],["/img/3.png","9f3ae5dff358000361b2890389cdde35"],["/img/4.png","351e90e38c34fb3e63c65c35b0c4fedb"],["/img/5.png","c98b39dff1b60938b407c491079be23d"],["/img/6.png","ccf84690523b35be3adda66aeb548926"],["/img/BeanUtils1.png","61d0bff3b934adc02df9a0b234e5e2e9"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/qq.png","4f3ba4d6f6bf0b3719d914d389fdadd1"],["/img/tomcat1.png","9a7f5a8776680f0dd722c2938de16b9f"],["/img/touxiang.jpg","3c68b53e1c6f31fa425d53395080f2d8"],["/img/weixin.jpg","e905cc6e0ffe18faff62ed1eeb1780ab"],["/img/wx.png","8277441bdf3e30075e0d28906d20d5ff"],["/img/zhifubao.jpg","69f11d691aa03ed257a9fba7d51b7d08"],["/img/爬虫1.png","fabde21a1ff0eb780d650ec49d6c06ed"],["/img/爬虫2.png","58217333d5eb43c8e313d50926870f14"],["/img/爬虫3.png","e775ad11e8f84b77633a24e90a85a795"],["/index.html","969b67b4e56e1b3d247aa56a4e2fef13"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/page/2/index.html","c1d25c092725654b62e58a570cb47aff"],["/page/3/index.html","7cacc47709a70aed4c24049e214fb408"],["/page/4/index.html","18e9062f0200c569f692ca0662be99d2"],["/page/5/index.html","69b489640e8681c0fd4cf7c5c0aead10"],["/page/6/index.html","9b8dae1c048921c49cb71915640d3420"],["/sw-register.js","afcd8d202e94749d3f31d71e59bee562"],["/tags/Docker/index.html","c76e6f0b157f2295610a70d86d698d64"],["/tags/JAVA/index.html","ac3a2f8e7c7c6b49401fbb1e94827a42"],["/tags/JAVA/page/2/index.html","6454c08ee3cb08bfe5f9778206a7a987"],["/tags/JAVA/page/3/index.html","f410a26220bc63e36f6b1ce1d309cd54"],["/tags/JAVA/page/4/index.html","77570e56b4c341308c7bc5cfd3009d2a"],["/tags/JWT/index.html","eba11ba7dd1aabd266b244971ca55083"],["/tags/JavaWeb/index.html","b840f6a07844254661d039bc35866e74"],["/tags/RabbitMQ/index.html","84635c21cbc80febc50de18b0ab5c23a"],["/tags/SpringBoot/index.html","a49d7eeeb4a3c2b894d7e3744198addf"],["/tags/SpringCloud/index.html","e03c9a940bc0a467b14ec5eed5bec3fd"],["/tags/SpringMVC/index.html","2520c5c50ba477479a40a902caa998f0"],["/tags/Spring框架/index.html","c319965ed786a2f4d3365290cd6a3a45"],["/tags/XML/index.html","12af2e3ae6f39a58045d3cde3b8cf25c"],["/tags/hexo/index.html","3aee7d9be4a44691900acda55a5d8b79"],["/tags/index.html","8ceb62cae20ddc23e3ff270c433992f2"],["/tags/mybatis/index.html","005039f51f44acf74bf5923611326a95"],["/tags/python/index.html","35b7d52b9ccc4350dc32d97bf1c9aeba"],["/tags/数据库/index.html","572e0e43cb2a67c4344560f8e4998226"],["/tags/数据结构/index.html","67bea44c0b969f33d891e8e026f3e59a"],["/tags/爬虫/index.html","022a5253402e3e9234e421ddac304f17"],["/tags/设计模式/index.html","0e108093eb5ffa13e58ef17937178450"],["/tags/软件/index.html","c1c22c023a591249fd3e908917999662"]];
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
