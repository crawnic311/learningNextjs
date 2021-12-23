let users = []

module.exports = {
  create: (req, res) => {
    console.log(req)
    res.status(200).send(messages)
  },

  read: (req, res) => {
    res.status(200).send(messages)
  },

  update: (req, res) => {
    console.log(req)
    res.status(200).send(messages)
  },

  delete: (req, res) => {
    console.log(req)
    res.status(200).send(messages)
  },
}
