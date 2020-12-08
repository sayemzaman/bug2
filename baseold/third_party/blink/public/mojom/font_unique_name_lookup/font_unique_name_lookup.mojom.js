// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/font_unique_name_lookup/font_unique_name_lookup.mojom';
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
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var shared_memory$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/shared_memory.mojom', '../../../../../mojo/public/mojom/base/shared_memory.mojom.js');
  }



  function FontUniqueNameLookup_GetUniqueNameLookupTable_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FontUniqueNameLookup_GetUniqueNameLookupTable_Params.prototype.initDefaults_ = function() {
  };
  FontUniqueNameLookup_GetUniqueNameLookupTable_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FontUniqueNameLookup_GetUniqueNameLookupTable_Params.validate = function(messageValidator, offset) {
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

  FontUniqueNameLookup_GetUniqueNameLookupTable_Params.encodedSize = codec.kStructHeaderSize + 0;

  FontUniqueNameLookup_GetUniqueNameLookupTable_Params.decode = function(decoder) {
    var packed;
    var val = new FontUniqueNameLookup_GetUniqueNameLookupTable_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FontUniqueNameLookup_GetUniqueNameLookupTable_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FontUniqueNameLookup_GetUniqueNameLookupTable_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams.prototype.initDefaults_ = function() {
    this.fontLookupTable = null;
  };
  FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams.fontLookupTable
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, shared_memory$.ReadOnlySharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fontLookupTable = decoder.decodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion);
    return val;
  };

  FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion, val.fontLookupTable);
  };
  var kFontUniqueNameLookup_GetUniqueNameLookupTable_Name = 0;

  function FontUniqueNameLookupPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FontUniqueNameLookup,
                                                   handleOrPtrInfo);
  }

  function FontUniqueNameLookupAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FontUniqueNameLookup, associatedInterfacePtrInfo);
  }

  FontUniqueNameLookupAssociatedPtr.prototype =
      Object.create(FontUniqueNameLookupPtr.prototype);
  FontUniqueNameLookupAssociatedPtr.prototype.constructor =
      FontUniqueNameLookupAssociatedPtr;

  function FontUniqueNameLookupProxy(receiver) {
    this.receiver_ = receiver;
  }
  FontUniqueNameLookupPtr.prototype.getUniqueNameLookupTable = function() {
    return FontUniqueNameLookupProxy.prototype.getUniqueNameLookupTable
        .apply(this.ptr.getProxy(), arguments);
  };

  FontUniqueNameLookupProxy.prototype.getUniqueNameLookupTable = function() {
    var params_ = new FontUniqueNameLookup_GetUniqueNameLookupTable_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFontUniqueNameLookup_GetUniqueNameLookupTable_Name,
          codec.align(FontUniqueNameLookup_GetUniqueNameLookupTable_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FontUniqueNameLookup_GetUniqueNameLookupTable_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FontUniqueNameLookupStub(delegate) {
    this.delegate_ = delegate;
  }
  FontUniqueNameLookupStub.prototype.getUniqueNameLookupTable = function() {
    return this.delegate_ && this.delegate_.getUniqueNameLookupTable && this.delegate_.getUniqueNameLookupTable();
  }

  FontUniqueNameLookupStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FontUniqueNameLookupStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFontUniqueNameLookup_GetUniqueNameLookupTable_Name:
      var params = reader.decodeStruct(FontUniqueNameLookup_GetUniqueNameLookupTable_Params);
      this.getUniqueNameLookupTable().then(function(response) {
        var responseParams =
            new FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams();
        responseParams.fontLookupTable = response.fontLookupTable;
        var builder = new codec.MessageV1Builder(
            kFontUniqueNameLookup_GetUniqueNameLookupTable_Name,
            codec.align(FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFontUniqueNameLookupRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFontUniqueNameLookup_GetUniqueNameLookupTable_Name:
        if (message.expectsResponse())
          paramsClass = FontUniqueNameLookup_GetUniqueNameLookupTable_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFontUniqueNameLookupResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFontUniqueNameLookup_GetUniqueNameLookupTable_Name:
        if (message.isResponse())
          paramsClass = FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FontUniqueNameLookup = {
    name: 'blink.mojom.FontUniqueNameLookup',
    kVersion: 0,
    ptrClass: FontUniqueNameLookupPtr,
    proxyClass: FontUniqueNameLookupProxy,
    stubClass: FontUniqueNameLookupStub,
    validateRequest: validateFontUniqueNameLookupRequest,
    validateResponse: validateFontUniqueNameLookupResponse,
  };
  FontUniqueNameLookupStub.prototype.validator = validateFontUniqueNameLookupRequest;
  FontUniqueNameLookupProxy.prototype.validator = validateFontUniqueNameLookupResponse;
  exports.FontUniqueNameLookup = FontUniqueNameLookup;
  exports.FontUniqueNameLookupPtr = FontUniqueNameLookupPtr;
  exports.FontUniqueNameLookupAssociatedPtr = FontUniqueNameLookupAssociatedPtr;
})();