!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r(r.s=0)}([function(e,n,r){const{BackendApplicationConfigProvider:t}=r(1),o=r(2);t.set({});const i=r(3),u=o.start(i());u.then(function(e){process&&process.send&&process.send(e.port.toString())}),e.exports=u},function(e,n){e.exports=require("@theia/core/lib/node/backend-application-config-provider")},function(e,n){e.exports=require("@theia/core/lib/node/main")},function(e,n,r){r(4);const t=r(5),o=r(6),{Container:i}=r(7),{BackendApplication:u,CliManager:s}=r(8),{backendApplicationModule:c}=r(9),{messagingBackendModule:a}=r(10),{loggerBackendModule:l}=r(11),d=new i;function f(e){return Promise.resolve(e.default).then(e=>d.load(e))}d.load(c),d.load(a),d.load(l),e.exports=((e,n,i)=>Promise.resolve().then(function(){return Promise.resolve(r(12)).then(f)}).then(function(){return Promise.resolve(r(13)).then(f)}).then(function(){return Promise.resolve(r(14)).then(f)}).then(function(){return Promise.resolve(r(15)).then(f)}).then(function(){return Promise.resolve(r(16)).then(f)}).then(function(){return Promise.resolve(r(17)).then(f)}).then(function(){return Promise.resolve(r(18)).then(f)}).then(function(){return Promise.resolve(r(19)).then(f)}).then(function(){return Promise.resolve(r(20)).then(f)}).then(function(){return Promise.resolve(r(21)).then(f)}).then(function(){return Promise.resolve(r(22)).then(f)}).then(function(){return Promise.resolve(r(23)).then(f)}).then(function(){return Promise.resolve(r(24)).then(f)}).then(function(){return Promise.resolve(r(25)).then(f)}).then(()=>(function(e,n,r){return void 0===r&&(r=process.argv),d.get(s).initializeCli(r).then(function(){const r=d.get(u);return r.use(o.static(t.join(__dirname,"../../lib"))),r.use(o.static(t.join(__dirname,"../../lib/index.html"))),r.start(e,n)})})(e,n,i)).catch(e=>{throw console.error("Failed to start the backend application."),e&&console.error(e),e}))},function(e,n){e.exports=require("reflect-metadata")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("inversify")},function(e,n){e.exports=require("@theia/core/lib/node")},function(e,n){e.exports=require("@theia/core/lib/node/backend-application-module")},function(e,n){e.exports=require("@theia/core/lib/node/messaging/messaging-backend-module")},function(e,n){e.exports=require("@theia/core/lib/node/logger-backend-module")},function(e,n){e.exports=require("@theia/process/lib/node/process-backend-module")},function(e,n){e.exports=require("@theia/filesystem/lib/node/filesystem-backend-module")},function(e,n){e.exports=require("@theia/filesystem/lib/node/download/file-download-backend-module")},function(e,n){e.exports=require("@theia/workspace/lib/node/workspace-backend-module")},function(e,n){e.exports=require("@theia/languages/lib/node/languages-backend-module")},function(e,n){e.exports=require("@theia/file-search/lib/node/file-search-backend-module")},function(e,n){e.exports=require("@theia/git/lib/node/git-backend-module")},function(e,n){e.exports=require("@theia/git/lib/node/env/git-env-module")},function(e,n){e.exports=require("@theia/json/lib/node/json-backend-module")},function(e,n){e.exports=require("@theia/mini-browser/lib/node/mini-browser-backend-module")},function(e,n){e.exports=require("@theia/search-in-workspace/lib/node/search-in-workspace-backend-module")},function(e,n){e.exports=require("@theia/terminal/lib/node/terminal-backend-module")},function(e,n){e.exports=require("@theia/task/lib/node/task-backend-module")},function(e,n){e.exports=require("@theia/typescript/lib/node/typescript-backend-module")}]);