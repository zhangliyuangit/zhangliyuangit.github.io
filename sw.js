/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/06/python爬虫/index.html","1513bbf487f7af366141ddbaf2feec61"],["/2020/04/06/安装Hexo环境/index.html","9a8c14ae83e62b34be6a9d0ce597dfd1"],["/2020/04/07/XML解析器/index.html","45e21a3c8851499cf76e0648f3496086"],["/2020/04/08/tomcat及Servlet/index.html","36685faad5f35b5f6defa9f0b7f5ebbb"],["/2020/04/10/http/index.html","74963409b73e42d283d01cfb82246807"],["/2020/04/11/BeanUtils工具类的使用/index.html","cfdfc1ac6cf5d25797f6207aa70725bd"],["/2020/04/15/Jetbrains系列产品2020-1最新激活方法/index.html","a1aed09ac3f15885030f1c274f34d1dc"],["/2020/04/23/Filter过滤器/index.html","7f201838b54719355d203cc86d6e13c0"],["/2020/04/26/JQuery笔记/index.html","5a6c7481cbdc3c0f84a6805a9a3d2540"],["/2020/04/28/ajax和JSON/index.html","e73abdba4ed002c2558de7b5b6705c13"],["/2020/05/01/redis数据库/index.html","25bd963b5ad4bd01a1902731dc177d1e"],["/2020/05/13/抽取Servlet/index.html","465e7660c08956d184c97f4ad2194808"],["/2020/05/19/mybatis框架-一/index.html","9ae64ef153ae765f62ba27755cc645ad"],["/2020/05/21/PicGo-GitHub图床，让Markdown飞/index.html","689ccb3573dbcf98f20b6398ce3d656c"],["/2020/05/22/mybatis框架-二/index.html","2bb3f2f70984e2261dd45715e626afaf"],["/2020/05/22/ngork内网穿透/index.html","4d4acdbb3af89b7d70e005a46d0bf61a"],["/2020/05/24/mybatis框架-三/index.html","96d74fe07da39a2172f92112a94ed646"],["/2020/05/27/mybatis框架-四/index.html","556e6c1417568a38f6317d2f7df63b3a"],["/2020/05/31/Java多线程/index.html","17fc124b8921217ebea0797d568b1359"],["/2020/06/03/Spring学习笔记-一/index.html","fd3b8ebcd1a416103568a414e11ed1dc"],["/2020/06/03/Spring学习笔记-二/index.html","c5db2ebc45b8fad0556d535900be227d"],["/2020/06/06/Spring学习笔记-三/index.html","9887083ae42150c5a6527e959259547c"],["/2020/06/10/Spring学习笔记-四/index.html","46e5f45203070512f01b169e2a4d5b56"],["/2020/06/12/注解和反射/index.html","dfaa36caf52ac06598a4eb7e367a8843"],["/2020/06/23/SpringMVC笔记-一/index.html","7548298900c501a2cba8e11afb0d788f"],["/2020/07/03/SpringMVC笔记-三/index.html","4de0b8103d4c29e23bbb0e919002067f"],["/2020/07/03/SpringMVC笔记-二/index.html","7a94a7d86acf918f37a7a5d85a93fc17"],["/2020/07/03/SpringMVC笔记-五/index.html","521cd00031eab182aa71967e295fc2eb"],["/2020/07/03/SpringMVC笔记-四/index.html","f875804ae0cbe6da60542c1d33bdff5d"],["/2020/07/16/Java位运算符/index.html","b8969a6d76afa4151af4b39ce164ef87"],["/2020/07/19/Java类加载机制/index.html","e8a6bc5d6a5264dfe11f1ef25420b7a8"],["/2020/07/21/Java的堆区、栈区和方法区简单分析/index.html","60ccae4d3767e7fc2bbd1fb56e9a847d"],["/2020/07/23/Java单例模式/index.html","c190be9b565816ad86ae5dd80876eca3"],["/2020/07/24/Java静态工厂/index.html","72de8914fa7e964649e2f1932766458f"],["/404.html","763ad6fbabf1c77eeb270d35bf7091ae"],["/about/index.html","dd376c2de33e39d5b2451a17e0883802"],["/archives/2020/04/index.html","f31771997112316a35b1ba3a61c94088"],["/archives/2020/05/index.html","f453746691b47b5617004a329998678a"],["/archives/2020/06/index.html","c9a3318044b8fd45307099d190c64789"],["/archives/2020/07/index.html","05b741a4dfcb9d82dc239824b71d76e9"],["/archives/2020/index.html","b87e6b276fb3ddea134f4d299fdcfc89"],["/archives/2020/page/2/index.html","cdc7cb39ba168b74ab2ae79e1725fed7"],["/archives/2020/page/3/index.html","4880eb92a8b52f934e2c177ba9ec29e0"],["/archives/2020/page/4/index.html","79b6340b1fa25ab9c52e2c5a5c07f7b9"],["/archives/index.html","112d016237b591818e5b6e34d16fb4ee"],["/archives/page/2/index.html","112d016237b591818e5b6e34d16fb4ee"],["/archives/page/3/index.html","112d016237b591818e5b6e34d16fb4ee"],["/archives/page/4/index.html","112d016237b591818e5b6e34d16fb4ee"],["/categories/index.html","a39eb21f79e15957ebcc64c4d7d18d99"],["/css/style.css","9ef44bcb440e989d6992635c98bc6266"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","6c0f1f0610573c60c0fd1b65cfc0673d"],["/img/1.png","e662837f3402c7364d187c6bf2904b3a"],["/img/2.png","499d8182cefa7a56bfd22567cc09d877"],["/img/3.png","9f3ae5dff358000361b2890389cdde35"],["/img/4.png","351e90e38c34fb3e63c65c35b0c4fedb"],["/img/5.png","c98b39dff1b60938b407c491079be23d"],["/img/6.png","ccf84690523b35be3adda66aeb548926"],["/img/BeanUtils1.png","61d0bff3b934adc02df9a0b234e5e2e9"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/qq.png","4f3ba4d6f6bf0b3719d914d389fdadd1"],["/img/tomcat1.png","9a7f5a8776680f0dd722c2938de16b9f"],["/img/touxiang.jpg","3c68b53e1c6f31fa425d53395080f2d8"],["/img/weixin.jpg","e905cc6e0ffe18faff62ed1eeb1780ab"],["/img/wx.png","8277441bdf3e30075e0d28906d20d5ff"],["/img/zhifubao.jpg","69f11d691aa03ed257a9fba7d51b7d08"],["/img/爬虫1.png","fabde21a1ff0eb780d650ec49d6c06ed"],["/img/爬虫2.png","58217333d5eb43c8e313d50926870f14"],["/img/爬虫3.png","e775ad11e8f84b77633a24e90a85a795"],["/index.html","411c4e4267e59575cb17c6c68d8d469b"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/page/2/index.html","be74411fc9b175c2eefb854cd13d8a9f"],["/page/3/index.html","90773e5d44987595ac5579e295bb6b9a"],["/page/4/index.html","e31ad65a5e9e38b369275bbf60b23788"],["/tags/JAVA/index.html","a8f7ca446112635bc482b2b9b9aeaf16"],["/tags/JAVA/page/2/index.html","2ca5ca7d6b62cd145cf6eb04a388a698"],["/tags/JavaWeb/index.html","0850490feaf16a3e11d82758446dac84"],["/tags/SpringMVC/index.html","bfbb8a294b47f3133c540e07e3e16fe6"],["/tags/Spring框架/index.html","9224c3b4baceadf837216f97de5d24f5"],["/tags/XML/index.html","8a40c0f110c7025febe04872dcd97df0"],["/tags/hexo/index.html","94400a8d53cf26f5b41a6e949f4a9226"],["/tags/index.html","9d7d7d31678603c19fd3de65f02bf458"],["/tags/mybatis/index.html","e46436bd7102dc7e286cbf3404a303f1"],["/tags/python/index.html","ca4400f10ce600c894b139ba8e9fb5ba"],["/tags/数据库/index.html","96218f1943c943882369ee2ce5ea707e"],["/tags/爬虫/index.html","3c092c4492ca73d31d2749311ac736ca"],["/tags/设计模式/index.html","2ce528501c53afb62f5b2371a21589d4"],["/tags/软件/index.html","c29359394a1757e47fc61a6438d8dfd0"]];
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
