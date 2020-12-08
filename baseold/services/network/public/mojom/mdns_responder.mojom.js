// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/mdns_responder.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var ip_address$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address.mojom', 'ip_address.mojom.js');
  }



  function MdnsResponder_CreateNameForAddress_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MdnsResponder_CreateNameForAddress_Params.prototype.initDefaults_ = function() {
    this.address = null;
  };
  MdnsResponder_CreateNameForAddress_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MdnsResponder_CreateNameForAddress_Params.validate = function(messageValidator, offset) {
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


    // validate MdnsResponder_CreateNameForAddress_Params.address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ip_address$.IPAddress, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MdnsResponder_CreateNameForAddress_Params.encodedSize = codec.kStructHeaderSize + 8;

  MdnsResponder_CreateNameForAddress_Params.decode = function(decoder) {
    var packed;
    var val = new MdnsResponder_CreateNameForAddress_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.address = decoder.decodeStructPointer(ip_address$.IPAddress);
    return val;
  };

  MdnsResponder_CreateNameForAddress_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MdnsResponder_CreateNameForAddress_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ip_address$.IPAddress, val.address);
  };
  function MdnsResponder_CreateNameForAddress_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MdnsResponder_CreateNameForAddress_ResponseParams.prototype.initDefaults_ = function() {
    this.name = null;
    this.announcementScheduled = false;
  };
  MdnsResponder_CreateNameForAddress_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MdnsResponder_CreateNameForAddress_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MdnsResponder_CreateNameForAddress_ResponseParams.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  MdnsResponder_CreateNameForAddress_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  MdnsResponder_CreateNameForAddress_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MdnsResponder_CreateNameForAddress_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.announcementScheduled = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MdnsResponder_CreateNameForAddress_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MdnsResponder_CreateNameForAddress_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    packed = 0;
    packed |= (val.announcementScheduled & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MdnsResponder_RemoveNameForAddress_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MdnsResponder_RemoveNameForAddress_Params.prototype.initDefaults_ = function() {
    this.address = null;
  };
  MdnsResponder_RemoveNameForAddress_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MdnsResponder_RemoveNameForAddress_Params.validate = function(messageValidator, offset) {
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


    // validate MdnsResponder_RemoveNameForAddress_Params.address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ip_address$.IPAddress, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MdnsResponder_RemoveNameForAddress_Params.encodedSize = codec.kStructHeaderSize + 8;

  MdnsResponder_RemoveNameForAddress_Params.decode = function(decoder) {
    var packed;
    var val = new MdnsResponder_RemoveNameForAddress_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.address = decoder.decodeStructPointer(ip_address$.IPAddress);
    return val;
  };

  MdnsResponder_RemoveNameForAddress_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MdnsResponder_RemoveNameForAddress_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ip_address$.IPAddress, val.address);
  };
  function MdnsResponder_RemoveNameForAddress_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MdnsResponder_RemoveNameForAddress_ResponseParams.prototype.initDefaults_ = function() {
    this.removed = false;
    this.goodbyeScheduled = false;
  };
  MdnsResponder_RemoveNameForAddress_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MdnsResponder_RemoveNameForAddress_ResponseParams.validate = function(messageValidator, offset) {
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

  MdnsResponder_RemoveNameForAddress_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MdnsResponder_RemoveNameForAddress_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MdnsResponder_RemoveNameForAddress_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.removed = (packed >> 0) & 1 ? true : false;
    val.goodbyeScheduled = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MdnsResponder_RemoveNameForAddress_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MdnsResponder_RemoveNameForAddress_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.removed & 1) << 0
    packed |= (val.goodbyeScheduled & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kMdnsResponder_CreateNameForAddress_Name = 0;
  var kMdnsResponder_RemoveNameForAddress_Name = 1;

  function MdnsResponderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MdnsResponder,
                                                   handleOrPtrInfo);
  }

  function MdnsResponderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MdnsResponder, associatedInterfacePtrInfo);
  }

  MdnsResponderAssociatedPtr.prototype =
      Object.create(MdnsResponderPtr.prototype);
  MdnsResponderAssociatedPtr.prototype.constructor =
      MdnsResponderAssociatedPtr;

  function MdnsResponderProxy(receiver) {
    this.receiver_ = receiver;
  }
  MdnsResponderPtr.prototype.createNameForAddress = function() {
    return MdnsResponderProxy.prototype.createNameForAddress
        .apply(this.ptr.getProxy(), arguments);
  };

  MdnsResponderProxy.prototype.createNameForAddress = function(address) {
    var params_ = new MdnsResponder_CreateNameForAddress_Params();
    params_.address = address;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMdnsResponder_CreateNameForAddress_Name,
          codec.align(MdnsResponder_CreateNameForAddress_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MdnsResponder_CreateNameForAddress_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MdnsResponder_CreateNameForAddress_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MdnsResponderPtr.prototype.removeNameForAddress = function() {
    return MdnsResponderProxy.prototype.removeNameForAddress
        .apply(this.ptr.getProxy(), arguments);
  };

  MdnsResponderProxy.prototype.removeNameForAddress = function(address) {
    var params_ = new MdnsResponder_RemoveNameForAddress_Params();
    params_.address = address;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMdnsResponder_RemoveNameForAddress_Name,
          codec.align(MdnsResponder_RemoveNameForAddress_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MdnsResponder_RemoveNameForAddress_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MdnsResponder_RemoveNameForAddress_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function MdnsResponderStub(delegate) {
    this.delegate_ = delegate;
  }
  MdnsResponderStub.prototype.createNameForAddress = function(address) {
    return this.delegate_ && this.delegate_.createNameForAddress && this.delegate_.createNameForAddress(address);
  }
  MdnsResponderStub.prototype.removeNameForAddress = function(address) {
    return this.delegate_ && this.delegate_.removeNameForAddress && this.delegate_.removeNameForAddress(address);
  }

  MdnsResponderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  MdnsResponderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMdnsResponder_CreateNameForAddress_Name:
      var params = reader.decodeStruct(MdnsResponder_CreateNameForAddress_Params);
      this.createNameForAddress(params.address).then(function(response) {
        var responseParams =
            new MdnsResponder_CreateNameForAddress_ResponseParams();
        responseParams.name = response.name;
        responseParams.announcementScheduled = response.announcementScheduled;
        var builder = new codec.MessageV1Builder(
            kMdnsResponder_CreateNameForAddress_Name,
            codec.align(MdnsResponder_CreateNameForAddress_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MdnsResponder_CreateNameForAddress_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMdnsResponder_RemoveNameForAddress_Name:
      var params = reader.decodeStruct(MdnsResponder_RemoveNameForAddress_Params);
      this.removeNameForAddress(params.address).then(function(response) {
        var responseParams =
            new MdnsResponder_RemoveNameForAddress_ResponseParams();
        responseParams.removed = response.removed;
        responseParams.goodbyeScheduled = response.goodbyeScheduled;
        var builder = new codec.MessageV1Builder(
            kMdnsResponder_RemoveNameForAddress_Name,
            codec.align(MdnsResponder_RemoveNameForAddress_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MdnsResponder_RemoveNameForAddress_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateMdnsResponderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMdnsResponder_CreateNameForAddress_Name:
        if (message.expectsResponse())
          paramsClass = MdnsResponder_CreateNameForAddress_Params;
      break;
      case kMdnsResponder_RemoveNameForAddress_Name:
        if (message.expectsResponse())
          paramsClass = MdnsResponder_RemoveNameForAddress_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMdnsResponderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kMdnsResponder_CreateNameForAddress_Name:
        if (message.isResponse())
          paramsClass = MdnsResponder_CreateNameForAddress_ResponseParams;
        break;
      case kMdnsResponder_RemoveNameForAddress_Name:
        if (message.isResponse())
          paramsClass = MdnsResponder_RemoveNameForAddress_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var MdnsResponder = {
    name: 'network.mojom.MdnsResponder',
    kVersion: 0,
    ptrClass: MdnsResponderPtr,
    proxyClass: MdnsResponderProxy,
    stubClass: MdnsResponderStub,
    validateRequest: validateMdnsResponderRequest,
    validateResponse: validateMdnsResponderResponse,
  };
  MdnsResponderStub.prototype.validator = validateMdnsResponderRequest;
  MdnsResponderProxy.prototype.validator = validateMdnsResponderResponse;
  exports.MdnsResponder = MdnsResponder;
  exports.MdnsResponderPtr = MdnsResponderPtr;
  exports.MdnsResponderAssociatedPtr = MdnsResponderAssociatedPtr;
})();