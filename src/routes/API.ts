import express from 'express';



// create express router
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world!');
});

export default router;