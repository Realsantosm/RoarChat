
module.exports.register = (req, res, next) => {
    try {
        console.log(req.body)
    } catch((err) => {
        console.log(err.message);
    })
}