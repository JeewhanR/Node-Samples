const http = require('http');

http.createServer(function(req, res) {
   if ( req.method.toLowerCase() == 'post') {
      const contentType = req.headers['content-type'];
      console.log('content type : ', contentType);

      // contentType : application/json 비교
      if ( contentType.search('json') > 0 ) {
         var body = '';
         req.on('data', function(chunk) {
            body += chunk;
         });
         req.on('end', function() {
            var parsed = JSON.parse(body);
            console.log(parsed);

            var intVal = parsed['intVal'];
            console.log('intVal : ', intVal, ' is Number? : ', typeof intVal);

            var floatVal = parsed['floatVal'];
            console.log('floatVal : ', floatVal, ' is Number? : ', typeof floatVal);

            var boolVal = parsed['boolVal'];
            console.log('boolVal : ', boolVal);

            var nullVal = parsed['nullVal'];
            console.log('nullVal : ', nullVal, ' is null? : ', (nullVal == null));

            var dateStr = parsed['dateStr'];
            var date = new Date(dateStr);
            console.log('date from dateStr : ', date);

            var arrVal = parsed["arrVal"];
            console.log('arrVal : ', arrVal);

            var objVal = parsed["objVal"];
            console.log('objVal : ', objVal);

            res.end('OK');
         });
      }
      else {
         res.end('Not JSON Message');
      }
   }
   else {
      res.end('Not Post Message');
   }
}).listen(3000);