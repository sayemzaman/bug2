// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/performance_manager/webui_graph_dump.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('performanceManager.mojom');
  var process_id$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/process_id.mojom', '../../../mojo/public/mojom/base/process_id.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }



  function WebUIPageInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIPageInfo.prototype.initDefaults_ = function() {
    this.id = 0;
    this.mainFrameUrl = null;
  };
  WebUIPageInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIPageInfo.validate = function(messageValidator, offset) {
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



    // validate WebUIPageInfo.mainFrameUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebUIPageInfo.encodedSize = codec.kStructHeaderSize + 16;

  WebUIPageInfo.decode = function(decoder) {
    var packed;
    var val = new WebUIPageInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int64);
    val.mainFrameUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  WebUIPageInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIPageInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.id);
    encoder.encodeStructPointer(url$.Url, val.mainFrameUrl);
  };
  function WebUIFrameInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIFrameInfo.prototype.initDefaults_ = function() {
    this.id = 0;
    this.url = null;
    this.pageId = 0;
    this.parentFrameId = 0;
    this.processId = 0;
  };
  WebUIFrameInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIFrameInfo.validate = function(messageValidator, offset) {
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



    // validate WebUIFrameInfo.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  WebUIFrameInfo.encodedSize = codec.kStructHeaderSize + 40;

  WebUIFrameInfo.decode = function(decoder) {
    var packed;
    var val = new WebUIFrameInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int64);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.pageId = decoder.decodeStruct(codec.Int64);
    val.parentFrameId = decoder.decodeStruct(codec.Int64);
    val.processId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  WebUIFrameInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIFrameInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.id);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Int64, val.pageId);
    encoder.encodeStruct(codec.Int64, val.parentFrameId);
    encoder.encodeStruct(codec.Int64, val.processId);
  };
  function WebUIProcessInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIProcessInfo.prototype.initDefaults_ = function() {
    this.id = 0;
    this.pid = null;
    this.cumulativeCpuUsage = null;
    this.privateFootprintKb = 0;
  };
  WebUIProcessInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIProcessInfo.validate = function(messageValidator, offset) {
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



    // validate WebUIProcessInfo.pid
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, process_id$.ProcessId, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebUIProcessInfo.cumulativeCpuUsage
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  WebUIProcessInfo.encodedSize = codec.kStructHeaderSize + 32;

  WebUIProcessInfo.decode = function(decoder) {
    var packed;
    var val = new WebUIProcessInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int64);
    val.pid = decoder.decodeStructPointer(process_id$.ProcessId);
    val.cumulativeCpuUsage = decoder.decodeStructPointer(time$.TimeDelta);
    val.privateFootprintKb = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  WebUIProcessInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIProcessInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.id);
    encoder.encodeStructPointer(process_id$.ProcessId, val.pid);
    encoder.encodeStructPointer(time$.TimeDelta, val.cumulativeCpuUsage);
    encoder.encodeStruct(codec.Uint64, val.privateFootprintKb);
  };
  function WebUIFavIconInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIFavIconInfo.prototype.initDefaults_ = function() {
    this.nodeId = 0;
    this.iconData = null;
  };
  WebUIFavIconInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIFavIconInfo.validate = function(messageValidator, offset) {
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



    // validate WebUIFavIconInfo.iconData
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebUIFavIconInfo.encodedSize = codec.kStructHeaderSize + 16;

  WebUIFavIconInfo.decode = function(decoder) {
    var packed;
    var val = new WebUIFavIconInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nodeId = decoder.decodeStruct(codec.Int64);
    val.iconData = decoder.decodeStruct(codec.String);
    return val;
  };

  WebUIFavIconInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIFavIconInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.nodeId);
    encoder.encodeStruct(codec.String, val.iconData);
  };
  function WebUIGraphChangeStream_FrameCreated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIGraphChangeStream_FrameCreated_Params.prototype.initDefaults_ = function() {
    this.frame = null;
  };
  WebUIGraphChangeStream_FrameCreated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIGraphChangeStream_FrameCreated_Params.validate = function(messageValidator, offset) {
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


    // validate WebUIGraphChangeStream_FrameCreated_Params.frame
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebUIFrameInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebUIGraphChangeStream_FrameCreated_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebUIGraphChangeStream_FrameCreated_Params.decode = function(decoder) {
    var packed;
    var val = new WebUIGraphChangeStream_FrameCreated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frame = decoder.decodeStructPointer(WebUIFrameInfo);
    return val;
  };

  WebUIGraphChangeStream_FrameCreated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIGraphChangeStream_FrameCreated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebUIFrameInfo, val.frame);
  };
  function WebUIGraphChangeStream_PageCreated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIGraphChangeStream_PageCreated_Params.prototype.initDefaults_ = function() {
    this.pages = null;
  };
  WebUIGraphChangeStream_PageCreated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIGraphChangeStream_PageCreated_Params.validate = function(messageValidator, offset) {
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


    // validate WebUIGraphChangeStream_PageCreated_Params.pages
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebUIPageInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebUIGraphChangeStream_PageCreated_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebUIGraphChangeStream_PageCreated_Params.decode = function(decoder) {
    var packed;
    var val = new WebUIGraphChangeStream_PageCreated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pages = decoder.decodeStructPointer(WebUIPageInfo);
    return val;
  };

  WebUIGraphChangeStream_PageCreated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIGraphChangeStream_PageCreated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebUIPageInfo, val.pages);
  };
  function WebUIGraphChangeStream_ProcessCreated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIGraphChangeStream_ProcessCreated_Params.prototype.initDefaults_ = function() {
    this.process = null;
  };
  WebUIGraphChangeStream_ProcessCreated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIGraphChangeStream_ProcessCreated_Params.validate = function(messageValidator, offset) {
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


    // validate WebUIGraphChangeStream_ProcessCreated_Params.process
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebUIProcessInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebUIGraphChangeStream_ProcessCreated_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebUIGraphChangeStream_ProcessCreated_Params.decode = function(decoder) {
    var packed;
    var val = new WebUIGraphChangeStream_ProcessCreated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.process = decoder.decodeStructPointer(WebUIProcessInfo);
    return val;
  };

  WebUIGraphChangeStream_ProcessCreated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIGraphChangeStream_ProcessCreated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebUIProcessInfo, val.process);
  };
  function WebUIGraphChangeStream_FrameChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIGraphChangeStream_FrameChanged_Params.prototype.initDefaults_ = function() {
    this.frame = null;
  };
  WebUIGraphChangeStream_FrameChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIGraphChangeStream_FrameChanged_Params.validate = function(messageValidator, offset) {
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


    // validate WebUIGraphChangeStream_FrameChanged_Params.frame
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebUIFrameInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebUIGraphChangeStream_FrameChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebUIGraphChangeStream_FrameChanged_Params.decode = function(decoder) {
    var packed;
    var val = new WebUIGraphChangeStream_FrameChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frame = decoder.decodeStructPointer(WebUIFrameInfo);
    return val;
  };

  WebUIGraphChangeStream_FrameChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIGraphChangeStream_FrameChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebUIFrameInfo, val.frame);
  };
  function WebUIGraphChangeStream_PageChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIGraphChangeStream_PageChanged_Params.prototype.initDefaults_ = function() {
    this.page = null;
  };
  WebUIGraphChangeStream_PageChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIGraphChangeStream_PageChanged_Params.validate = function(messageValidator, offset) {
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


    // validate WebUIGraphChangeStream_PageChanged_Params.page
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebUIPageInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebUIGraphChangeStream_PageChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebUIGraphChangeStream_PageChanged_Params.decode = function(decoder) {
    var packed;
    var val = new WebUIGraphChangeStream_PageChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.page = decoder.decodeStructPointer(WebUIPageInfo);
    return val;
  };

  WebUIGraphChangeStream_PageChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIGraphChangeStream_PageChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebUIPageInfo, val.page);
  };
  function WebUIGraphChangeStream_ProcessChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIGraphChangeStream_ProcessChanged_Params.prototype.initDefaults_ = function() {
    this.process = null;
  };
  WebUIGraphChangeStream_ProcessChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIGraphChangeStream_ProcessChanged_Params.validate = function(messageValidator, offset) {
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


    // validate WebUIGraphChangeStream_ProcessChanged_Params.process
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebUIProcessInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebUIGraphChangeStream_ProcessChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebUIGraphChangeStream_ProcessChanged_Params.decode = function(decoder) {
    var packed;
    var val = new WebUIGraphChangeStream_ProcessChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.process = decoder.decodeStructPointer(WebUIProcessInfo);
    return val;
  };

  WebUIGraphChangeStream_ProcessChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIGraphChangeStream_ProcessChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebUIProcessInfo, val.process);
  };
  function WebUIGraphChangeStream_FavIconDataAvailable_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIGraphChangeStream_FavIconDataAvailable_Params.prototype.initDefaults_ = function() {
    this.favicon = null;
  };
  WebUIGraphChangeStream_FavIconDataAvailable_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIGraphChangeStream_FavIconDataAvailable_Params.validate = function(messageValidator, offset) {
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


    // validate WebUIGraphChangeStream_FavIconDataAvailable_Params.favicon
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebUIFavIconInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebUIGraphChangeStream_FavIconDataAvailable_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebUIGraphChangeStream_FavIconDataAvailable_Params.decode = function(decoder) {
    var packed;
    var val = new WebUIGraphChangeStream_FavIconDataAvailable_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.favicon = decoder.decodeStructPointer(WebUIFavIconInfo);
    return val;
  };

  WebUIGraphChangeStream_FavIconDataAvailable_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIGraphChangeStream_FavIconDataAvailable_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebUIFavIconInfo, val.favicon);
  };
  function WebUIGraphChangeStream_NodeDeleted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIGraphChangeStream_NodeDeleted_Params.prototype.initDefaults_ = function() {
    this.nodeId = 0;
  };
  WebUIGraphChangeStream_NodeDeleted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIGraphChangeStream_NodeDeleted_Params.validate = function(messageValidator, offset) {
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

  WebUIGraphChangeStream_NodeDeleted_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebUIGraphChangeStream_NodeDeleted_Params.decode = function(decoder) {
    var packed;
    var val = new WebUIGraphChangeStream_NodeDeleted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nodeId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  WebUIGraphChangeStream_NodeDeleted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIGraphChangeStream_NodeDeleted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.nodeId);
  };
  function WebUIGraphDump_SubscribeToChanges_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebUIGraphDump_SubscribeToChanges_Params.prototype.initDefaults_ = function() {
    this.changeSubscriber = new WebUIGraphChangeStreamPtr();
  };
  WebUIGraphDump_SubscribeToChanges_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebUIGraphDump_SubscribeToChanges_Params.validate = function(messageValidator, offset) {
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


    // validate WebUIGraphDump_SubscribeToChanges_Params.changeSubscriber
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebUIGraphDump_SubscribeToChanges_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebUIGraphDump_SubscribeToChanges_Params.decode = function(decoder) {
    var packed;
    var val = new WebUIGraphDump_SubscribeToChanges_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.changeSubscriber = decoder.decodeStruct(new codec.Interface(WebUIGraphChangeStreamPtr));
    return val;
  };

  WebUIGraphDump_SubscribeToChanges_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebUIGraphDump_SubscribeToChanges_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(WebUIGraphChangeStreamPtr), val.changeSubscriber);
  };
  var kWebUIGraphChangeStream_FrameCreated_Name = 0;
  var kWebUIGraphChangeStream_PageCreated_Name = 1;
  var kWebUIGraphChangeStream_ProcessCreated_Name = 2;
  var kWebUIGraphChangeStream_FrameChanged_Name = 3;
  var kWebUIGraphChangeStream_PageChanged_Name = 4;
  var kWebUIGraphChangeStream_ProcessChanged_Name = 5;
  var kWebUIGraphChangeStream_FavIconDataAvailable_Name = 6;
  var kWebUIGraphChangeStream_NodeDeleted_Name = 7;

  function WebUIGraphChangeStreamPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebUIGraphChangeStream,
                                                   handleOrPtrInfo);
  }

  function WebUIGraphChangeStreamAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebUIGraphChangeStream, associatedInterfacePtrInfo);
  }

  WebUIGraphChangeStreamAssociatedPtr.prototype =
      Object.create(WebUIGraphChangeStreamPtr.prototype);
  WebUIGraphChangeStreamAssociatedPtr.prototype.constructor =
      WebUIGraphChangeStreamAssociatedPtr;

  function WebUIGraphChangeStreamProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebUIGraphChangeStreamPtr.prototype.frameCreated = function() {
    return WebUIGraphChangeStreamProxy.prototype.frameCreated
        .apply(this.ptr.getProxy(), arguments);
  };

  WebUIGraphChangeStreamProxy.prototype.frameCreated = function(frame) {
    var params_ = new WebUIGraphChangeStream_FrameCreated_Params();
    params_.frame = frame;
    var builder = new codec.MessageV0Builder(
        kWebUIGraphChangeStream_FrameCreated_Name,
        codec.align(WebUIGraphChangeStream_FrameCreated_Params.encodedSize));
    builder.encodeStruct(WebUIGraphChangeStream_FrameCreated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WebUIGraphChangeStreamPtr.prototype.pageCreated = function() {
    return WebUIGraphChangeStreamProxy.prototype.pageCreated
        .apply(this.ptr.getProxy(), arguments);
  };

  WebUIGraphChangeStreamProxy.prototype.pageCreated = function(pages) {
    var params_ = new WebUIGraphChangeStream_PageCreated_Params();
    params_.pages = pages;
    var builder = new codec.MessageV0Builder(
        kWebUIGraphChangeStream_PageCreated_Name,
        codec.align(WebUIGraphChangeStream_PageCreated_Params.encodedSize));
    builder.encodeStruct(WebUIGraphChangeStream_PageCreated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WebUIGraphChangeStreamPtr.prototype.processCreated = function() {
    return WebUIGraphChangeStreamProxy.prototype.processCreated
        .apply(this.ptr.getProxy(), arguments);
  };

  WebUIGraphChangeStreamProxy.prototype.processCreated = function(process) {
    var params_ = new WebUIGraphChangeStream_ProcessCreated_Params();
    params_.process = process;
    var builder = new codec.MessageV0Builder(
        kWebUIGraphChangeStream_ProcessCreated_Name,
        codec.align(WebUIGraphChangeStream_ProcessCreated_Params.encodedSize));
    builder.encodeStruct(WebUIGraphChangeStream_ProcessCreated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WebUIGraphChangeStreamPtr.prototype.frameChanged = function() {
    return WebUIGraphChangeStreamProxy.prototype.frameChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  WebUIGraphChangeStreamProxy.prototype.frameChanged = function(frame) {
    var params_ = new WebUIGraphChangeStream_FrameChanged_Params();
    params_.frame = frame;
    var builder = new codec.MessageV0Builder(
        kWebUIGraphChangeStream_FrameChanged_Name,
        codec.align(WebUIGraphChangeStream_FrameChanged_Params.encodedSize));
    builder.encodeStruct(WebUIGraphChangeStream_FrameChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WebUIGraphChangeStreamPtr.prototype.pageChanged = function() {
    return WebUIGraphChangeStreamProxy.prototype.pageChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  WebUIGraphChangeStreamProxy.prototype.pageChanged = function(page) {
    var params_ = new WebUIGraphChangeStream_PageChanged_Params();
    params_.page = page;
    var builder = new codec.MessageV0Builder(
        kWebUIGraphChangeStream_PageChanged_Name,
        codec.align(WebUIGraphChangeStream_PageChanged_Params.encodedSize));
    builder.encodeStruct(WebUIGraphChangeStream_PageChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WebUIGraphChangeStreamPtr.prototype.processChanged = function() {
    return WebUIGraphChangeStreamProxy.prototype.processChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  WebUIGraphChangeStreamProxy.prototype.processChanged = function(process) {
    var params_ = new WebUIGraphChangeStream_ProcessChanged_Params();
    params_.process = process;
    var builder = new codec.MessageV0Builder(
        kWebUIGraphChangeStream_ProcessChanged_Name,
        codec.align(WebUIGraphChangeStream_ProcessChanged_Params.encodedSize));
    builder.encodeStruct(WebUIGraphChangeStream_ProcessChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WebUIGraphChangeStreamPtr.prototype.favIconDataAvailable = function() {
    return WebUIGraphChangeStreamProxy.prototype.favIconDataAvailable
        .apply(this.ptr.getProxy(), arguments);
  };

  WebUIGraphChangeStreamProxy.prototype.favIconDataAvailable = function(favicon) {
    var params_ = new WebUIGraphChangeStream_FavIconDataAvailable_Params();
    params_.favicon = favicon;
    var builder = new codec.MessageV0Builder(
        kWebUIGraphChangeStream_FavIconDataAvailable_Name,
        codec.align(WebUIGraphChangeStream_FavIconDataAvailable_Params.encodedSize));
    builder.encodeStruct(WebUIGraphChangeStream_FavIconDataAvailable_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WebUIGraphChangeStreamPtr.prototype.nodeDeleted = function() {
    return WebUIGraphChangeStreamProxy.prototype.nodeDeleted
        .apply(this.ptr.getProxy(), arguments);
  };

  WebUIGraphChangeStreamProxy.prototype.nodeDeleted = function(nodeId) {
    var params_ = new WebUIGraphChangeStream_NodeDeleted_Params();
    params_.nodeId = nodeId;
    var builder = new codec.MessageV0Builder(
        kWebUIGraphChangeStream_NodeDeleted_Name,
        codec.align(WebUIGraphChangeStream_NodeDeleted_Params.encodedSize));
    builder.encodeStruct(WebUIGraphChangeStream_NodeDeleted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function WebUIGraphChangeStreamStub(delegate) {
    this.delegate_ = delegate;
  }
  WebUIGraphChangeStreamStub.prototype.frameCreated = function(frame) {
    return this.delegate_ && this.delegate_.frameCreated && this.delegate_.frameCreated(frame);
  }
  WebUIGraphChangeStreamStub.prototype.pageCreated = function(pages) {
    return this.delegate_ && this.delegate_.pageCreated && this.delegate_.pageCreated(pages);
  }
  WebUIGraphChangeStreamStub.prototype.processCreated = function(process) {
    return this.delegate_ && this.delegate_.processCreated && this.delegate_.processCreated(process);
  }
  WebUIGraphChangeStreamStub.prototype.frameChanged = function(frame) {
    return this.delegate_ && this.delegate_.frameChanged && this.delegate_.frameChanged(frame);
  }
  WebUIGraphChangeStreamStub.prototype.pageChanged = function(page) {
    return this.delegate_ && this.delegate_.pageChanged && this.delegate_.pageChanged(page);
  }
  WebUIGraphChangeStreamStub.prototype.processChanged = function(process) {
    return this.delegate_ && this.delegate_.processChanged && this.delegate_.processChanged(process);
  }
  WebUIGraphChangeStreamStub.prototype.favIconDataAvailable = function(favicon) {
    return this.delegate_ && this.delegate_.favIconDataAvailable && this.delegate_.favIconDataAvailable(favicon);
  }
  WebUIGraphChangeStreamStub.prototype.nodeDeleted = function(nodeId) {
    return this.delegate_ && this.delegate_.nodeDeleted && this.delegate_.nodeDeleted(nodeId);
  }

  WebUIGraphChangeStreamStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebUIGraphChangeStream_FrameCreated_Name:
      var params = reader.decodeStruct(WebUIGraphChangeStream_FrameCreated_Params);
      this.frameCreated(params.frame);
      return true;
    case kWebUIGraphChangeStream_PageCreated_Name:
      var params = reader.decodeStruct(WebUIGraphChangeStream_PageCreated_Params);
      this.pageCreated(params.pages);
      return true;
    case kWebUIGraphChangeStream_ProcessCreated_Name:
      var params = reader.decodeStruct(WebUIGraphChangeStream_ProcessCreated_Params);
      this.processCreated(params.process);
      return true;
    case kWebUIGraphChangeStream_FrameChanged_Name:
      var params = reader.decodeStruct(WebUIGraphChangeStream_FrameChanged_Params);
      this.frameChanged(params.frame);
      return true;
    case kWebUIGraphChangeStream_PageChanged_Name:
      var params = reader.decodeStruct(WebUIGraphChangeStream_PageChanged_Params);
      this.pageChanged(params.page);
      return true;
    case kWebUIGraphChangeStream_ProcessChanged_Name:
      var params = reader.decodeStruct(WebUIGraphChangeStream_ProcessChanged_Params);
      this.processChanged(params.process);
      return true;
    case kWebUIGraphChangeStream_FavIconDataAvailable_Name:
      var params = reader.decodeStruct(WebUIGraphChangeStream_FavIconDataAvailable_Params);
      this.favIconDataAvailable(params.favicon);
      return true;
    case kWebUIGraphChangeStream_NodeDeleted_Name:
      var params = reader.decodeStruct(WebUIGraphChangeStream_NodeDeleted_Params);
      this.nodeDeleted(params.nodeId);
      return true;
    default:
      return false;
    }
  };

  WebUIGraphChangeStreamStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateWebUIGraphChangeStreamRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebUIGraphChangeStream_FrameCreated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebUIGraphChangeStream_FrameCreated_Params;
      break;
      case kWebUIGraphChangeStream_PageCreated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebUIGraphChangeStream_PageCreated_Params;
      break;
      case kWebUIGraphChangeStream_ProcessCreated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebUIGraphChangeStream_ProcessCreated_Params;
      break;
      case kWebUIGraphChangeStream_FrameChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebUIGraphChangeStream_FrameChanged_Params;
      break;
      case kWebUIGraphChangeStream_PageChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebUIGraphChangeStream_PageChanged_Params;
      break;
      case kWebUIGraphChangeStream_ProcessChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebUIGraphChangeStream_ProcessChanged_Params;
      break;
      case kWebUIGraphChangeStream_FavIconDataAvailable_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebUIGraphChangeStream_FavIconDataAvailable_Params;
      break;
      case kWebUIGraphChangeStream_NodeDeleted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebUIGraphChangeStream_NodeDeleted_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebUIGraphChangeStreamResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var WebUIGraphChangeStream = {
    name: 'performance_manager.mojom.WebUIGraphChangeStream',
    kVersion: 0,
    ptrClass: WebUIGraphChangeStreamPtr,
    proxyClass: WebUIGraphChangeStreamProxy,
    stubClass: WebUIGraphChangeStreamStub,
    validateRequest: validateWebUIGraphChangeStreamRequest,
    validateResponse: null,
  };
  WebUIGraphChangeStreamStub.prototype.validator = validateWebUIGraphChangeStreamRequest;
  WebUIGraphChangeStreamProxy.prototype.validator = null;
  var kWebUIGraphDump_SubscribeToChanges_Name = 0;

  function WebUIGraphDumpPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebUIGraphDump,
                                                   handleOrPtrInfo);
  }

  function WebUIGraphDumpAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebUIGraphDump, associatedInterfacePtrInfo);
  }

  WebUIGraphDumpAssociatedPtr.prototype =
      Object.create(WebUIGraphDumpPtr.prototype);
  WebUIGraphDumpAssociatedPtr.prototype.constructor =
      WebUIGraphDumpAssociatedPtr;

  function WebUIGraphDumpProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebUIGraphDumpPtr.prototype.subscribeToChanges = function() {
    return WebUIGraphDumpProxy.prototype.subscribeToChanges
        .apply(this.ptr.getProxy(), arguments);
  };

  WebUIGraphDumpProxy.prototype.subscribeToChanges = function(changeSubscriber) {
    var params_ = new WebUIGraphDump_SubscribeToChanges_Params();
    params_.changeSubscriber = changeSubscriber;
    var builder = new codec.MessageV0Builder(
        kWebUIGraphDump_SubscribeToChanges_Name,
        codec.align(WebUIGraphDump_SubscribeToChanges_Params.encodedSize));
    builder.encodeStruct(WebUIGraphDump_SubscribeToChanges_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function WebUIGraphDumpStub(delegate) {
    this.delegate_ = delegate;
  }
  WebUIGraphDumpStub.prototype.subscribeToChanges = function(changeSubscriber) {
    return this.delegate_ && this.delegate_.subscribeToChanges && this.delegate_.subscribeToChanges(changeSubscriber);
  }

  WebUIGraphDumpStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebUIGraphDump_SubscribeToChanges_Name:
      var params = reader.decodeStruct(WebUIGraphDump_SubscribeToChanges_Params);
      this.subscribeToChanges(params.changeSubscriber);
      return true;
    default:
      return false;
    }
  };

  WebUIGraphDumpStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateWebUIGraphDumpRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebUIGraphDump_SubscribeToChanges_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebUIGraphDump_SubscribeToChanges_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebUIGraphDumpResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var WebUIGraphDump = {
    name: 'performance_manager.mojom.WebUIGraphDump',
    kVersion: 0,
    ptrClass: WebUIGraphDumpPtr,
    proxyClass: WebUIGraphDumpProxy,
    stubClass: WebUIGraphDumpStub,
    validateRequest: validateWebUIGraphDumpRequest,
    validateResponse: null,
  };
  WebUIGraphDumpStub.prototype.validator = validateWebUIGraphDumpRequest;
  WebUIGraphDumpProxy.prototype.validator = null;
  exports.WebUIPageInfo = WebUIPageInfo;
  exports.WebUIFrameInfo = WebUIFrameInfo;
  exports.WebUIProcessInfo = WebUIProcessInfo;
  exports.WebUIFavIconInfo = WebUIFavIconInfo;
  exports.WebUIGraphChangeStream = WebUIGraphChangeStream;
  exports.WebUIGraphChangeStreamPtr = WebUIGraphChangeStreamPtr;
  exports.WebUIGraphChangeStreamAssociatedPtr = WebUIGraphChangeStreamAssociatedPtr;
  exports.WebUIGraphDump = WebUIGraphDump;
  exports.WebUIGraphDumpPtr = WebUIGraphDumpPtr;
  exports.WebUIGraphDumpAssociatedPtr = WebUIGraphDumpAssociatedPtr;
})();