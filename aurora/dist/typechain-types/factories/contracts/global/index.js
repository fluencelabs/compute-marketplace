"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpochManager__factory = exports.AquaProxy__factory = exports.interfaces = exports.matcherSol = exports.globalConfigSol = exports.dealFactorySol = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.dealFactorySol = __importStar(require("./DealFactory.sol"));
exports.globalConfigSol = __importStar(require("./GlobalConfig.sol"));
exports.matcherSol = __importStar(require("./Matcher.sol"));
exports.interfaces = __importStar(require("./interfaces"));
var AquaProxy__factory_1 = require("./AquaProxy__factory");
Object.defineProperty(exports, "AquaProxy__factory", { enumerable: true, get: function () { return AquaProxy__factory_1.AquaProxy__factory; } });
var EpochManager__factory_1 = require("./EpochManager__factory");
Object.defineProperty(exports, "EpochManager__factory", { enumerable: true, get: function () { return EpochManager__factory_1.EpochManager__factory; } });
