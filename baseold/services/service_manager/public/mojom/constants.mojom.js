// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/service_manager/public/mojom/constants.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('serviceManager.mojom');


  var kServiceName = "service_manager";
  var kSystemInstanceGroupHigh = 0xE90E5C501330C043;
  var kSystemInstanceGroupLow = 0x82B0A84F50CF8D84;

  function Constants_UnusedStruct_Internal(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Constants_UnusedStruct_Internal.prototype.initDefaults_ = function() {
  };
  Constants_UnusedStruct_Internal.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Constants_UnusedStruct_Internal.validate = function(messageValidator, offset) {
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

  Constants_UnusedStruct_Internal.encodedSize = codec.kStructHeaderSize + 0;

  Constants_UnusedStruct_Internal.decode = function(decoder) {
    var packed;
    var val = new Constants_UnusedStruct_Internal();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Constants_UnusedStruct_Internal.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Constants_UnusedStruct_Internal.encodedSize);
    encoder.writeUint32(0);
  };
  exports.kServiceName = kServiceName;
  exports.kSystemInstanceGroupHigh = kSystemInstanceGroupHigh;
  exports.kSystemInstanceGroupLow = kSystemInstanceGroupLow;
  exports.Constants_UnusedStruct_Internal = Constants_UnusedStruct_Internal;
})();