/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/06/python爬虫/index.html","966b4393054cd942490dd5618c26173f"],["/2020/04/06/安装Hexo环境/index.html","58483ba1ca884fc5db0352871471f0a5"],["/2020/04/07/XML解析器/index.html","689c06bff112af361f449dbd3a22cbef"],["/2020/04/08/tomcat及Servlet/index.html","9b57996fd6af426caa5d4417718bc4fc"],["/2020/04/10/http/index.html","af963cc429a2ee589819cdbcadf3b463"],["/2020/04/11/BeanUtils工具类的使用/index.html","8ba65a8edafa974fbde780a7c1b2127f"],["/2020/04/15/Jetbrains系列产品2020-1最新激活方法/index.html","7dc0b41658501b75af72672f5e287aa3"],["/2020/04/23/Filter过滤器/index.html","f8d7b011f13bcdaa894e9ed102e8c0df"],["/2020/04/26/JQuery笔记/index.html","7b051692dfb22bc4f5c9cc36be754354"],["/2020/04/28/ajax和JSON/index.html","093eccafa63d1c9a57ea90d9c19c6a76"],["/2020/05/01/redis数据库/index.html","3a5c16683699be384dcee466b142f46f"],["/2020/05/13/抽取Servlet/index.html","5f94699684793c75e83d0c59e378c0bd"],["/2020/05/19/mybatis框架-一/index.html","ed54dc96840e348489e134c857429f3a"],["/2020/05/21/PicGo-GitHub图床，让Markdown飞/index.html","5fb8444a4137b1c6093d418c5988fb0a"],["/2020/05/22/mybatis框架-二/index.html","90a9cc14945280723c0ed289dd978153"],["/2020/05/22/ngork内网穿透/index.html","c160072ce8a7a1deb1d94b7c4b9d65e5"],["/2020/05/24/mybatis框架-三/index.html","31f1ea79b0c7224b3a72190d5639b884"],["/2020/05/27/mybatis框架-四/index.html","9bcf370dfb99ede5627b85eb6b29ca32"],["/2020/05/31/Java多线程/index.html","09ca0661039c56f4b26770ab67f9778b"],["/2020/06/03/Spring学习笔记-一/index.html","414ceb7466a47377a57bab2b26beb757"],["/2020/06/03/Spring学习笔记-二/index.html","6bfbfd7074964360499c7917f1bf3a11"],["/2020/06/06/Spring学习笔记-三/index.html","4a0779ff23c2048dac4e1cce22deb7b6"],["/2020/06/10/Spring学习笔记-四/index.html","59fd4c74ee16f1664d27de9b90918a41"],["/2020/06/12/注解和反射/index.html","3eef0ef475175e693e60ea0bdb574f44"],["/2020/06/23/SpringMVC笔记-一/index.html","cffb859c183baac1d4926d42cf298dd8"],["/2020/07/03/SpringMVC笔记-三/index.html","ba7ee449ccc1542e00f6ef68a0b28def"],["/2020/07/03/SpringMVC笔记-二/index.html","d171ddee9751e72b4c89308d111ea4c5"],["/2020/07/03/SpringMVC笔记-五/index.html","254ee2d402fc764aeb6fbae3d3ffd5fd"],["/2020/07/03/SpringMVC笔记-四/index.html","63fddcc182986d6fa6ad83b4461c8b90"],["/2020/07/16/Java位运算符/index.html","fc30788fbe7028ba8ae01ceeebd769dc"],["/2020/07/19/Java类加载机制/index.html","ac01b7b1039aea46cfe3a17e34bc6e87"],["/2020/07/21/Java的堆区、栈区和方法区简单分析/index.html","1082454c29edf7eddae63f0cb3daabfd"],["/2020/07/23/Java单例模式/index.html","97c703cb124f23ccebf1fac6a37328e1"],["/2020/07/24/Java静态工厂/index.html","26155b83c7c4dc26daf85e8790541c3e"],["/2020/07/27/Java抽象工厂模式/index.html","d1c4520b51854e75a58c91bf5246f182"],["/2020/07/27/Java模板模式/index.html","541e6b2a5be34671c8097cecbfa34581"],["/2020/07/28/Object类Clone-方法/index.html","088fead5d8eb718ff4cf03e96e67b046"],["/2020/07/30/正则表达式的基本使用/index.html","e21539a8d7c78773473987e9ee4e6b6c"],["/2020/08/01/Java集合比较器规则/index.html","51a8eb76b23605eb232209c8e823cc59"],["/2020/08/09/NIO/index.html","aefdcc15437fd047499f243404e0e163"],["/2020/09/08/Servlet生命周期/index.html","f61577c342b16f70e468bea3a76b0fb0"],["/2020/09/22/Mybatis巩固/index.html","c9be18777cf7bd799158d76135f8fca7"],["/2020/09/29/SpringMVC/index.html","16ecd3db97a6e4e13221fcfca6432dc0"],["/2020/10/12/SpringBoot笔记/index.html","4ecef08e8f128a721955a54e29235ee0"],["/2020/10/13/SpringBoot集成editor-md/index.html","2c4b3f312f03e7ba40d0624b0733a5c7"],["/2020/10/24/Dubbo和Zookeeper集成/index.html","ec4ca7546d5b73880ad78d29ea43d75b"],["/2020/12/21/Docker学习笔记/index.html","4dc67007738af7abfec4ca714a4afcc8"],["/2020/12/22/java动态代理/index.html","05692d3459fbc346a1b418e76d26cc6a"],["/2020/12/27/数据结构学习笔记/index.html","416cf8ad7589a9b52750778fd21cb0f6"],["/2021/01/15/RabbitMQ/index.html","22ed75ba0682e693cc627f2655ddf5f9"],["/404.html","f4df998c29afd015b24bdf9080c4d335"],["/about/index.html","5a90ecb9663985dff802a276048af9f8"],["/archives/2020/04/index.html","0451e74b6ef86fca84b33fe6fd62f418"],["/archives/2020/05/index.html","c003b400a6d1404baeb8c14954005b73"],["/archives/2020/06/index.html","85e10ace485a7d87ece36a13c9c0f86a"],["/archives/2020/07/index.html","47b1bd567515ea24151c5468ffca64d2"],["/archives/2020/07/page/2/index.html","19301938f148bdad914ded3ebb68ccea"],["/archives/2020/08/index.html","669e319de45f50e5110f8f84491c8d44"],["/archives/2020/09/index.html","7b2d853e34bb6312aaf34e10aad4248a"],["/archives/2020/10/index.html","8384e3417d810ca1adaa0e2ad0b9f0ad"],["/archives/2020/12/index.html","67c47e14fa24fb991caf8a6dbeab04f3"],["/archives/2020/index.html","c80af9b89aed7aa89075415b140a1af3"],["/archives/2020/page/2/index.html","eb77f310610be64cf86f43b67c81e734"],["/archives/2020/page/3/index.html","1a871bb87d6c500c1c7ebc7c7f9a6622"],["/archives/2020/page/4/index.html","56cacefff9c9215c1a8d93c13014f9c3"],["/archives/2020/page/5/index.html","93f2b875591256e434538c630115e630"],["/archives/2021/01/index.html","9ff0ff746c1dc2ee3906bf40813aef42"],["/archives/2021/index.html","888720c94be21c5e8d421dc745f65c06"],["/archives/index.html","5c24f39b415974375d5dc7713b844ca8"],["/archives/page/2/index.html","5c24f39b415974375d5dc7713b844ca8"],["/archives/page/3/index.html","5c24f39b415974375d5dc7713b844ca8"],["/archives/page/4/index.html","5c24f39b415974375d5dc7713b844ca8"],["/archives/page/5/index.html","5c24f39b415974375d5dc7713b844ca8"],["/categories/index.html","8cec86e506bf8e24f0457f58870fab2e"],["/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","09c9ca8a4d64f0e524a6aaff32dbf53c"],["/img/1.png","e662837f3402c7364d187c6bf2904b3a"],["/img/2.png","499d8182cefa7a56bfd22567cc09d877"],["/img/3.png","9f3ae5dff358000361b2890389cdde35"],["/img/4.png","351e90e38c34fb3e63c65c35b0c4fedb"],["/img/5.png","c98b39dff1b60938b407c491079be23d"],["/img/6.png","ccf84690523b35be3adda66aeb548926"],["/img/BeanUtils1.png","61d0bff3b934adc02df9a0b234e5e2e9"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/qq.png","4f3ba4d6f6bf0b3719d914d389fdadd1"],["/img/tomcat1.png","9a7f5a8776680f0dd722c2938de16b9f"],["/img/touxiang.jpg","3c68b53e1c6f31fa425d53395080f2d8"],["/img/weixin.jpg","e905cc6e0ffe18faff62ed1eeb1780ab"],["/img/wx.png","8277441bdf3e30075e0d28906d20d5ff"],["/img/zhifubao.jpg","69f11d691aa03ed257a9fba7d51b7d08"],["/img/爬虫1.png","fabde21a1ff0eb780d650ec49d6c06ed"],["/img/爬虫2.png","58217333d5eb43c8e313d50926870f14"],["/img/爬虫3.png","e775ad11e8f84b77633a24e90a85a795"],["/index.html","b1bb3e6e6e2583222c1cbb21504bdfa7"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/page/2/index.html","8cb3fa2b9322bb36d707df7a3351d038"],["/page/3/index.html","b0bc3f6a5754401feaa49b1bdf5797ce"],["/page/4/index.html","5237e9892c4c7ad360096745d8ab8cbc"],["/page/5/index.html","296c7486f095b9084b744fa4fc05b6a3"],["/sw-register.js","00b32c9384e52fecb7de5fc7abe86a26"],["/tags/Docker/index.html","260e2dff3c1795c53b8547f31e7b94a5"],["/tags/JAVA/index.html","40883a074ffda3eaca27604749475248"],["/tags/JAVA/page/2/index.html","0f74e649b46da269d1ee0cf638d2b651"],["/tags/JAVA/page/3/index.html","70bb10b068af9d1628690e6bb72f4f8e"],["/tags/JavaWeb/index.html","d0090b7e3f045fe5bc5d3387e816685b"],["/tags/RabbitMQ/index.html","30821b9774b8713fcbb2eb5ebd20defb"],["/tags/SpringBoot/index.html","8dc681395d2b78e051d946f401257245"],["/tags/SpringMVC/index.html","c2c937a88c9699bc6f367147c09e53da"],["/tags/Spring框架/index.html","e4b9324fec8abd67ae39fabc9e301e11"],["/tags/XML/index.html","ccf3a1b3509ea434425fe4a391a676f6"],["/tags/hexo/index.html","403c23db6d89611b7faa82783a34fd86"],["/tags/index.html","44a7b24f9c89ff4a14056d6b8e244449"],["/tags/mybatis/index.html","7bd02d62ce298977565a7c98098de82f"],["/tags/python/index.html","3db759b10db63a0284dc0667b30d0a5e"],["/tags/数据库/index.html","67c48b18904560fc17398beebdb61c52"],["/tags/数据结构/index.html","bd707524143f42c6d640343a232481c8"],["/tags/爬虫/index.html","e738e16187f9c2b7424c20e2e05eedd5"],["/tags/设计模式/index.html","bf0ac108f00aad3132c544b75d433bc5"],["/tags/软件/index.html","5534b3605fc2e450424617c28817339f"]];
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
