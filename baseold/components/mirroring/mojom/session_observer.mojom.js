// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/mirroring/mojom/session_observer.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mirroring.mojom');


  var SessionError = {};
  SessionError.ANSWER_TIME_OUT = 0;
  SessionError.ANSWER_NOT_OK = SessionError.ANSWER_TIME_OUT + 1;
  SessionError.ANSWER_MISMATCHED_CAST_MODE = SessionError.ANSWER_NOT_OK + 1;
  SessionError.ANSWER_MISMATCHED_SSRC_LENGTH = SessionError.ANSWER_MISMATCHED_CAST_MODE + 1;
  SessionError.ANSWER_SELECT_MULTIPLE_AUDIO = SessionError.ANSWER_MISMATCHED_SSRC_LENGTH + 1;
  SessionError.ANSWER_SELECT_MULTIPLE_VIDEO = SessionError.ANSWER_SELECT_MULTIPLE_AUDIO + 1;
  SessionError.ANSWER_SELECT_INVALID_INDEX = SessionError.ANSWER_SELECT_MULTIPLE_VIDEO + 1;
  SessionError.ANSWER_NO_AUDIO_OR_VIDEO = SessionError.ANSWER_SELECT_INVALID_INDEX + 1;
  SessionError.AUDIO_CAPTURE_ERROR = SessionError.ANSWER_NO_AUDIO_OR_VIDEO + 1;
  SessionError.VIDEO_CAPTURE_ERROR = SessionError.AUDIO_CAPTURE_ERROR + 1;
  SessionError.RTP_STREAM_ERROR = SessionError.VIDEO_CAPTURE_ERROR + 1;
  SessionError.ENCODING_ERROR = SessionError.RTP_STREAM_ERROR + 1;
  SessionError.CAST_TRANSPORT_ERROR = SessionError.ENCODING_ERROR + 1;
  SessionError.MIN_VALUE = 0,
  SessionError.MAX_VALUE = 12,

  SessionError.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      return true;
    }
    return false;
  };

  SessionError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SessionObserver_OnError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SessionObserver_OnError_Params.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  SessionObserver_OnError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SessionObserver_OnError_Params.validate = function(messageValidator, offset) {
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


    // validate SessionObserver_OnError_Params.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, SessionError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SessionObserver_OnError_Params.encodedSize = codec.kStructHeaderSize + 8;

  SessionObserver_OnError_Params.decode = function(decoder) {
    var packed;
    var val = new SessionObserver_OnError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SessionObserver_OnError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SessionObserver_OnError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SessionObserver_DidStart_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SessionObserver_DidStart_Params.prototype.initDefaults_ = function() {
  };
  SessionObserver_DidStart_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SessionObserver_DidStart_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SessionObserver_DidStart_Params.encodedSize = codec.kStructHeaderSize + 0;

  SessionObserver_DidStart_Params.decode = function(decoder) {
    var packed;
    var val = new SessionObserver_DidStart_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SessionObserver_DidStart_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SessionObserver_DidStart_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SessionObserver_DidStop_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SessionObserver_DidStop_Params.prototype.initDefaults_ = function() {
  };
  SessionObserver_DidStop_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SessionObserver_DidStop_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SessionObserver_DidStop_Params.encodedSize = codec.kStructHeaderSize + 0;

  SessionObserver_DidStop_Params.decode = function(decoder) {
    var packed;
    var val = new SessionObserver_DidStop_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SessionObserver_DidStop_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SessionObserver_DidStop_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kSessionObserver_OnError_Name = 0;
  var kSessionObserver_DidStart_Name = 1;
  var kSessionObserver_DidStop_Name = 2;

  function SessionObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SessionObserver,
                                                   handleOrPtrInfo);
  }

  function SessionObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SessionObserver, associatedInterfacePtrInfo);
  }

  SessionObserverAssociatedPtr.prototype =
      Object.create(SessionObserverPtr.prototype);
  SessionObserverAssociatedPtr.prototype.constructor =
      SessionObserverAssociatedPtr;

  function SessionObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  SessionObserverPtr.prototype.onError = function() {
    return SessionObserverProxy.prototype.onError
        .apply(this.ptr.getProxy(), arguments);
  };

  SessionObserverProxy.prototype.onError = function(error) {
    var params_ = new SessionObserver_OnError_Params();
    params_.error = error;
    var builder = new codec.MessageV0Builder(
        kSessionObserver_OnError_Name,
        codec.align(SessionObserver_OnError_Params.encodedSize));
    builder.encodeStruct(SessionObserver_OnError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SessionObserverPtr.prototype.didStart = function() {
    return SessionObserverProxy.prototype.didStart
        .apply(this.ptr.getProxy(), arguments);
  };

  SessionObserverProxy.prototype.didStart = function() {
    var params_ = new SessionObserver_DidStart_Params();
    var builder = new codec.MessageV0Builder(
        kSessionObserver_DidStart_Name,
        codec.align(SessionObserver_DidStart_Params.encodedSize));
    builder.encodeStruct(SessionObserver_DidStart_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SessionObserverPtr.prototype.didStop = function() {
    return SessionObserverProxy.prototype.didStop
        .apply(this.ptr.getProxy(), arguments);
  };

  SessionObserverProxy.prototype.didStop = function() {
    var params_ = new SessionObserver_DidStop_Params();
    var builder = new codec.MessageV0Builder(
        kSessionObserver_DidStop_Name,
        codec.align(SessionObserver_DidStop_Params.encodedSize));
    builder.encodeStruct(SessionObserver_DidStop_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SessionObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  SessionObserverStub.prototype.onError = function(error) {
    return this.delegate_ && this.delegate_.onError && this.delegate_.onError(error);
  }
  SessionObserverStub.prototype.didStart = function() {
    return this.delegate_ && this.delegate_.didStart && this.delegate_.didStart();
  }
  SessionObserverStub.prototype.didStop = function() {
    return this.delegate_ && this.delegate_.didStop && this.delegate_.didStop();
  }

  SessionObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSessionObserver_OnError_Name:
      var params = reader.decodeStruct(SessionObserver_OnError_Params);
      this.onError(params.error);
      return true;
    case kSessionObserver_DidStart_Name:
      var params = reader.decodeStruct(SessionObserver_DidStart_Params);
      this.didStart();
      return true;
    case kSessionObserver_DidStop_Name:
      var params = reader.decodeStruct(SessionObserver_DidStop_Params);
      this.didStop();
      return true;
    default:
      return false;
    }
  };

  SessionObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSessionObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSessionObserver_OnError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SessionObserver_OnError_Params;
      break;
      case kSessionObserver_DidStart_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SessionObserver_DidStart_Params;
      break;
      case kSessionObserver_DidStop_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SessionObserver_DidStop_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSessionObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SessionObserver = {
    name: 'mirroring.mojom.SessionObserver',
    kVersion: 0,
    ptrClass: SessionObserverPtr,
    proxyClass: SessionObserverProxy,
    stubClass: SessionObserverStub,
    validateRequest: validateSessionObserverRequest,
    validateResponse: null,
  };
  SessionObserverStub.prototype.validator = validateSessionObserverRequest;
  SessionObserverProxy.prototype.validator = null;
  exports.SessionError = SessionError;
  exports.SessionObserver = SessionObserver;
  exports.SessionObserverPtr = SessionObserverPtr;
  exports.SessionObserverAssociatedPtr = SessionObserverAssociatedPtr;
})();