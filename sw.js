/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/06/python爬虫/index.html","fbfcb8774fd56e2cbdb92229ecd67839"],["/2020/04/06/安装Hexo环境/index.html","dd6bcc90d566d15449b32e4b4623859c"],["/2020/04/07/XML解析器/index.html","f446b6baec11341b43f0bc698ce5df37"],["/2020/04/08/tomcat及Servlet/index.html","5750450453808f9edee5d8af54490fd6"],["/2020/04/10/http/index.html","fb1cda939985d88f355310200494555f"],["/2020/04/11/BeanUtils工具类的使用/index.html","de8022e1275ddc506745e5e532f79eca"],["/2020/04/15/Jetbrains系列产品2020-1最新激活方法/index.html","5dcd822c6d5d76cd1f038c7ec3a884b9"],["/2020/04/23/Filter过滤器/index.html","e1887d20330b1f937d844f17114575b5"],["/2020/04/26/JQuery笔记/index.html","2c63efb0889872e415fd153a3e789e59"],["/2020/04/28/ajax和JSON/index.html","d5f7897b8d6a8128d47ea24d65f68a37"],["/2020/05/01/redis数据库/index.html","2ea3648908cc13e3dd015b5c61dae0ef"],["/2020/05/13/抽取Servlet/index.html","abadeef9a7f5b484d1b075349614e108"],["/2020/05/19/mybatis框架-一/index.html","2050993da1aeeae6429ebd106d89742a"],["/2020/05/21/PicGo-GitHub图床，让Markdown飞/index.html","ad6211a2531b57df5dab47ee8f6e954e"],["/2020/05/22/mybatis框架-二/index.html","d2bd96675eff881fc42783105058c626"],["/2020/05/22/ngork内网穿透/index.html","24ada4730d4ea15b488159a92237c509"],["/2020/05/24/mybatis框架-三/index.html","1f01101ee7d762c46848ca1c9ec5604b"],["/2020/05/27/mybatis框架-四/index.html","9f3193f543604cc43b32fb3a032a5569"],["/2020/05/31/Java多线程/index.html","a98c6bceb6eff0b95bad3207fb2abf7b"],["/2020/06/03/Spring学习笔记-一/index.html","f0252b57b9879fdef6f04b5ca571e663"],["/2020/06/03/Spring学习笔记-二/index.html","4b923d31c32f089bc16ae61a286ef077"],["/2020/06/06/Spring学习笔记-三/index.html","a3ad7ee9a3c3edb7e76f63763ebfa677"],["/2020/06/10/Spring学习笔记-四/index.html","86e03b37fce9cd6c005be13ae415c6d1"],["/2020/06/12/注解和反射/index.html","eb531f32604034947106aa984a07c512"],["/2020/06/23/SpringMVC笔记-一/index.html","b149ef9575c7dbcb4c69bff938dab138"],["/2020/07/03/SpringMVC笔记-三/index.html","bad2c42ae0b5d1a8c59065b7778a763e"],["/2020/07/03/SpringMVC笔记-二/index.html","02304dfee2e1697b4017f3bf7c393277"],["/2020/07/03/SpringMVC笔记-五/index.html","ce84dc3d4e658f0ba373a030edde127d"],["/2020/07/03/SpringMVC笔记-四/index.html","f088e73ea06512b66a14db59f93f3697"],["/2020/07/16/Java位运算符/index.html","ba9ce30ea8850f8d25df23844cb322df"],["/2020/07/19/Java类加载机制/index.html","8841d2cdb458c22b620555b827bde2c8"],["/2020/07/21/Java的堆区、栈区和方法区简单分析/index.html","bd158dce5f77975910dd385913915333"],["/2020/07/23/Java单例模式/index.html","b1180982e69afc3db0fd2bd4dd3f9c18"],["/2020/07/24/Java静态工厂/index.html","b981ff386178828debf02b8aeac49b2b"],["/2020/07/27/Java抽象工厂模式/index.html","3a0dc76b1341a529d5608c1657e2884e"],["/2020/07/27/Java模板模式/index.html","bef7f533416adec12d33208fc0392083"],["/2020/07/28/Object类Clone-方法/index.html","34bada2528de6d44885f044c5c86f7c1"],["/2020/07/30/正则表达式的基本使用/index.html","17172ad504da8690190d1b7698a3544a"],["/2020/08/01/Java集合比较器规则/index.html","d7ab85daad9e884ff96473e1032285b1"],["/2020/08/09/NIO/index.html","58cecedf2c654de2de89429a2330bb3f"],["/2020/09/08/Servlet生命周期/index.html","08cd57b399642ff6d0271b72b2a6f52e"],["/2020/09/22/Mybatis巩固/index.html","34f9887ac2b1dd24e7ba12b0ac1b710f"],["/2020/09/29/SpringMVC/index.html","50f88d567bc5b08afa73e2af70ddde9f"],["/2020/10/12/SpringBoot笔记/index.html","9c27c8bf96bf4ec1481120bc89785565"],["/2020/10/13/SpringBoot集成editor-md/index.html","e6fbaa8aaf690b7510f5860a08c3e1de"],["/2020/10/24/Dubbo和Zookeeper集成/index.html","364c74549f0892d5a30f21fa933544ac"],["/2020/12/21/Docker学习笔记/index.html","1a99e2410f5b1f31626a3b6351646054"],["/2020/12/22/java动态代理/index.html","2f110344f9f97c0f3a31120bf6ff7e3a"],["/2020/12/27/数据结构学习笔记/index.html","6d0cd616c5d1269b5164371f7f024b22"],["/2021/01/15/RabbitMQ/index.html","ad2744134aaa0e8b578c52f0e8bc54de"],["/2021/03/02/JWT/index.html","ff8dc9608ab0e126f19e2570aacefa92"],["/2021/03/04/SpringBoot整合Redis/index.html","070cd7f6486ef37b881568eb5871eb8a"],["/404.html","5c1d043840320607da08e148a3c1a2b4"],["/about/index.html","e576bbf692e46dec5829df287740960b"],["/archives/2020/04/index.html","e79e3f65ab9265dec4206fa6c5ce4171"],["/archives/2020/05/index.html","52c77c4658b13f2bd50cca54fa2de383"],["/archives/2020/06/index.html","f0b29593f033f9eb5fc21e316c1b78d7"],["/archives/2020/07/index.html","1a470174c2bef8f004817f0d2f6f108e"],["/archives/2020/07/page/2/index.html","38e26a6e23ab39b908d80d272198348e"],["/archives/2020/08/index.html","35256a22ac009803214228cfb1e85698"],["/archives/2020/09/index.html","e8f5a3b29e6e9dbe8e30132e226dae2b"],["/archives/2020/10/index.html","167c9bb373027af670fdddb461790cdc"],["/archives/2020/12/index.html","9d470764504ca219081b2846b2bda374"],["/archives/2020/index.html","415d96b1c7ccfc171aa3e0a9f2fd363d"],["/archives/2020/page/2/index.html","a4229cf426a8422a252cb85455b789b2"],["/archives/2020/page/3/index.html","e5deff264fcef8cc20784910c660b716"],["/archives/2020/page/4/index.html","aa9666971111e2d213d44ce90cb42e20"],["/archives/2020/page/5/index.html","0ddbe7ff86cd4f9b1e0b4ff36870bca1"],["/archives/2021/01/index.html","7cee07a9393d54242f9ee0945722f1e8"],["/archives/2021/03/index.html","3e97b0ac78be45b224f4250b4fc1d493"],["/archives/2021/index.html","e957e4ac1c593c61b7f69e6fe59e620b"],["/archives/index.html","ea6f928eeee66cd9edc40f83c6716780"],["/archives/page/2/index.html","ea6f928eeee66cd9edc40f83c6716780"],["/archives/page/3/index.html","ea6f928eeee66cd9edc40f83c6716780"],["/archives/page/4/index.html","ea6f928eeee66cd9edc40f83c6716780"],["/archives/page/5/index.html","ea6f928eeee66cd9edc40f83c6716780"],["/archives/page/6/index.html","ea6f928eeee66cd9edc40f83c6716780"],["/categories/index.html","b6c03df964a63d62d166b9c5fae0dc2f"],["/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","806719ec3060b612ae3c54005cd4a9df"],["/img/1.png","e662837f3402c7364d187c6bf2904b3a"],["/img/2.png","499d8182cefa7a56bfd22567cc09d877"],["/img/3.png","9f3ae5dff358000361b2890389cdde35"],["/img/4.png","351e90e38c34fb3e63c65c35b0c4fedb"],["/img/5.png","c98b39dff1b60938b407c491079be23d"],["/img/6.png","ccf84690523b35be3adda66aeb548926"],["/img/BeanUtils1.png","61d0bff3b934adc02df9a0b234e5e2e9"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/qq.png","4f3ba4d6f6bf0b3719d914d389fdadd1"],["/img/tomcat1.png","9a7f5a8776680f0dd722c2938de16b9f"],["/img/touxiang.jpg","3c68b53e1c6f31fa425d53395080f2d8"],["/img/weixin.jpg","e905cc6e0ffe18faff62ed1eeb1780ab"],["/img/wx.png","8277441bdf3e30075e0d28906d20d5ff"],["/img/zhifubao.jpg","69f11d691aa03ed257a9fba7d51b7d08"],["/img/爬虫1.png","fabde21a1ff0eb780d650ec49d6c06ed"],["/img/爬虫2.png","58217333d5eb43c8e313d50926870f14"],["/img/爬虫3.png","e775ad11e8f84b77633a24e90a85a795"],["/index.html","57ecd24af457a2ecaba95fb2768e1083"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/page/2/index.html","6cc416ed0f078817f61840fb1dfd8e9d"],["/page/3/index.html","dd290f38bace03183b50626a4238fc25"],["/page/4/index.html","47befa85cad7220d7e96503228c38b28"],["/page/5/index.html","47cbf72268f3f2adb03349abafd5478b"],["/page/6/index.html","6c989e211d1270af9ee2f92fe92d4f3e"],["/sw-register.js","87c777f3aa57d85c0727f7407207444d"],["/tags/Docker/index.html","a65e8811627a7a35b407405dcd7f72f4"],["/tags/JAVA/index.html","946081bb48b230236d340f6b3ec68090"],["/tags/JAVA/page/2/index.html","5ecb15b9849980f56ac60e2443631b54"],["/tags/JAVA/page/3/index.html","04dc541bad8d3814917de08cac07a2db"],["/tags/JWT/index.html","cfcc27c8ceb2d69f5b77ef85fabf73f3"],["/tags/JavaWeb/index.html","de83afadf8af5a12b4e2a3b3c34bb2cc"],["/tags/RabbitMQ/index.html","58f84de002a239d1a78350b6a0c95e9c"],["/tags/SpringBoot/index.html","1a85329f2147e6fa4e8d499d72fa8899"],["/tags/SpringMVC/index.html","b0e51859c0e7a077decaed1b2f2ed3e0"],["/tags/Spring框架/index.html","c2191651f33d5edd58a51f596de3f740"],["/tags/XML/index.html","c3e3941b195075836e215bfb4dc51cfc"],["/tags/hexo/index.html","b784630f5b6917d4380b74e589bd7c3d"],["/tags/index.html","6110574cd58ca5f092564eaafa825200"],["/tags/mybatis/index.html","19525f3a9601240bf83f6dae09542428"],["/tags/python/index.html","e44f62acba9fd239e1be2ca5afc1b428"],["/tags/数据库/index.html","611b81c66e015dd35e58b77930307edf"],["/tags/数据结构/index.html","61ec4cb1c0b35303bdc3a147b767d9bf"],["/tags/爬虫/index.html","eb4d2c522d81a76f87049dc9120d9359"],["/tags/设计模式/index.html","cf814bd4fa771cf8162282413df9788a"],["/tags/软件/index.html","29665ebf753066337d5be3e7b38b54f6"]];
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
