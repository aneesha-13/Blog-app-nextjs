let mongoose = require('mongoose');
let dbConfig = require('../../../database/db');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database sucessfully connected!')
},
    error => {
        console.log('Could not connect to database : ' + error)
    }
)
let blogSchema = require('../../../models/blog');
export default (req, res) => {
    const {
        query: { id },
        method } = req
    switch (method) {
        case 'GET':
            try {
                console.log("in getby id try")
                blogSchema.findById(id, (error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        res.json(data)
                    }
                })
            }
            catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'PUT':
            try {
                console.log("in getby id try")
                blogSchema.findByIdAndUpdate(id, req.body, (error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        res.json(req.body);
                    }
                })
            }
            catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'DELETE':
            try {
                console.log("in deleteby id try")
                blogSchema.deleteOne({_id:id}, (error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        res.json(req.body);
                    }
                })
            }
            catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            break;
    }
}