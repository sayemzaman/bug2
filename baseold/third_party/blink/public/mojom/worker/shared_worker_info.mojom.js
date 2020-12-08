// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/worker/shared_worker_info.mojom';
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
  var ip_address_space$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/net/ip_address_space.mojom', '../net/ip_address_space.mojom.js');
  }
  var content_security_policy$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/csp/content_security_policy.mojom', '../csp/content_security_policy.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function SharedWorkerInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedWorkerInfo.prototype.initDefaults_ = function() {
    this.url = null;
    this.name = null;
    this.contentSecurityPolicy = null;
    this.contentSecurityPolicyType = 0;
    this.creationAddressSpace = 0;
  };
  SharedWorkerInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedWorkerInfo.validate = function(messageValidator, offset) {
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


    // validate SharedWorkerInfo.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerInfo.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerInfo.contentSecurityPolicy
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerInfo.contentSecurityPolicyType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, content_security_policy$.ContentSecurityPolicyType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerInfo.creationAddressSpace
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, ip_address_space$.IPAddressSpace);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SharedWorkerInfo.encodedSize = codec.kStructHeaderSize + 32;

  SharedWorkerInfo.decode = function(decoder) {
    var packed;
    var val = new SharedWorkerInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.name = decoder.decodeStruct(codec.String);
    val.contentSecurityPolicy = decoder.decodeStruct(codec.String);
    val.contentSecurityPolicyType = decoder.decodeStruct(codec.Int32);
    val.creationAddressSpace = decoder.decodeStruct(codec.Int32);
    return val;
  };

  SharedWorkerInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedWorkerInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.contentSecurityPolicy);
    encoder.encodeStruct(codec.Int32, val.contentSecurityPolicyType);
    encoder.encodeStruct(codec.Int32, val.creationAddressSpace);
  };
  exports.SharedWorkerInfo = SharedWorkerInfo;
})();