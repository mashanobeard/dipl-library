// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// dotenv.config();

// const authorize = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const token1 = authHeader.split(' ')[1];
//     const jwtSecret = process.env.JWTSECRET;

//     jwt.verify(token1, jwtSecret, (err, user) => {
//       if (err) {
//         return res.status(403).json('Token is not valid!');
//       }

//       req.user = user;
//       next();
//     });
//   } else {
//     res.status(401).json('You are not authenticated!');
//   }
// };
// export default authorize;
// const authorize = (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer ')
//   ) {
//     token = req.headers.authorization.split(' ')[1];
//   }

//   try {
//     const jwtSecret = process.env.JWTSECRET;
//     const decoded = jwt.verify(token, jwtSecret);
//     req.user = decoded;
//     next();
//   } catch (e) {
//     return res.status(401).json(e.message);
//   }
// };
// export default authorize;
// import passport from 'passport';

// const authorize = (req, res, next) => {
//   passport.authenticate('local', { session: false }, async (err, user) => {
//     if (err) {
//       return next(err);
//     } else if (!user) {
//       return res.status(401).send('Invalid token');
//     } else {
//       return next();
//     }
//   })(req, res, next);
// };

// export default authorize;

// import jwt from 'jsonwebtoken';

// const authorize = (req, res, next) => {
//   const authorization = req.get('authorization');
//   if (authorization && authorization.toLowerCase().startsWith('Bearer ')) {
//     return authorization.substring(7);
//   }

//   try {
//     const token = getTokenFrom(req);
//     const decodedToken = jwt.verify(token, process.env.JWTSECRET);
//     if (!token || !decodedToken.id) {
//       return response.status(401).json({ error: 'token missing or invalid' });
//     }
//     next();
//   } catch (e) {
//     return res.status(401).json(e);
//   }
// };
// export default authorize;
