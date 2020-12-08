// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/worker/worker_content_settings_proxy.mojom';
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
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../../url/mojom/origin.mojom.js');
  }



  function WorkerContentSettingsProxy_AllowIndexedDB_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WorkerContentSettingsProxy_AllowIndexedDB_Params.prototype.initDefaults_ = function() {
  };
  WorkerContentSettingsProxy_AllowIndexedDB_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WorkerContentSettingsProxy_AllowIndexedDB_Params.validate = function(messageValidator, offset) {
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

  WorkerContentSettingsProxy_AllowIndexedDB_Params.encodedSize = codec.kStructHeaderSize + 0;

  WorkerContentSettingsProxy_AllowIndexedDB_Params.decode = function(decoder) {
    var packed;
    var val = new WorkerContentSettingsProxy_AllowIndexedDB_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WorkerContentSettingsProxy_AllowIndexedDB_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WorkerContentSettingsProxy_AllowIndexedDB_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams.prototype.initDefaults_ = function() {
    this.result = false;
  };
  WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams.validate = function(messageValidator, offset) {
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

  WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.result = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.result & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WorkerContentSettingsProxy_AllowCacheStorage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WorkerContentSettingsProxy_AllowCacheStorage_Params.prototype.initDefaults_ = function() {
  };
  WorkerContentSettingsProxy_AllowCacheStorage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WorkerContentSettingsProxy_AllowCacheStorage_Params.validate = function(messageValidator, offset) {
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

  WorkerContentSettingsProxy_AllowCacheStorage_Params.encodedSize = codec.kStructHeaderSize + 0;

  WorkerContentSettingsProxy_AllowCacheStorage_Params.decode = function(decoder) {
    var packed;
    var val = new WorkerContentSettingsProxy_AllowCacheStorage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WorkerContentSettingsProxy_AllowCacheStorage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WorkerContentSettingsProxy_AllowCacheStorage_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams.prototype.initDefaults_ = function() {
    this.result = false;
  };
  WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams.validate = function(messageValidator, offset) {
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

  WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.result = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.result & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params.prototype.initDefaults_ = function() {
  };
  WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params.validate = function(messageValidator, offset) {
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

  WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params.encodedSize = codec.kStructHeaderSize + 0;

  WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params.decode = function(decoder) {
    var packed;
    var val = new WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams.prototype.initDefaults_ = function() {
    this.result = false;
  };
  WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams.validate = function(messageValidator, offset) {
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

  WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.result = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.result & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kWorkerContentSettingsProxy_AllowIndexedDB_Name = 0;
  var kWorkerContentSettingsProxy_AllowCacheStorage_Name = 1;
  var kWorkerContentSettingsProxy_RequestFileSystemAccessSync_Name = 2;

  function WorkerContentSettingsProxyPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WorkerContentSettingsProxy,
                                                   handleOrPtrInfo);
  }

  function WorkerContentSettingsProxyAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WorkerContentSettingsProxy, associatedInterfacePtrInfo);
  }

  WorkerContentSettingsProxyAssociatedPtr.prototype =
      Object.create(WorkerContentSettingsProxyPtr.prototype);
  WorkerContentSettingsProxyAssociatedPtr.prototype.constructor =
      WorkerContentSettingsProxyAssociatedPtr;

  function WorkerContentSettingsProxyProxy(receiver) {
    this.receiver_ = receiver;
  }
  WorkerContentSettingsProxyPtr.prototype.allowIndexedDB = function() {
    return WorkerContentSettingsProxyProxy.prototype.allowIndexedDB
        .apply(this.ptr.getProxy(), arguments);
  };

  WorkerContentSettingsProxyProxy.prototype.allowIndexedDB = function() {
    var params_ = new WorkerContentSettingsProxy_AllowIndexedDB_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWorkerContentSettingsProxy_AllowIndexedDB_Name,
          codec.align(WorkerContentSettingsProxy_AllowIndexedDB_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WorkerContentSettingsProxy_AllowIndexedDB_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  WorkerContentSettingsProxyPtr.prototype.allowCacheStorage = function() {
    return WorkerContentSettingsProxyProxy.prototype.allowCacheStorage
        .apply(this.ptr.getProxy(), arguments);
  };

  WorkerContentSettingsProxyProxy.prototype.allowCacheStorage = function() {
    var params_ = new WorkerContentSettingsProxy_AllowCacheStorage_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWorkerContentSettingsProxy_AllowCacheStorage_Name,
          codec.align(WorkerContentSettingsProxy_AllowCacheStorage_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WorkerContentSettingsProxy_AllowCacheStorage_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  WorkerContentSettingsProxyPtr.prototype.requestFileSystemAccessSync = function() {
    return WorkerContentSettingsProxyProxy.prototype.requestFileSystemAccessSync
        .apply(this.ptr.getProxy(), arguments);
  };

  WorkerContentSettingsProxyProxy.prototype.requestFileSystemAccessSync = function() {
    var params_ = new WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWorkerContentSettingsProxy_RequestFileSystemAccessSync_Name,
          codec.align(WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function WorkerContentSettingsProxyStub(delegate) {
    this.delegate_ = delegate;
  }
  WorkerContentSettingsProxyStub.prototype.allowIndexedDB = function() {
    return this.delegate_ && this.delegate_.allowIndexedDB && this.delegate_.allowIndexedDB();
  }
  WorkerContentSettingsProxyStub.prototype.allowCacheStorage = function() {
    return this.delegate_ && this.delegate_.allowCacheStorage && this.delegate_.allowCacheStorage();
  }
  WorkerContentSettingsProxyStub.prototype.requestFileSystemAccessSync = function() {
    return this.delegate_ && this.delegate_.requestFileSystemAccessSync && this.delegate_.requestFileSystemAccessSync();
  }

  WorkerContentSettingsProxyStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  WorkerContentSettingsProxyStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWorkerContentSettingsProxy_AllowIndexedDB_Name:
      var params = reader.decodeStruct(WorkerContentSettingsProxy_AllowIndexedDB_Params);
      this.allowIndexedDB().then(function(response) {
        var responseParams =
            new WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kWorkerContentSettingsProxy_AllowIndexedDB_Name,
            codec.align(WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kWorkerContentSettingsProxy_AllowCacheStorage_Name:
      var params = reader.decodeStruct(WorkerContentSettingsProxy_AllowCacheStorage_Params);
      this.allowCacheStorage().then(function(response) {
        var responseParams =
            new WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kWorkerContentSettingsProxy_AllowCacheStorage_Name,
            codec.align(WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kWorkerContentSettingsProxy_RequestFileSystemAccessSync_Name:
      var params = reader.decodeStruct(WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params);
      this.requestFileSystemAccessSync().then(function(response) {
        var responseParams =
            new WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kWorkerContentSettingsProxy_RequestFileSystemAccessSync_Name,
            codec.align(WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateWorkerContentSettingsProxyRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWorkerContentSettingsProxy_AllowIndexedDB_Name:
        if (message.expectsResponse())
          paramsClass = WorkerContentSettingsProxy_AllowIndexedDB_Params;
      break;
      case kWorkerContentSettingsProxy_AllowCacheStorage_Name:
        if (message.expectsResponse())
          paramsClass = WorkerContentSettingsProxy_AllowCacheStorage_Params;
      break;
      case kWorkerContentSettingsProxy_RequestFileSystemAccessSync_Name:
        if (message.expectsResponse())
          paramsClass = WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWorkerContentSettingsProxyResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kWorkerContentSettingsProxy_AllowIndexedDB_Name:
        if (message.isResponse())
          paramsClass = WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams;
        break;
      case kWorkerContentSettingsProxy_AllowCacheStorage_Name:
        if (message.isResponse())
          paramsClass = WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams;
        break;
      case kWorkerContentSettingsProxy_RequestFileSystemAccessSync_Name:
        if (message.isResponse())
          paramsClass = WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var WorkerContentSettingsProxy = {
    name: 'blink.mojom.WorkerContentSettingsProxy',
    kVersion: 0,
    ptrClass: WorkerContentSettingsProxyPtr,
    proxyClass: WorkerContentSettingsProxyProxy,
    stubClass: WorkerContentSettingsProxyStub,
    validateRequest: validateWorkerContentSettingsProxyRequest,
    validateResponse: validateWorkerContentSettingsProxyResponse,
  };
  WorkerContentSettingsProxyStub.prototype.validator = validateWorkerContentSettingsProxyRequest;
  WorkerContentSettingsProxyProxy.prototype.validator = validateWorkerContentSettingsProxyResponse;
  exports.WorkerContentSettingsProxy = WorkerContentSettingsProxy;
  exports.WorkerContentSettingsProxyPtr = WorkerContentSettingsProxyPtr;
  exports.WorkerContentSettingsProxyAssociatedPtr = WorkerContentSettingsProxyAssociatedPtr;
})();