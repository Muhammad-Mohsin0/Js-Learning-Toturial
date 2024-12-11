const accountId =34083
let accountEmail ="mosi@gmail.com"
var accountPass ="12345"
accountCity="BWN"

// accountId =33 // Not allowed
accountEmail ="ali@gmail.com"
accountPass ="00000"
accountCity ="LHR"
let accountState;

console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState])

/* 
Prefer not use to var 
because of the issue in block scop and functional scop
*/