const express = require('express');
const apiUser = express();

const port = process.env.PORT || 8000;
require('../src/db/connection')
const router = require('../src/router/employee')
apiUser.use(express.json());

apiUser.use('/employee', router);

apiUser.listen(port, function () {
    console.log(`Connection active port ${port}`)
})