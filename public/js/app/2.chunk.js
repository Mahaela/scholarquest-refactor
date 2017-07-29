webpackJsonp([2],{

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(5);\r\nvar common_1 = __webpack_require__(74);\r\nvar material_1 = __webpack_require__(181);\r\nvar flex_layout_1 = __webpack_require__(314);\r\nvar router_1 = __webpack_require__(182);\r\nvar games_list_component_1 = __webpack_require__(1063);\r\nvar routes = [\r\n    { path: '', component: games_list_component_1.GamesListComponent },\r\n    { path: 'games', component: games_list_component_1.GamesListComponent },\r\n    { path: 'math-bingo', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(7).then((function (require) { resolve(__webpack_require__(1065)['default']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },\r\n    { path: 'vocab-match', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(4).then((function (require) { resolve(__webpack_require__(1071)['default']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },\r\n    { path: 'typing', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(5).then((function (require) { resolve(__webpack_require__(1069)['default']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },\r\n    { path: 'math-clouds', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(6).then((function (require) { resolve(__webpack_require__(1067)['default']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },\r\n    { path: 'word-pipes', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(3).then((function (require) { resolve(__webpack_require__(1073)['default']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } }\r\n];\r\nvar GamesModule = (function () {\r\n    function GamesModule() {\r\n    }\r\n    GamesModule = __decorate([\r\n        core_1.NgModule({\r\n            imports: [\r\n                common_1.CommonModule,\r\n                material_1.MaterialModule,\r\n                flex_layout_1.FlexLayoutModule,\r\n                router_1.RouterModule.forChild(routes),\r\n            ],\r\n            declarations: [\r\n                games_list_component_1.GamesListComponent\r\n            ]\r\n        })\r\n    ], GamesModule);\r\n    return GamesModule;\r\n}());\r\nexports.default = GamesModule;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA0NS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc3R1ZGVudC9nYW1lcy9nYW1lcy5tb2R1bGUudHM/ODc1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgR2FtZXNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9nYW1lcy1saXN0L2dhbWVzLWxpc3QuY29tcG9uZW50JztcclxuXHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEdhbWVzTGlzdENvbXBvbmVudCB9LFxyXG5cdHsgcGF0aDogJ2dhbWVzJywgY29tcG9uZW50OiBHYW1lc0xpc3RDb21wb25lbnQgfSxcclxuXHR7IHBhdGg6ICdtYXRoLWJpbmdvJywgbG9hZENoaWxkcmVuOiAoKSA9PiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuXFxcXG1hdGgtYmluZ29cXFxcbWF0aC1iaW5nby5tb2R1bGUudHMnKVsnZGVmYXVsdCddKTsgIH0pO30pIH0sXHJcblx0eyBwYXRoOiAndm9jYWItbWF0Y2gnLCBsb2FkQ2hpbGRyZW46ICgpID0+IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy5cXFxcdm9jYWItbWF0Y2hcXFxcdm9jYWItbWF0Y2gubW9kdWxlLnRzJylbJ2RlZmF1bHQnXSk7ICB9KTt9KSB9LFxyXG5cdHsgcGF0aDogJ3R5cGluZycsIGxvYWRDaGlsZHJlbjogKCkgPT4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgIChyZXF1aXJlIGFzIGFueSkuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZTogYW55KSB7ICAgIHJlc29sdmUocmVxdWlyZSgnLlxcXFx0eXBpbmdcXFxcdHlwaW5nLm1vZHVsZScpWydkZWZhdWx0J10pOyAgfSk7fSkgfSxcclxuXHR7IHBhdGg6ICdtYXRoLWNsb3VkcycsIGxvYWRDaGlsZHJlbjogKCkgPT4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgIChyZXF1aXJlIGFzIGFueSkuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZTogYW55KSB7ICAgIHJlc29sdmUocmVxdWlyZSgnLlxcXFxtYXRoLWNsb3Vkc1xcXFxtYXRoLWNsb3Vkcy5tb2R1bGUnKVsnZGVmYXVsdCddKTsgIH0pO30pIH0sXHJcblx0eyBwYXRoOiAnd29yZC1waXBlcycsIGxvYWRDaGlsZHJlbjogKCkgPT4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgIChyZXF1aXJlIGFzIGFueSkuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZTogYW55KSB7ICAgIHJlc29sdmUocmVxdWlyZSgnLlxcXFx3b3JkLXBpcGVzXFxcXHdvcmQtcGlwZXMubW9kdWxlJylbJ2RlZmF1bHQnXSk7ICB9KTt9KSB9XHRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0ZXJpYWxNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEdhbWVzTGlzdENvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXNNb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9hc3NldHMvYXBwL3N0dWRlbnQvZ2FtZXMvZ2FtZXMubW9kdWxlLnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"34b4c693097cd0c3c44fe060821dc6b7.jpg\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA0OC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvYXNzZXRzL2dhbWVzL1ZvY2FiTWF0Y2guanBnPzA0Y2MiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzRiNGM2OTMwOTdjZDBjM2M0NGZlMDYwODIxZGM2YjcuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYXBwL2Fzc2V0cy9nYW1lcy9Wb2NhYk1hdGNoLmpwZ1xuLy8gbW9kdWxlIGlkID0gMTA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(5);\r\nvar GamesListComponent = (function () {\r\n    function GamesListComponent() {\r\n    }\r\n    GamesListComponent.prototype.ngOnInit = function () {\r\n    };\r\n    GamesListComponent = __decorate([\r\n        core_1.Component({\r\n            selector: 'sq-games-list',\r\n            template: __webpack_require__(1231),\r\n            styles: [__webpack_require__(1249)]\r\n        }),\r\n        __metadata(\"design:paramtypes\", [])\r\n    ], GamesListComponent);\r\n    return GamesListComponent;\r\n}());\r\nexports.GamesListComponent = GamesListComponent;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA2My5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc3R1ZGVudC9nYW1lcy9nYW1lcy1saXN0L2dhbWVzLWxpc3QuY29tcG9uZW50LnRzP2RiNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3EtZ2FtZXMtbGlzdCcsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ2FtZXMtbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vZ2FtZXMtbGlzdC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYW1lc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vYXNzZXRzL2FwcC9zdHVkZW50L2dhbWVzL2dhbWVzLWxpc3QvZ2FtZXMtbGlzdC5jb21wb25lbnQudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBTEE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBT0E7QUFBQTtBQVBBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e0e08d4f601013cd4e402a6c3a3f7647.jpg\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE5My5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvYXNzZXRzL2dhbWVzL01hdGhCaW5nby5qcGc/YWQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMGUwOGQ0ZjYwMTAxM2NkNGU0MDJhNmMzYTNmNzY0Ny5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9hcHAvYXNzZXRzL2dhbWVzL01hdGhCaW5nby5qcGdcbi8vIG1vZHVsZSBpZCA9IDExOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 1194:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b4543bd2bb7b08d52b3d1642d3362f78.jpg\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE5NC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvYXNzZXRzL2dhbWVzL1R5cGluZy5qcGc/NWRjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiNDU0M2JkMmJiN2IwOGQ1MmIzZDE2NDJkMzM2MmY3OC5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9hcHAvYXNzZXRzL2dhbWVzL1R5cGluZy5qcGdcbi8vIG1vZHVsZSBpZCA9IDExOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 1231:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<br />\\r\\n<h1>Games</h1>\\r\\n<br />\\r\\n<div class=\\\"row\\\">\\r\\n    <div class=\\\"col-sm-4\\\">\\r\\n        <a [routerLink]=\\\"['math-bingo']\\\">\\r\\n            <img src=\\\"\" + __webpack_require__(1193) + \"\\\" />\\r\\n            <p class=\\\"gameName\\\">Math Bingo</p>\\r\\n        </a>\\r\\n    </div>\\r\\n    <div class=\\\"col-sm-4\\\">\\r\\n        <a [routerLink]=\\\"['typing']\\\">\\r\\n            <img src=\\\"\" + __webpack_require__(1194) + \"\\\" />\\r\\n            <p class=\\\"gameName\\\">Typing</p>\\r\\n        </a>\\r\\n    </div>\\r\\n    <div class=\\\"col-sm-4\\\">\\r\\n        <a [routerLink]=\\\"['vocab-match']\\\">\\r\\n            <img src=\\\"\" + __webpack_require__(1048) + \"\\\" />\\r\\n            <p class=\\\"gameName\\\">Vocab Match</p>\\r\\n        </a>\\r\\n    </div>\\r\\n</div>\\r\\n<div class=\\\"row\\\">\\r\\n    <div class=\\\"col-sm-4\\\">\\r\\n        <a [routerLink]=\\\"['math-clouds']\\\">\\r\\n            <img src=\\\"\" + __webpack_require__(1048) + \"\\\" />\\r\\n            <p class=\\\"gameName\\\">Math Clouds</p>\\r\\n        </a>\\r\\n    </div>\\r\\n    <div class=\\\"col-sm-4\\\">\\r\\n        <a [routerLink]=\\\"['word-pipes']\\\">\\r\\n            <img src=\\\"\" + __webpack_require__(1048) + \"\\\" />\\r\\n            <p class=\\\"gameName\\\">Word Pipes</p>\\r\\n        </a>\\r\\n    </div>\\r\\n</div>\\r\\n\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIzMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc3R1ZGVudC9nYW1lcy9nYW1lcy1saXN0L2dhbWVzLWxpc3QuY29tcG9uZW50Lmh0bWw/MDkzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGJyIC8+XFxyXFxuPGgxPkdhbWVzPC9oMT5cXHJcXG48YnIgLz5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnbWF0aC1iaW5nbyddXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL2dhbWVzL01hdGhCaW5nby5qcGdcIikgKyBcIlxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiZ2FtZU5hbWVcXFwiPk1hdGggQmluZ288L3A+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsndHlwaW5nJ11cXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvZ2FtZXMvVHlwaW5nLmpwZ1wiKSArIFwiXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJnYW1lTmFtZVxcXCI+VHlwaW5nPC9wPlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJ3ZvY2FiLW1hdGNoJ11cXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvZ2FtZXMvVm9jYWJNYXRjaC5qcGdcIikgKyBcIlxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiZ2FtZU5hbWVcXFwiPlZvY2FiIE1hdGNoPC9wPlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnbWF0aC1jbG91ZHMnXVxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9nYW1lcy9Wb2NhYk1hdGNoLmpwZ1wiKSArIFwiXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJnYW1lTmFtZVxcXCI+TWF0aCBDbG91ZHM8L3A+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnd29yZC1waXBlcyddXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL2dhbWVzL1ZvY2FiTWF0Y2guanBnXCIpICsgXCJcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImdhbWVOYW1lXFxcIj5Xb3JkIFBpcGVzPC9wPlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9hcHAvc3R1ZGVudC9nYW1lcy9nYW1lcy1saXN0L2dhbWVzLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 1249:
/***/ (function(module, exports) {

eval("module.exports = \"img{\\r\\n    width: 200px;\\r\\n    height: 200px;\\r\\n    margin: auto;\\r\\n    display: block;\\r\\n}\\r\\n\\r\\nh1{\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.gameWrapper{\\r\\n    margin: auto;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.gameName{\\r\\n    font-size: 25px;\\r\\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\r\\n    text-align: center;\\r\\n}\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI0OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc3R1ZGVudC9nYW1lcy9nYW1lcy1saXN0L2dhbWVzLWxpc3QuY29tcG9uZW50LmNzcz9lMzc3Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJpbWd7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVXcmFwcGVye1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVOYW1le1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYXBwL3N0dWRlbnQvZ2FtZXMvZ2FtZXMtbGlzdC9nYW1lcy1saXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

});