var WebRTCUTC2;

try {
    WebRTCUTC2 = require('rtcmulticonnection');
}
catch(e) {
    WebRTCUTC2 = require('./dist/WebRTCUTC2.js');
}

var connection = new WebRTCUTC2();

connection.enableLogs = true;
connection.session = {
    data: true
};

connection.dontCaptureUserMedia = true;

console.log('\n------\n');
connection.open('room-id', function(isRoomOpened, roomid, error) {
    if(isRoomOpened === true) {
        console.log('Phòng đc mở: ' + roomid)
    }

    if(error) {
        console.log('Lỗi : ' + error);
    }
});

console.log('\n------\n');

console.log(connection);

process.exit()
