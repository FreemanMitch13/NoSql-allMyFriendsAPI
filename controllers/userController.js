const { User, Thought } = require('../models');

module.exports = { 
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.find()  //???????
        .select()
        .then((user) =>
        !user
            ?res.status(404).json({ message: 'User not found' })
            :res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.courseId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : Student.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() => res.json({ message: 'User and Thoughts deleted!' }))
          .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with this id!' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },

}