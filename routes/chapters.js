const router = require('express').Router();
const { chapterList, chapterDetails, searchChapters, chapterDelete, chapterCreate, addChapter } = require('../controllers/chapter.controller');

router.get('/', chapterList);
router.get('/add', addChapter);
router.get('/search', searchChapters);
router.get('/:chapterId', chapterDetails);
router.post('/', chapterCreate);
router.get('/delete/:chapterId', chapterDelete);

module.exports = router;