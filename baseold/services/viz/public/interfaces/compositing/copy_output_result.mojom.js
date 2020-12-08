// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/interfaces/compositing/copy_output_result.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('viz.mojom');
  var mailbox$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/mailbox.mojom', '../../../../../gpu/ipc/common/mailbox.mojom.js');
  }
  var sync_token$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/sync_token.mojom', '../../../../../gpu/ipc/common/sync_token.mojom.js');
  }
  var texture_releaser$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/interfaces/compositing/texture_releaser.mojom', 'texture_releaser.mojom.js');
  }
  var bitmap$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/interfaces/bitmap.mojom', '../../../../../skia/public/interfaces/bitmap.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var color_space$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/color_space.mojom', '../../../../../ui/gfx/mojo/color_space.mojom.js');
  }


  var CopyOutputResultFormat = {};
  CopyOutputResultFormat.RGBA_BITMAP = 0;
  CopyOutputResultFormat.RGBA_TEXTURE = CopyOutputResultFormat.RGBA_BITMAP + 1;
  CopyOutputResultFormat.MIN_VALUE = 0,
  CopyOutputResultFormat.MAX_VALUE = 1,

  CopyOutputResultFormat.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  CopyOutputResultFormat.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function CopyOutputResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CopyOutputResult.prototype.initDefaults_ = function() {
    this.format = 0;
    this.rect = null;
    this.bitmap = null;
    this.mailbox = null;
    this.syncToken = null;
    this.colorSpace = null;
    this.releaser = new texture_releaser$.TextureReleaserPtr();
  };
  CopyOutputResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CopyOutputResult.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 64}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CopyOutputResult.format
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CopyOutputResultFormat);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CopyOutputResult.rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CopyOutputResult.bitmap
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, bitmap$.Bitmap, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CopyOutputResult.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, mailbox$.Mailbox, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CopyOutputResult.syncToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, sync_token$.SyncToken, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CopyOutputResult.colorSpace
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, color_space$.ColorSpace, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CopyOutputResult.releaser
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 48, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CopyOutputResult.encodedSize = codec.kStructHeaderSize + 56;

  CopyOutputResult.decode = function(decoder) {
    var packed;
    var val = new CopyOutputResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.format = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.rect = decoder.decodeStructPointer(geometry$.Rect);
    val.bitmap = decoder.decodeStructPointer(bitmap$.Bitmap);
    val.mailbox = decoder.decodeStructPointer(mailbox$.Mailbox);
    val.syncToken = decoder.decodeStructPointer(sync_token$.SyncToken);
    val.colorSpace = decoder.decodeStructPointer(color_space$.ColorSpace);
    val.releaser = decoder.decodeStruct(new codec.NullableInterface(texture_releaser$.TextureReleaserPtr));
    return val;
  };

  CopyOutputResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CopyOutputResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.format);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Rect, val.rect);
    encoder.encodeStructPointer(bitmap$.Bitmap, val.bitmap);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
    encoder.encodeStructPointer(sync_token$.SyncToken, val.syncToken);
    encoder.encodeStructPointer(color_space$.ColorSpace, val.colorSpace);
    encoder.encodeStruct(new codec.NullableInterface(texture_releaser$.TextureReleaserPtr), val.releaser);
  };
  exports.CopyOutputResultFormat = CopyOutputResultFormat;
  exports.CopyOutputResult = CopyOutputResult;
})();