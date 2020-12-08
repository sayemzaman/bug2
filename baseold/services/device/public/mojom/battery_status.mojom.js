// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/battery_status.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');



  function BatteryStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BatteryStatus.prototype.initDefaults_ = function() {
    this.charging = true;
    this.chargingTime = 0.0;
    this.dischargingTime = Infinity;
    this.level = 1.0;
  };
  BatteryStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BatteryStatus.validate = function(messageValidator, offset) {
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





    return validator.validationError.NONE;
  };

  BatteryStatus.encodedSize = codec.kStructHeaderSize + 32;

  BatteryStatus.decode = function(decoder) {
    var packed;
    var val = new BatteryStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.charging = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.chargingTime = decoder.decodeStruct(codec.Double);
    val.dischargingTime = decoder.decodeStruct(codec.Double);
    val.level = decoder.decodeStruct(codec.Double);
    return val;
  };

  BatteryStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BatteryStatus.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.charging & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Double, val.chargingTime);
    encoder.encodeStruct(codec.Double, val.dischargingTime);
    encoder.encodeStruct(codec.Double, val.level);
  };
  exports.BatteryStatus = BatteryStatus;
})();