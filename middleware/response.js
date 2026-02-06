// middleware/response.js
const responseMiddleware = (req, res, next) => {
  // Add methods to response object
  res.jsonResponse = (data, meta = {}) => {
    const response = {
      success: true,
      data: data || null,
      timestamp: new Date().toISOString(),
      ...meta
    };
    
    if (meta.statusCode) {
      return res.status(meta.statusCode).json(response);
    }
    
    return res.json(response);
  };
  
  res.errorResponse = (message, statusCode = 400, details = null) => {
    return res.status(statusCode).json({
      success: false,
      error: {
        message,
        details,
        timestamp: new Date().toISOString()
      }
    });
  };
  
  next(); 
};

module.exports = responseMiddleware; 
