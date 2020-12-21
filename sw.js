/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/06/python爬虫/index.html","342a066e9196c4f954b29bc41659848e"],["/2020/04/06/安装Hexo环境/index.html","3b414c73d5a34961d48f63feeac10680"],["/2020/04/07/XML解析器/index.html","862be7da4d6b13f61ada048d16eaed8d"],["/2020/04/08/tomcat及Servlet/index.html","9e0501cc5fb23d78ff81b76d99f411ba"],["/2020/04/10/http/index.html","0e3c4f723739fa57674d3f54deb3ddc4"],["/2020/04/11/BeanUtils工具类的使用/index.html","403ab300cb0dcaef48b4013cb3d84dbe"],["/2020/04/15/Jetbrains系列产品2020-1最新激活方法/index.html","e6a5e5f09f313c3ea5dc139f4f59069d"],["/2020/04/23/Filter过滤器/index.html","c8191d0cf94f78f99f93e02d510b7e39"],["/2020/04/26/JQuery笔记/index.html","9da8b3466b158bfc098aee3f39bb6986"],["/2020/04/28/ajax和JSON/index.html","b0ddfc66e18dd97dd4039ff4a08127c1"],["/2020/05/01/redis数据库/index.html","f38dd49b8e2f9acb507cb567652153bc"],["/2020/05/13/抽取Servlet/index.html","1648ff570c72c19b6051c1be38b5cf9a"],["/2020/05/19/mybatis框架-一/index.html","11806d323987d460c97b65eb0530c277"],["/2020/05/21/PicGo-GitHub图床，让Markdown飞/index.html","17563a3ca6a4f5b40b098c619f3c9bc6"],["/2020/05/22/mybatis框架-二/index.html","eab86d76ac96937734b44520daa63157"],["/2020/05/22/ngork内网穿透/index.html","66c057e4563521c1f82e3786741ce9b2"],["/2020/05/24/mybatis框架-三/index.html","89a19c46bf715cced1fae81708a8af8a"],["/2020/05/27/mybatis框架-四/index.html","0cdd771b9c299f381ed6e941a92b07d0"],["/2020/05/31/Java多线程/index.html","c61a08a0bea0a5d041556ae4eeaf8b2e"],["/2020/06/03/Spring学习笔记-一/index.html","9c214d86db21005b9f95dcaf86478d3e"],["/2020/06/03/Spring学习笔记-二/index.html","35d73d1f4a1a5acba5a33438d130060e"],["/2020/06/06/Spring学习笔记-三/index.html","5c002b0683ad4a14f49bb86acafba63b"],["/2020/06/10/Spring学习笔记-四/index.html","effd39e3a731e2c33f6bcb54c8109f5e"],["/2020/06/12/注解和反射/index.html","8a49a0320becc310a4cdaafa664d56ca"],["/2020/06/23/SpringMVC笔记-一/index.html","9bf4c86975f27032b126b3b52575993b"],["/2020/07/03/SpringMVC笔记-三/index.html","8eee253ae8aa7ed0d4a9e3557766882c"],["/2020/07/03/SpringMVC笔记-二/index.html","7cd14565c9ea653df7792dfb75214868"],["/2020/07/03/SpringMVC笔记-五/index.html","93968d82e456a14cdb3bb0893ff22b22"],["/2020/07/03/SpringMVC笔记-四/index.html","6738d874658131b0a1933abea3f00610"],["/2020/07/16/Java位运算符/index.html","260ecca38cfae17c0eb659e38923feb0"],["/2020/07/19/Java类加载机制/index.html","27e6021578e0d73445ddd1ea452b10b1"],["/2020/07/21/Java的堆区、栈区和方法区简单分析/index.html","9a4547bbc1f3cc033dca28614f40d485"],["/2020/07/23/Java单例模式/index.html","ffa3fef4ee915beed2cefb32c659c75e"],["/2020/07/24/Java静态工厂/index.html","633df71803a5f2298690e5e050e39f82"],["/2020/07/27/Java抽象工厂模式/index.html","b48e7d4148806544334308a0476c1c2b"],["/2020/07/27/Java模板模式/index.html","7be49b490d13b3df2644d60ce981a7d8"],["/2020/07/28/Object类Clone-方法/index.html","8b27416eb7a466a23ad21c00bb9e4a78"],["/2020/07/30/正则表达式的基本使用/index.html","0a9f2625f0301da4775880b5a8f1a37b"],["/2020/08/01/Java集合比较器规则/index.html","ee4e035083bcfe521b52d07f6359e7e2"],["/2020/08/09/NIO/index.html","8511b6b8bb1e7f0f269e3b26b0b1c81c"],["/2020/09/08/Servlet生命周期/index.html","7d8f44ad6eefc236a838707e7995cc29"],["/2020/09/22/Mybatis巩固/index.html","5c498ac46b60756457a55d647fb5ddc0"],["/2020/09/29/SpringMVC/index.html","edc50084738f5d0d4d547037ab64ba15"],["/2020/10/12/SpringBoot笔记/index.html","6a0c6671ca19676932fa5d15b07647ab"],["/2020/10/13/SpringBoot集成editor-md/index.html","72c3bc6a764649ffed411c155b2c6a9d"],["/2020/10/24/Dubbo和Zookeeper集成/index.html","0f632bfa15a0be4d746b970e31a3c9bb"],["/404.html","1c18bbaea7bdf64a24a4e53e316fa455"],["/about/index.html","21fee406161bc680ded433ac9998458d"],["/archives/2020/04/index.html","2921135ca908d1b9eca6c457d58f5d87"],["/archives/2020/05/index.html","e2b3a6dcccae2f3bf519d198572c9a8a"],["/archives/2020/06/index.html","11ddc3b108f43deb76a2fde1a410fa9d"],["/archives/2020/07/index.html","1ff547e9c4e99d242fda596140bd451f"],["/archives/2020/07/page/2/index.html","f87d78825fa12b39dd3ad58c08eb9f52"],["/archives/2020/08/index.html","4b20823de4c4d8fe8139a8169c374a32"],["/archives/2020/09/index.html","4593c6c909aa1c0d7aafbe8940696ab3"],["/archives/2020/10/index.html","f813df94d8854f09f4ca55428321ac73"],["/archives/2020/index.html","f171e5f21a0350e1c3e8428ea56bdec3"],["/archives/2020/page/2/index.html","097b21ad6b9ab9267f02a3bdf6dea3fd"],["/archives/2020/page/3/index.html","ecb7ed972dc3010f4999f92e3451060b"],["/archives/2020/page/4/index.html","3ce378c94fa9342efd90247b4f77e057"],["/archives/2020/page/5/index.html","a2ca317b4e9d5b4d4bd04d9bfbedbda9"],["/archives/index.html","0d084530f8db7488793cfc8badc647ce"],["/archives/page/2/index.html","0d084530f8db7488793cfc8badc647ce"],["/archives/page/3/index.html","0d084530f8db7488793cfc8badc647ce"],["/archives/page/4/index.html","0d084530f8db7488793cfc8badc647ce"],["/archives/page/5/index.html","0d084530f8db7488793cfc8badc647ce"],["/categories/index.html","ef2efc7b3d247c1ebf575e73b8ea6a3d"],["/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","4ef8452afbee98cb95e275ff5286f374"],["/img/1.png","e662837f3402c7364d187c6bf2904b3a"],["/img/2.png","499d8182cefa7a56bfd22567cc09d877"],["/img/3.png","9f3ae5dff358000361b2890389cdde35"],["/img/4.png","351e90e38c34fb3e63c65c35b0c4fedb"],["/img/5.png","c98b39dff1b60938b407c491079be23d"],["/img/6.png","ccf84690523b35be3adda66aeb548926"],["/img/BeanUtils1.png","61d0bff3b934adc02df9a0b234e5e2e9"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/qq.png","4f3ba4d6f6bf0b3719d914d389fdadd1"],["/img/tomcat1.png","9a7f5a8776680f0dd722c2938de16b9f"],["/img/touxiang.jpg","3c68b53e1c6f31fa425d53395080f2d8"],["/img/weixin.jpg","e905cc6e0ffe18faff62ed1eeb1780ab"],["/img/wx.png","8277441bdf3e30075e0d28906d20d5ff"],["/img/zhifubao.jpg","69f11d691aa03ed257a9fba7d51b7d08"],["/img/爬虫1.png","fabde21a1ff0eb780d650ec49d6c06ed"],["/img/爬虫2.png","58217333d5eb43c8e313d50926870f14"],["/img/爬虫3.png","e775ad11e8f84b77633a24e90a85a795"],["/index.html","142069600385b83e3a4a72df9deaee6b"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/page/2/index.html","24d93eea325995ba9e718ae591dd9646"],["/page/3/index.html","bc3540525a780507ccd38e0cc384ab04"],["/page/4/index.html","5109c03234bb1d611010bde8c31ce5b0"],["/page/5/index.html","428cd2bcd5daf67ad1765fe499db70d7"],["/sw-register.js","e3dca5186822b5a5b7dc99de2ea1255b"],["/tags/JAVA/index.html","07cca6c511b3b7fc863c0997bb174b8c"],["/tags/JAVA/page/2/index.html","c35e846088b878c9645560969bf38008"],["/tags/JAVA/page/3/index.html","a692d497cdb44c14969db335d8721ba2"],["/tags/JavaWeb/index.html","49af74238fa6da1897012bd03c57ead4"],["/tags/SpringBoot/index.html","bed748dcae0781b394545e3cb8f4a249"],["/tags/SpringMVC/index.html","b753f054293d0a2941446c53c16595cf"],["/tags/Spring框架/index.html","32266d09b18256acc7110510cf39adbe"],["/tags/XML/index.html","915aea09b4a28a9068434ca025d22e48"],["/tags/hexo/index.html","bb04891996284c3ada5bf31e464bc5cd"],["/tags/index.html","339c933ba7ecbd97f74c43e3cf172c22"],["/tags/mybatis/index.html","40bfef6fcc9e5136fbe0910c37ab075a"],["/tags/python/index.html","2a97c6ec8d5d426c9814c7a5d79ffeb3"],["/tags/数据库/index.html","f63bedf5f2695b7611c6a3133d902226"],["/tags/爬虫/index.html","6cda7451e2b88f421fff2c0149cde405"],["/tags/设计模式/index.html","e17843ff677d0c07a7c939b6650edf05"],["/tags/软件/index.html","02886a82a79e3c000db1a731e356f968"]];
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
