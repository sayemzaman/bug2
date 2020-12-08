// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'gpu/ipc/common/gpu_preferences.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gpu.mojom');
  var buffer_types$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/buffer_types.mojom', '../../../ui/gfx/mojo/buffer_types.mojom.js');
  }



  function GpuPreferences(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuPreferences.prototype.initDefaults_ = function() {
    this.disableAcceleratedVideoDecode = false;
    this.disableAcceleratedVideoEncode = false;
    this.gpuStartupDialog = false;
    this.disableGpuWatchdog = false;
    this.gpuSandboxStartEarly = false;
    this.enableLowLatencyDxva = false;
    this.enableZeroCopyDxgiVideo = false;
    this.enableNv12DxgiVideo = false;
    this.enableMediaFoundationVeaOnWindows7 = false;
    this.disableSoftwareRasterizer = false;
    this.logGpuControlListDecisions = false;
    this.compileShaderAlwaysSucceeds = false;
    this.disableGlErrorLimit = false;
    this.disableGlslTranslator = false;
    this.disableShaderNameHashing = false;
    this.enableGpuCommandLogging = false;
    this.enableGpuDebugging = false;
    this.enableGpuServiceLoggingGpu = false;
    this.enableGpuDriverDebugLogging = false;
    this.disableGpuProgramCache = false;
    this.enforceGlMinimums = false;
    this.disableGpuShaderDiskCache = false;
    this.enableThreadedTextureMailboxes = false;
    this.glShaderIntermOutput = false;
    this.emulateShaderPrecision = false;
    this.enableAndroidSurfaceControl = false;
    this.enableGpuServiceLogging = false;
    this.enableGpuServiceTracing = false;
    this.usePassthroughCmdDecoder = false;
    this.disableBiplanarGpuMemoryBuffersForVideoFrames = false;
    this.disableGpuDriverBugWorkarounds = false;
    this.ignoreGpuBlacklist = false;
    this.forceGpuMemAvailable = 0;
    this.gpuProgramCacheSize = 0;
    this.enableOopRasterization = false;
    this.disableOopRasterization = false;
    this.enableOopRasterizationDdl = false;
    this.watchdogStartsBackgrounded = false;
    this.enableVulkan = false;
    this.disableVulkanSurface = false;
    this.disableVulkanFallbackToGlForTesting = false;
    this.enableMetal = false;
    this.enableGpuBenchmarkingExtension = false;
    this.enableWebgpu = false;
    this.textureTargetExceptionList = null;
  };
  GpuPreferences.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuPreferences.validate = function(messageValidator, offset) {
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


































    // validate GpuPreferences.textureTargetExceptionList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(buffer_types$.BufferUsageAndFormat), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;













    return validator.validationError.NONE;
  };

  GpuPreferences.encodedSize = codec.kStructHeaderSize + 24;

  GpuPreferences.decode = function(decoder) {
    var packed;
    var val = new GpuPreferences();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.disableAcceleratedVideoDecode = (packed >> 0) & 1 ? true : false;
    val.disableAcceleratedVideoEncode = (packed >> 1) & 1 ? true : false;
    val.gpuStartupDialog = (packed >> 2) & 1 ? true : false;
    val.disableGpuWatchdog = (packed >> 3) & 1 ? true : false;
    val.gpuSandboxStartEarly = (packed >> 4) & 1 ? true : false;
    val.enableLowLatencyDxva = (packed >> 5) & 1 ? true : false;
    val.enableZeroCopyDxgiVideo = (packed >> 6) & 1 ? true : false;
    val.enableNv12DxgiVideo = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.enableMediaFoundationVeaOnWindows7 = (packed >> 0) & 1 ? true : false;
    val.disableSoftwareRasterizer = (packed >> 1) & 1 ? true : false;
    val.logGpuControlListDecisions = (packed >> 2) & 1 ? true : false;
    val.compileShaderAlwaysSucceeds = (packed >> 3) & 1 ? true : false;
    val.disableGlErrorLimit = (packed >> 4) & 1 ? true : false;
    val.disableGlslTranslator = (packed >> 5) & 1 ? true : false;
    val.disableShaderNameHashing = (packed >> 6) & 1 ? true : false;
    val.enableGpuCommandLogging = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.enableGpuDebugging = (packed >> 0) & 1 ? true : false;
    val.enableGpuServiceLoggingGpu = (packed >> 1) & 1 ? true : false;
    val.enableGpuDriverDebugLogging = (packed >> 2) & 1 ? true : false;
    val.disableGpuProgramCache = (packed >> 3) & 1 ? true : false;
    val.enforceGlMinimums = (packed >> 4) & 1 ? true : false;
    val.disableGpuShaderDiskCache = (packed >> 5) & 1 ? true : false;
    val.enableThreadedTextureMailboxes = (packed >> 6) & 1 ? true : false;
    val.glShaderIntermOutput = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.emulateShaderPrecision = (packed >> 0) & 1 ? true : false;
    val.enableAndroidSurfaceControl = (packed >> 1) & 1 ? true : false;
    val.enableGpuServiceLogging = (packed >> 2) & 1 ? true : false;
    val.enableGpuServiceTracing = (packed >> 3) & 1 ? true : false;
    val.usePassthroughCmdDecoder = (packed >> 4) & 1 ? true : false;
    val.disableBiplanarGpuMemoryBuffersForVideoFrames = (packed >> 5) & 1 ? true : false;
    val.disableGpuDriverBugWorkarounds = (packed >> 6) & 1 ? true : false;
    val.ignoreGpuBlacklist = (packed >> 7) & 1 ? true : false;
    val.forceGpuMemAvailable = decoder.decodeStruct(codec.Uint32);
    val.gpuProgramCacheSize = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.enableOopRasterization = (packed >> 0) & 1 ? true : false;
    val.disableOopRasterization = (packed >> 1) & 1 ? true : false;
    val.enableOopRasterizationDdl = (packed >> 2) & 1 ? true : false;
    val.watchdogStartsBackgrounded = (packed >> 3) & 1 ? true : false;
    val.enableVulkan = (packed >> 4) & 1 ? true : false;
    val.disableVulkanSurface = (packed >> 5) & 1 ? true : false;
    val.disableVulkanFallbackToGlForTesting = (packed >> 6) & 1 ? true : false;
    val.enableMetal = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.enableGpuBenchmarkingExtension = (packed >> 0) & 1 ? true : false;
    val.enableWebgpu = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    val.textureTargetExceptionList = decoder.decodeArrayPointer(new codec.PointerTo(buffer_types$.BufferUsageAndFormat));
    return val;
  };

  GpuPreferences.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuPreferences.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.disableAcceleratedVideoDecode & 1) << 0
    packed |= (val.disableAcceleratedVideoEncode & 1) << 1
    packed |= (val.gpuStartupDialog & 1) << 2
    packed |= (val.disableGpuWatchdog & 1) << 3
    packed |= (val.gpuSandboxStartEarly & 1) << 4
    packed |= (val.enableLowLatencyDxva & 1) << 5
    packed |= (val.enableZeroCopyDxgiVideo & 1) << 6
    packed |= (val.enableNv12DxgiVideo & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.enableMediaFoundationVeaOnWindows7 & 1) << 0
    packed |= (val.disableSoftwareRasterizer & 1) << 1
    packed |= (val.logGpuControlListDecisions & 1) << 2
    packed |= (val.compileShaderAlwaysSucceeds & 1) << 3
    packed |= (val.disableGlErrorLimit & 1) << 4
    packed |= (val.disableGlslTranslator & 1) << 5
    packed |= (val.disableShaderNameHashing & 1) << 6
    packed |= (val.enableGpuCommandLogging & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.enableGpuDebugging & 1) << 0
    packed |= (val.enableGpuServiceLoggingGpu & 1) << 1
    packed |= (val.enableGpuDriverDebugLogging & 1) << 2
    packed |= (val.disableGpuProgramCache & 1) << 3
    packed |= (val.enforceGlMinimums & 1) << 4
    packed |= (val.disableGpuShaderDiskCache & 1) << 5
    packed |= (val.enableThreadedTextureMailboxes & 1) << 6
    packed |= (val.glShaderIntermOutput & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.emulateShaderPrecision & 1) << 0
    packed |= (val.enableAndroidSurfaceControl & 1) << 1
    packed |= (val.enableGpuServiceLogging & 1) << 2
    packed |= (val.enableGpuServiceTracing & 1) << 3
    packed |= (val.usePassthroughCmdDecoder & 1) << 4
    packed |= (val.disableBiplanarGpuMemoryBuffersForVideoFrames & 1) << 5
    packed |= (val.disableGpuDriverBugWorkarounds & 1) << 6
    packed |= (val.ignoreGpuBlacklist & 1) << 7
    encoder.writeUint8(packed);
    encoder.encodeStruct(codec.Uint32, val.forceGpuMemAvailable);
    encoder.encodeStruct(codec.Uint32, val.gpuProgramCacheSize);
    packed = 0;
    packed |= (val.enableOopRasterization & 1) << 0
    packed |= (val.disableOopRasterization & 1) << 1
    packed |= (val.enableOopRasterizationDdl & 1) << 2
    packed |= (val.watchdogStartsBackgrounded & 1) << 3
    packed |= (val.enableVulkan & 1) << 4
    packed |= (val.disableVulkanSurface & 1) << 5
    packed |= (val.disableVulkanFallbackToGlForTesting & 1) << 6
    packed |= (val.enableMetal & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.enableGpuBenchmarkingExtension & 1) << 0
    packed |= (val.enableWebgpu & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(buffer_types$.BufferUsageAndFormat), val.textureTargetExceptionList);
  };
  exports.GpuPreferences = GpuPreferences;
})();