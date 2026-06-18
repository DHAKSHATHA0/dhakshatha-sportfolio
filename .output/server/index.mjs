globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { H as HTTPError, d as defineHandler, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/assets/cert1-Dv0D3Qsc.jpeg": {
    "type": "image/jpeg",
    "etag": '"fefa-nAU60mGFowkk0psUY+B1Axj55GU"',
    "mtime": "2026-06-18T04:19:55.441Z",
    "size": 65274,
    "path": "../public/assets/cert1-Dv0D3Qsc.jpeg"
  },
  "/resume.html": {
    "type": "text/html; charset=utf-8",
    "etag": '"1f3b-H4YPWtW71qxuAwbd7Hob4vNbQ/0"',
    "mtime": "2026-06-17T15:08:03.197Z",
    "size": 7995,
    "path": "../public/resume.html"
  },
  "/assets/cert3-DNRBHBjH.jpeg": {
    "type": "image/jpeg",
    "etag": '"10d8e-UCZPQX5kUxH3YUejS5whl4xS31A"',
    "mtime": "2026-06-18T04:19:55.442Z",
    "size": 69006,
    "path": "../public/assets/cert3-DNRBHBjH.jpeg"
  },
  "/assets/cert4-4xVlnwH2.jpeg": {
    "type": "image/jpeg",
    "etag": '"1cd25-dLUGbINsEhvhv1IILmTIB7wXujU"',
    "mtime": "2026-06-18T04:19:55.442Z",
    "size": 118053,
    "path": "../public/assets/cert4-4xVlnwH2.jpeg"
  },
  "/assets/cert5-BD6qW5o0.jpeg": {
    "type": "image/jpeg",
    "etag": '"fd41-6VLGAI/xKHquxSCVMx7whC3VztA"',
    "mtime": "2026-06-18T04:19:55.442Z",
    "size": 64833,
    "path": "../public/assets/cert5-BD6qW5o0.jpeg"
  },
  "/assets/cert6-W3y1ngKn.jpeg": {
    "type": "image/jpeg",
    "etag": '"1ec06-pg6PxrazxeJn9R5WgbLIwRMK0n0"',
    "mtime": "2026-06-18T04:19:55.443Z",
    "size": 125958,
    "path": "../public/assets/cert6-W3y1ngKn.jpeg"
  },
  "/assets/cert2-BfGr_953.jpeg": {
    "type": "image/jpeg",
    "etag": '"100c5-jiWFSbSWpmV8KPheJyvP1OvQ5fw"',
    "mtime": "2026-06-18T04:19:55.442Z",
    "size": 65733,
    "path": "../public/assets/cert2-BfGr_953.jpeg"
  },
  "/assets/hero-ai-7VBt9vU6.jpg": {
    "type": "image/jpeg",
    "etag": '"186e6-lZXnt7VlbzZxf1k1+gsrnCg4KxQ"',
    "mtime": "2026-06-18T04:19:55.443Z",
    "size": 100070,
    "path": "../public/assets/hero-ai-7VBt9vU6.jpg"
  },
  "/assets/photo-DFvadYlf.jpeg": {
    "type": "image/jpeg",
    "etag": '"12079-Rf7YDPM7CAb4IgO5ZQ3xsAvDV6M"',
    "mtime": "2026-06-18T04:19:55.384Z",
    "size": 73849,
    "path": "../public/assets/photo-DFvadYlf.jpeg"
  },
  "/assets/pec--tGKSzpj.jpeg": {
    "type": "image/jpeg",
    "etag": '"181a5-F6qIqBT3cPoU5h9C3xQfgg9IWJ0"',
    "mtime": "2026-06-18T04:19:55.443Z",
    "size": 98725,
    "path": "../public/assets/pec--tGKSzpj.jpeg"
  },
  "/assets/kpr-CJ1Se1TM.jpeg": {
    "type": "image/jpeg",
    "etag": '"27263-tmt4Ul1j8YiOdUBkQdtpAM9pMTs"',
    "mtime": "2026-06-18T04:19:55.445Z",
    "size": 160355,
    "path": "../public/assets/kpr-CJ1Se1TM.jpeg"
  },
  "/assets/index-eJMKXTKT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5b1cb-VIXgdPx/Db2UDg3icSjQGSxNAHE"',
    "mtime": "2026-06-18T04:19:55.444Z",
    "size": 373195,
    "path": "../public/assets/index-eJMKXTKT.js"
  },
  "/assets/sih-pMlM6-__.jpeg": {
    "type": "image/jpeg",
    "etag": '"173d4-b10Pj9bLz8WsbhoDwu4G/rgW7UE"',
    "mtime": "2026-06-18T04:19:55.442Z",
    "size": 95188,
    "path": "../public/assets/sih-pMlM6-__.jpeg"
  },
  "/assets/karpagam-DUN7SCVs.jpeg": {
    "type": "image/jpeg",
    "etag": '"170ba-MpDmIXoe1T2E/53JzUZ1CTHW65A"',
    "mtime": "2026-06-18T04:19:55.443Z",
    "size": 94394,
    "path": "../public/assets/karpagam-DUN7SCVs.jpeg"
  },
  "/assets/styles-cIWbRFAl.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"13870-Li1FEVN48hnDdMpK9Op3eGinOAs"',
    "mtime": "2026-06-18T04:19:55.443Z",
    "size": 79984,
    "path": "../public/assets/styles-cIWbRFAl.css"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _NWPtEJ = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_FXuGXw = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_FXuGXw };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_NWPtEJ)
].filter(Boolean);
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
