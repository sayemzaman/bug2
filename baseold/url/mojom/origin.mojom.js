// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'url/mojom/origin.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('url.mojom');
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }



  function Origin(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Origin.prototype.initDefaults_ = function() {
    this.scheme = null;
    this.host = null;
    this.port = 0;
    this.nonceIfOpaque = null;
  };
  Origin.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Origin.validate = function(messageValidator, offset) {
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


    // validate Origin.scheme
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Origin.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate Origin.nonceIfOpaque
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Origin.encodedSize = codec.kStructHeaderSize + 32;

  Origin.decode = function(decoder) {
    var packed;
    var val = new Origin();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scheme = decoder.decodeStruct(codec.String);
    val.host = decoder.decodeStruct(codec.String);
    val.port = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.nonceIfOpaque = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  Origin.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Origin.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.scheme);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeStruct(codec.Uint16, val.port);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.nonceIfOpaque);
  };
  exports.Origin = Origin;
})();