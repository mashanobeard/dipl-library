import User from '../models/user.js';

// const editUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       { _id: req.body._id },
//       { username: req.body.username, email: req.body.email },
//       { new: true }
//     );
//     res.send(user);
//     // return res.status(200).json(user);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// };
// export default editUser;

// import User from '../models/user.js';

// const editUser = async (req, res) => {
//   User.findById(req.params.id)
//     .then((user) => {
//       user.username = req.body.username;
//       user.email = req.body.email;

//       user
//         .save()
//         .then(() => res.json('User is updated!'))
//         .catch((err) => res.status(400).json('Error:' + err));
//     })
//     .catch((err) => res.status(400).json('Error: ' + err));
// };

// export default editUser;
const editUser = async (req, res) => {
  // console.log('Route /edit = ', req.body)
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  const user = await User.findById(req.body.id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    //This will encrypt automatically in our model
    const updateUser = await user.save();
    res.json({
      _id: updateUser._id,
      username: updateUser.username,
      email: updateUser.email,
    });
  } else {
    res.status(401);
    throw new Error('User Not found');
  }
};
export default editUser;
