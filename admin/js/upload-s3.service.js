angular
    .module('app')
    .factory('uploadS3', uploadS3);

function uploadS3() {     
    var service = {
        json: json
    };
    return service;
    
    function json(objKey, doc) {
        var accessKeyId = 'ACCESSKEY';
        var secretAccessKey = 'SECRETKEY';
        var bucketName = 'BUCKET';
        AWS.config.region = 'us-east-1';

        var bucket = new AWS.S3({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            params: {
                Bucket: bucketName
            }
        });

        var params = {
            Key: objKey,
            ContentType: '.json',
            Body: doc,
            ACL: 'public-read'
        };

        bucket.putObject(params, function (err, data) {
            if (err) {
                alert(err);
                //results.innerHTML = 'ERROR: ' + err;
            } else {
                //listObjs();
            }
        });
    }
}
