// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/mutable_partial_network_traffic_annotation_tag.mojom';
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



  function MutablePartialNetworkTrafficAnnotationTag(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MutablePartialNetworkTrafficAnnotationTag.prototype.initDefaults_ = function() {
    this.uniqueIdHashCode = 0;
    this.completingIdHashCode = 0;
  };
  MutablePartialNetworkTrafficAnnotationTag.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MutablePartialNetworkTrafficAnnotationTag.validate = function(messageValidator, offset) {
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

  MutablePartialNetworkTrafficAnnotationTag.encodedSize = codec.kStructHeaderSize + 8;

  MutablePartialNetworkTrafficAnnotationTag.decode = function(decoder) {
    var packed;
    var val = new MutablePartialNetworkTrafficAnnotationTag();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.uniqueIdHashCode = decoder.decodeStruct(codec.Uint32);
    val.completingIdHashCode = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  MutablePartialNetworkTrafficAnnotationTag.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MutablePartialNetworkTrafficAnnotationTag.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.uniqueIdHashCode);
    encoder.encodeStruct(codec.Uint32, val.completingIdHashCode);
  };
  exports.MutablePartialNetworkTrafficAnnotationTag = MutablePartialNetworkTrafficAnnotationTag;
})();