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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio';
export let TwilioService = (() => {
    let _classDecorators = [Injectable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var TwilioService = _classThis = class {
        constructor(databaseService, configService) {
            this.databaseService = databaseService;
            this.configService = configService;
        }
        gather() {
            const gatherNode = this.twiml.gather();
            gatherNode.say('For call forwarding, press 1. For voicemail, press 2.');
            // If the user doesn't enter input, loop
            this.twiml.redirect('/forward');
        }
        forwardCall() {
            this.twiml.say('Calling to Personal Number');
            const dial = this.twiml.dial({
                action: '/call-handling/bye',
                method: 'POST',
            });
            dial.number(this.configService.get('PERSONAL_PHONE_NUMBER'));
        }
        recordVoicemail() {
            this.twiml.say('Please leave a voicemail after the beep.');
            this.twiml.record({
                action: '/call-handling/voicemail',
                method: 'POST',
                maxLength: 30,
                transcribe: true,
            });
        }
        webhook(payload) {
            this.twiml = new twilio.twiml.VoiceResponse();
            if (payload.Digits) {
                switch (payload.Digits) {
                    case '1':
                        this.forwardCall();
                        break;
                    case '2':
                        this.recordVoicemail();
                        break;
                    default:
                        this.twiml.say("Sorry, I don't understand that choice.");
                        this.twiml.pause();
                        this.gather();
                        break;
                }
            }
            else {
                // call gather again if no input is provided
                this.gather();
            }
            return this.twiml;
        }
        listenVoiceMail(payload) {
            const voicemailDetails = {
                caller: payload.From,
                createdAt: new Date(),
                url: payload.RecordingUrl,
                transcript: payload.TranscriptionText,
            };
            return this.databaseService.saveVoicemail(voicemailDetails);
        }
        saveCallLog(payload) {
            return this.databaseService.saveCallLog(payload);
        }
    };
    __setFunctionName(_classThis, "TwilioService");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        TwilioService = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TwilioService = _classThis;
})();
