// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/common/media_router/mojo/media_router.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mediaRouter.mojom');
  var media_controller$ =
      mojo.internal.exposeNamespace('mediaRouter.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'chrome/common/media_router/mojo/media_controller.mojom', 'media_controller.mojom.js');
  }
  var media_status$ =
      mojo.internal.exposeNamespace('mediaRouter.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'chrome/common/media_router/mojo/media_status.mojom', 'media_status.mojom.js');
  }
  var mirroring_service_host$ =
      mojo.internal.exposeNamespace('mirroring.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/mirroring/mojom/mirroring_service_host.mojom', '../../../../components/mirroring/mojom/mirroring_service_host.mojom.js');
  }
  var mirror_service_remoting$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/interfaces/mirror_service_remoting.mojom', '../../../../media/mojo/interfaces/mirror_service_remoting.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var ip_address$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address.mojom', '../../../../services/network/public/mojom/ip_address.mojom.js');
  }
  var ip_endpoint$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_endpoint.mojom', '../../../../services/network/public/mojom/ip_endpoint.mojom.js');
  }
  var presentation$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/presentation/presentation.mojom', '../../../../third_party/blink/public/mojom/presentation/presentation.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }


  var SinkIconType = {};
  SinkIconType.CAST = 0;
  SinkIconType.CAST_AUDIO_GROUP = SinkIconType.CAST + 1;
  SinkIconType.CAST_AUDIO = SinkIconType.CAST_AUDIO_GROUP + 1;
  SinkIconType.MEETING = SinkIconType.CAST_AUDIO + 1;
  SinkIconType.HANGOUT = SinkIconType.MEETING + 1;
  SinkIconType.EDUCATION = SinkIconType.HANGOUT + 1;
  SinkIconType.WIRED_DISPLAY = SinkIconType.EDUCATION + 1;
  SinkIconType.GENERIC = SinkIconType.WIRED_DISPLAY + 1;
  SinkIconType.MIN_VALUE = 0,
  SinkIconType.MAX_VALUE = 7,

  SinkIconType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  SinkIconType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var RouteControllerType = {};
  RouteControllerType.kNone = 0;
  RouteControllerType.kGeneric = RouteControllerType.kNone + 1;
  RouteControllerType.kHangouts = RouteControllerType.kGeneric + 1;
  RouteControllerType.kMirroring = RouteControllerType.kHangouts + 1;
  RouteControllerType.MIN_VALUE = 0,
  RouteControllerType.MAX_VALUE = 3,

  RouteControllerType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  RouteControllerType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var RouteRequestResultCode = {};
  RouteRequestResultCode.UNKNOWN_ERROR = 0;
  RouteRequestResultCode.OK = RouteRequestResultCode.UNKNOWN_ERROR + 1;
  RouteRequestResultCode.TIMED_OUT = RouteRequestResultCode.OK + 1;
  RouteRequestResultCode.ROUTE_NOT_FOUND = RouteRequestResultCode.TIMED_OUT + 1;
  RouteRequestResultCode.SINK_NOT_FOUND = RouteRequestResultCode.ROUTE_NOT_FOUND + 1;
  RouteRequestResultCode.INVALID_ORIGIN = RouteRequestResultCode.SINK_NOT_FOUND + 1;
  RouteRequestResultCode.INCOGNITO_MISMATCH = RouteRequestResultCode.INVALID_ORIGIN + 1;
  RouteRequestResultCode.NO_SUPPORTED_PROVIDER = RouteRequestResultCode.INCOGNITO_MISMATCH + 1;
  RouteRequestResultCode.CANCELLED = RouteRequestResultCode.NO_SUPPORTED_PROVIDER + 1;
  RouteRequestResultCode.ROUTE_ALREADY_EXISTS = RouteRequestResultCode.CANCELLED + 1;
  RouteRequestResultCode.MIN_VALUE = 0,
  RouteRequestResultCode.MAX_VALUE = 9,

  RouteRequestResultCode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return true;
    }
    return false;
  };

  RouteRequestResultCode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function MediaSink(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSink.prototype.initDefaults_ = function() {
    this.sinkId = null;
    this.name = null;
    this.description = null;
    this.domain = null;
    this.iconType = 0;
    this.providerId = 0;
    this.extraData = null;
  };
  MediaSink.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSink.validate = function(messageValidator, offset) {
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


    // validate MediaSink.sinkId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaSink.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaSink.description
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaSink.domain
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaSink.iconType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 32, SinkIconType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaSink.providerId
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 36, MediaRouteProvider.Id);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaSink.extraData
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 40, MediaSinkExtraData, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSink.encodedSize = codec.kStructHeaderSize + 56;

  MediaSink.decode = function(decoder) {
    var packed;
    var val = new MediaSink();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sinkId = decoder.decodeStruct(codec.String);
    val.name = decoder.decodeStruct(codec.String);
    val.description = decoder.decodeStruct(codec.NullableString);
    val.domain = decoder.decodeStruct(codec.NullableString);
    val.iconType = decoder.decodeStruct(codec.Int32);
    val.providerId = decoder.decodeStruct(codec.Int32);
    val.extraData = decoder.decodeStruct(MediaSinkExtraData);
    return val;
  };

  MediaSink.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSink.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.sinkId);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.NullableString, val.description);
    encoder.encodeStruct(codec.NullableString, val.domain);
    encoder.encodeStruct(codec.Int32, val.iconType);
    encoder.encodeStruct(codec.Int32, val.providerId);
    encoder.encodeStruct(MediaSinkExtraData, val.extraData);
  };
  function DialMediaSink(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DialMediaSink.prototype.initDefaults_ = function() {
    this.ipAddress = null;
    this.modelName = null;
    this.appUrl = null;
  };
  DialMediaSink.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DialMediaSink.validate = function(messageValidator, offset) {
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


    // validate DialMediaSink.ipAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ip_address$.IPAddress, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DialMediaSink.modelName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DialMediaSink.appUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DialMediaSink.encodedSize = codec.kStructHeaderSize + 24;

  DialMediaSink.decode = function(decoder) {
    var packed;
    var val = new DialMediaSink();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ipAddress = decoder.decodeStructPointer(ip_address$.IPAddress);
    val.modelName = decoder.decodeStruct(codec.String);
    val.appUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  DialMediaSink.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DialMediaSink.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ip_address$.IPAddress, val.ipAddress);
    encoder.encodeStruct(codec.String, val.modelName);
    encoder.encodeStructPointer(url$.Url, val.appUrl);
  };
  function CastMediaSink(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CastMediaSink.prototype.initDefaults_ = function() {
    this.ipEndpoint = null;
    this.modelName = null;
    this.capabilities = 0;
    this.castChannelId = 0;
  };
  CastMediaSink.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CastMediaSink.validate = function(messageValidator, offset) {
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


    // validate CastMediaSink.ipEndpoint
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ip_endpoint$.IPEndPoint, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CastMediaSink.modelName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  CastMediaSink.encodedSize = codec.kStructHeaderSize + 24;

  CastMediaSink.decode = function(decoder) {
    var packed;
    var val = new CastMediaSink();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ipEndpoint = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.modelName = decoder.decodeStruct(codec.String);
    val.capabilities = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.castChannelId = decoder.decodeStruct(codec.Int32);
    return val;
  };

  CastMediaSink.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CastMediaSink.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.ipEndpoint);
    encoder.encodeStruct(codec.String, val.modelName);
    encoder.encodeStruct(codec.Uint8, val.capabilities);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.castChannelId);
  };
  function MediaRoute(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRoute.prototype.initDefaults_ = function() {
    this.mediaRouteId = null;
    this.presentationId = null;
    this.mediaSource = null;
    this.mediaSinkId = null;
    this.description = null;
    this.isLocal = false;
    this.forDisplay = false;
    this.isIncognito = false;
    this.isLocalPresentation = false;
    this.controllerType = 0;
  };
  MediaRoute.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRoute.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRoute.mediaRouteId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRoute.presentationId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRoute.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRoute.mediaSinkId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRoute.description
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate MediaRoute.controllerType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 44, RouteControllerType);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  MediaRoute.encodedSize = codec.kStructHeaderSize + 48;

  MediaRoute.decode = function(decoder) {
    var packed;
    var val = new MediaRoute();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaRouteId = decoder.decodeStruct(codec.String);
    val.presentationId = decoder.decodeStruct(codec.String);
    val.mediaSource = decoder.decodeStruct(codec.NullableString);
    val.mediaSinkId = decoder.decodeStruct(codec.String);
    val.description = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.isLocal = (packed >> 0) & 1 ? true : false;
    val.forDisplay = (packed >> 1) & 1 ? true : false;
    val.isIncognito = (packed >> 2) & 1 ? true : false;
    val.isLocalPresentation = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.controllerType = decoder.decodeStruct(codec.Int32);
    return val;
  };

  MediaRoute.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRoute.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaRouteId);
    encoder.encodeStruct(codec.String, val.presentationId);
    encoder.encodeStruct(codec.NullableString, val.mediaSource);
    encoder.encodeStruct(codec.String, val.mediaSinkId);
    encoder.encodeStruct(codec.String, val.description);
    packed = 0;
    packed |= (val.isLocal & 1) << 0
    packed |= (val.forDisplay & 1) << 1
    packed |= (val.isIncognito & 1) << 2
    packed |= (val.isLocalPresentation & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.controllerType);
  };
  function Issue(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  Issue.Severity = {};
  Issue.Severity.FATAL = 0;
  Issue.Severity.WARNING = Issue.Severity.FATAL + 1;
  Issue.Severity.NOTIFICATION = Issue.Severity.WARNING + 1;
  Issue.Severity.MIN_VALUE = 0,
  Issue.Severity.MAX_VALUE = 2,

  Issue.Severity.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  Issue.Severity.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  Issue.ActionType = {};
  Issue.ActionType.DISMISS = 0;
  Issue.ActionType.LEARN_MORE = Issue.ActionType.DISMISS + 1;
  Issue.ActionType.MIN_VALUE = 0,
  Issue.ActionType.MAX_VALUE = 1,

  Issue.ActionType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  Issue.ActionType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  Issue.prototype.initDefaults_ = function() {
    this.routeId = null;
    this.sinkId = null;
    this.severity = 0;
    this.isBlocking = false;
    this.title = null;
    this.message = null;
    this.defaultAction = 0;
    this.helpPageId = 0;
    this.secondaryActions = null;
  };
  Issue.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Issue.validate = function(messageValidator, offset) {
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


    // validate Issue.routeId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Issue.sinkId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Issue.severity
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, Issue.Severity);
    if (err !== validator.validationError.NONE)
        return err;



    // validate Issue.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Issue.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Issue.defaultAction
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 40, Issue.ActionType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Issue.secondaryActions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 4, new codec.Enum(Issue.ActionType), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Issue.encodedSize = codec.kStructHeaderSize + 56;

  Issue.decode = function(decoder) {
    var packed;
    var val = new Issue();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routeId = decoder.decodeStruct(codec.String);
    val.sinkId = decoder.decodeStruct(codec.String);
    val.severity = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.isBlocking = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.title = decoder.decodeStruct(codec.String);
    val.message = decoder.decodeStruct(codec.NullableString);
    val.defaultAction = decoder.decodeStruct(codec.Int32);
    val.helpPageId = decoder.decodeStruct(codec.Int32);
    val.secondaryActions = decoder.decodeArrayPointer(new codec.Enum(Issue.ActionType));
    return val;
  };

  Issue.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Issue.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.routeId);
    encoder.encodeStruct(codec.String, val.sinkId);
    encoder.encodeStruct(codec.Int32, val.severity);
    packed = 0;
    packed |= (val.isBlocking & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.title);
    encoder.encodeStruct(codec.NullableString, val.message);
    encoder.encodeStruct(codec.Int32, val.defaultAction);
    encoder.encodeStruct(codec.Int32, val.helpPageId);
    encoder.encodeArrayPointer(new codec.Enum(Issue.ActionType), val.secondaryActions);
  };
  function RouteMessage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  RouteMessage.Type = {};
  RouteMessage.Type.TEXT = 0;
  RouteMessage.Type.BINARY = RouteMessage.Type.TEXT + 1;
  RouteMessage.Type.MIN_VALUE = 0,
  RouteMessage.Type.MAX_VALUE = 1,

  RouteMessage.Type.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  RouteMessage.Type.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  RouteMessage.prototype.initDefaults_ = function() {
    this.type = 0;
    this.message = null;
    this.data = null;
  };
  RouteMessage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RouteMessage.validate = function(messageValidator, offset) {
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


    // validate RouteMessage.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, RouteMessage.Type);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RouteMessage.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RouteMessage.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RouteMessage.encodedSize = codec.kStructHeaderSize + 24;

  RouteMessage.decode = function(decoder) {
    var packed;
    var val = new RouteMessage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.message = decoder.decodeStruct(codec.NullableString);
    val.data = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  RouteMessage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RouteMessage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.message);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };
  function SinkSearchCriteria(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SinkSearchCriteria.prototype.initDefaults_ = function() {
    this.input = null;
    this.domain = null;
  };
  SinkSearchCriteria.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SinkSearchCriteria.validate = function(messageValidator, offset) {
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


    // validate SinkSearchCriteria.input
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SinkSearchCriteria.domain
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SinkSearchCriteria.encodedSize = codec.kStructHeaderSize + 16;

  SinkSearchCriteria.decode = function(decoder) {
    var packed;
    var val = new SinkSearchCriteria();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.input = decoder.decodeStruct(codec.String);
    val.domain = decoder.decodeStruct(codec.String);
    return val;
  };

  SinkSearchCriteria.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SinkSearchCriteria.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.input);
    encoder.encodeStruct(codec.String, val.domain);
  };
  function MediaRouteProviderConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProviderConfig.prototype.initDefaults_ = function() {
    this.enableDialDiscovery = false;
    this.enableCastDiscovery = false;
    this.enableDialSinkQuery = false;
    this.enableCastSinkQuery = false;
    this.useViewsDialog = false;
    this.useMirroringService = false;
  };
  MediaRouteProviderConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProviderConfig.validate = function(messageValidator, offset) {
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

  MediaRouteProviderConfig.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProviderConfig.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProviderConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.enableDialDiscovery = (packed >> 0) & 1 ? true : false;
    val.enableCastDiscovery = (packed >> 1) & 1 ? true : false;
    val.enableDialSinkQuery = (packed >> 2) & 1 ? true : false;
    val.enableCastSinkQuery = (packed >> 3) & 1 ? true : false;
    val.useViewsDialog = (packed >> 4) & 1 ? true : false;
    val.useMirroringService = (packed >> 5) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaRouteProviderConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProviderConfig.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.enableDialDiscovery & 1) << 0
    packed |= (val.enableCastDiscovery & 1) << 1
    packed |= (val.enableDialSinkQuery & 1) << 2
    packed |= (val.enableCastSinkQuery & 1) << 3
    packed |= (val.useViewsDialog & 1) << 4
    packed |= (val.useMirroringService & 1) << 5
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RoutePresentationConnection(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RoutePresentationConnection.prototype.initDefaults_ = function() {
    this.connectionPtr = new presentation$.PresentationConnectionPtr();
    this.connectionRequest = new bindings.InterfaceRequest();
  };
  RoutePresentationConnection.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RoutePresentationConnection.validate = function(messageValidator, offset) {
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


    // validate RoutePresentationConnection.connectionPtr
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RoutePresentationConnection.connectionRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RoutePresentationConnection.encodedSize = codec.kStructHeaderSize + 16;

  RoutePresentationConnection.decode = function(decoder) {
    var packed;
    var val = new RoutePresentationConnection();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.connectionPtr = decoder.decodeStruct(new codec.Interface(presentation$.PresentationConnectionPtr));
    val.connectionRequest = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RoutePresentationConnection.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RoutePresentationConnection.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(presentation$.PresentationConnectionPtr), val.connectionPtr);
    encoder.encodeStruct(codec.InterfaceRequest, val.connectionRequest);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaRouteProvider_CreateRoute_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_CreateRoute_Params.prototype.initDefaults_ = function() {
    this.mediaSource = null;
    this.sinkId = null;
    this.originalPresentationId = null;
    this.origin = null;
    this.tabId = 0;
    this.incognito = false;
    this.timeout = null;
  };
  MediaRouteProvider_CreateRoute_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_CreateRoute_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_CreateRoute_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_CreateRoute_Params.sinkId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_CreateRoute_Params.originalPresentationId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_CreateRoute_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate MediaRouteProvider_CreateRoute_Params.timeout
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  MediaRouteProvider_CreateRoute_Params.encodedSize = codec.kStructHeaderSize + 48;

  MediaRouteProvider_CreateRoute_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_CreateRoute_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaSource = decoder.decodeStruct(codec.String);
    val.sinkId = decoder.decodeStruct(codec.String);
    val.originalPresentationId = decoder.decodeStruct(codec.String);
    val.origin = decoder.decodeStructPointer(origin$.Origin);
    val.tabId = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.incognito = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.timeout = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  MediaRouteProvider_CreateRoute_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_CreateRoute_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaSource);
    encoder.encodeStruct(codec.String, val.sinkId);
    encoder.encodeStruct(codec.String, val.originalPresentationId);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStruct(codec.Int32, val.tabId);
    packed = 0;
    packed |= (val.incognito & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.TimeDelta, val.timeout);
  };
  function MediaRouteProvider_CreateRoute_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_CreateRoute_ResponseParams.prototype.initDefaults_ = function() {
    this.route = null;
    this.connection = null;
    this.errorText = null;
    this.resultCode = 0;
  };
  MediaRouteProvider_CreateRoute_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_CreateRoute_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_CreateRoute_ResponseParams.route
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaRoute, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_CreateRoute_ResponseParams.connection
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, RoutePresentationConnection, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_CreateRoute_ResponseParams.errorText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_CreateRoute_ResponseParams.resultCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, RouteRequestResultCode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_CreateRoute_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  MediaRouteProvider_CreateRoute_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_CreateRoute_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.route = decoder.decodeStructPointer(MediaRoute);
    val.connection = decoder.decodeStructPointer(RoutePresentationConnection);
    val.errorText = decoder.decodeStruct(codec.NullableString);
    val.resultCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaRouteProvider_CreateRoute_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_CreateRoute_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaRoute, val.route);
    encoder.encodeStructPointer(RoutePresentationConnection, val.connection);
    encoder.encodeStruct(codec.NullableString, val.errorText);
    encoder.encodeStruct(codec.Int32, val.resultCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaRouteProvider_JoinRoute_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_JoinRoute_Params.prototype.initDefaults_ = function() {
    this.mediaSource = null;
    this.presentationId = null;
    this.origin = null;
    this.tabId = 0;
    this.incognito = false;
    this.timeout = null;
  };
  MediaRouteProvider_JoinRoute_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_JoinRoute_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_JoinRoute_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_JoinRoute_Params.presentationId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_JoinRoute_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate MediaRouteProvider_JoinRoute_Params.timeout
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  MediaRouteProvider_JoinRoute_Params.encodedSize = codec.kStructHeaderSize + 40;

  MediaRouteProvider_JoinRoute_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_JoinRoute_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaSource = decoder.decodeStruct(codec.String);
    val.presentationId = decoder.decodeStruct(codec.String);
    val.origin = decoder.decodeStructPointer(origin$.Origin);
    val.tabId = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.incognito = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.timeout = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  MediaRouteProvider_JoinRoute_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_JoinRoute_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaSource);
    encoder.encodeStruct(codec.String, val.presentationId);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStruct(codec.Int32, val.tabId);
    packed = 0;
    packed |= (val.incognito & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.TimeDelta, val.timeout);
  };
  function MediaRouteProvider_JoinRoute_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_JoinRoute_ResponseParams.prototype.initDefaults_ = function() {
    this.route = null;
    this.connection = null;
    this.errorText = null;
    this.resultCode = 0;
  };
  MediaRouteProvider_JoinRoute_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_JoinRoute_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_JoinRoute_ResponseParams.route
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaRoute, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_JoinRoute_ResponseParams.connection
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, RoutePresentationConnection, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_JoinRoute_ResponseParams.errorText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_JoinRoute_ResponseParams.resultCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, RouteRequestResultCode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_JoinRoute_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  MediaRouteProvider_JoinRoute_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_JoinRoute_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.route = decoder.decodeStructPointer(MediaRoute);
    val.connection = decoder.decodeStructPointer(RoutePresentationConnection);
    val.errorText = decoder.decodeStruct(codec.NullableString);
    val.resultCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaRouteProvider_JoinRoute_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_JoinRoute_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaRoute, val.route);
    encoder.encodeStructPointer(RoutePresentationConnection, val.connection);
    encoder.encodeStruct(codec.NullableString, val.errorText);
    encoder.encodeStruct(codec.Int32, val.resultCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaRouteProvider_ConnectRouteByRouteId_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_ConnectRouteByRouteId_Params.prototype.initDefaults_ = function() {
    this.mediaSource = null;
    this.routeId = null;
    this.presentationId = null;
    this.origin = null;
    this.tabId = 0;
    this.incognito = false;
    this.timeout = null;
  };
  MediaRouteProvider_ConnectRouteByRouteId_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_ConnectRouteByRouteId_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_ConnectRouteByRouteId_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_ConnectRouteByRouteId_Params.routeId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_ConnectRouteByRouteId_Params.presentationId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_ConnectRouteByRouteId_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate MediaRouteProvider_ConnectRouteByRouteId_Params.timeout
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  MediaRouteProvider_ConnectRouteByRouteId_Params.encodedSize = codec.kStructHeaderSize + 48;

  MediaRouteProvider_ConnectRouteByRouteId_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_ConnectRouteByRouteId_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaSource = decoder.decodeStruct(codec.String);
    val.routeId = decoder.decodeStruct(codec.String);
    val.presentationId = decoder.decodeStruct(codec.String);
    val.origin = decoder.decodeStructPointer(origin$.Origin);
    val.tabId = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.incognito = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.timeout = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  MediaRouteProvider_ConnectRouteByRouteId_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_ConnectRouteByRouteId_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaSource);
    encoder.encodeStruct(codec.String, val.routeId);
    encoder.encodeStruct(codec.String, val.presentationId);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStruct(codec.Int32, val.tabId);
    packed = 0;
    packed |= (val.incognito & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.TimeDelta, val.timeout);
  };
  function MediaRouteProvider_ConnectRouteByRouteId_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.prototype.initDefaults_ = function() {
    this.route = null;
    this.connection = null;
    this.errorText = null;
    this.resultCode = 0;
  };
  MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.route
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaRoute, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.connection
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, RoutePresentationConnection, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.errorText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.resultCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, RouteRequestResultCode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_ConnectRouteByRouteId_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.route = decoder.decodeStructPointer(MediaRoute);
    val.connection = decoder.decodeStructPointer(RoutePresentationConnection);
    val.errorText = decoder.decodeStruct(codec.NullableString);
    val.resultCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaRoute, val.route);
    encoder.encodeStructPointer(RoutePresentationConnection, val.connection);
    encoder.encodeStruct(codec.NullableString, val.errorText);
    encoder.encodeStruct(codec.Int32, val.resultCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaRouteProvider_TerminateRoute_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_TerminateRoute_Params.prototype.initDefaults_ = function() {
    this.routeId = null;
  };
  MediaRouteProvider_TerminateRoute_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_TerminateRoute_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_TerminateRoute_Params.routeId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_TerminateRoute_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_TerminateRoute_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_TerminateRoute_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routeId = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_TerminateRoute_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_TerminateRoute_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.routeId);
  };
  function MediaRouteProvider_TerminateRoute_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_TerminateRoute_ResponseParams.prototype.initDefaults_ = function() {
    this.errorText = null;
    this.resultCode = 0;
  };
  MediaRouteProvider_TerminateRoute_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_TerminateRoute_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_TerminateRoute_ResponseParams.errorText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_TerminateRoute_ResponseParams.resultCode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, RouteRequestResultCode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_TerminateRoute_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  MediaRouteProvider_TerminateRoute_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_TerminateRoute_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorText = decoder.decodeStruct(codec.NullableString);
    val.resultCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaRouteProvider_TerminateRoute_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_TerminateRoute_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.errorText);
    encoder.encodeStruct(codec.Int32, val.resultCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaRouteProvider_SendRouteMessage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_SendRouteMessage_Params.prototype.initDefaults_ = function() {
    this.mediaRouteId = null;
    this.message = null;
  };
  MediaRouteProvider_SendRouteMessage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_SendRouteMessage_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_SendRouteMessage_Params.mediaRouteId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_SendRouteMessage_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_SendRouteMessage_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaRouteProvider_SendRouteMessage_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_SendRouteMessage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaRouteId = decoder.decodeStruct(codec.String);
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_SendRouteMessage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_SendRouteMessage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaRouteId);
    encoder.encodeStruct(codec.String, val.message);
  };
  function MediaRouteProvider_SendRouteBinaryMessage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_SendRouteBinaryMessage_Params.prototype.initDefaults_ = function() {
    this.mediaRouteId = null;
    this.data = null;
  };
  MediaRouteProvider_SendRouteBinaryMessage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_SendRouteBinaryMessage_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_SendRouteBinaryMessage_Params.mediaRouteId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_SendRouteBinaryMessage_Params.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_SendRouteBinaryMessage_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaRouteProvider_SendRouteBinaryMessage_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_SendRouteBinaryMessage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaRouteId = decoder.decodeStruct(codec.String);
    val.data = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  MediaRouteProvider_SendRouteBinaryMessage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_SendRouteBinaryMessage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaRouteId);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };
  function MediaRouteProvider_StartObservingMediaSinks_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_StartObservingMediaSinks_Params.prototype.initDefaults_ = function() {
    this.mediaSource = null;
  };
  MediaRouteProvider_StartObservingMediaSinks_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_StartObservingMediaSinks_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_StartObservingMediaSinks_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_StartObservingMediaSinks_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_StartObservingMediaSinks_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_StartObservingMediaSinks_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaSource = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_StartObservingMediaSinks_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_StartObservingMediaSinks_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaSource);
  };
  function MediaRouteProvider_StopObservingMediaSinks_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_StopObservingMediaSinks_Params.prototype.initDefaults_ = function() {
    this.mediaSource = null;
  };
  MediaRouteProvider_StopObservingMediaSinks_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_StopObservingMediaSinks_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_StopObservingMediaSinks_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_StopObservingMediaSinks_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_StopObservingMediaSinks_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_StopObservingMediaSinks_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaSource = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_StopObservingMediaSinks_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_StopObservingMediaSinks_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaSource);
  };
  function MediaRouteProvider_StartObservingMediaRoutes_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_StartObservingMediaRoutes_Params.prototype.initDefaults_ = function() {
    this.mediaSource = null;
  };
  MediaRouteProvider_StartObservingMediaRoutes_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_StartObservingMediaRoutes_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_StartObservingMediaRoutes_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_StartObservingMediaRoutes_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_StartObservingMediaRoutes_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_StartObservingMediaRoutes_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaSource = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_StartObservingMediaRoutes_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_StartObservingMediaRoutes_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaSource);
  };
  function MediaRouteProvider_StopObservingMediaRoutes_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_StopObservingMediaRoutes_Params.prototype.initDefaults_ = function() {
    this.mediaSource = null;
  };
  MediaRouteProvider_StopObservingMediaRoutes_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_StopObservingMediaRoutes_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_StopObservingMediaRoutes_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_StopObservingMediaRoutes_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_StopObservingMediaRoutes_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_StopObservingMediaRoutes_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaSource = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_StopObservingMediaRoutes_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_StopObservingMediaRoutes_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaSource);
  };
  function MediaRouteProvider_StartListeningForRouteMessages_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_StartListeningForRouteMessages_Params.prototype.initDefaults_ = function() {
    this.routeId = null;
  };
  MediaRouteProvider_StartListeningForRouteMessages_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_StartListeningForRouteMessages_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_StartListeningForRouteMessages_Params.routeId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_StartListeningForRouteMessages_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_StartListeningForRouteMessages_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_StartListeningForRouteMessages_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routeId = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_StartListeningForRouteMessages_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_StartListeningForRouteMessages_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.routeId);
  };
  function MediaRouteProvider_StopListeningForRouteMessages_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_StopListeningForRouteMessages_Params.prototype.initDefaults_ = function() {
    this.routeId = null;
  };
  MediaRouteProvider_StopListeningForRouteMessages_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_StopListeningForRouteMessages_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_StopListeningForRouteMessages_Params.routeId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_StopListeningForRouteMessages_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_StopListeningForRouteMessages_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_StopListeningForRouteMessages_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routeId = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_StopListeningForRouteMessages_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_StopListeningForRouteMessages_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.routeId);
  };
  function MediaRouteProvider_DetachRoute_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_DetachRoute_Params.prototype.initDefaults_ = function() {
    this.routeId = null;
  };
  MediaRouteProvider_DetachRoute_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_DetachRoute_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_DetachRoute_Params.routeId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_DetachRoute_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_DetachRoute_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_DetachRoute_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routeId = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_DetachRoute_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_DetachRoute_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.routeId);
  };
  function MediaRouteProvider_EnableMdnsDiscovery_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_EnableMdnsDiscovery_Params.prototype.initDefaults_ = function() {
  };
  MediaRouteProvider_EnableMdnsDiscovery_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_EnableMdnsDiscovery_Params.validate = function(messageValidator, offset) {
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

  MediaRouteProvider_EnableMdnsDiscovery_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaRouteProvider_EnableMdnsDiscovery_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_EnableMdnsDiscovery_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaRouteProvider_EnableMdnsDiscovery_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_EnableMdnsDiscovery_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaRouteProvider_UpdateMediaSinks_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_UpdateMediaSinks_Params.prototype.initDefaults_ = function() {
    this.mediaSource = null;
  };
  MediaRouteProvider_UpdateMediaSinks_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_UpdateMediaSinks_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_UpdateMediaSinks_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_UpdateMediaSinks_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_UpdateMediaSinks_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_UpdateMediaSinks_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mediaSource = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_UpdateMediaSinks_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_UpdateMediaSinks_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.mediaSource);
  };
  function MediaRouteProvider_SearchSinks_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_SearchSinks_Params.prototype.initDefaults_ = function() {
    this.sinkId = null;
    this.mediaSource = null;
    this.searchCriteria = null;
  };
  MediaRouteProvider_SearchSinks_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_SearchSinks_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_SearchSinks_Params.sinkId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_SearchSinks_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_SearchSinks_Params.searchCriteria
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, SinkSearchCriteria, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_SearchSinks_Params.encodedSize = codec.kStructHeaderSize + 24;

  MediaRouteProvider_SearchSinks_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_SearchSinks_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sinkId = decoder.decodeStruct(codec.String);
    val.mediaSource = decoder.decodeStruct(codec.String);
    val.searchCriteria = decoder.decodeStructPointer(SinkSearchCriteria);
    return val;
  };

  MediaRouteProvider_SearchSinks_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_SearchSinks_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.sinkId);
    encoder.encodeStruct(codec.String, val.mediaSource);
    encoder.encodeStructPointer(SinkSearchCriteria, val.searchCriteria);
  };
  function MediaRouteProvider_SearchSinks_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_SearchSinks_ResponseParams.prototype.initDefaults_ = function() {
    this.sinkId = null;
  };
  MediaRouteProvider_SearchSinks_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_SearchSinks_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_SearchSinks_ResponseParams.sinkId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_SearchSinks_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_SearchSinks_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_SearchSinks_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sinkId = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouteProvider_SearchSinks_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_SearchSinks_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.sinkId);
  };
  function MediaRouteProvider_ProvideSinks_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_ProvideSinks_Params.prototype.initDefaults_ = function() {
    this.providerName = null;
    this.sinks = null;
  };
  MediaRouteProvider_ProvideSinks_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_ProvideSinks_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_ProvideSinks_Params.providerName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_ProvideSinks_Params.sinks
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(MediaSink), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_ProvideSinks_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaRouteProvider_ProvideSinks_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_ProvideSinks_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.providerName = decoder.decodeStruct(codec.String);
    val.sinks = decoder.decodeArrayPointer(new codec.PointerTo(MediaSink));
    return val;
  };

  MediaRouteProvider_ProvideSinks_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_ProvideSinks_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.providerName);
    encoder.encodeArrayPointer(new codec.PointerTo(MediaSink), val.sinks);
  };
  function MediaRouteProvider_CreateMediaRouteController_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_CreateMediaRouteController_Params.prototype.initDefaults_ = function() {
    this.routeId = null;
    this.mediaController = new bindings.InterfaceRequest();
    this.observer = new media_status$.MediaStatusObserverPtr();
  };
  MediaRouteProvider_CreateMediaRouteController_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_CreateMediaRouteController_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouteProvider_CreateMediaRouteController_Params.routeId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_CreateMediaRouteController_Params.mediaController
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouteProvider_CreateMediaRouteController_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 12, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouteProvider_CreateMediaRouteController_Params.encodedSize = codec.kStructHeaderSize + 24;

  MediaRouteProvider_CreateMediaRouteController_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_CreateMediaRouteController_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routeId = decoder.decodeStruct(codec.String);
    val.mediaController = decoder.decodeStruct(codec.InterfaceRequest);
    val.observer = decoder.decodeStruct(new codec.Interface(media_status$.MediaStatusObserverPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaRouteProvider_CreateMediaRouteController_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_CreateMediaRouteController_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.routeId);
    encoder.encodeStruct(codec.InterfaceRequest, val.mediaController);
    encoder.encodeStruct(new codec.Interface(media_status$.MediaStatusObserverPtr), val.observer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaRouteProvider_CreateMediaRouteController_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouteProvider_CreateMediaRouteController_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  MediaRouteProvider_CreateMediaRouteController_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouteProvider_CreateMediaRouteController_ResponseParams.validate = function(messageValidator, offset) {
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

  MediaRouteProvider_CreateMediaRouteController_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouteProvider_CreateMediaRouteController_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaRouteProvider_CreateMediaRouteController_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaRouteProvider_CreateMediaRouteController_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouteProvider_CreateMediaRouteController_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaRouter_RegisterMediaRouteProvider_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_RegisterMediaRouteProvider_Params.prototype.initDefaults_ = function() {
    this.providerId = 0;
    this.mediaRouterProvider = new MediaRouteProviderPtr();
  };
  MediaRouter_RegisterMediaRouteProvider_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_RegisterMediaRouteProvider_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_RegisterMediaRouteProvider_Params.providerId
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaRouteProvider.Id);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_RegisterMediaRouteProvider_Params.mediaRouterProvider
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_RegisterMediaRouteProvider_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaRouter_RegisterMediaRouteProvider_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_RegisterMediaRouteProvider_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.providerId = decoder.decodeStruct(codec.Int32);
    val.mediaRouterProvider = decoder.decodeStruct(new codec.Interface(MediaRouteProviderPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaRouter_RegisterMediaRouteProvider_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_RegisterMediaRouteProvider_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.providerId);
    encoder.encodeStruct(new codec.Interface(MediaRouteProviderPtr), val.mediaRouterProvider);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaRouter_RegisterMediaRouteProvider_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_RegisterMediaRouteProvider_ResponseParams.prototype.initDefaults_ = function() {
    this.instanceId = null;
    this.config = null;
  };
  MediaRouter_RegisterMediaRouteProvider_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_RegisterMediaRouteProvider_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_RegisterMediaRouteProvider_ResponseParams.instanceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_RegisterMediaRouteProvider_ResponseParams.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, MediaRouteProviderConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_RegisterMediaRouteProvider_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  MediaRouter_RegisterMediaRouteProvider_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_RegisterMediaRouteProvider_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.instanceId = decoder.decodeStruct(codec.String);
    val.config = decoder.decodeStructPointer(MediaRouteProviderConfig);
    return val;
  };

  MediaRouter_RegisterMediaRouteProvider_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_RegisterMediaRouteProvider_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.instanceId);
    encoder.encodeStructPointer(MediaRouteProviderConfig, val.config);
  };
  function MediaRouter_OnSinksReceived_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_OnSinksReceived_Params.prototype.initDefaults_ = function() {
    this.providerId = 0;
    this.mediaSource = null;
    this.sinks = null;
    this.origins = null;
  };
  MediaRouter_OnSinksReceived_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_OnSinksReceived_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_OnSinksReceived_Params.providerId
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaRouteProvider.Id);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnSinksReceived_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnSinksReceived_Params.sinks
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(MediaSink), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnSinksReceived_Params.origins
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(origin$.Origin), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_OnSinksReceived_Params.encodedSize = codec.kStructHeaderSize + 32;

  MediaRouter_OnSinksReceived_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_OnSinksReceived_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.providerId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.mediaSource = decoder.decodeStruct(codec.String);
    val.sinks = decoder.decodeArrayPointer(new codec.PointerTo(MediaSink));
    val.origins = decoder.decodeArrayPointer(new codec.PointerTo(origin$.Origin));
    return val;
  };

  MediaRouter_OnSinksReceived_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_OnSinksReceived_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.providerId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.mediaSource);
    encoder.encodeArrayPointer(new codec.PointerTo(MediaSink), val.sinks);
    encoder.encodeArrayPointer(new codec.PointerTo(origin$.Origin), val.origins);
  };
  function MediaRouter_OnIssue_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_OnIssue_Params.prototype.initDefaults_ = function() {
    this.issue = null;
  };
  MediaRouter_OnIssue_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_OnIssue_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_OnIssue_Params.issue
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Issue, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_OnIssue_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouter_OnIssue_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_OnIssue_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.issue = decoder.decodeStructPointer(Issue);
    return val;
  };

  MediaRouter_OnIssue_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_OnIssue_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Issue, val.issue);
  };
  function MediaRouter_OnRoutesUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_OnRoutesUpdated_Params.prototype.initDefaults_ = function() {
    this.providerId = 0;
    this.routes = null;
    this.mediaSource = null;
    this.joinableRouteIds = null;
  };
  MediaRouter_OnRoutesUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_OnRoutesUpdated_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_OnRoutesUpdated_Params.providerId
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaRouteProvider.Id);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnRoutesUpdated_Params.routes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(MediaRoute), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnRoutesUpdated_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnRoutesUpdated_Params.joinableRouteIds
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_OnRoutesUpdated_Params.encodedSize = codec.kStructHeaderSize + 32;

  MediaRouter_OnRoutesUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_OnRoutesUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.providerId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.routes = decoder.decodeArrayPointer(new codec.PointerTo(MediaRoute));
    val.mediaSource = decoder.decodeStruct(codec.String);
    val.joinableRouteIds = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  MediaRouter_OnRoutesUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_OnRoutesUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.providerId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(MediaRoute), val.routes);
    encoder.encodeStruct(codec.String, val.mediaSource);
    encoder.encodeArrayPointer(codec.String, val.joinableRouteIds);
  };
  function MediaRouter_OnSinkAvailabilityUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_OnSinkAvailabilityUpdated_Params.prototype.initDefaults_ = function() {
    this.providerId = 0;
    this.availability = 0;
  };
  MediaRouter_OnSinkAvailabilityUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_OnSinkAvailabilityUpdated_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_OnSinkAvailabilityUpdated_Params.providerId
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MediaRouteProvider.Id);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnSinkAvailabilityUpdated_Params.availability
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, MediaRouter.SinkAvailability);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_OnSinkAvailabilityUpdated_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouter_OnSinkAvailabilityUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_OnSinkAvailabilityUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.providerId = decoder.decodeStruct(codec.Int32);
    val.availability = decoder.decodeStruct(codec.Int32);
    return val;
  };

  MediaRouter_OnSinkAvailabilityUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_OnSinkAvailabilityUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.providerId);
    encoder.encodeStruct(codec.Int32, val.availability);
  };
  function MediaRouter_OnPresentationConnectionStateChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_OnPresentationConnectionStateChanged_Params.prototype.initDefaults_ = function() {
    this.routeId = null;
    this.state = 0;
  };
  MediaRouter_OnPresentationConnectionStateChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_OnPresentationConnectionStateChanged_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_OnPresentationConnectionStateChanged_Params.routeId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnPresentationConnectionStateChanged_Params.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, MediaRouter.PresentationConnectionState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_OnPresentationConnectionStateChanged_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaRouter_OnPresentationConnectionStateChanged_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_OnPresentationConnectionStateChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routeId = decoder.decodeStruct(codec.String);
    val.state = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaRouter_OnPresentationConnectionStateChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_OnPresentationConnectionStateChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.routeId);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaRouter_OnPresentationConnectionClosed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_OnPresentationConnectionClosed_Params.prototype.initDefaults_ = function() {
    this.routeId = null;
    this.reason = 0;
    this.message = null;
  };
  MediaRouter_OnPresentationConnectionClosed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_OnPresentationConnectionClosed_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_OnPresentationConnectionClosed_Params.routeId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnPresentationConnectionClosed_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, MediaRouter.PresentationConnectionCloseReason);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnPresentationConnectionClosed_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_OnPresentationConnectionClosed_Params.encodedSize = codec.kStructHeaderSize + 24;

  MediaRouter_OnPresentationConnectionClosed_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_OnPresentationConnectionClosed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routeId = decoder.decodeStruct(codec.String);
    val.reason = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouter_OnPresentationConnectionClosed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_OnPresentationConnectionClosed_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.routeId);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.message);
  };
  function MediaRouter_OnRouteMessagesReceived_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_OnRouteMessagesReceived_Params.prototype.initDefaults_ = function() {
    this.routeId = null;
    this.messages = null;
  };
  MediaRouter_OnRouteMessagesReceived_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_OnRouteMessagesReceived_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_OnRouteMessagesReceived_Params.routeId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnRouteMessagesReceived_Params.messages
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(RouteMessage), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_OnRouteMessagesReceived_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaRouter_OnRouteMessagesReceived_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_OnRouteMessagesReceived_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routeId = decoder.decodeStruct(codec.String);
    val.messages = decoder.decodeArrayPointer(new codec.PointerTo(RouteMessage));
    return val;
  };

  MediaRouter_OnRouteMessagesReceived_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_OnRouteMessagesReceived_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.routeId);
    encoder.encodeArrayPointer(new codec.PointerTo(RouteMessage), val.messages);
  };
  function MediaRouter_OnMediaRemoterCreated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_OnMediaRemoterCreated_Params.prototype.initDefaults_ = function() {
    this.tabId = 0;
    this.remoter = new mirror_service_remoting$.MirrorServiceRemoterPtr();
    this.remotingSource = new bindings.InterfaceRequest();
  };
  MediaRouter_OnMediaRemoterCreated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_OnMediaRemoterCreated_Params.validate = function(messageValidator, offset) {
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



    // validate MediaRouter_OnMediaRemoterCreated_Params.remoter
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_OnMediaRemoterCreated_Params.remotingSource
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 12, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_OnMediaRemoterCreated_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaRouter_OnMediaRemoterCreated_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_OnMediaRemoterCreated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tabId = decoder.decodeStruct(codec.Int32);
    val.remoter = decoder.decodeStruct(new codec.Interface(mirror_service_remoting$.MirrorServiceRemoterPtr));
    val.remotingSource = decoder.decodeStruct(codec.InterfaceRequest);
    return val;
  };

  MediaRouter_OnMediaRemoterCreated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_OnMediaRemoterCreated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.tabId);
    encoder.encodeStruct(new codec.Interface(mirror_service_remoting$.MirrorServiceRemoterPtr), val.remoter);
    encoder.encodeStruct(codec.InterfaceRequest, val.remotingSource);
  };
  function MediaRouter_GetMediaSinkServiceStatus_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_GetMediaSinkServiceStatus_Params.prototype.initDefaults_ = function() {
  };
  MediaRouter_GetMediaSinkServiceStatus_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_GetMediaSinkServiceStatus_Params.validate = function(messageValidator, offset) {
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

  MediaRouter_GetMediaSinkServiceStatus_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaRouter_GetMediaSinkServiceStatus_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_GetMediaSinkServiceStatus_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaRouter_GetMediaSinkServiceStatus_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_GetMediaSinkServiceStatus_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaRouter_GetMediaSinkServiceStatus_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_GetMediaSinkServiceStatus_ResponseParams.prototype.initDefaults_ = function() {
    this.status = null;
  };
  MediaRouter_GetMediaSinkServiceStatus_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_GetMediaSinkServiceStatus_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_GetMediaSinkServiceStatus_ResponseParams.status
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_GetMediaSinkServiceStatus_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouter_GetMediaSinkServiceStatus_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_GetMediaSinkServiceStatus_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouter_GetMediaSinkServiceStatus_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_GetMediaSinkServiceStatus_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.status);
  };
  function MediaRouter_GetMirroringServiceHostForTab_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_GetMirroringServiceHostForTab_Params.prototype.initDefaults_ = function() {
    this.targetTabId = 0;
    this.request = new bindings.InterfaceRequest();
  };
  MediaRouter_GetMirroringServiceHostForTab_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_GetMirroringServiceHostForTab_Params.validate = function(messageValidator, offset) {
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



    // validate MediaRouter_GetMirroringServiceHostForTab_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_GetMirroringServiceHostForTab_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaRouter_GetMirroringServiceHostForTab_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_GetMirroringServiceHostForTab_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.targetTabId = decoder.decodeStruct(codec.Int32);
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    return val;
  };

  MediaRouter_GetMirroringServiceHostForTab_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_GetMirroringServiceHostForTab_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.targetTabId);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
  };
  function MediaRouter_GetMirroringServiceHostForDesktop_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_GetMirroringServiceHostForDesktop_Params.prototype.initDefaults_ = function() {
    this.initiatorTabId = 0;
    this.request = new bindings.InterfaceRequest();
    this.desktopStreamId = null;
  };
  MediaRouter_GetMirroringServiceHostForDesktop_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_GetMirroringServiceHostForDesktop_Params.validate = function(messageValidator, offset) {
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



    // validate MediaRouter_GetMirroringServiceHostForDesktop_Params.desktopStreamId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_GetMirroringServiceHostForDesktop_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_GetMirroringServiceHostForDesktop_Params.encodedSize = codec.kStructHeaderSize + 16;

  MediaRouter_GetMirroringServiceHostForDesktop_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_GetMirroringServiceHostForDesktop_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.initiatorTabId = decoder.decodeStruct(codec.Int32);
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    val.desktopStreamId = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaRouter_GetMirroringServiceHostForDesktop_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_GetMirroringServiceHostForDesktop_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.initiatorTabId);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.encodeStruct(codec.String, val.desktopStreamId);
  };
  function MediaRouter_GetMirroringServiceHostForOffscreenTab_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.prototype.initDefaults_ = function() {
    this.presentationUrl = null;
    this.presentationId = null;
    this.request = new bindings.InterfaceRequest();
  };
  MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.validate = function(messageValidator, offset) {
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


    // validate MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.presentationUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.presentationId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.encodedSize = codec.kStructHeaderSize + 24;

  MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.decode = function(decoder) {
    var packed;
    var val = new MediaRouter_GetMirroringServiceHostForOffscreenTab_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.presentationUrl = decoder.decodeStructPointer(url$.Url);
    val.presentationId = decoder.decodeStruct(codec.String);
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.presentationUrl);
    encoder.encodeStruct(codec.String, val.presentationId);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function MediaSinkExtraData(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  MediaSinkExtraData.Tags = {
    dialMediaSink: 0,
    castMediaSink: 1,
  };

  MediaSinkExtraData.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  MediaSinkExtraData.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "dialMediaSink",
        "castMediaSink",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a MediaSinkExtraData member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(MediaSinkExtraData.prototype, "dialMediaSink", {
    get: function() {
      if (this.$tag != MediaSinkExtraData.Tags.dialMediaSink) {
        throw new ReferenceError(
            "MediaSinkExtraData.dialMediaSink is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = MediaSinkExtraData.Tags.dialMediaSink;
      this.$data = value;
    }
  });
  Object.defineProperty(MediaSinkExtraData.prototype, "castMediaSink", {
    get: function() {
      if (this.$tag != MediaSinkExtraData.Tags.castMediaSink) {
        throw new ReferenceError(
            "MediaSinkExtraData.castMediaSink is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = MediaSinkExtraData.Tags.castMediaSink;
      this.$data = value;
    }
  });


    MediaSinkExtraData.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case MediaSinkExtraData.Tags.dialMediaSink:
          encoder.encodeStructPointer(DialMediaSink, val.dialMediaSink);
          break;
        case MediaSinkExtraData.Tags.castMediaSink:
          encoder.encodeStructPointer(CastMediaSink, val.castMediaSink);
          break;
      }
      encoder.align();
    };


    MediaSinkExtraData.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new MediaSinkExtraData();
      var tag = decoder.readUint32();
      switch (tag) {
        case MediaSinkExtraData.Tags.dialMediaSink:
          result.dialMediaSink = decoder.decodeStructPointer(DialMediaSink);
          break;
        case MediaSinkExtraData.Tags.castMediaSink:
          result.castMediaSink = decoder.decodeStructPointer(CastMediaSink);
          break;
      }
      decoder.align();

      return result;
    };


    MediaSinkExtraData.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case MediaSinkExtraData.Tags.dialMediaSink:
          

    // validate MediaSinkExtraData.dialMediaSink
    err = messageValidator.validateStructPointer(data_offset, DialMediaSink, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case MediaSinkExtraData.Tags.castMediaSink:
          

    // validate MediaSinkExtraData.castMediaSink
    err = messageValidator.validateStructPointer(data_offset, CastMediaSink, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  MediaSinkExtraData.encodedSize = 16;
  var kMediaRouteProvider_CreateRoute_Name = 0;
  var kMediaRouteProvider_JoinRoute_Name = 1;
  var kMediaRouteProvider_ConnectRouteByRouteId_Name = 2;
  var kMediaRouteProvider_TerminateRoute_Name = 3;
  var kMediaRouteProvider_SendRouteMessage_Name = 4;
  var kMediaRouteProvider_SendRouteBinaryMessage_Name = 5;
  var kMediaRouteProvider_StartObservingMediaSinks_Name = 6;
  var kMediaRouteProvider_StopObservingMediaSinks_Name = 7;
  var kMediaRouteProvider_StartObservingMediaRoutes_Name = 8;
  var kMediaRouteProvider_StopObservingMediaRoutes_Name = 9;
  var kMediaRouteProvider_StartListeningForRouteMessages_Name = 10;
  var kMediaRouteProvider_StopListeningForRouteMessages_Name = 11;
  var kMediaRouteProvider_DetachRoute_Name = 12;
  var kMediaRouteProvider_EnableMdnsDiscovery_Name = 13;
  var kMediaRouteProvider_UpdateMediaSinks_Name = 14;
  var kMediaRouteProvider_SearchSinks_Name = 15;
  var kMediaRouteProvider_ProvideSinks_Name = 16;
  var kMediaRouteProvider_CreateMediaRouteController_Name = 17;

  function MediaRouteProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaRouteProvider,
                                                   handleOrPtrInfo);
  }

  function MediaRouteProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaRouteProvider, associatedInterfacePtrInfo);
  }

  MediaRouteProviderAssociatedPtr.prototype =
      Object.create(MediaRouteProviderPtr.prototype);
  MediaRouteProviderAssociatedPtr.prototype.constructor =
      MediaRouteProviderAssociatedPtr;

  function MediaRouteProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaRouteProviderPtr.prototype.createRoute = function() {
    return MediaRouteProviderProxy.prototype.createRoute
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.createRoute = function(mediaSource, sinkId, originalPresentationId, origin, tabId, timeout, incognito) {
    var params_ = new MediaRouteProvider_CreateRoute_Params();
    params_.mediaSource = mediaSource;
    params_.sinkId = sinkId;
    params_.originalPresentationId = originalPresentationId;
    params_.origin = origin;
    params_.tabId = tabId;
    params_.timeout = timeout;
    params_.incognito = incognito;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaRouteProvider_CreateRoute_Name,
          codec.align(MediaRouteProvider_CreateRoute_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaRouteProvider_CreateRoute_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaRouteProvider_CreateRoute_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaRouteProviderPtr.prototype.joinRoute = function() {
    return MediaRouteProviderProxy.prototype.joinRoute
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.joinRoute = function(mediaSource, presentationId, origin, tabId, timeout, incognito) {
    var params_ = new MediaRouteProvider_JoinRoute_Params();
    params_.mediaSource = mediaSource;
    params_.presentationId = presentationId;
    params_.origin = origin;
    params_.tabId = tabId;
    params_.timeout = timeout;
    params_.incognito = incognito;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaRouteProvider_JoinRoute_Name,
          codec.align(MediaRouteProvider_JoinRoute_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaRouteProvider_JoinRoute_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaRouteProvider_JoinRoute_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaRouteProviderPtr.prototype.connectRouteByRouteId = function() {
    return MediaRouteProviderProxy.prototype.connectRouteByRouteId
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.connectRouteByRouteId = function(mediaSource, routeId, presentationId, origin, tabId, timeout, incognito) {
    var params_ = new MediaRouteProvider_ConnectRouteByRouteId_Params();
    params_.mediaSource = mediaSource;
    params_.routeId = routeId;
    params_.presentationId = presentationId;
    params_.origin = origin;
    params_.tabId = tabId;
    params_.timeout = timeout;
    params_.incognito = incognito;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaRouteProvider_ConnectRouteByRouteId_Name,
          codec.align(MediaRouteProvider_ConnectRouteByRouteId_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaRouteProvider_ConnectRouteByRouteId_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaRouteProvider_ConnectRouteByRouteId_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaRouteProviderPtr.prototype.terminateRoute = function() {
    return MediaRouteProviderProxy.prototype.terminateRoute
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.terminateRoute = function(routeId) {
    var params_ = new MediaRouteProvider_TerminateRoute_Params();
    params_.routeId = routeId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaRouteProvider_TerminateRoute_Name,
          codec.align(MediaRouteProvider_TerminateRoute_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaRouteProvider_TerminateRoute_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaRouteProvider_TerminateRoute_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaRouteProviderPtr.prototype.sendRouteMessage = function() {
    return MediaRouteProviderProxy.prototype.sendRouteMessage
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.sendRouteMessage = function(mediaRouteId, message) {
    var params_ = new MediaRouteProvider_SendRouteMessage_Params();
    params_.mediaRouteId = mediaRouteId;
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_SendRouteMessage_Name,
        codec.align(MediaRouteProvider_SendRouteMessage_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_SendRouteMessage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.sendRouteBinaryMessage = function() {
    return MediaRouteProviderProxy.prototype.sendRouteBinaryMessage
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.sendRouteBinaryMessage = function(mediaRouteId, data) {
    var params_ = new MediaRouteProvider_SendRouteBinaryMessage_Params();
    params_.mediaRouteId = mediaRouteId;
    params_.data = data;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_SendRouteBinaryMessage_Name,
        codec.align(MediaRouteProvider_SendRouteBinaryMessage_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_SendRouteBinaryMessage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.startObservingMediaSinks = function() {
    return MediaRouteProviderProxy.prototype.startObservingMediaSinks
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.startObservingMediaSinks = function(mediaSource) {
    var params_ = new MediaRouteProvider_StartObservingMediaSinks_Params();
    params_.mediaSource = mediaSource;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_StartObservingMediaSinks_Name,
        codec.align(MediaRouteProvider_StartObservingMediaSinks_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_StartObservingMediaSinks_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.stopObservingMediaSinks = function() {
    return MediaRouteProviderProxy.prototype.stopObservingMediaSinks
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.stopObservingMediaSinks = function(mediaSource) {
    var params_ = new MediaRouteProvider_StopObservingMediaSinks_Params();
    params_.mediaSource = mediaSource;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_StopObservingMediaSinks_Name,
        codec.align(MediaRouteProvider_StopObservingMediaSinks_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_StopObservingMediaSinks_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.startObservingMediaRoutes = function() {
    return MediaRouteProviderProxy.prototype.startObservingMediaRoutes
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.startObservingMediaRoutes = function(mediaSource) {
    var params_ = new MediaRouteProvider_StartObservingMediaRoutes_Params();
    params_.mediaSource = mediaSource;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_StartObservingMediaRoutes_Name,
        codec.align(MediaRouteProvider_StartObservingMediaRoutes_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_StartObservingMediaRoutes_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.stopObservingMediaRoutes = function() {
    return MediaRouteProviderProxy.prototype.stopObservingMediaRoutes
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.stopObservingMediaRoutes = function(mediaSource) {
    var params_ = new MediaRouteProvider_StopObservingMediaRoutes_Params();
    params_.mediaSource = mediaSource;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_StopObservingMediaRoutes_Name,
        codec.align(MediaRouteProvider_StopObservingMediaRoutes_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_StopObservingMediaRoutes_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.startListeningForRouteMessages = function() {
    return MediaRouteProviderProxy.prototype.startListeningForRouteMessages
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.startListeningForRouteMessages = function(routeId) {
    var params_ = new MediaRouteProvider_StartListeningForRouteMessages_Params();
    params_.routeId = routeId;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_StartListeningForRouteMessages_Name,
        codec.align(MediaRouteProvider_StartListeningForRouteMessages_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_StartListeningForRouteMessages_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.stopListeningForRouteMessages = function() {
    return MediaRouteProviderProxy.prototype.stopListeningForRouteMessages
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.stopListeningForRouteMessages = function(routeId) {
    var params_ = new MediaRouteProvider_StopListeningForRouteMessages_Params();
    params_.routeId = routeId;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_StopListeningForRouteMessages_Name,
        codec.align(MediaRouteProvider_StopListeningForRouteMessages_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_StopListeningForRouteMessages_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.detachRoute = function() {
    return MediaRouteProviderProxy.prototype.detachRoute
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.detachRoute = function(routeId) {
    var params_ = new MediaRouteProvider_DetachRoute_Params();
    params_.routeId = routeId;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_DetachRoute_Name,
        codec.align(MediaRouteProvider_DetachRoute_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_DetachRoute_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.enableMdnsDiscovery = function() {
    return MediaRouteProviderProxy.prototype.enableMdnsDiscovery
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.enableMdnsDiscovery = function() {
    var params_ = new MediaRouteProvider_EnableMdnsDiscovery_Params();
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_EnableMdnsDiscovery_Name,
        codec.align(MediaRouteProvider_EnableMdnsDiscovery_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_EnableMdnsDiscovery_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.updateMediaSinks = function() {
    return MediaRouteProviderProxy.prototype.updateMediaSinks
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.updateMediaSinks = function(mediaSource) {
    var params_ = new MediaRouteProvider_UpdateMediaSinks_Params();
    params_.mediaSource = mediaSource;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_UpdateMediaSinks_Name,
        codec.align(MediaRouteProvider_UpdateMediaSinks_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_UpdateMediaSinks_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.searchSinks = function() {
    return MediaRouteProviderProxy.prototype.searchSinks
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.searchSinks = function(sinkId, mediaSource, searchCriteria) {
    var params_ = new MediaRouteProvider_SearchSinks_Params();
    params_.sinkId = sinkId;
    params_.mediaSource = mediaSource;
    params_.searchCriteria = searchCriteria;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaRouteProvider_SearchSinks_Name,
          codec.align(MediaRouteProvider_SearchSinks_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaRouteProvider_SearchSinks_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaRouteProvider_SearchSinks_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaRouteProviderPtr.prototype.provideSinks = function() {
    return MediaRouteProviderProxy.prototype.provideSinks
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.provideSinks = function(providerName, sinks) {
    var params_ = new MediaRouteProvider_ProvideSinks_Params();
    params_.providerName = providerName;
    params_.sinks = sinks;
    var builder = new codec.MessageV0Builder(
        kMediaRouteProvider_ProvideSinks_Name,
        codec.align(MediaRouteProvider_ProvideSinks_Params.encodedSize));
    builder.encodeStruct(MediaRouteProvider_ProvideSinks_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouteProviderPtr.prototype.createMediaRouteController = function() {
    return MediaRouteProviderProxy.prototype.createMediaRouteController
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouteProviderProxy.prototype.createMediaRouteController = function(routeId, mediaController, observer) {
    var params_ = new MediaRouteProvider_CreateMediaRouteController_Params();
    params_.routeId = routeId;
    params_.mediaController = mediaController;
    params_.observer = observer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaRouteProvider_CreateMediaRouteController_Name,
          codec.align(MediaRouteProvider_CreateMediaRouteController_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaRouteProvider_CreateMediaRouteController_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaRouteProvider_CreateMediaRouteController_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function MediaRouteProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaRouteProviderStub.prototype.createRoute = function(mediaSource, sinkId, originalPresentationId, origin, tabId, timeout, incognito) {
    return this.delegate_ && this.delegate_.createRoute && this.delegate_.createRoute(mediaSource, sinkId, originalPresentationId, origin, tabId, timeout, incognito);
  }
  MediaRouteProviderStub.prototype.joinRoute = function(mediaSource, presentationId, origin, tabId, timeout, incognito) {
    return this.delegate_ && this.delegate_.joinRoute && this.delegate_.joinRoute(mediaSource, presentationId, origin, tabId, timeout, incognito);
  }
  MediaRouteProviderStub.prototype.connectRouteByRouteId = function(mediaSource, routeId, presentationId, origin, tabId, timeout, incognito) {
    return this.delegate_ && this.delegate_.connectRouteByRouteId && this.delegate_.connectRouteByRouteId(mediaSource, routeId, presentationId, origin, tabId, timeout, incognito);
  }
  MediaRouteProviderStub.prototype.terminateRoute = function(routeId) {
    return this.delegate_ && this.delegate_.terminateRoute && this.delegate_.terminateRoute(routeId);
  }
  MediaRouteProviderStub.prototype.sendRouteMessage = function(mediaRouteId, message) {
    return this.delegate_ && this.delegate_.sendRouteMessage && this.delegate_.sendRouteMessage(mediaRouteId, message);
  }
  MediaRouteProviderStub.prototype.sendRouteBinaryMessage = function(mediaRouteId, data) {
    return this.delegate_ && this.delegate_.sendRouteBinaryMessage && this.delegate_.sendRouteBinaryMessage(mediaRouteId, data);
  }
  MediaRouteProviderStub.prototype.startObservingMediaSinks = function(mediaSource) {
    return this.delegate_ && this.delegate_.startObservingMediaSinks && this.delegate_.startObservingMediaSinks(mediaSource);
  }
  MediaRouteProviderStub.prototype.stopObservingMediaSinks = function(mediaSource) {
    return this.delegate_ && this.delegate_.stopObservingMediaSinks && this.delegate_.stopObservingMediaSinks(mediaSource);
  }
  MediaRouteProviderStub.prototype.startObservingMediaRoutes = function(mediaSource) {
    return this.delegate_ && this.delegate_.startObservingMediaRoutes && this.delegate_.startObservingMediaRoutes(mediaSource);
  }
  MediaRouteProviderStub.prototype.stopObservingMediaRoutes = function(mediaSource) {
    return this.delegate_ && this.delegate_.stopObservingMediaRoutes && this.delegate_.stopObservingMediaRoutes(mediaSource);
  }
  MediaRouteProviderStub.prototype.startListeningForRouteMessages = function(routeId) {
    return this.delegate_ && this.delegate_.startListeningForRouteMessages && this.delegate_.startListeningForRouteMessages(routeId);
  }
  MediaRouteProviderStub.prototype.stopListeningForRouteMessages = function(routeId) {
    return this.delegate_ && this.delegate_.stopListeningForRouteMessages && this.delegate_.stopListeningForRouteMessages(routeId);
  }
  MediaRouteProviderStub.prototype.detachRoute = function(routeId) {
    return this.delegate_ && this.delegate_.detachRoute && this.delegate_.detachRoute(routeId);
  }
  MediaRouteProviderStub.prototype.enableMdnsDiscovery = function() {
    return this.delegate_ && this.delegate_.enableMdnsDiscovery && this.delegate_.enableMdnsDiscovery();
  }
  MediaRouteProviderStub.prototype.updateMediaSinks = function(mediaSource) {
    return this.delegate_ && this.delegate_.updateMediaSinks && this.delegate_.updateMediaSinks(mediaSource);
  }
  MediaRouteProviderStub.prototype.searchSinks = function(sinkId, mediaSource, searchCriteria) {
    return this.delegate_ && this.delegate_.searchSinks && this.delegate_.searchSinks(sinkId, mediaSource, searchCriteria);
  }
  MediaRouteProviderStub.prototype.provideSinks = function(providerName, sinks) {
    return this.delegate_ && this.delegate_.provideSinks && this.delegate_.provideSinks(providerName, sinks);
  }
  MediaRouteProviderStub.prototype.createMediaRouteController = function(routeId, mediaController, observer) {
    return this.delegate_ && this.delegate_.createMediaRouteController && this.delegate_.createMediaRouteController(routeId, mediaController, observer);
  }

  MediaRouteProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaRouteProvider_SendRouteMessage_Name:
      var params = reader.decodeStruct(MediaRouteProvider_SendRouteMessage_Params);
      this.sendRouteMessage(params.mediaRouteId, params.message);
      return true;
    case kMediaRouteProvider_SendRouteBinaryMessage_Name:
      var params = reader.decodeStruct(MediaRouteProvider_SendRouteBinaryMessage_Params);
      this.sendRouteBinaryMessage(params.mediaRouteId, params.data);
      return true;
    case kMediaRouteProvider_StartObservingMediaSinks_Name:
      var params = reader.decodeStruct(MediaRouteProvider_StartObservingMediaSinks_Params);
      this.startObservingMediaSinks(params.mediaSource);
      return true;
    case kMediaRouteProvider_StopObservingMediaSinks_Name:
      var params = reader.decodeStruct(MediaRouteProvider_StopObservingMediaSinks_Params);
      this.stopObservingMediaSinks(params.mediaSource);
      return true;
    case kMediaRouteProvider_StartObservingMediaRoutes_Name:
      var params = reader.decodeStruct(MediaRouteProvider_StartObservingMediaRoutes_Params);
      this.startObservingMediaRoutes(params.mediaSource);
      return true;
    case kMediaRouteProvider_StopObservingMediaRoutes_Name:
      var params = reader.decodeStruct(MediaRouteProvider_StopObservingMediaRoutes_Params);
      this.stopObservingMediaRoutes(params.mediaSource);
      return true;
    case kMediaRouteProvider_StartListeningForRouteMessages_Name:
      var params = reader.decodeStruct(MediaRouteProvider_StartListeningForRouteMessages_Params);
      this.startListeningForRouteMessages(params.routeId);
      return true;
    case kMediaRouteProvider_StopListeningForRouteMessages_Name:
      var params = reader.decodeStruct(MediaRouteProvider_StopListeningForRouteMessages_Params);
      this.stopListeningForRouteMessages(params.routeId);
      return true;
    case kMediaRouteProvider_DetachRoute_Name:
      var params = reader.decodeStruct(MediaRouteProvider_DetachRoute_Params);
      this.detachRoute(params.routeId);
      return true;
    case kMediaRouteProvider_EnableMdnsDiscovery_Name:
      var params = reader.decodeStruct(MediaRouteProvider_EnableMdnsDiscovery_Params);
      this.enableMdnsDiscovery();
      return true;
    case kMediaRouteProvider_UpdateMediaSinks_Name:
      var params = reader.decodeStruct(MediaRouteProvider_UpdateMediaSinks_Params);
      this.updateMediaSinks(params.mediaSource);
      return true;
    case kMediaRouteProvider_ProvideSinks_Name:
      var params = reader.decodeStruct(MediaRouteProvider_ProvideSinks_Params);
      this.provideSinks(params.providerName, params.sinks);
      return true;
    default:
      return false;
    }
  };

  MediaRouteProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaRouteProvider_CreateRoute_Name:
      var params = reader.decodeStruct(MediaRouteProvider_CreateRoute_Params);
      this.createRoute(params.mediaSource, params.sinkId, params.originalPresentationId, params.origin, params.tabId, params.timeout, params.incognito).then(function(response) {
        var responseParams =
            new MediaRouteProvider_CreateRoute_ResponseParams();
        responseParams.route = response.route;
        responseParams.connection = response.connection;
        responseParams.errorText = response.errorText;
        responseParams.resultCode = response.resultCode;
        var builder = new codec.MessageV1Builder(
            kMediaRouteProvider_CreateRoute_Name,
            codec.align(MediaRouteProvider_CreateRoute_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaRouteProvider_CreateRoute_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMediaRouteProvider_JoinRoute_Name:
      var params = reader.decodeStruct(MediaRouteProvider_JoinRoute_Params);
      this.joinRoute(params.mediaSource, params.presentationId, params.origin, params.tabId, params.timeout, params.incognito).then(function(response) {
        var responseParams =
            new MediaRouteProvider_JoinRoute_ResponseParams();
        responseParams.route = response.route;
        responseParams.connection = response.connection;
        responseParams.errorText = response.errorText;
        responseParams.resultCode = response.resultCode;
        var builder = new codec.MessageV1Builder(
            kMediaRouteProvider_JoinRoute_Name,
            codec.align(MediaRouteProvider_JoinRoute_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaRouteProvider_JoinRoute_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMediaRouteProvider_ConnectRouteByRouteId_Name:
      var params = reader.decodeStruct(MediaRouteProvider_ConnectRouteByRouteId_Params);
      this.connectRouteByRouteId(params.mediaSource, params.routeId, params.presentationId, params.origin, params.tabId, params.timeout, params.incognito).then(function(response) {
        var responseParams =
            new MediaRouteProvider_ConnectRouteByRouteId_ResponseParams();
        responseParams.route = response.route;
        responseParams.connection = response.connection;
        responseParams.errorText = response.errorText;
        responseParams.resultCode = response.resultCode;
        var builder = new codec.MessageV1Builder(
            kMediaRouteProvider_ConnectRouteByRouteId_Name,
            codec.align(MediaRouteProvider_ConnectRouteByRouteId_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaRouteProvider_ConnectRouteByRouteId_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMediaRouteProvider_TerminateRoute_Name:
      var params = reader.decodeStruct(MediaRouteProvider_TerminateRoute_Params);
      this.terminateRoute(params.routeId).then(function(response) {
        var responseParams =
            new MediaRouteProvider_TerminateRoute_ResponseParams();
        responseParams.errorText = response.errorText;
        responseParams.resultCode = response.resultCode;
        var builder = new codec.MessageV1Builder(
            kMediaRouteProvider_TerminateRoute_Name,
            codec.align(MediaRouteProvider_TerminateRoute_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaRouteProvider_TerminateRoute_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMediaRouteProvider_SearchSinks_Name:
      var params = reader.decodeStruct(MediaRouteProvider_SearchSinks_Params);
      this.searchSinks(params.sinkId, params.mediaSource, params.searchCriteria).then(function(response) {
        var responseParams =
            new MediaRouteProvider_SearchSinks_ResponseParams();
        responseParams.sinkId = response.sinkId;
        var builder = new codec.MessageV1Builder(
            kMediaRouteProvider_SearchSinks_Name,
            codec.align(MediaRouteProvider_SearchSinks_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaRouteProvider_SearchSinks_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMediaRouteProvider_CreateMediaRouteController_Name:
      var params = reader.decodeStruct(MediaRouteProvider_CreateMediaRouteController_Params);
      this.createMediaRouteController(params.routeId, params.mediaController, params.observer).then(function(response) {
        var responseParams =
            new MediaRouteProvider_CreateMediaRouteController_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kMediaRouteProvider_CreateMediaRouteController_Name,
            codec.align(MediaRouteProvider_CreateMediaRouteController_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaRouteProvider_CreateMediaRouteController_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateMediaRouteProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaRouteProvider_CreateRoute_Name:
        if (message.expectsResponse())
          paramsClass = MediaRouteProvider_CreateRoute_Params;
      break;
      case kMediaRouteProvider_JoinRoute_Name:
        if (message.expectsResponse())
          paramsClass = MediaRouteProvider_JoinRoute_Params;
      break;
      case kMediaRouteProvider_ConnectRouteByRouteId_Name:
        if (message.expectsResponse())
          paramsClass = MediaRouteProvider_ConnectRouteByRouteId_Params;
      break;
      case kMediaRouteProvider_TerminateRoute_Name:
        if (message.expectsResponse())
          paramsClass = MediaRouteProvider_TerminateRoute_Params;
      break;
      case kMediaRouteProvider_SendRouteMessage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_SendRouteMessage_Params;
      break;
      case kMediaRouteProvider_SendRouteBinaryMessage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_SendRouteBinaryMessage_Params;
      break;
      case kMediaRouteProvider_StartObservingMediaSinks_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_StartObservingMediaSinks_Params;
      break;
      case kMediaRouteProvider_StopObservingMediaSinks_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_StopObservingMediaSinks_Params;
      break;
      case kMediaRouteProvider_StartObservingMediaRoutes_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_StartObservingMediaRoutes_Params;
      break;
      case kMediaRouteProvider_StopObservingMediaRoutes_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_StopObservingMediaRoutes_Params;
      break;
      case kMediaRouteProvider_StartListeningForRouteMessages_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_StartListeningForRouteMessages_Params;
      break;
      case kMediaRouteProvider_StopListeningForRouteMessages_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_StopListeningForRouteMessages_Params;
      break;
      case kMediaRouteProvider_DetachRoute_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_DetachRoute_Params;
      break;
      case kMediaRouteProvider_EnableMdnsDiscovery_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_EnableMdnsDiscovery_Params;
      break;
      case kMediaRouteProvider_UpdateMediaSinks_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_UpdateMediaSinks_Params;
      break;
      case kMediaRouteProvider_SearchSinks_Name:
        if (message.expectsResponse())
          paramsClass = MediaRouteProvider_SearchSinks_Params;
      break;
      case kMediaRouteProvider_ProvideSinks_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouteProvider_ProvideSinks_Params;
      break;
      case kMediaRouteProvider_CreateMediaRouteController_Name:
        if (message.expectsResponse())
          paramsClass = MediaRouteProvider_CreateMediaRouteController_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaRouteProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kMediaRouteProvider_CreateRoute_Name:
        if (message.isResponse())
          paramsClass = MediaRouteProvider_CreateRoute_ResponseParams;
        break;
      case kMediaRouteProvider_JoinRoute_Name:
        if (message.isResponse())
          paramsClass = MediaRouteProvider_JoinRoute_ResponseParams;
        break;
      case kMediaRouteProvider_ConnectRouteByRouteId_Name:
        if (message.isResponse())
          paramsClass = MediaRouteProvider_ConnectRouteByRouteId_ResponseParams;
        break;
      case kMediaRouteProvider_TerminateRoute_Name:
        if (message.isResponse())
          paramsClass = MediaRouteProvider_TerminateRoute_ResponseParams;
        break;
      case kMediaRouteProvider_SearchSinks_Name:
        if (message.isResponse())
          paramsClass = MediaRouteProvider_SearchSinks_ResponseParams;
        break;
      case kMediaRouteProvider_CreateMediaRouteController_Name:
        if (message.isResponse())
          paramsClass = MediaRouteProvider_CreateMediaRouteController_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var MediaRouteProvider = {
    name: 'media_router.mojom.MediaRouteProvider',
    kVersion: 0,
    ptrClass: MediaRouteProviderPtr,
    proxyClass: MediaRouteProviderProxy,
    stubClass: MediaRouteProviderStub,
    validateRequest: validateMediaRouteProviderRequest,
    validateResponse: validateMediaRouteProviderResponse,
  };
  MediaRouteProvider.Id = {};
  MediaRouteProvider.Id.EXTENSION = 0;
  MediaRouteProvider.Id.WIRED_DISPLAY = MediaRouteProvider.Id.EXTENSION + 1;
  MediaRouteProvider.Id.CAST = MediaRouteProvider.Id.WIRED_DISPLAY + 1;
  MediaRouteProvider.Id.DIAL = MediaRouteProvider.Id.CAST + 1;
  MediaRouteProvider.Id.MIN_VALUE = 0,
  MediaRouteProvider.Id.MAX_VALUE = 3,

  MediaRouteProvider.Id.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  MediaRouteProvider.Id.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  MediaRouteProviderStub.prototype.validator = validateMediaRouteProviderRequest;
  MediaRouteProviderProxy.prototype.validator = validateMediaRouteProviderResponse;
  var kMediaRouter_RegisterMediaRouteProvider_Name = 0;
  var kMediaRouter_OnSinksReceived_Name = 1;
  var kMediaRouter_OnIssue_Name = 2;
  var kMediaRouter_OnRoutesUpdated_Name = 3;
  var kMediaRouter_OnSinkAvailabilityUpdated_Name = 4;
  var kMediaRouter_OnPresentationConnectionStateChanged_Name = 5;
  var kMediaRouter_OnPresentationConnectionClosed_Name = 6;
  var kMediaRouter_OnRouteMessagesReceived_Name = 7;
  var kMediaRouter_OnMediaRemoterCreated_Name = 8;
  var kMediaRouter_GetMediaSinkServiceStatus_Name = 9;
  var kMediaRouter_GetMirroringServiceHostForTab_Name = 10;
  var kMediaRouter_GetMirroringServiceHostForDesktop_Name = 11;
  var kMediaRouter_GetMirroringServiceHostForOffscreenTab_Name = 12;

  function MediaRouterPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaRouter,
                                                   handleOrPtrInfo);
  }

  function MediaRouterAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaRouter, associatedInterfacePtrInfo);
  }

  MediaRouterAssociatedPtr.prototype =
      Object.create(MediaRouterPtr.prototype);
  MediaRouterAssociatedPtr.prototype.constructor =
      MediaRouterAssociatedPtr;

  function MediaRouterProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaRouterPtr.prototype.registerMediaRouteProvider = function() {
    return MediaRouterProxy.prototype.registerMediaRouteProvider
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.registerMediaRouteProvider = function(providerId, mediaRouterProvider) {
    var params_ = new MediaRouter_RegisterMediaRouteProvider_Params();
    params_.providerId = providerId;
    params_.mediaRouterProvider = mediaRouterProvider;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaRouter_RegisterMediaRouteProvider_Name,
          codec.align(MediaRouter_RegisterMediaRouteProvider_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaRouter_RegisterMediaRouteProvider_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaRouter_RegisterMediaRouteProvider_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaRouterPtr.prototype.onSinksReceived = function() {
    return MediaRouterProxy.prototype.onSinksReceived
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.onSinksReceived = function(providerId, mediaSource, sinks, origins) {
    var params_ = new MediaRouter_OnSinksReceived_Params();
    params_.providerId = providerId;
    params_.mediaSource = mediaSource;
    params_.sinks = sinks;
    params_.origins = origins;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_OnSinksReceived_Name,
        codec.align(MediaRouter_OnSinksReceived_Params.encodedSize));
    builder.encodeStruct(MediaRouter_OnSinksReceived_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouterPtr.prototype.onIssue = function() {
    return MediaRouterProxy.prototype.onIssue
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.onIssue = function(issue) {
    var params_ = new MediaRouter_OnIssue_Params();
    params_.issue = issue;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_OnIssue_Name,
        codec.align(MediaRouter_OnIssue_Params.encodedSize));
    builder.encodeStruct(MediaRouter_OnIssue_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouterPtr.prototype.onRoutesUpdated = function() {
    return MediaRouterProxy.prototype.onRoutesUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.onRoutesUpdated = function(providerId, routes, mediaSource, joinableRouteIds) {
    var params_ = new MediaRouter_OnRoutesUpdated_Params();
    params_.providerId = providerId;
    params_.routes = routes;
    params_.mediaSource = mediaSource;
    params_.joinableRouteIds = joinableRouteIds;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_OnRoutesUpdated_Name,
        codec.align(MediaRouter_OnRoutesUpdated_Params.encodedSize));
    builder.encodeStruct(MediaRouter_OnRoutesUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouterPtr.prototype.onSinkAvailabilityUpdated = function() {
    return MediaRouterProxy.prototype.onSinkAvailabilityUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.onSinkAvailabilityUpdated = function(providerId, availability) {
    var params_ = new MediaRouter_OnSinkAvailabilityUpdated_Params();
    params_.providerId = providerId;
    params_.availability = availability;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_OnSinkAvailabilityUpdated_Name,
        codec.align(MediaRouter_OnSinkAvailabilityUpdated_Params.encodedSize));
    builder.encodeStruct(MediaRouter_OnSinkAvailabilityUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouterPtr.prototype.onPresentationConnectionStateChanged = function() {
    return MediaRouterProxy.prototype.onPresentationConnectionStateChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.onPresentationConnectionStateChanged = function(routeId, state) {
    var params_ = new MediaRouter_OnPresentationConnectionStateChanged_Params();
    params_.routeId = routeId;
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_OnPresentationConnectionStateChanged_Name,
        codec.align(MediaRouter_OnPresentationConnectionStateChanged_Params.encodedSize));
    builder.encodeStruct(MediaRouter_OnPresentationConnectionStateChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouterPtr.prototype.onPresentationConnectionClosed = function() {
    return MediaRouterProxy.prototype.onPresentationConnectionClosed
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.onPresentationConnectionClosed = function(routeId, reason, message) {
    var params_ = new MediaRouter_OnPresentationConnectionClosed_Params();
    params_.routeId = routeId;
    params_.reason = reason;
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_OnPresentationConnectionClosed_Name,
        codec.align(MediaRouter_OnPresentationConnectionClosed_Params.encodedSize));
    builder.encodeStruct(MediaRouter_OnPresentationConnectionClosed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouterPtr.prototype.onRouteMessagesReceived = function() {
    return MediaRouterProxy.prototype.onRouteMessagesReceived
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.onRouteMessagesReceived = function(routeId, messages) {
    var params_ = new MediaRouter_OnRouteMessagesReceived_Params();
    params_.routeId = routeId;
    params_.messages = messages;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_OnRouteMessagesReceived_Name,
        codec.align(MediaRouter_OnRouteMessagesReceived_Params.encodedSize));
    builder.encodeStruct(MediaRouter_OnRouteMessagesReceived_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouterPtr.prototype.onMediaRemoterCreated = function() {
    return MediaRouterProxy.prototype.onMediaRemoterCreated
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.onMediaRemoterCreated = function(tabId, remoter, remotingSource) {
    var params_ = new MediaRouter_OnMediaRemoterCreated_Params();
    params_.tabId = tabId;
    params_.remoter = remoter;
    params_.remotingSource = remotingSource;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_OnMediaRemoterCreated_Name,
        codec.align(MediaRouter_OnMediaRemoterCreated_Params.encodedSize));
    builder.encodeStruct(MediaRouter_OnMediaRemoterCreated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouterPtr.prototype.getMediaSinkServiceStatus = function() {
    return MediaRouterProxy.prototype.getMediaSinkServiceStatus
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.getMediaSinkServiceStatus = function() {
    var params_ = new MediaRouter_GetMediaSinkServiceStatus_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaRouter_GetMediaSinkServiceStatus_Name,
          codec.align(MediaRouter_GetMediaSinkServiceStatus_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaRouter_GetMediaSinkServiceStatus_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaRouter_GetMediaSinkServiceStatus_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaRouterPtr.prototype.getMirroringServiceHostForTab = function() {
    return MediaRouterProxy.prototype.getMirroringServiceHostForTab
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.getMirroringServiceHostForTab = function(targetTabId, request) {
    var params_ = new MediaRouter_GetMirroringServiceHostForTab_Params();
    params_.targetTabId = targetTabId;
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_GetMirroringServiceHostForTab_Name,
        codec.align(MediaRouter_GetMirroringServiceHostForTab_Params.encodedSize));
    builder.encodeStruct(MediaRouter_GetMirroringServiceHostForTab_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouterPtr.prototype.getMirroringServiceHostForDesktop = function() {
    return MediaRouterProxy.prototype.getMirroringServiceHostForDesktop
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.getMirroringServiceHostForDesktop = function(initiatorTabId, desktopStreamId, request) {
    var params_ = new MediaRouter_GetMirroringServiceHostForDesktop_Params();
    params_.initiatorTabId = initiatorTabId;
    params_.desktopStreamId = desktopStreamId;
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_GetMirroringServiceHostForDesktop_Name,
        codec.align(MediaRouter_GetMirroringServiceHostForDesktop_Params.encodedSize));
    builder.encodeStruct(MediaRouter_GetMirroringServiceHostForDesktop_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaRouterPtr.prototype.getMirroringServiceHostForOffscreenTab = function() {
    return MediaRouterProxy.prototype.getMirroringServiceHostForOffscreenTab
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaRouterProxy.prototype.getMirroringServiceHostForOffscreenTab = function(presentationUrl, presentationId, request) {
    var params_ = new MediaRouter_GetMirroringServiceHostForOffscreenTab_Params();
    params_.presentationUrl = presentationUrl;
    params_.presentationId = presentationId;
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kMediaRouter_GetMirroringServiceHostForOffscreenTab_Name,
        codec.align(MediaRouter_GetMirroringServiceHostForOffscreenTab_Params.encodedSize));
    builder.encodeStruct(MediaRouter_GetMirroringServiceHostForOffscreenTab_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaRouterStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaRouterStub.prototype.registerMediaRouteProvider = function(providerId, mediaRouterProvider) {
    return this.delegate_ && this.delegate_.registerMediaRouteProvider && this.delegate_.registerMediaRouteProvider(providerId, mediaRouterProvider);
  }
  MediaRouterStub.prototype.onSinksReceived = function(providerId, mediaSource, sinks, origins) {
    return this.delegate_ && this.delegate_.onSinksReceived && this.delegate_.onSinksReceived(providerId, mediaSource, sinks, origins);
  }
  MediaRouterStub.prototype.onIssue = function(issue) {
    return this.delegate_ && this.delegate_.onIssue && this.delegate_.onIssue(issue);
  }
  MediaRouterStub.prototype.onRoutesUpdated = function(providerId, routes, mediaSource, joinableRouteIds) {
    return this.delegate_ && this.delegate_.onRoutesUpdated && this.delegate_.onRoutesUpdated(providerId, routes, mediaSource, joinableRouteIds);
  }
  MediaRouterStub.prototype.onSinkAvailabilityUpdated = function(providerId, availability) {
    return this.delegate_ && this.delegate_.onSinkAvailabilityUpdated && this.delegate_.onSinkAvailabilityUpdated(providerId, availability);
  }
  MediaRouterStub.prototype.onPresentationConnectionStateChanged = function(routeId, state) {
    return this.delegate_ && this.delegate_.onPresentationConnectionStateChanged && this.delegate_.onPresentationConnectionStateChanged(routeId, state);
  }
  MediaRouterStub.prototype.onPresentationConnectionClosed = function(routeId, reason, message) {
    return this.delegate_ && this.delegate_.onPresentationConnectionClosed && this.delegate_.onPresentationConnectionClosed(routeId, reason, message);
  }
  MediaRouterStub.prototype.onRouteMessagesReceived = function(routeId, messages) {
    return this.delegate_ && this.delegate_.onRouteMessagesReceived && this.delegate_.onRouteMessagesReceived(routeId, messages);
  }
  MediaRouterStub.prototype.onMediaRemoterCreated = function(tabId, remoter, remotingSource) {
    return this.delegate_ && this.delegate_.onMediaRemoterCreated && this.delegate_.onMediaRemoterCreated(tabId, remoter, remotingSource);
  }
  MediaRouterStub.prototype.getMediaSinkServiceStatus = function() {
    return this.delegate_ && this.delegate_.getMediaSinkServiceStatus && this.delegate_.getMediaSinkServiceStatus();
  }
  MediaRouterStub.prototype.getMirroringServiceHostForTab = function(targetTabId, request) {
    return this.delegate_ && this.delegate_.getMirroringServiceHostForTab && this.delegate_.getMirroringServiceHostForTab(targetTabId, request);
  }
  MediaRouterStub.prototype.getMirroringServiceHostForDesktop = function(initiatorTabId, desktopStreamId, request) {
    return this.delegate_ && this.delegate_.getMirroringServiceHostForDesktop && this.delegate_.getMirroringServiceHostForDesktop(initiatorTabId, desktopStreamId, request);
  }
  MediaRouterStub.prototype.getMirroringServiceHostForOffscreenTab = function(presentationUrl, presentationId, request) {
    return this.delegate_ && this.delegate_.getMirroringServiceHostForOffscreenTab && this.delegate_.getMirroringServiceHostForOffscreenTab(presentationUrl, presentationId, request);
  }

  MediaRouterStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaRouter_OnSinksReceived_Name:
      var params = reader.decodeStruct(MediaRouter_OnSinksReceived_Params);
      this.onSinksReceived(params.providerId, params.mediaSource, params.sinks, params.origins);
      return true;
    case kMediaRouter_OnIssue_Name:
      var params = reader.decodeStruct(MediaRouter_OnIssue_Params);
      this.onIssue(params.issue);
      return true;
    case kMediaRouter_OnRoutesUpdated_Name:
      var params = reader.decodeStruct(MediaRouter_OnRoutesUpdated_Params);
      this.onRoutesUpdated(params.providerId, params.routes, params.mediaSource, params.joinableRouteIds);
      return true;
    case kMediaRouter_OnSinkAvailabilityUpdated_Name:
      var params = reader.decodeStruct(MediaRouter_OnSinkAvailabilityUpdated_Params);
      this.onSinkAvailabilityUpdated(params.providerId, params.availability);
      return true;
    case kMediaRouter_OnPresentationConnectionStateChanged_Name:
      var params = reader.decodeStruct(MediaRouter_OnPresentationConnectionStateChanged_Params);
      this.onPresentationConnectionStateChanged(params.routeId, params.state);
      return true;
    case kMediaRouter_OnPresentationConnectionClosed_Name:
      var params = reader.decodeStruct(MediaRouter_OnPresentationConnectionClosed_Params);
      this.onPresentationConnectionClosed(params.routeId, params.reason, params.message);
      return true;
    case kMediaRouter_OnRouteMessagesReceived_Name:
      var params = reader.decodeStruct(MediaRouter_OnRouteMessagesReceived_Params);
      this.onRouteMessagesReceived(params.routeId, params.messages);
      return true;
    case kMediaRouter_OnMediaRemoterCreated_Name:
      var params = reader.decodeStruct(MediaRouter_OnMediaRemoterCreated_Params);
      this.onMediaRemoterCreated(params.tabId, params.remoter, params.remotingSource);
      return true;
    case kMediaRouter_GetMirroringServiceHostForTab_Name:
      var params = reader.decodeStruct(MediaRouter_GetMirroringServiceHostForTab_Params);
      this.getMirroringServiceHostForTab(params.targetTabId, params.request);
      return true;
    case kMediaRouter_GetMirroringServiceHostForDesktop_Name:
      var params = reader.decodeStruct(MediaRouter_GetMirroringServiceHostForDesktop_Params);
      this.getMirroringServiceHostForDesktop(params.initiatorTabId, params.desktopStreamId, params.request);
      return true;
    case kMediaRouter_GetMirroringServiceHostForOffscreenTab_Name:
      var params = reader.decodeStruct(MediaRouter_GetMirroringServiceHostForOffscreenTab_Params);
      this.getMirroringServiceHostForOffscreenTab(params.presentationUrl, params.presentationId, params.request);
      return true;
    default:
      return false;
    }
  };

  MediaRouterStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaRouter_RegisterMediaRouteProvider_Name:
      var params = reader.decodeStruct(MediaRouter_RegisterMediaRouteProvider_Params);
      this.registerMediaRouteProvider(params.providerId, params.mediaRouterProvider).then(function(response) {
        var responseParams =
            new MediaRouter_RegisterMediaRouteProvider_ResponseParams();
        responseParams.instanceId = response.instanceId;
        responseParams.config = response.config;
        var builder = new codec.MessageV1Builder(
            kMediaRouter_RegisterMediaRouteProvider_Name,
            codec.align(MediaRouter_RegisterMediaRouteProvider_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaRouter_RegisterMediaRouteProvider_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMediaRouter_GetMediaSinkServiceStatus_Name:
      var params = reader.decodeStruct(MediaRouter_GetMediaSinkServiceStatus_Params);
      this.getMediaSinkServiceStatus().then(function(response) {
        var responseParams =
            new MediaRouter_GetMediaSinkServiceStatus_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kMediaRouter_GetMediaSinkServiceStatus_Name,
            codec.align(MediaRouter_GetMediaSinkServiceStatus_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaRouter_GetMediaSinkServiceStatus_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateMediaRouterRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaRouter_RegisterMediaRouteProvider_Name:
        if (message.expectsResponse())
          paramsClass = MediaRouter_RegisterMediaRouteProvider_Params;
      break;
      case kMediaRouter_OnSinksReceived_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_OnSinksReceived_Params;
      break;
      case kMediaRouter_OnIssue_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_OnIssue_Params;
      break;
      case kMediaRouter_OnRoutesUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_OnRoutesUpdated_Params;
      break;
      case kMediaRouter_OnSinkAvailabilityUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_OnSinkAvailabilityUpdated_Params;
      break;
      case kMediaRouter_OnPresentationConnectionStateChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_OnPresentationConnectionStateChanged_Params;
      break;
      case kMediaRouter_OnPresentationConnectionClosed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_OnPresentationConnectionClosed_Params;
      break;
      case kMediaRouter_OnRouteMessagesReceived_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_OnRouteMessagesReceived_Params;
      break;
      case kMediaRouter_OnMediaRemoterCreated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_OnMediaRemoterCreated_Params;
      break;
      case kMediaRouter_GetMediaSinkServiceStatus_Name:
        if (message.expectsResponse())
          paramsClass = MediaRouter_GetMediaSinkServiceStatus_Params;
      break;
      case kMediaRouter_GetMirroringServiceHostForTab_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_GetMirroringServiceHostForTab_Params;
      break;
      case kMediaRouter_GetMirroringServiceHostForDesktop_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_GetMirroringServiceHostForDesktop_Params;
      break;
      case kMediaRouter_GetMirroringServiceHostForOffscreenTab_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaRouter_GetMirroringServiceHostForOffscreenTab_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaRouterResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kMediaRouter_RegisterMediaRouteProvider_Name:
        if (message.isResponse())
          paramsClass = MediaRouter_RegisterMediaRouteProvider_ResponseParams;
        break;
      case kMediaRouter_GetMediaSinkServiceStatus_Name:
        if (message.isResponse())
          paramsClass = MediaRouter_GetMediaSinkServiceStatus_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var MediaRouter = {
    name: 'media_router.mojom.MediaRouter',
    kVersion: 0,
    ptrClass: MediaRouterPtr,
    proxyClass: MediaRouterProxy,
    stubClass: MediaRouterStub,
    validateRequest: validateMediaRouterRequest,
    validateResponse: validateMediaRouterResponse,
  };
  MediaRouter.SinkAvailability = {};
  MediaRouter.SinkAvailability.UNAVAILABLE = 0;
  MediaRouter.SinkAvailability.PER_SOURCE = MediaRouter.SinkAvailability.UNAVAILABLE + 1;
  MediaRouter.SinkAvailability.AVAILABLE = MediaRouter.SinkAvailability.PER_SOURCE + 1;
  MediaRouter.SinkAvailability.MIN_VALUE = 0,
  MediaRouter.SinkAvailability.MAX_VALUE = 2,

  MediaRouter.SinkAvailability.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  MediaRouter.SinkAvailability.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  MediaRouter.PresentationConnectionState = {};
  MediaRouter.PresentationConnectionState.CONNECTING = 0;
  MediaRouter.PresentationConnectionState.CONNECTED = MediaRouter.PresentationConnectionState.CONNECTING + 1;
  MediaRouter.PresentationConnectionState.CLOSED = MediaRouter.PresentationConnectionState.CONNECTED + 1;
  MediaRouter.PresentationConnectionState.TERMINATED = MediaRouter.PresentationConnectionState.CLOSED + 1;
  MediaRouter.PresentationConnectionState.MIN_VALUE = 0,
  MediaRouter.PresentationConnectionState.MAX_VALUE = 3,

  MediaRouter.PresentationConnectionState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  MediaRouter.PresentationConnectionState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  MediaRouter.PresentationConnectionCloseReason = {};
  MediaRouter.PresentationConnectionCloseReason.CONNECTION_ERROR = 0;
  MediaRouter.PresentationConnectionCloseReason.CLOSED = MediaRouter.PresentationConnectionCloseReason.CONNECTION_ERROR + 1;
  MediaRouter.PresentationConnectionCloseReason.WENT_AWAY = MediaRouter.PresentationConnectionCloseReason.CLOSED + 1;
  MediaRouter.PresentationConnectionCloseReason.MIN_VALUE = 0,
  MediaRouter.PresentationConnectionCloseReason.MAX_VALUE = 2,

  MediaRouter.PresentationConnectionCloseReason.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  MediaRouter.PresentationConnectionCloseReason.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  MediaRouterStub.prototype.validator = validateMediaRouterRequest;
  MediaRouterProxy.prototype.validator = validateMediaRouterResponse;
  exports.SinkIconType = SinkIconType;
  exports.RouteControllerType = RouteControllerType;
  exports.RouteRequestResultCode = RouteRequestResultCode;
  exports.MediaSink = MediaSink;
  exports.DialMediaSink = DialMediaSink;
  exports.CastMediaSink = CastMediaSink;
  exports.MediaRoute = MediaRoute;
  exports.Issue = Issue;
  exports.RouteMessage = RouteMessage;
  exports.SinkSearchCriteria = SinkSearchCriteria;
  exports.MediaRouteProviderConfig = MediaRouteProviderConfig;
  exports.RoutePresentationConnection = RoutePresentationConnection;
  exports.MediaSinkExtraData = MediaSinkExtraData;
  exports.MediaRouteProvider = MediaRouteProvider;
  exports.MediaRouteProviderPtr = MediaRouteProviderPtr;
  exports.MediaRouteProviderAssociatedPtr = MediaRouteProviderAssociatedPtr;
  exports.MediaRouter = MediaRouter;
  exports.MediaRouterPtr = MediaRouterPtr;
  exports.MediaRouterAssociatedPtr = MediaRouterAssociatedPtr;
})();