// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/speech/speech_recognition_grammar.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function SpeechRecognitionGrammar(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SpeechRecognitionGrammar.prototype.initDefaults_ = function() {
    this.url = null;
    this.weight = 0;
  };
  SpeechRecognitionGrammar.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SpeechRecognitionGrammar.validate = function(messageValidator, offset) {
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


    // validate SpeechRecognitionGrammar.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SpeechRecognitionGrammar.encodedSize = codec.kStructHeaderSize + 16;

  SpeechRecognitionGrammar.decode = function(decoder) {
    var packed;
    var val = new SpeechRecognitionGrammar();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.weight = decoder.decodeStruct(codec.Double);
    return val;
  };

  SpeechRecognitionGrammar.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SpeechRecognitionGrammar.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Double, val.weight);
  };
  exports.SpeechRecognitionGrammar = SpeechRecognitionGrammar;
})();