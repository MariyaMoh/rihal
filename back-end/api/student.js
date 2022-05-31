const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//search
router.get('/', async function (req, res) {
  const studnets = await prisma.studnet.findMany();
  res.send(studnets);
});

// //count
// const students = await prisma.user.count();


//delete

router.delete('/:id', async function (req, res) {
  const { id } = req.params;
  const student = await prisma.studnet.delete({
    where: { id: parseInt(id) },
  });
  res.send();
});

router.post('/', function (req, res) {
  res.send('Post user controller');
});

module.exports = router;
