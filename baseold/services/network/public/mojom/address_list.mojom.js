// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/address_list.mojom';
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



  function AddressList(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AddressList.prototype.initDefaults_ = function() {
    this.addresses = null;
    this.canonicalName = null;
  };
  AddressList.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AddressList.validate = function(messageValidator, offset) {
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


    // validate AddressList.addresses
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ip_endpoint$.IPEndPoint), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressList.canonicalName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AddressList.encodedSize = codec.kStructHeaderSize + 16;

  AddressList.decode = function(decoder) {
    var packed;
    var val = new AddressList();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.addresses = decoder.decodeArrayPointer(new codec.PointerTo(ip_endpoint$.IPEndPoint));
    val.canonicalName = decoder.decodeStruct(codec.String);
    return val;
  };

  AddressList.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AddressList.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ip_endpoint$.IPEndPoint), val.addresses);
    encoder.encodeStruct(codec.String, val.canonicalName);
  };
  exports.AddressList = AddressList;
})();