const {Router} = require("express");
const { getAllVideos, createVideos, deleteVideosId } = require("../controllers/videos.controller");

const router = Router();

router.get('/videos', getAllVideos);

router.post('/videos', createVideos);

router.delete('/videos/:id', deleteVideosId);



module.exports = router;