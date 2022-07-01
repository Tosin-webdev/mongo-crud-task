let taskDB = require('../model/task');

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be emtpy!' });
  }

  const task = new taskDB({
    title: req.body.title,
    description: req.body.description,
  });

  task
    .save(task)
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'some error occured while creating a create operation',
      });
    });
};

exports.find = (req, res) => {
  taskDB
    .find({})
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error Occured while retrieving task info',
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update cannot be empty' });
  }

  const id = req.params.id;
  taskDB
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((task) => {
      if (!task) {
        res.status(404).send({
          message: `cannot update task with ${id}. maybe task not found!`,
        });
      } else {
        res.send(task);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error update task information' });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  taskDB
    .findByIdAndDelete(id)
    .then((task) => {
      if (!task) {
        res.status(404).send({ mesage: `Cannot delete with id ${id}. maybe id is wrong` });
      } else {
        res.send({
          message: 'User was deleted successfully',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete id with id = ' + id,
      });
    });
};
