const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config/database");
const multer = require("multer");
const cors = require("cors");
const path = require('path')

router.use(parser.json());

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images')
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
}
);

router.post('/uploadrecru',
	function (req, res) {
		const uploadrecru = multer({
			storage: storage,
			fileFilter: function (req, file, callback) {
				const ext = path.extname(file.originalname)
				if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
					return callback(res.end('Only images are allowed'), null)
				}
				callback(null, true)
			}
		}).single('file')
		uploadrecru(req, res, function (err) {
			res.end('File is uploaded')
		})
	})

module.exports = router;
