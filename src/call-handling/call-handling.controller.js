var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Controller, Post } from '@nestjs/common';
import * as twilio from 'twilio';
export let CallHandlingController = (() => {
    let _classDecorators = [Controller('call-handling')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _forwardCall_decorators;
    let _handleVoicemail_decorators;
    let _handlebye_decorators;
    let _error_decorators;
    var CallHandlingController = _classThis = class {
        constructor(twilioService) {
            this.twilioService = (__runInitializers(this, _instanceExtraInitializers), twilioService);
        }
        sendResponse(res, twiml) {
            res.type('text/xml');
            return res.send(twiml.toString());
        }
        forwardCall(payload, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const twiml = this.twilioService.webhook(payload);
                this.twilioService.saveCallLog(payload);
                return this.sendResponse(res, twiml);
            });
        }
        handleVoicemail(payload, res) {
            return __awaiter(this, void 0, void 0, function* () {
                this.twilioService.listenVoiceMail(payload);
                const twiml = new twilio.twiml.VoiceResponse();
                return this.sendResponse(res, twiml);
            });
        }
        handlebye(payload, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const twiml = new twilio.twiml.VoiceResponse();
                twiml.say('Thank You for Calling');
                return this.sendResponse(res, twiml);
            });
        }
        error(payload, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const twiml = new twilio.twiml.VoiceResponse();
                twiml.say('Sorry we are unable to handle your request at the moment!');
                res.type('text/xml');
                res.send(twiml.toString());
            });
        }
    };
    __setFunctionName(_classThis, "CallHandlingController");
    (() => {
        _forwardCall_decorators = [Post('forward')];
        _handleVoicemail_decorators = [Post('voicemail')];
        _handlebye_decorators = [Post('bye')];
        _error_decorators = [Post('error')];
        __esDecorate(_classThis, null, _forwardCall_decorators, { kind: "method", name: "forwardCall", static: false, private: false, access: { has: obj => "forwardCall" in obj, get: obj => obj.forwardCall } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _handleVoicemail_decorators, { kind: "method", name: "handleVoicemail", static: false, private: false, access: { has: obj => "handleVoicemail" in obj, get: obj => obj.handleVoicemail } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _handlebye_decorators, { kind: "method", name: "handlebye", static: false, private: false, access: { has: obj => "handlebye" in obj, get: obj => obj.handlebye } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _error_decorators, { kind: "method", name: "error", static: false, private: false, access: { has: obj => "error" in obj, get: obj => obj.error } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        CallHandlingController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CallHandlingController = _classThis;
})();
