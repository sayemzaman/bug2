// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/ct_log_info.mojom';
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



  function CTLogInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CTLogInfo.prototype.initDefaults_ = function() {
    this.publicKey = null;
    this.name = null;
  };
  CTLogInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CTLogInfo.validate = function(messageValidator, offset) {
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


    // validate CTLogInfo.publicKey
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CTLogInfo.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CTLogInfo.encodedSize = codec.kStructHeaderSize + 16;

  CTLogInfo.decode = function(decoder) {
    var packed;
    var val = new CTLogInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.publicKey = decoder.decodeStruct(codec.String);
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  CTLogInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CTLogInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.publicKey);
    encoder.encodeStruct(codec.String, val.name);
  };
  exports.CTLogInfo = CTLogInfo;
})();