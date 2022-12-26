import express from 'express';
import Test from '../util/Tests';
import Tournament from '../types/Tournament';



// create express router
const router = express.Router();

router.get('/single', (req, res) => {
    let t: Tournament = Test.generateSingleElimination(16);

    let z: String[] = [];
    let x = t.getMatches();
    for (let i = 0; i < x.length; i++) {
        x[i].setHomePlayerScore(5);
        z.push("Match " + i + ": " + x[i].getHomePlayer().getName() + " - " + x[i].getHomePlayerScore() + " vs " + x[i].getAwayPlayer().getName() + " - " + x[i].getAwayPlayerScore() + " | ");
    }

    res.send(z);
});

module.exports = router;