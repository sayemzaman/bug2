// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/ip_address.mojom';
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



  function IPAddress(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IPAddress.prototype.initDefaults_ = function() {
    this.addressBytes = null;
  };
  IPAddress.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IPAddress.validate = function(messageValidator, offset) {
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


    // validate IPAddress.addressBytes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IPAddress.encodedSize = codec.kStructHeaderSize + 8;

  IPAddress.decode = function(decoder) {
    var packed;
    var val = new IPAddress();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.addressBytes = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  IPAddress.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IPAddress.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.addressBytes);
  };
  exports.IPAddress = IPAddress;
})();