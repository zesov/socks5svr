var socks = require('socksv5');

var srv = socks.createServer(function(info, accept, deny) {
  accept();
});
srv.listen(1080, '0.0.0.0', function() {
  console.log('SOCKS server listening on port 1080');
});

srv.useAuth(socks.auth.None());