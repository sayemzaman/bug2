// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/use_counter/css_property_id.mojom';
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


  var kMaximumCSSSampleId = 637;
  var kTotalPagesMeasuredCSSSampleId = 1;

  exports.kMaximumCSSSampleId = kMaximumCSSSampleId;
  exports.kTotalPagesMeasuredCSSSampleId = kTotalPagesMeasuredCSSSampleId;
})();