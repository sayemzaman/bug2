// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/installedapp/related_application.mojom';
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



  function RelatedApplication(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RelatedApplication.prototype.initDefaults_ = function() {
    this.platform = null;
    this.url = null;
    this.id = null;
  };
  RelatedApplication.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RelatedApplication.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RelatedApplication.platform
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RelatedApplication.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RelatedApplication.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RelatedApplication.encodedSize = codec.kStructHeaderSize + 24;

  RelatedApplication.decode = function(decoder) {
    var packed;
    var val = new RelatedApplication();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.platform = decoder.decodeStruct(codec.String);
    val.url = decoder.decodeStruct(codec.NullableString);
    val.id = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  RelatedApplication.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RelatedApplication.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.platform);
    encoder.encodeStruct(codec.NullableString, val.url);
    encoder.encodeStruct(codec.NullableString, val.id);
  };
  exports.RelatedApplication = RelatedApplication;
})();