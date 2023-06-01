import {default as socks} from "npm:socksv5@^0.0.6";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  var srv = socks.createServer(function(info, accept, deny) {
    accept();
  });
  srv.listen(1080, '0.0.0.0', function() {
    console.log('SOCKS server listening on port 1080');
  });
  
  srv.useAuth(socks.auth.None());  
}
