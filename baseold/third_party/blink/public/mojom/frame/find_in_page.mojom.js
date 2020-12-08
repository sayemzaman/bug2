// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/find_in_page.mojom';
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
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }


  var StopFindAction = {};
  StopFindAction.kStopFindActionClearSelection = 0;
  StopFindAction.kStopFindActionKeepSelection = StopFindAction.kStopFindActionClearSelection + 1;
  StopFindAction.kStopFindActionActivateSelection = StopFindAction.kStopFindActionKeepSelection + 1;
  StopFindAction.MIN_VALUE = 0,
  StopFindAction.MAX_VALUE = 2,

  StopFindAction.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  StopFindAction.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FindMatchUpdateType = {};
  FindMatchUpdateType.kFinalUpdate = 0;
  FindMatchUpdateType.kMoreUpdatesComing = FindMatchUpdateType.kFinalUpdate + 1;
  FindMatchUpdateType.MIN_VALUE = 0,
  FindMatchUpdateType.MAX_VALUE = 1,

  FindMatchUpdateType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  FindMatchUpdateType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function FindOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindOptions.prototype.initDefaults_ = function() {
    this.forward = true;
    this.matchCase = false;
    this.findNext = false;
    this.force = false;
    this.runSynchronouslyForTesting = false;
  };
  FindOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindOptions.validate = function(messageValidator, offset) {
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

  FindOptions.encodedSize = codec.kStructHeaderSize + 8;

  FindOptions.decode = function(decoder) {
    var packed;
    var val = new FindOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.forward = (packed >> 0) & 1 ? true : false;
    val.matchCase = (packed >> 1) & 1 ? true : false;
    val.findNext = (packed >> 2) & 1 ? true : false;
    val.force = (packed >> 3) & 1 ? true : false;
    val.runSynchronouslyForTesting = (packed >> 4) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FindOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindOptions.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.forward & 1) << 0
    packed |= (val.matchCase & 1) << 1
    packed |= (val.findNext & 1) << 2
    packed |= (val.force & 1) << 3
    packed |= (val.runSynchronouslyForTesting & 1) << 4
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FindInPage_Find_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPage_Find_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
    this.searchText = null;
    this.options = null;
  };
  FindInPage_Find_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPage_Find_Params.validate = function(messageValidator, offset) {
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



    // validate FindInPage_Find_Params.searchText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FindInPage_Find_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, FindOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FindInPage_Find_Params.encodedSize = codec.kStructHeaderSize + 24;

  FindInPage_Find_Params.decode = function(decoder) {
    var packed;
    var val = new FindInPage_Find_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.searchText = decoder.decodeStruct(codec.String);
    val.options = decoder.decodeStructPointer(FindOptions);
    return val;
  };

  FindInPage_Find_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPage_Find_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.requestId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.searchText);
    encoder.encodeStructPointer(FindOptions, val.options);
  };
  function FindInPage_StopFinding_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPage_StopFinding_Params.prototype.initDefaults_ = function() {
    this.action = 0;
  };
  FindInPage_StopFinding_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPage_StopFinding_Params.validate = function(messageValidator, offset) {
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


    // validate FindInPage_StopFinding_Params.action
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, StopFindAction);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FindInPage_StopFinding_Params.encodedSize = codec.kStructHeaderSize + 8;

  FindInPage_StopFinding_Params.decode = function(decoder) {
    var packed;
    var val = new FindInPage_StopFinding_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FindInPage_StopFinding_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPage_StopFinding_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.action);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FindInPage_ClearActiveFindMatch_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPage_ClearActiveFindMatch_Params.prototype.initDefaults_ = function() {
  };
  FindInPage_ClearActiveFindMatch_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPage_ClearActiveFindMatch_Params.validate = function(messageValidator, offset) {
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

  FindInPage_ClearActiveFindMatch_Params.encodedSize = codec.kStructHeaderSize + 0;

  FindInPage_ClearActiveFindMatch_Params.decode = function(decoder) {
    var packed;
    var val = new FindInPage_ClearActiveFindMatch_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FindInPage_ClearActiveFindMatch_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPage_ClearActiveFindMatch_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function FindInPage_GetNearestFindResult_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPage_GetNearestFindResult_Params.prototype.initDefaults_ = function() {
    this.point = null;
  };
  FindInPage_GetNearestFindResult_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPage_GetNearestFindResult_Params.validate = function(messageValidator, offset) {
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


    // validate FindInPage_GetNearestFindResult_Params.point
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FindInPage_GetNearestFindResult_Params.encodedSize = codec.kStructHeaderSize + 8;

  FindInPage_GetNearestFindResult_Params.decode = function(decoder) {
    var packed;
    var val = new FindInPage_GetNearestFindResult_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.point = decoder.decodeStructPointer(geometry$.PointF);
    return val;
  };

  FindInPage_GetNearestFindResult_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPage_GetNearestFindResult_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.PointF, val.point);
  };
  function FindInPage_GetNearestFindResult_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPage_GetNearestFindResult_ResponseParams.prototype.initDefaults_ = function() {
    this.distance = 0;
  };
  FindInPage_GetNearestFindResult_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPage_GetNearestFindResult_ResponseParams.validate = function(messageValidator, offset) {
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

  FindInPage_GetNearestFindResult_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FindInPage_GetNearestFindResult_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FindInPage_GetNearestFindResult_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.distance = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FindInPage_GetNearestFindResult_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPage_GetNearestFindResult_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.distance);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FindInPage_ActivateNearestFindResult_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPage_ActivateNearestFindResult_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
    this.point = null;
  };
  FindInPage_ActivateNearestFindResult_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPage_ActivateNearestFindResult_Params.validate = function(messageValidator, offset) {
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



    // validate FindInPage_ActivateNearestFindResult_Params.point
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FindInPage_ActivateNearestFindResult_Params.encodedSize = codec.kStructHeaderSize + 16;

  FindInPage_ActivateNearestFindResult_Params.decode = function(decoder) {
    var packed;
    var val = new FindInPage_ActivateNearestFindResult_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.point = decoder.decodeStructPointer(geometry$.PointF);
    return val;
  };

  FindInPage_ActivateNearestFindResult_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPage_ActivateNearestFindResult_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.requestId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.PointF, val.point);
  };
  function FindInPage_SetClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPage_SetClient_Params.prototype.initDefaults_ = function() {
    this.client = new FindInPageClientPtr();
  };
  FindInPage_SetClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPage_SetClient_Params.validate = function(messageValidator, offset) {
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


    // validate FindInPage_SetClient_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FindInPage_SetClient_Params.encodedSize = codec.kStructHeaderSize + 8;

  FindInPage_SetClient_Params.decode = function(decoder) {
    var packed;
    var val = new FindInPage_SetClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(new codec.Interface(FindInPageClientPtr));
    return val;
  };

  FindInPage_SetClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPage_SetClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(FindInPageClientPtr), val.client);
  };
  function FindInPage_FindMatchRects_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPage_FindMatchRects_Params.prototype.initDefaults_ = function() {
    this.currentVersion = 0;
  };
  FindInPage_FindMatchRects_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPage_FindMatchRects_Params.validate = function(messageValidator, offset) {
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

  FindInPage_FindMatchRects_Params.encodedSize = codec.kStructHeaderSize + 8;

  FindInPage_FindMatchRects_Params.decode = function(decoder) {
    var packed;
    var val = new FindInPage_FindMatchRects_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.currentVersion = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FindInPage_FindMatchRects_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPage_FindMatchRects_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.currentVersion);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FindInPage_FindMatchRects_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPage_FindMatchRects_ResponseParams.prototype.initDefaults_ = function() {
    this.version = 0;
    this.rects = null;
    this.activeMatchRect = null;
  };
  FindInPage_FindMatchRects_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPage_FindMatchRects_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate FindInPage_FindMatchRects_ResponseParams.rects
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(geometry$.RectF), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FindInPage_FindMatchRects_ResponseParams.activeMatchRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FindInPage_FindMatchRects_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  FindInPage_FindMatchRects_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FindInPage_FindMatchRects_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.version = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.rects = decoder.decodeArrayPointer(new codec.PointerTo(geometry$.RectF));
    val.activeMatchRect = decoder.decodeStructPointer(geometry$.RectF);
    return val;
  };

  FindInPage_FindMatchRects_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPage_FindMatchRects_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.version);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.RectF), val.rects);
    encoder.encodeStructPointer(geometry$.RectF, val.activeMatchRect);
  };
  function FindInPageClient_SetNumberOfMatches_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPageClient_SetNumberOfMatches_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
    this.numberOfMatches = 0;
    this.updateType = 0;
  };
  FindInPageClient_SetNumberOfMatches_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPageClient_SetNumberOfMatches_Params.validate = function(messageValidator, offset) {
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




    // validate FindInPageClient_SetNumberOfMatches_Params.updateType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, FindMatchUpdateType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FindInPageClient_SetNumberOfMatches_Params.encodedSize = codec.kStructHeaderSize + 16;

  FindInPageClient_SetNumberOfMatches_Params.decode = function(decoder) {
    var packed;
    var val = new FindInPageClient_SetNumberOfMatches_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStruct(codec.Int32);
    val.numberOfMatches = decoder.decodeStruct(codec.Uint32);
    val.updateType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FindInPageClient_SetNumberOfMatches_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPageClient_SetNumberOfMatches_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.requestId);
    encoder.encodeStruct(codec.Uint32, val.numberOfMatches);
    encoder.encodeStruct(codec.Int32, val.updateType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FindInPageClient_SetActiveMatch_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FindInPageClient_SetActiveMatch_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
    this.activeMatchOrdinal = 0;
    this.activeMatchRect = null;
    this.updateType = 0;
  };
  FindInPageClient_SetActiveMatch_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FindInPageClient_SetActiveMatch_Params.validate = function(messageValidator, offset) {
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



    // validate FindInPageClient_SetActiveMatch_Params.activeMatchRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FindInPageClient_SetActiveMatch_Params.updateType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, FindMatchUpdateType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FindInPageClient_SetActiveMatch_Params.encodedSize = codec.kStructHeaderSize + 24;

  FindInPageClient_SetActiveMatch_Params.decode = function(decoder) {
    var packed;
    var val = new FindInPageClient_SetActiveMatch_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStruct(codec.Int32);
    val.activeMatchOrdinal = decoder.decodeStruct(codec.Int32);
    val.activeMatchRect = decoder.decodeStructPointer(geometry$.Rect);
    val.updateType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FindInPageClient_SetActiveMatch_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FindInPageClient_SetActiveMatch_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.requestId);
    encoder.encodeStruct(codec.Int32, val.activeMatchOrdinal);
    encoder.encodeStructPointer(geometry$.Rect, val.activeMatchRect);
    encoder.encodeStruct(codec.Int32, val.updateType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kFindInPage_Find_Name = 0;
  var kFindInPage_StopFinding_Name = 1;
  var kFindInPage_ClearActiveFindMatch_Name = 2;
  var kFindInPage_GetNearestFindResult_Name = 3;
  var kFindInPage_ActivateNearestFindResult_Name = 4;
  var kFindInPage_SetClient_Name = 5;
  var kFindInPage_FindMatchRects_Name = 6;

  function FindInPagePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FindInPage,
                                                   handleOrPtrInfo);
  }

  function FindInPageAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FindInPage, associatedInterfacePtrInfo);
  }

  FindInPageAssociatedPtr.prototype =
      Object.create(FindInPagePtr.prototype);
  FindInPageAssociatedPtr.prototype.constructor =
      FindInPageAssociatedPtr;

  function FindInPageProxy(receiver) {
    this.receiver_ = receiver;
  }
  FindInPagePtr.prototype.find = function() {
    return FindInPageProxy.prototype.find
        .apply(this.ptr.getProxy(), arguments);
  };

  FindInPageProxy.prototype.find = function(requestId, searchText, options) {
    var params_ = new FindInPage_Find_Params();
    params_.requestId = requestId;
    params_.searchText = searchText;
    params_.options = options;
    var builder = new codec.MessageV0Builder(
        kFindInPage_Find_Name,
        codec.align(FindInPage_Find_Params.encodedSize));
    builder.encodeStruct(FindInPage_Find_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FindInPagePtr.prototype.stopFinding = function() {
    return FindInPageProxy.prototype.stopFinding
        .apply(this.ptr.getProxy(), arguments);
  };

  FindInPageProxy.prototype.stopFinding = function(action) {
    var params_ = new FindInPage_StopFinding_Params();
    params_.action = action;
    var builder = new codec.MessageV0Builder(
        kFindInPage_StopFinding_Name,
        codec.align(FindInPage_StopFinding_Params.encodedSize));
    builder.encodeStruct(FindInPage_StopFinding_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FindInPagePtr.prototype.clearActiveFindMatch = function() {
    return FindInPageProxy.prototype.clearActiveFindMatch
        .apply(this.ptr.getProxy(), arguments);
  };

  FindInPageProxy.prototype.clearActiveFindMatch = function() {
    var params_ = new FindInPage_ClearActiveFindMatch_Params();
    var builder = new codec.MessageV0Builder(
        kFindInPage_ClearActiveFindMatch_Name,
        codec.align(FindInPage_ClearActiveFindMatch_Params.encodedSize));
    builder.encodeStruct(FindInPage_ClearActiveFindMatch_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FindInPagePtr.prototype.getNearestFindResult = function() {
    return FindInPageProxy.prototype.getNearestFindResult
        .apply(this.ptr.getProxy(), arguments);
  };

  FindInPageProxy.prototype.getNearestFindResult = function(point) {
    var params_ = new FindInPage_GetNearestFindResult_Params();
    params_.point = point;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFindInPage_GetNearestFindResult_Name,
          codec.align(FindInPage_GetNearestFindResult_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FindInPage_GetNearestFindResult_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FindInPage_GetNearestFindResult_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FindInPagePtr.prototype.activateNearestFindResult = function() {
    return FindInPageProxy.prototype.activateNearestFindResult
        .apply(this.ptr.getProxy(), arguments);
  };

  FindInPageProxy.prototype.activateNearestFindResult = function(requestId, point) {
    var params_ = new FindInPage_ActivateNearestFindResult_Params();
    params_.requestId = requestId;
    params_.point = point;
    var builder = new codec.MessageV0Builder(
        kFindInPage_ActivateNearestFindResult_Name,
        codec.align(FindInPage_ActivateNearestFindResult_Params.encodedSize));
    builder.encodeStruct(FindInPage_ActivateNearestFindResult_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FindInPagePtr.prototype.setClient = function() {
    return FindInPageProxy.prototype.setClient
        .apply(this.ptr.getProxy(), arguments);
  };

  FindInPageProxy.prototype.setClient = function(client) {
    var params_ = new FindInPage_SetClient_Params();
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kFindInPage_SetClient_Name,
        codec.align(FindInPage_SetClient_Params.encodedSize));
    builder.encodeStruct(FindInPage_SetClient_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FindInPagePtr.prototype.findMatchRects = function() {
    return FindInPageProxy.prototype.findMatchRects
        .apply(this.ptr.getProxy(), arguments);
  };

  FindInPageProxy.prototype.findMatchRects = function(currentVersion) {
    var params_ = new FindInPage_FindMatchRects_Params();
    params_.currentVersion = currentVersion;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFindInPage_FindMatchRects_Name,
          codec.align(FindInPage_FindMatchRects_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FindInPage_FindMatchRects_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FindInPage_FindMatchRects_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FindInPageStub(delegate) {
    this.delegate_ = delegate;
  }
  FindInPageStub.prototype.find = function(requestId, searchText, options) {
    return this.delegate_ && this.delegate_.find && this.delegate_.find(requestId, searchText, options);
  }
  FindInPageStub.prototype.stopFinding = function(action) {
    return this.delegate_ && this.delegate_.stopFinding && this.delegate_.stopFinding(action);
  }
  FindInPageStub.prototype.clearActiveFindMatch = function() {
    return this.delegate_ && this.delegate_.clearActiveFindMatch && this.delegate_.clearActiveFindMatch();
  }
  FindInPageStub.prototype.getNearestFindResult = function(point) {
    return this.delegate_ && this.delegate_.getNearestFindResult && this.delegate_.getNearestFindResult(point);
  }
  FindInPageStub.prototype.activateNearestFindResult = function(requestId, point) {
    return this.delegate_ && this.delegate_.activateNearestFindResult && this.delegate_.activateNearestFindResult(requestId, point);
  }
  FindInPageStub.prototype.setClient = function(client) {
    return this.delegate_ && this.delegate_.setClient && this.delegate_.setClient(client);
  }
  FindInPageStub.prototype.findMatchRects = function(currentVersion) {
    return this.delegate_ && this.delegate_.findMatchRects && this.delegate_.findMatchRects(currentVersion);
  }

  FindInPageStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFindInPage_Find_Name:
      var params = reader.decodeStruct(FindInPage_Find_Params);
      this.find(params.requestId, params.searchText, params.options);
      return true;
    case kFindInPage_StopFinding_Name:
      var params = reader.decodeStruct(FindInPage_StopFinding_Params);
      this.stopFinding(params.action);
      return true;
    case kFindInPage_ClearActiveFindMatch_Name:
      var params = reader.decodeStruct(FindInPage_ClearActiveFindMatch_Params);
      this.clearActiveFindMatch();
      return true;
    case kFindInPage_ActivateNearestFindResult_Name:
      var params = reader.decodeStruct(FindInPage_ActivateNearestFindResult_Params);
      this.activateNearestFindResult(params.requestId, params.point);
      return true;
    case kFindInPage_SetClient_Name:
      var params = reader.decodeStruct(FindInPage_SetClient_Params);
      this.setClient(params.client);
      return true;
    default:
      return false;
    }
  };

  FindInPageStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFindInPage_GetNearestFindResult_Name:
      var params = reader.decodeStruct(FindInPage_GetNearestFindResult_Params);
      this.getNearestFindResult(params.point).then(function(response) {
        var responseParams =
            new FindInPage_GetNearestFindResult_ResponseParams();
        responseParams.distance = response.distance;
        var builder = new codec.MessageV1Builder(
            kFindInPage_GetNearestFindResult_Name,
            codec.align(FindInPage_GetNearestFindResult_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FindInPage_GetNearestFindResult_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFindInPage_FindMatchRects_Name:
      var params = reader.decodeStruct(FindInPage_FindMatchRects_Params);
      this.findMatchRects(params.currentVersion).then(function(response) {
        var responseParams =
            new FindInPage_FindMatchRects_ResponseParams();
        responseParams.version = response.version;
        responseParams.rects = response.rects;
        responseParams.activeMatchRect = response.activeMatchRect;
        var builder = new codec.MessageV1Builder(
            kFindInPage_FindMatchRects_Name,
            codec.align(FindInPage_FindMatchRects_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FindInPage_FindMatchRects_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFindInPageRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFindInPage_Find_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FindInPage_Find_Params;
      break;
      case kFindInPage_StopFinding_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FindInPage_StopFinding_Params;
      break;
      case kFindInPage_ClearActiveFindMatch_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FindInPage_ClearActiveFindMatch_Params;
      break;
      case kFindInPage_GetNearestFindResult_Name:
        if (message.expectsResponse())
          paramsClass = FindInPage_GetNearestFindResult_Params;
      break;
      case kFindInPage_ActivateNearestFindResult_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FindInPage_ActivateNearestFindResult_Params;
      break;
      case kFindInPage_SetClient_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FindInPage_SetClient_Params;
      break;
      case kFindInPage_FindMatchRects_Name:
        if (message.expectsResponse())
          paramsClass = FindInPage_FindMatchRects_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFindInPageResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFindInPage_GetNearestFindResult_Name:
        if (message.isResponse())
          paramsClass = FindInPage_GetNearestFindResult_ResponseParams;
        break;
      case kFindInPage_FindMatchRects_Name:
        if (message.isResponse())
          paramsClass = FindInPage_FindMatchRects_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FindInPage = {
    name: 'blink.mojom.FindInPage',
    kVersion: 0,
    ptrClass: FindInPagePtr,
    proxyClass: FindInPageProxy,
    stubClass: FindInPageStub,
    validateRequest: validateFindInPageRequest,
    validateResponse: validateFindInPageResponse,
  };
  FindInPageStub.prototype.validator = validateFindInPageRequest;
  FindInPageProxy.prototype.validator = validateFindInPageResponse;
  var kFindInPageClient_SetNumberOfMatches_Name = 0;
  var kFindInPageClient_SetActiveMatch_Name = 1;

  function FindInPageClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FindInPageClient,
                                                   handleOrPtrInfo);
  }

  function FindInPageClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FindInPageClient, associatedInterfacePtrInfo);
  }

  FindInPageClientAssociatedPtr.prototype =
      Object.create(FindInPageClientPtr.prototype);
  FindInPageClientAssociatedPtr.prototype.constructor =
      FindInPageClientAssociatedPtr;

  function FindInPageClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  FindInPageClientPtr.prototype.setNumberOfMatches = function() {
    return FindInPageClientProxy.prototype.setNumberOfMatches
        .apply(this.ptr.getProxy(), arguments);
  };

  FindInPageClientProxy.prototype.setNumberOfMatches = function(requestId, numberOfMatches, updateType) {
    var params_ = new FindInPageClient_SetNumberOfMatches_Params();
    params_.requestId = requestId;
    params_.numberOfMatches = numberOfMatches;
    params_.updateType = updateType;
    var builder = new codec.MessageV0Builder(
        kFindInPageClient_SetNumberOfMatches_Name,
        codec.align(FindInPageClient_SetNumberOfMatches_Params.encodedSize));
    builder.encodeStruct(FindInPageClient_SetNumberOfMatches_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FindInPageClientPtr.prototype.setActiveMatch = function() {
    return FindInPageClientProxy.prototype.setActiveMatch
        .apply(this.ptr.getProxy(), arguments);
  };

  FindInPageClientProxy.prototype.setActiveMatch = function(requestId, activeMatchRect, activeMatchOrdinal, updateType) {
    var params_ = new FindInPageClient_SetActiveMatch_Params();
    params_.requestId = requestId;
    params_.activeMatchRect = activeMatchRect;
    params_.activeMatchOrdinal = activeMatchOrdinal;
    params_.updateType = updateType;
    var builder = new codec.MessageV0Builder(
        kFindInPageClient_SetActiveMatch_Name,
        codec.align(FindInPageClient_SetActiveMatch_Params.encodedSize));
    builder.encodeStruct(FindInPageClient_SetActiveMatch_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function FindInPageClientStub(delegate) {
    this.delegate_ = delegate;
  }
  FindInPageClientStub.prototype.setNumberOfMatches = function(requestId, numberOfMatches, updateType) {
    return this.delegate_ && this.delegate_.setNumberOfMatches && this.delegate_.setNumberOfMatches(requestId, numberOfMatches, updateType);
  }
  FindInPageClientStub.prototype.setActiveMatch = function(requestId, activeMatchRect, activeMatchOrdinal, updateType) {
    return this.delegate_ && this.delegate_.setActiveMatch && this.delegate_.setActiveMatch(requestId, activeMatchRect, activeMatchOrdinal, updateType);
  }

  FindInPageClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFindInPageClient_SetNumberOfMatches_Name:
      var params = reader.decodeStruct(FindInPageClient_SetNumberOfMatches_Params);
      this.setNumberOfMatches(params.requestId, params.numberOfMatches, params.updateType);
      return true;
    case kFindInPageClient_SetActiveMatch_Name:
      var params = reader.decodeStruct(FindInPageClient_SetActiveMatch_Params);
      this.setActiveMatch(params.requestId, params.activeMatchRect, params.activeMatchOrdinal, params.updateType);
      return true;
    default:
      return false;
    }
  };

  FindInPageClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateFindInPageClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFindInPageClient_SetNumberOfMatches_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FindInPageClient_SetNumberOfMatches_Params;
      break;
      case kFindInPageClient_SetActiveMatch_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FindInPageClient_SetActiveMatch_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFindInPageClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var FindInPageClient = {
    name: 'blink.mojom.FindInPageClient',
    kVersion: 0,
    ptrClass: FindInPageClientPtr,
    proxyClass: FindInPageClientProxy,
    stubClass: FindInPageClientStub,
    validateRequest: validateFindInPageClientRequest,
    validateResponse: null,
  };
  FindInPageClientStub.prototype.validator = validateFindInPageClientRequest;
  FindInPageClientProxy.prototype.validator = null;
  exports.StopFindAction = StopFindAction;
  exports.FindMatchUpdateType = FindMatchUpdateType;
  exports.FindOptions = FindOptions;
  exports.FindInPage = FindInPage;
  exports.FindInPagePtr = FindInPagePtr;
  exports.FindInPageAssociatedPtr = FindInPageAssociatedPtr;
  exports.FindInPageClient = FindInPageClient;
  exports.FindInPageClientPtr = FindInPageClientPtr;
  exports.FindInPageClientAssociatedPtr = FindInPageClientAssociatedPtr;
})();