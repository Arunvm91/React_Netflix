"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = exports.Orginals = void 0;

var _constants = require("./Component/Constants/constants");

var Orginals = "/discover/tv?api_key=".concat(_constants.API_KEY, "&with_networks=213");
exports.Orginals = Orginals;
var Action = "discover/movie?api_key=".concat(_constants.API_KEY, "&with_genres=28");
exports.Action = Action;