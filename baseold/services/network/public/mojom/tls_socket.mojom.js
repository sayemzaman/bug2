// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/tls_socket.mojom';
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
  var ip_endpoint$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_endpoint.mojom', 'ip_endpoint.mojom.js');
  }
  var ssl_config$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ssl_config.mojom', 'ssl_config.mojom.js');
  }



  function TLSClientSocketOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TLSClientSocketOptions.prototype.initDefaults_ = function() {
    this.versionMin = ssl_config$.SSLVersion.kTLS1;
    this.versionMax = ssl_config$.SSLVersion.kTLS13;
    this.sendSslInfo = false;
    this.unsafelySkipCertVerification = false;
  };
  TLSClientSocketOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TLSClientSocketOptions.validate = function(messageValidator, offset) {
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


    // validate TLSClientSocketOptions.versionMin
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ssl_config$.SSLVersion);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TLSClientSocketOptions.versionMax
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, ssl_config$.SSLVersion);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  TLSClientSocketOptions.encodedSize = codec.kStructHeaderSize + 16;

  TLSClientSocketOptions.decode = function(decoder) {
    var packed;
    var val = new TLSClientSocketOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.versionMin = decoder.decodeStruct(codec.Int32);
    val.versionMax = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.sendSslInfo = (packed >> 0) & 1 ? true : false;
    val.unsafelySkipCertVerification = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TLSClientSocketOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TLSClientSocketOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.versionMin);
    encoder.encodeStruct(codec.Int32, val.versionMax);
    packed = 0;
    packed |= (val.sendSslInfo & 1) << 0
    packed |= (val.unsafelySkipCertVerification & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function TLSClientSocketPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TLSClientSocket,
                                                   handleOrPtrInfo);
  }

  function TLSClientSocketAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TLSClientSocket, associatedInterfacePtrInfo);
  }

  TLSClientSocketAssociatedPtr.prototype =
      Object.create(TLSClientSocketPtr.prototype);
  TLSClientSocketAssociatedPtr.prototype.constructor =
      TLSClientSocketAssociatedPtr;

  function TLSClientSocketProxy(receiver) {
    this.receiver_ = receiver;
  }

  function TLSClientSocketStub(delegate) {
    this.delegate_ = delegate;
  }

  TLSClientSocketStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TLSClientSocketStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateTLSClientSocketRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateTLSClientSocketResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TLSClientSocket = {
    name: 'network.mojom.TLSClientSocket',
    kVersion: 0,
    ptrClass: TLSClientSocketPtr,
    proxyClass: TLSClientSocketProxy,
    stubClass: TLSClientSocketStub,
    validateRequest: validateTLSClientSocketRequest,
    validateResponse: null,
  };
  TLSClientSocketStub.prototype.validator = validateTLSClientSocketRequest;
  TLSClientSocketProxy.prototype.validator = null;
  exports.TLSClientSocketOptions = TLSClientSocketOptions;
  exports.TLSClientSocket = TLSClientSocket;
  exports.TLSClientSocketPtr = TLSClientSocketPtr;
  exports.TLSClientSocketAssociatedPtr = TLSClientSocketAssociatedPtr;
})();