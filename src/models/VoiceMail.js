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
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export let VoiceMail = (() => {
    let _classDecorators = [Schema()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _caller_decorators;
    let _caller_initializers = [];
    let _url_decorators;
    let _url_initializers = [];
    let _transcript_decorators;
    let _transcript_initializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    var VoiceMail = _classThis = class {
        constructor() {
            this.caller = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _caller_initializers, void 0));
            this.url = __runInitializers(this, _url_initializers, void 0);
            this.transcript = __runInitializers(this, _transcript_initializers, void 0);
            this.createdAt = __runInitializers(this, _createdAt_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "VoiceMail");
    (() => {
        _caller_decorators = [Prop()];
        _url_decorators = [Prop()];
        _transcript_decorators = [Prop()];
        _createdAt_decorators = [Prop()];
        __esDecorate(null, null, _caller_decorators, { kind: "field", name: "caller", static: false, private: false, access: { has: obj => "caller" in obj, get: obj => obj.caller, set: (obj, value) => { obj.caller = value; } } }, _caller_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: obj => "url" in obj, get: obj => obj.url, set: (obj, value) => { obj.url = value; } } }, _url_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _transcript_decorators, { kind: "field", name: "transcript", static: false, private: false, access: { has: obj => "transcript" in obj, get: obj => obj.transcript, set: (obj, value) => { obj.transcript = value; } } }, _transcript_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } } }, _createdAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        VoiceMail = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return VoiceMail = _classThis;
})();
export const VoiceMailSchema = SchemaFactory.createForClass(VoiceMail);
