module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header( 'Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
  next();
}