const express = require('express')
const router = express.Router();
const {creating, posting, reading,updating,posting_update, deleting} = require("../controllers/controllers")

router.get('/create',creating)
router.post('/create',posting)


router.get('/update',updating)
router.post('/update',posting_update)

router.get('/delete',deleting)
router.get('/read',reading)



module.exports = router;
