// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/loader/url_loader_factory_bundle.mojom';
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
  var url_loader_factory$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader_factory.mojom', '../../../../../services/network/public/mojom/url_loader_factory.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../../url/mojom/origin.mojom.js');
  }



  function URLLoaderFactoryBundle(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderFactoryBundle.prototype.initDefaults_ = function() {
    this.defaultFactory = new url_loader_factory$.URLLoaderFactoryPtr();
    this.schemeSpecificFactories = null;
    this.initiatorSpecificFactories = null;
    this.appcacheFactory = new url_loader_factory$.URLLoaderFactoryPtr();
    this.bypassRedirectChecks = false;
  };
  URLLoaderFactoryBundle.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderFactoryBundle.validate = function(messageValidator, offset) {
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


    // validate URLLoaderFactoryBundle.defaultFactory
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoaderFactoryBundle.schemeSpecificFactories
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.String, new codec.Interface(url_loader_factory$.URLLoaderFactoryPtr), false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoaderFactoryBundle.initiatorSpecificFactories
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 16, false, new codec.PointerTo(origin$.Origin), new codec.Interface(url_loader_factory$.URLLoaderFactoryPtr), false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoaderFactoryBundle.appcacheFactory
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 24, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  URLLoaderFactoryBundle.encodedSize = codec.kStructHeaderSize + 40;

  URLLoaderFactoryBundle.decode = function(decoder) {
    var packed;
    var val = new URLLoaderFactoryBundle();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.defaultFactory = decoder.decodeStruct(new codec.NullableInterface(url_loader_factory$.URLLoaderFactoryPtr));
    val.schemeSpecificFactories = decoder.decodeMapPointer(codec.String, new codec.Interface(url_loader_factory$.URLLoaderFactoryPtr));
    val.initiatorSpecificFactories = decoder.decodeMapPointer(new codec.PointerTo(origin$.Origin), new codec.Interface(url_loader_factory$.URLLoaderFactoryPtr));
    val.appcacheFactory = decoder.decodeStruct(new codec.NullableInterface(url_loader_factory$.URLLoaderFactoryPtr));
    packed = decoder.readUint8();
    val.bypassRedirectChecks = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLLoaderFactoryBundle.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderFactoryBundle.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.NullableInterface(url_loader_factory$.URLLoaderFactoryPtr), val.defaultFactory);
    encoder.encodeMapPointer(codec.String, new codec.Interface(url_loader_factory$.URLLoaderFactoryPtr), val.schemeSpecificFactories);
    encoder.encodeMapPointer(new codec.PointerTo(origin$.Origin), new codec.Interface(url_loader_factory$.URLLoaderFactoryPtr), val.initiatorSpecificFactories);
    encoder.encodeStruct(new codec.NullableInterface(url_loader_factory$.URLLoaderFactoryPtr), val.appcacheFactory);
    packed = 0;
    packed |= (val.bypassRedirectChecks & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.URLLoaderFactoryBundle = URLLoaderFactoryBundle;
})();