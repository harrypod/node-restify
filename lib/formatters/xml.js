// Harry Podciborski 2018

'use strict';
///--- Exports
/**
 * XML formatter.
 * @public
 * @function formatXml
 * @param    {Object} req  the request object
 * @param    {Object} res  the response object
 * @param    {Object} body response body
 * @param    {Function} cb cb
 * @returns  {Buffer}
 */
function formatXml(req, res, body, cb) {
    if (body instanceof Error) {
        res.statusCode = body.statusCode || 500;
    }

    if (!Buffer.isBuffer(body)) {
        body = new Buffer(body.toString('base64'));
    }
    res.setHeader('Content-Length', body.length);
    return cb(null, body);
}

module.exports = formatXml;
