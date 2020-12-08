// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/payments/payment_handler_host.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('payments.mojom');
  var payment_request_data$ =
      mojo.internal.exposeNamespace('payments.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/payments/mojom/payment_request_data.mojom', '../../../../../components/payments/mojom/payment_request_data.mojom.js');
  }



  function PaymentHandlerMethodData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentHandlerMethodData.prototype.initDefaults_ = function() {
    this.methodName = null;
    this.stringifiedData = null;
  };
  PaymentHandlerMethodData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentHandlerMethodData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentHandlerMethodData.methodName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentHandlerMethodData.stringifiedData
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentHandlerMethodData.encodedSize = codec.kStructHeaderSize + 16;

  PaymentHandlerMethodData.decode = function(decoder) {
    var packed;
    var val = new PaymentHandlerMethodData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.methodName = decoder.decodeStruct(codec.String);
    val.stringifiedData = decoder.decodeStruct(codec.String);
    return val;
  };

  PaymentHandlerMethodData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentHandlerMethodData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.methodName);
    encoder.encodeStruct(codec.String, val.stringifiedData);
  };
  function PaymentHandlerModifier(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentHandlerModifier.prototype.initDefaults_ = function() {
    this.total = null;
    this.methodData = null;
  };
  PaymentHandlerModifier.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentHandlerModifier.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentHandlerModifier.total
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, payment_request_data$.PaymentCurrencyAmount, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentHandlerModifier.methodData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, PaymentHandlerMethodData, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentHandlerModifier.encodedSize = codec.kStructHeaderSize + 16;

  PaymentHandlerModifier.decode = function(decoder) {
    var packed;
    var val = new PaymentHandlerModifier();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.total = decoder.decodeStructPointer(payment_request_data$.PaymentCurrencyAmount);
    val.methodData = decoder.decodeStructPointer(PaymentHandlerMethodData);
    return val;
  };

  PaymentHandlerModifier.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentHandlerModifier.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(payment_request_data$.PaymentCurrencyAmount, val.total);
    encoder.encodeStructPointer(PaymentHandlerMethodData, val.methodData);
  };
  function PaymentMethodChangeResponse(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentMethodChangeResponse.prototype.initDefaults_ = function() {
    this.total = null;
    this.modifiers = null;
    this.error = "";
    this.stringifiedPaymentMethodErrors = null;
  };
  PaymentMethodChangeResponse.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentMethodChangeResponse.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentMethodChangeResponse.total
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, payment_request_data$.PaymentCurrencyAmount, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentMethodChangeResponse.modifiers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(PaymentHandlerModifier), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentMethodChangeResponse.error
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentMethodChangeResponse.stringifiedPaymentMethodErrors
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentMethodChangeResponse.encodedSize = codec.kStructHeaderSize + 32;

  PaymentMethodChangeResponse.decode = function(decoder) {
    var packed;
    var val = new PaymentMethodChangeResponse();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.total = decoder.decodeStructPointer(payment_request_data$.PaymentCurrencyAmount);
    val.modifiers = decoder.decodeArrayPointer(new codec.PointerTo(PaymentHandlerModifier));
    val.error = decoder.decodeStruct(codec.String);
    val.stringifiedPaymentMethodErrors = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  PaymentMethodChangeResponse.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentMethodChangeResponse.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(payment_request_data$.PaymentCurrencyAmount, val.total);
    encoder.encodeArrayPointer(new codec.PointerTo(PaymentHandlerModifier), val.modifiers);
    encoder.encodeStruct(codec.String, val.error);
    encoder.encodeStruct(codec.NullableString, val.stringifiedPaymentMethodErrors);
  };
  function PaymentHandlerHost_ChangePaymentMethod_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentHandlerHost_ChangePaymentMethod_Params.prototype.initDefaults_ = function() {
    this.methodData = null;
  };
  PaymentHandlerHost_ChangePaymentMethod_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentHandlerHost_ChangePaymentMethod_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentHandlerHost_ChangePaymentMethod_Params.methodData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PaymentHandlerMethodData, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentHandlerHost_ChangePaymentMethod_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentHandlerHost_ChangePaymentMethod_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentHandlerHost_ChangePaymentMethod_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.methodData = decoder.decodeStructPointer(PaymentHandlerMethodData);
    return val;
  };

  PaymentHandlerHost_ChangePaymentMethod_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentHandlerHost_ChangePaymentMethod_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PaymentHandlerMethodData, val.methodData);
  };
  function PaymentHandlerHost_ChangePaymentMethod_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentHandlerHost_ChangePaymentMethod_ResponseParams.prototype.initDefaults_ = function() {
    this.responseData = null;
  };
  PaymentHandlerHost_ChangePaymentMethod_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentHandlerHost_ChangePaymentMethod_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentHandlerHost_ChangePaymentMethod_ResponseParams.responseData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PaymentMethodChangeResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentHandlerHost_ChangePaymentMethod_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PaymentHandlerHost_ChangePaymentMethod_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PaymentHandlerHost_ChangePaymentMethod_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.responseData = decoder.decodeStructPointer(PaymentMethodChangeResponse);
    return val;
  };

  PaymentHandlerHost_ChangePaymentMethod_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentHandlerHost_ChangePaymentMethod_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PaymentMethodChangeResponse, val.responseData);
  };
  var kPaymentHandlerHost_ChangePaymentMethod_Name = 0;

  function PaymentHandlerHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PaymentHandlerHost,
                                                   handleOrPtrInfo);
  }

  function PaymentHandlerHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PaymentHandlerHost, associatedInterfacePtrInfo);
  }

  PaymentHandlerHostAssociatedPtr.prototype =
      Object.create(PaymentHandlerHostPtr.prototype);
  PaymentHandlerHostAssociatedPtr.prototype.constructor =
      PaymentHandlerHostAssociatedPtr;

  function PaymentHandlerHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  PaymentHandlerHostPtr.prototype.changePaymentMethod = function() {
    return PaymentHandlerHostProxy.prototype.changePaymentMethod
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentHandlerHostProxy.prototype.changePaymentMethod = function(methodData) {
    var params_ = new PaymentHandlerHost_ChangePaymentMethod_Params();
    params_.methodData = methodData;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPaymentHandlerHost_ChangePaymentMethod_Name,
          codec.align(PaymentHandlerHost_ChangePaymentMethod_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PaymentHandlerHost_ChangePaymentMethod_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PaymentHandlerHost_ChangePaymentMethod_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PaymentHandlerHostStub(delegate) {
    this.delegate_ = delegate;
  }
  PaymentHandlerHostStub.prototype.changePaymentMethod = function(methodData) {
    return this.delegate_ && this.delegate_.changePaymentMethod && this.delegate_.changePaymentMethod(methodData);
  }

  PaymentHandlerHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PaymentHandlerHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPaymentHandlerHost_ChangePaymentMethod_Name:
      var params = reader.decodeStruct(PaymentHandlerHost_ChangePaymentMethod_Params);
      this.changePaymentMethod(params.methodData).then(function(response) {
        var responseParams =
            new PaymentHandlerHost_ChangePaymentMethod_ResponseParams();
        responseParams.responseData = response.responseData;
        var builder = new codec.MessageV1Builder(
            kPaymentHandlerHost_ChangePaymentMethod_Name,
            codec.align(PaymentHandlerHost_ChangePaymentMethod_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PaymentHandlerHost_ChangePaymentMethod_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePaymentHandlerHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPaymentHandlerHost_ChangePaymentMethod_Name:
        if (message.expectsResponse())
          paramsClass = PaymentHandlerHost_ChangePaymentMethod_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePaymentHandlerHostResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPaymentHandlerHost_ChangePaymentMethod_Name:
        if (message.isResponse())
          paramsClass = PaymentHandlerHost_ChangePaymentMethod_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PaymentHandlerHost = {
    name: 'payments.mojom.PaymentHandlerHost',
    kVersion: 0,
    ptrClass: PaymentHandlerHostPtr,
    proxyClass: PaymentHandlerHostProxy,
    stubClass: PaymentHandlerHostStub,
    validateRequest: validatePaymentHandlerHostRequest,
    validateResponse: validatePaymentHandlerHostResponse,
  };
  PaymentHandlerHostStub.prototype.validator = validatePaymentHandlerHostRequest;
  PaymentHandlerHostProxy.prototype.validator = validatePaymentHandlerHostResponse;
  exports.PaymentHandlerMethodData = PaymentHandlerMethodData;
  exports.PaymentHandlerModifier = PaymentHandlerModifier;
  exports.PaymentMethodChangeResponse = PaymentMethodChangeResponse;
  exports.PaymentHandlerHost = PaymentHandlerHost;
  exports.PaymentHandlerHostPtr = PaymentHandlerHostPtr;
  exports.PaymentHandlerHostAssociatedPtr = PaymentHandlerHostAssociatedPtr;
})();