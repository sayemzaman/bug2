// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/mirroring/mojom/cast_message_channel.mojom';
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


  var kRemotingNamespace = "urn:x-cast:com.google.cast.remoting";
  var kWebRtcNamespace = "urn:x-cast:com.google.cast.webrtc";

  function CastMessage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CastMessage.prototype.initDefaults_ = function() {
    this.messageNamespace = null;
    this.jsonFormatData = null;
  };
  CastMessage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CastMessage.validate = function(messageValidator, offset) {
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


    // validate CastMessage.messageNamespace
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CastMessage.jsonFormatData
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CastMessage.encodedSize = codec.kStructHeaderSize + 16;

  CastMessage.decode = function(decoder) {
    var packed;
    var val = new CastMessage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.messageNamespace = decoder.decodeStruct(codec.String);
    val.jsonFormatData = decoder.decodeStruct(codec.String);
    return val;
  };

  CastMessage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CastMessage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.messageNamespace);
    encoder.encodeStruct(codec.String, val.jsonFormatData);
  };
  function CastMessageChannel_Send_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CastMessageChannel_Send_Params.prototype.initDefaults_ = function() {
    this.message = null;
  };
  CastMessageChannel_Send_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CastMessageChannel_Send_Params.validate = function(messageValidator, offset) {
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


    // validate CastMessageChannel_Send_Params.message
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CastMessage, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CastMessageChannel_Send_Params.encodedSize = codec.kStructHeaderSize + 8;

  CastMessageChannel_Send_Params.decode = function(decoder) {
    var packed;
    var val = new CastMessageChannel_Send_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStructPointer(CastMessage);
    return val;
  };

  CastMessageChannel_Send_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CastMessageChannel_Send_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CastMessage, val.message);
  };
  var kCastMessageChannel_Send_Name = 0;

  function CastMessageChannelPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CastMessageChannel,
                                                   handleOrPtrInfo);
  }

  function CastMessageChannelAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CastMessageChannel, associatedInterfacePtrInfo);
  }

  CastMessageChannelAssociatedPtr.prototype =
      Object.create(CastMessageChannelPtr.prototype);
  CastMessageChannelAssociatedPtr.prototype.constructor =
      CastMessageChannelAssociatedPtr;

  function CastMessageChannelProxy(receiver) {
    this.receiver_ = receiver;
  }
  CastMessageChannelPtr.prototype.send = function() {
    return CastMessageChannelProxy.prototype.send
        .apply(this.ptr.getProxy(), arguments);
  };

  CastMessageChannelProxy.prototype.send = function(message) {
    var params_ = new CastMessageChannel_Send_Params();
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kCastMessageChannel_Send_Name,
        codec.align(CastMessageChannel_Send_Params.encodedSize));
    builder.encodeStruct(CastMessageChannel_Send_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CastMessageChannelStub(delegate) {
    this.delegate_ = delegate;
  }
  CastMessageChannelStub.prototype.send = function(message) {
    return this.delegate_ && this.delegate_.send && this.delegate_.send(message);
  }

  CastMessageChannelStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCastMessageChannel_Send_Name:
      var params = reader.decodeStruct(CastMessageChannel_Send_Params);
      this.send(params.message);
      return true;
    default:
      return false;
    }
  };

  CastMessageChannelStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCastMessageChannelRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCastMessageChannel_Send_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CastMessageChannel_Send_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCastMessageChannelResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CastMessageChannel = {
    name: 'mirroring.mojom.CastMessageChannel',
    kVersion: 0,
    ptrClass: CastMessageChannelPtr,
    proxyClass: CastMessageChannelProxy,
    stubClass: CastMessageChannelStub,
    validateRequest: validateCastMessageChannelRequest,
    validateResponse: null,
  };
  CastMessageChannelStub.prototype.validator = validateCastMessageChannelRequest;
  CastMessageChannelProxy.prototype.validator = null;
  exports.kRemotingNamespace = kRemotingNamespace;
  exports.kWebRtcNamespace = kWebRtcNamespace;
  exports.CastMessage = CastMessage;
  exports.CastMessageChannel = CastMessageChannel;
  exports.CastMessageChannelPtr = CastMessageChannelPtr;
  exports.CastMessageChannelAssociatedPtr = CastMessageChannelAssociatedPtr;
})();