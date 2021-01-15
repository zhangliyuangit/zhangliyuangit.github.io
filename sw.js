/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/06/python爬虫/index.html","342a066e9196c4f954b29bc41659848e"],["/2020/04/06/安装Hexo环境/index.html","3b414c73d5a34961d48f63feeac10680"],["/2020/04/07/XML解析器/index.html","862be7da4d6b13f61ada048d16eaed8d"],["/2020/04/08/tomcat及Servlet/index.html","9e0501cc5fb23d78ff81b76d99f411ba"],["/2020/04/10/http/index.html","0e3c4f723739fa57674d3f54deb3ddc4"],["/2020/04/11/BeanUtils工具类的使用/index.html","403ab300cb0dcaef48b4013cb3d84dbe"],["/2020/04/15/Jetbrains系列产品2020-1最新激活方法/index.html","e6a5e5f09f313c3ea5dc139f4f59069d"],["/2020/04/23/Filter过滤器/index.html","c8191d0cf94f78f99f93e02d510b7e39"],["/2020/04/26/JQuery笔记/index.html","9da8b3466b158bfc098aee3f39bb6986"],["/2020/04/28/ajax和JSON/index.html","b0ddfc66e18dd97dd4039ff4a08127c1"],["/2020/05/01/redis数据库/index.html","f38dd49b8e2f9acb507cb567652153bc"],["/2020/05/13/抽取Servlet/index.html","1648ff570c72c19b6051c1be38b5cf9a"],["/2020/05/19/mybatis框架-一/index.html","11806d323987d460c97b65eb0530c277"],["/2020/05/21/PicGo-GitHub图床，让Markdown飞/index.html","17563a3ca6a4f5b40b098c619f3c9bc6"],["/2020/05/22/mybatis框架-二/index.html","eab86d76ac96937734b44520daa63157"],["/2020/05/22/ngork内网穿透/index.html","66c057e4563521c1f82e3786741ce9b2"],["/2020/05/24/mybatis框架-三/index.html","89a19c46bf715cced1fae81708a8af8a"],["/2020/05/27/mybatis框架-四/index.html","0cdd771b9c299f381ed6e941a92b07d0"],["/2020/05/31/Java多线程/index.html","c61a08a0bea0a5d041556ae4eeaf8b2e"],["/2020/06/03/Spring学习笔记-一/index.html","9c214d86db21005b9f95dcaf86478d3e"],["/2020/06/03/Spring学习笔记-二/index.html","35d73d1f4a1a5acba5a33438d130060e"],["/2020/06/06/Spring学习笔记-三/index.html","5c002b0683ad4a14f49bb86acafba63b"],["/2020/06/10/Spring学习笔记-四/index.html","effd39e3a731e2c33f6bcb54c8109f5e"],["/2020/06/12/注解和反射/index.html","8a49a0320becc310a4cdaafa664d56ca"],["/2020/06/23/SpringMVC笔记-一/index.html","9bf4c86975f27032b126b3b52575993b"],["/2020/07/03/SpringMVC笔记-三/index.html","8eee253ae8aa7ed0d4a9e3557766882c"],["/2020/07/03/SpringMVC笔记-二/index.html","7cd14565c9ea653df7792dfb75214868"],["/2020/07/03/SpringMVC笔记-五/index.html","93968d82e456a14cdb3bb0893ff22b22"],["/2020/07/03/SpringMVC笔记-四/index.html","6738d874658131b0a1933abea3f00610"],["/2020/07/16/Java位运算符/index.html","260ecca38cfae17c0eb659e38923feb0"],["/2020/07/19/Java类加载机制/index.html","27e6021578e0d73445ddd1ea452b10b1"],["/2020/07/21/Java的堆区、栈区和方法区简单分析/index.html","9a4547bbc1f3cc033dca28614f40d485"],["/2020/07/23/Java单例模式/index.html","ffa3fef4ee915beed2cefb32c659c75e"],["/2020/07/24/Java静态工厂/index.html","633df71803a5f2298690e5e050e39f82"],["/2020/07/27/Java抽象工厂模式/index.html","b48e7d4148806544334308a0476c1c2b"],["/2020/07/27/Java模板模式/index.html","7be49b490d13b3df2644d60ce981a7d8"],["/2020/07/28/Object类Clone-方法/index.html","8b27416eb7a466a23ad21c00bb9e4a78"],["/2020/07/30/正则表达式的基本使用/index.html","0a9f2625f0301da4775880b5a8f1a37b"],["/2020/08/01/Java集合比较器规则/index.html","ee4e035083bcfe521b52d07f6359e7e2"],["/2020/08/09/NIO/index.html","8511b6b8bb1e7f0f269e3b26b0b1c81c"],["/2020/09/08/Servlet生命周期/index.html","7d8f44ad6eefc236a838707e7995cc29"],["/2020/09/22/Mybatis巩固/index.html","5c498ac46b60756457a55d647fb5ddc0"],["/2020/09/29/SpringMVC/index.html","edc50084738f5d0d4d547037ab64ba15"],["/2020/10/12/SpringBoot笔记/index.html","6a0c6671ca19676932fa5d15b07647ab"],["/2020/10/13/SpringBoot集成editor-md/index.html","72c3bc6a764649ffed411c155b2c6a9d"],["/2020/10/24/Dubbo和Zookeeper集成/index.html","af6ddd16b708b2d290c63d6c17ca72e5"],["/2020/12/21/Docker学习笔记/index.html","fff7ef49edb52d4b5cc856888a093a7b"],["/2020/12/22/java动态代理/index.html","3691d206f9da928facbb1ab8bf22443c"],["/2020/12/27/数据结构学习笔记/index.html","23aee32ec86b94b5ab0a168385f7af7d"],["/404.html","1c18bbaea7bdf64a24a4e53e316fa455"],["/about/index.html","21fee406161bc680ded433ac9998458d"],["/archives/2020/04/index.html","7125e9881a7800c250441c3b2876d1a6"],["/archives/2020/05/index.html","22af234dd6a4aa71d7b3f7a378b1cbef"],["/archives/2020/06/index.html","49b45d9b2d3a9a23177068d7dfdbe2c5"],["/archives/2020/07/index.html","8f6b46a7dfbf3f14fc036323a3fe42d4"],["/archives/2020/07/page/2/index.html","0cae7cc679f08d46d64f73d9f88b135b"],["/archives/2020/08/index.html","2f379fed96d9a7eee27285d1f4f494d6"],["/archives/2020/09/index.html","cc30f5532916fcb8ddc157c9f344960b"],["/archives/2020/10/index.html","a11a5881be83d5c51f1017581ba57d0c"],["/archives/2020/12/index.html","656d75b75e2c7eeba044c27ff4b89b54"],["/archives/2020/index.html","3f1ef6f3079b16c427098058132928ee"],["/archives/2020/page/2/index.html","e5a89670314bd84844d1f1f79c4d7c67"],["/archives/2020/page/3/index.html","256225cc2a1af9d4b482cc62d590e003"],["/archives/2020/page/4/index.html","f9dee925c25a5c479d40d2a3aeb9725e"],["/archives/2020/page/5/index.html","32ed5da23715537c5bf1058de502c374"],["/archives/index.html","96df33352e678caff97d83ce92fdb9af"],["/archives/page/2/index.html","96df33352e678caff97d83ce92fdb9af"],["/archives/page/3/index.html","96df33352e678caff97d83ce92fdb9af"],["/archives/page/4/index.html","96df33352e678caff97d83ce92fdb9af"],["/archives/page/5/index.html","96df33352e678caff97d83ce92fdb9af"],["/categories/index.html","ef2efc7b3d247c1ebf575e73b8ea6a3d"],["/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","4ef8452afbee98cb95e275ff5286f374"],["/img/1.png","e662837f3402c7364d187c6bf2904b3a"],["/img/2.png","499d8182cefa7a56bfd22567cc09d877"],["/img/3.png","9f3ae5dff358000361b2890389cdde35"],["/img/4.png","351e90e38c34fb3e63c65c35b0c4fedb"],["/img/5.png","c98b39dff1b60938b407c491079be23d"],["/img/6.png","ccf84690523b35be3adda66aeb548926"],["/img/BeanUtils1.png","61d0bff3b934adc02df9a0b234e5e2e9"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/qq.png","4f3ba4d6f6bf0b3719d914d389fdadd1"],["/img/tomcat1.png","9a7f5a8776680f0dd722c2938de16b9f"],["/img/touxiang.jpg","3c68b53e1c6f31fa425d53395080f2d8"],["/img/weixin.jpg","e905cc6e0ffe18faff62ed1eeb1780ab"],["/img/wx.png","8277441bdf3e30075e0d28906d20d5ff"],["/img/zhifubao.jpg","69f11d691aa03ed257a9fba7d51b7d08"],["/img/爬虫1.png","fabde21a1ff0eb780d650ec49d6c06ed"],["/img/爬虫2.png","58217333d5eb43c8e313d50926870f14"],["/img/爬虫3.png","e775ad11e8f84b77633a24e90a85a795"],["/index.html","0756a50923f2214dab3dae7bb44e6d9f"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/page/2/index.html","ec8bccf81b69755d89532177f6239ee5"],["/page/3/index.html","3de1391a7d766e2042e3c0833b4f5ba6"],["/page/4/index.html","e3815c23eeb4bf29dbd98dea1ad73dc2"],["/page/5/index.html","031f3405ff4ac8914e05f1a6b4ced01a"],["/sw-register.js","8a6fbbc8315432aec81e178c4737d995"],["/tags/Docker/index.html","af7af70796ed6bc3780e6012e00538dd"],["/tags/JAVA/index.html","dbad9318c043348df90a204aab313937"],["/tags/JAVA/page/2/index.html","09c0620616b567b909fa0a1fb64976c8"],["/tags/JAVA/page/3/index.html","176ebe187c318b9be32b24d3d03b41ad"],["/tags/JavaWeb/index.html","5cafaae95874215c0c112705ad00cb64"],["/tags/SpringBoot/index.html","a3d1cf28221bcfad1481f8b5796b7143"],["/tags/SpringMVC/index.html","a91aa7f0621a025c4c3bf732ab630593"],["/tags/Spring框架/index.html","3859dc880d011462069ee771fff6db8e"],["/tags/XML/index.html","32557bd283702abf162c782a54988404"],["/tags/hexo/index.html","c853c6806054cfe886e424782dafd7a1"],["/tags/index.html","b04596485c6aa788b304918f948b1ced"],["/tags/mybatis/index.html","f30f2b3006649e6ad6d2b2cf8f3de207"],["/tags/python/index.html","09bee8ead22c5093f757fa2482116211"],["/tags/数据库/index.html","8bb7b1892ebd7e2c771685500f531eb5"],["/tags/数据结构/index.html","57b44d0ade260e52f07fa02950d887f0"],["/tags/爬虫/index.html","5d5f8b092cf0146faeb5269e7113690b"],["/tags/设计模式/index.html","c2fe36fd7261fbb9cb0f6e35d288a7d0"],["/tags/软件/index.html","1166004bf58cb5017fdd23bdbf46a2ab"]];
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
