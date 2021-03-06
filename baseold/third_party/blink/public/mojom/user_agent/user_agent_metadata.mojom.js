// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/user_agent/user_agent_metadata.mojom';
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



  function UserAgentMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UserAgentMetadata.prototype.initDefaults_ = function() {
    this.brand = null;
    this.fullVersion = null;
    this.majorVersion = null;
    this.platform = null;
    this.architecture = null;
    this.model = null;
  };
  UserAgentMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UserAgentMetadata.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UserAgentMetadata.brand
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UserAgentMetadata.fullVersion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UserAgentMetadata.majorVersion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UserAgentMetadata.platform
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UserAgentMetadata.architecture
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UserAgentMetadata.model
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UserAgentMetadata.encodedSize = codec.kStructHeaderSize + 48;

  UserAgentMetadata.decode = function(decoder) {
    var packed;
    var val = new UserAgentMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.brand = decoder.decodeStruct(codec.String);
    val.fullVersion = decoder.decodeStruct(codec.String);
    val.majorVersion = decoder.decodeStruct(codec.String);
    val.platform = decoder.decodeStruct(codec.String);
    val.architecture = decoder.decodeStruct(codec.String);
    val.model = decoder.decodeStruct(codec.String);
    return val;
  };

  UserAgentMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UserAgentMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.brand);
    encoder.encodeStruct(codec.String, val.fullVersion);
    encoder.encodeStruct(codec.String, val.majorVersion);
    encoder.encodeStruct(codec.String, val.platform);
    encoder.encodeStruct(codec.String, val.architecture);
    encoder.encodeStruct(codec.String, val.model);
  };
  exports.UserAgentMetadata = UserAgentMetadata;
})();