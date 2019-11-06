const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();


router.post('/login', controller.checkUser);

router.get('/artistpage', controller.displayUsers);

router.post('/artist/add', controller.addArtist);
router.post('/artistdelete', controller.deleteArtist);
router.post('/logout', controller.logout);
router.get('/deleteArtistDisplay', controller.deleteArtistDisplay);
router.post('/searchArtist', controller.searchArtist);


// router.get('/people/add', peopleController.getAddPeople);

// router.get('/people/:id', peopleController.getPeople);

// router.post('/peoples/add', peopleController.postAddPeople)

module.exports = router;
