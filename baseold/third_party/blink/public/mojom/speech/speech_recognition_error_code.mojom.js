// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/speech/speech_recognition_error_code.mojom';
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


  var SpeechRecognitionErrorCode = {};
  SpeechRecognitionErrorCode.kNone = 0;
  SpeechRecognitionErrorCode.kNoSpeech = SpeechRecognitionErrorCode.kNone + 1;
  SpeechRecognitionErrorCode.kAborted = SpeechRecognitionErrorCode.kNoSpeech + 1;
  SpeechRecognitionErrorCode.kAudioCapture = SpeechRecognitionErrorCode.kAborted + 1;
  SpeechRecognitionErrorCode.kNetwork = SpeechRecognitionErrorCode.kAudioCapture + 1;
  SpeechRecognitionErrorCode.kNotAllowed = SpeechRecognitionErrorCode.kNetwork + 1;
  SpeechRecognitionErrorCode.kServiceNotAllowed = SpeechRecognitionErrorCode.kNotAllowed + 1;
  SpeechRecognitionErrorCode.kBadGrammar = SpeechRecognitionErrorCode.kServiceNotAllowed + 1;
  SpeechRecognitionErrorCode.kLanguageNotSupported = SpeechRecognitionErrorCode.kBadGrammar + 1;
  SpeechRecognitionErrorCode.kNoMatch = SpeechRecognitionErrorCode.kLanguageNotSupported + 1;
  SpeechRecognitionErrorCode.MIN_VALUE = 0,
  SpeechRecognitionErrorCode.MAX_VALUE = 9,

  SpeechRecognitionErrorCode.isKnownEnumValue = function(value) {
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

  SpeechRecognitionErrorCode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.SpeechRecognitionErrorCode = SpeechRecognitionErrorCode;
})();