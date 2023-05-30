const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode:500;
    res.json({message: err.message, stackTrace: err.stack});
}
// j'ai renvoye l'erreur en format json
module.exports = errorHandler;