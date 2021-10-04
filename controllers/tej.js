const bcrypt = require('bcryptjs')
let hash = bcrypt.hash("vaibhav@1234", 8)

hash.then(function(result){
    console.log(result)
})