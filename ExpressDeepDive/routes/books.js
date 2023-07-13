const express = ("express");
const router = express.Router();


router.get("/", function(req, res, next){
    res.send("THIS IS A GET REQUEST TO /books");
});

router.post("/", function (req, res, next){
    res.send("THIS IS A POST REQUEST TO /books");
});

router.get("/:bookId", function (req, res, next){
    res.send('THIS IS A PUT REQUEST TO /books/${req.params.bookId}');
});

router.get("/:id", (req, res) => {
  res.send(`GET Book with id ${req.params.id}`);
});

router.put("/:bookId", function (req, res, next){
    res.send("THIS IS A PUT REQUEST TO /book/${req.params.bookId}");
});

router.delete("/:bookId", function (req, res, next){
    res.send('THIS IS A DELETE REQUEST TO /books/${req.params.bookId}');
});

module.exports = router;