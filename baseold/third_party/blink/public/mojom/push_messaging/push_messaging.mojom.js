// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/push_messaging/push_messaging.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var push_messaging_status$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/push_messaging/push_messaging_status.mojom', 'push_messaging_status.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var PushErrorType = {};
  PushErrorType.ABORT = 0;
  PushErrorType.NETWORK = 1;
  PushErrorType.NONE = 2;
  PushErrorType.NOT_ALLOWED = 3;
  PushErrorType.NOT_FOUND = 4;
  PushErrorType.NOT_SUPPORTED = 5;
  PushErrorType.INVALID_STATE = 6;
  PushErrorType.MIN_VALUE = 0,
  PushErrorType.MAX_VALUE = 6,

  PushErrorType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return true;
    }
    return false;
  };

  PushErrorType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function PushSubscriptionOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PushSubscriptionOptions.prototype.initDefaults_ = function() {
    this.userVisibleOnly = false;
    this.applicationServerKey = null;
  };
  PushSubscriptionOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PushSubscriptionOptions.validate = function(messageValidator, offset) {
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



    // validate PushSubscriptionOptions.applicationServerKey
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PushSubscriptionOptions.encodedSize = codec.kStructHeaderSize + 16;

  PushSubscriptionOptions.decode = function(decoder) {
    var packed;
    var val = new PushSubscriptionOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.userVisibleOnly = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.applicationServerKey = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  PushSubscriptionOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PushSubscriptionOptions.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.userVisibleOnly & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.applicationServerKey);
  };
  function PushMessaging_Subscribe_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PushMessaging_Subscribe_Params.prototype.initDefaults_ = function() {
    this.renderFrameId = 0;
    this.userGesture = false;
    this.serviceWorkerRegistrationId = 0;
    this.options = null;
  };
  PushMessaging_Subscribe_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PushMessaging_Subscribe_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;




    // validate PushMessaging_Subscribe_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, PushSubscriptionOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PushMessaging_Subscribe_Params.encodedSize = codec.kStructHeaderSize + 24;

  PushMessaging_Subscribe_Params.decode = function(decoder) {
    var packed;
    var val = new PushMessaging_Subscribe_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.renderFrameId = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.userGesture = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    val.options = decoder.decodeStructPointer(PushSubscriptionOptions);
    return val;
  };

  PushMessaging_Subscribe_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PushMessaging_Subscribe_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.renderFrameId);
    packed = 0;
    packed |= (val.userGesture & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
    encoder.encodeStructPointer(PushSubscriptionOptions, val.options);
  };
  function PushMessaging_Subscribe_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PushMessaging_Subscribe_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.endpoint = null;
    this.options = null;
    this.p256dh = null;
    this.auth = null;
  };
  PushMessaging_Subscribe_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PushMessaging_Subscribe_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PushMessaging_Subscribe_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, push_messaging_status$.PushRegistrationStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PushMessaging_Subscribe_ResponseParams.endpoint
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PushMessaging_Subscribe_ResponseParams.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, PushSubscriptionOptions, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PushMessaging_Subscribe_ResponseParams.p256dh
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PushMessaging_Subscribe_ResponseParams.auth
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PushMessaging_Subscribe_ResponseParams.encodedSize = codec.kStructHeaderSize + 40;

  PushMessaging_Subscribe_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PushMessaging_Subscribe_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.endpoint = decoder.decodeStructPointer(url$.Url);
    val.options = decoder.decodeStructPointer(PushSubscriptionOptions);
    val.p256dh = decoder.decodeArrayPointer(codec.Uint8);
    val.auth = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  PushMessaging_Subscribe_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PushMessaging_Subscribe_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.endpoint);
    encoder.encodeStructPointer(PushSubscriptionOptions, val.options);
    encoder.encodeArrayPointer(codec.Uint8, val.p256dh);
    encoder.encodeArrayPointer(codec.Uint8, val.auth);
  };
  function PushMessaging_Unsubscribe_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PushMessaging_Unsubscribe_Params.prototype.initDefaults_ = function() {
    this.serviceWorkerRegistrationId = 0;
  };
  PushMessaging_Unsubscribe_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PushMessaging_Unsubscribe_Params.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  PushMessaging_Unsubscribe_Params.encodedSize = codec.kStructHeaderSize + 8;

  PushMessaging_Unsubscribe_Params.decode = function(decoder) {
    var packed;
    var val = new PushMessaging_Unsubscribe_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  PushMessaging_Unsubscribe_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PushMessaging_Unsubscribe_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
  };
  function PushMessaging_Unsubscribe_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PushMessaging_Unsubscribe_ResponseParams.prototype.initDefaults_ = function() {
    this.errorType = 0;
    this.didUnsubscribe = false;
    this.errorMessage = null;
  };
  PushMessaging_Unsubscribe_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PushMessaging_Unsubscribe_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PushMessaging_Unsubscribe_ResponseParams.errorType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PushErrorType);
    if (err !== validator.validationError.NONE)
        return err;



    // validate PushMessaging_Unsubscribe_ResponseParams.errorMessage
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PushMessaging_Unsubscribe_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  PushMessaging_Unsubscribe_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PushMessaging_Unsubscribe_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorType = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.didUnsubscribe = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.errorMessage = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  PushMessaging_Unsubscribe_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PushMessaging_Unsubscribe_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorType);
    packed = 0;
    packed |= (val.didUnsubscribe & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.errorMessage);
  };
  function PushMessaging_GetSubscription_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PushMessaging_GetSubscription_Params.prototype.initDefaults_ = function() {
    this.serviceWorkerRegistrationId = 0;
  };
  PushMessaging_GetSubscription_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PushMessaging_GetSubscription_Params.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  PushMessaging_GetSubscription_Params.encodedSize = codec.kStructHeaderSize + 8;

  PushMessaging_GetSubscription_Params.decode = function(decoder) {
    var packed;
    var val = new PushMessaging_GetSubscription_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  PushMessaging_GetSubscription_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PushMessaging_GetSubscription_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
  };
  function PushMessaging_GetSubscription_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PushMessaging_GetSubscription_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.endpoint = null;
    this.options = null;
    this.p256dh = null;
    this.auth = null;
  };
  PushMessaging_GetSubscription_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PushMessaging_GetSubscription_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PushMessaging_GetSubscription_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, push_messaging_status$.PushGetRegistrationStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PushMessaging_GetSubscription_ResponseParams.endpoint
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PushMessaging_GetSubscription_ResponseParams.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, PushSubscriptionOptions, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PushMessaging_GetSubscription_ResponseParams.p256dh
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PushMessaging_GetSubscription_ResponseParams.auth
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PushMessaging_GetSubscription_ResponseParams.encodedSize = codec.kStructHeaderSize + 40;

  PushMessaging_GetSubscription_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PushMessaging_GetSubscription_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.endpoint = decoder.decodeStructPointer(url$.Url);
    val.options = decoder.decodeStructPointer(PushSubscriptionOptions);
    val.p256dh = decoder.decodeArrayPointer(codec.Uint8);
    val.auth = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  PushMessaging_GetSubscription_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PushMessaging_GetSubscription_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.endpoint);
    encoder.encodeStructPointer(PushSubscriptionOptions, val.options);
    encoder.encodeArrayPointer(codec.Uint8, val.p256dh);
    encoder.encodeArrayPointer(codec.Uint8, val.auth);
  };
  var kPushMessaging_Subscribe_Name = 0;
  var kPushMessaging_Unsubscribe_Name = 1;
  var kPushMessaging_GetSubscription_Name = 2;

  function PushMessagingPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PushMessaging,
                                                   handleOrPtrInfo);
  }

  function PushMessagingAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PushMessaging, associatedInterfacePtrInfo);
  }

  PushMessagingAssociatedPtr.prototype =
      Object.create(PushMessagingPtr.prototype);
  PushMessagingAssociatedPtr.prototype.constructor =
      PushMessagingAssociatedPtr;

  function PushMessagingProxy(receiver) {
    this.receiver_ = receiver;
  }
  PushMessagingPtr.prototype.subscribe = function() {
    return PushMessagingProxy.prototype.subscribe
        .apply(this.ptr.getProxy(), arguments);
  };

  PushMessagingProxy.prototype.subscribe = function(renderFrameId, serviceWorkerRegistrationId, options, userGesture) {
    var params_ = new PushMessaging_Subscribe_Params();
    params_.renderFrameId = renderFrameId;
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    params_.options = options;
    params_.userGesture = userGesture;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPushMessaging_Subscribe_Name,
          codec.align(PushMessaging_Subscribe_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PushMessaging_Subscribe_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PushMessaging_Subscribe_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PushMessagingPtr.prototype.unsubscribe = function() {
    return PushMessagingProxy.prototype.unsubscribe
        .apply(this.ptr.getProxy(), arguments);
  };

  PushMessagingProxy.prototype.unsubscribe = function(serviceWorkerRegistrationId) {
    var params_ = new PushMessaging_Unsubscribe_Params();
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPushMessaging_Unsubscribe_Name,
          codec.align(PushMessaging_Unsubscribe_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PushMessaging_Unsubscribe_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PushMessaging_Unsubscribe_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PushMessagingPtr.prototype.getSubscription = function() {
    return PushMessagingProxy.prototype.getSubscription
        .apply(this.ptr.getProxy(), arguments);
  };

  PushMessagingProxy.prototype.getSubscription = function(serviceWorkerRegistrationId) {
    var params_ = new PushMessaging_GetSubscription_Params();
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPushMessaging_GetSubscription_Name,
          codec.align(PushMessaging_GetSubscription_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PushMessaging_GetSubscription_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PushMessaging_GetSubscription_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PushMessagingStub(delegate) {
    this.delegate_ = delegate;
  }
  PushMessagingStub.prototype.subscribe = function(renderFrameId, serviceWorkerRegistrationId, options, userGesture) {
    return this.delegate_ && this.delegate_.subscribe && this.delegate_.subscribe(renderFrameId, serviceWorkerRegistrationId, options, userGesture);
  }
  PushMessagingStub.prototype.unsubscribe = function(serviceWorkerRegistrationId) {
    return this.delegate_ && this.delegate_.unsubscribe && this.delegate_.unsubscribe(serviceWorkerRegistrationId);
  }
  PushMessagingStub.prototype.getSubscription = function(serviceWorkerRegistrationId) {
    return this.delegate_ && this.delegate_.getSubscription && this.delegate_.getSubscription(serviceWorkerRegistrationId);
  }

  PushMessagingStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PushMessagingStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPushMessaging_Subscribe_Name:
      var params = reader.decodeStruct(PushMessaging_Subscribe_Params);
      this.subscribe(params.renderFrameId, params.serviceWorkerRegistrationId, params.options, params.userGesture).then(function(response) {
        var responseParams =
            new PushMessaging_Subscribe_ResponseParams();
        responseParams.status = response.status;
        responseParams.endpoint = response.endpoint;
        responseParams.options = response.options;
        responseParams.p256dh = response.p256dh;
        responseParams.auth = response.auth;
        var builder = new codec.MessageV1Builder(
            kPushMessaging_Subscribe_Name,
            codec.align(PushMessaging_Subscribe_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PushMessaging_Subscribe_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPushMessaging_Unsubscribe_Name:
      var params = reader.decodeStruct(PushMessaging_Unsubscribe_Params);
      this.unsubscribe(params.serviceWorkerRegistrationId).then(function(response) {
        var responseParams =
            new PushMessaging_Unsubscribe_ResponseParams();
        responseParams.errorType = response.errorType;
        responseParams.didUnsubscribe = response.didUnsubscribe;
        responseParams.errorMessage = response.errorMessage;
        var builder = new codec.MessageV1Builder(
            kPushMessaging_Unsubscribe_Name,
            codec.align(PushMessaging_Unsubscribe_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PushMessaging_Unsubscribe_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPushMessaging_GetSubscription_Name:
      var params = reader.decodeStruct(PushMessaging_GetSubscription_Params);
      this.getSubscription(params.serviceWorkerRegistrationId).then(function(response) {
        var responseParams =
            new PushMessaging_GetSubscription_ResponseParams();
        responseParams.status = response.status;
        responseParams.endpoint = response.endpoint;
        responseParams.options = response.options;
        responseParams.p256dh = response.p256dh;
        responseParams.auth = response.auth;
        var builder = new codec.MessageV1Builder(
            kPushMessaging_GetSubscription_Name,
            codec.align(PushMessaging_GetSubscription_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PushMessaging_GetSubscription_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePushMessagingRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPushMessaging_Subscribe_Name:
        if (message.expectsResponse())
          paramsClass = PushMessaging_Subscribe_Params;
      break;
      case kPushMessaging_Unsubscribe_Name:
        if (message.expectsResponse())
          paramsClass = PushMessaging_Unsubscribe_Params;
      break;
      case kPushMessaging_GetSubscription_Name:
        if (message.expectsResponse())
          paramsClass = PushMessaging_GetSubscription_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePushMessagingResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPushMessaging_Subscribe_Name:
        if (message.isResponse())
          paramsClass = PushMessaging_Subscribe_ResponseParams;
        break;
      case kPushMessaging_Unsubscribe_Name:
        if (message.isResponse())
          paramsClass = PushMessaging_Unsubscribe_ResponseParams;
        break;
      case kPushMessaging_GetSubscription_Name:
        if (message.isResponse())
          paramsClass = PushMessaging_GetSubscription_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PushMessaging = {
    name: 'blink.mojom.PushMessaging',
    kVersion: 0,
    ptrClass: PushMessagingPtr,
    proxyClass: PushMessagingProxy,
    stubClass: PushMessagingStub,
    validateRequest: validatePushMessagingRequest,
    validateResponse: validatePushMessagingResponse,
  };
  PushMessagingStub.prototype.validator = validatePushMessagingRequest;
  PushMessagingProxy.prototype.validator = validatePushMessagingResponse;
  exports.PushErrorType = PushErrorType;
  exports.PushSubscriptionOptions = PushSubscriptionOptions;
  exports.PushMessaging = PushMessaging;
  exports.PushMessagingPtr = PushMessagingPtr;
  exports.PushMessagingAssociatedPtr = PushMessagingAssociatedPtr;
})();