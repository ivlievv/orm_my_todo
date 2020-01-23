const { User } = require('./db/models');

function createUser (user) {

}

async function getUserById (id) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      return user.get();
    } else {
      throw new Error('404 resource is not found');
    }

  } catch (e) {
    console.error(e);
  }
}

getUserById(87)
  .then(console.log)
  .catch(console.error);

async function updateUser (id, data) {

  try{
    const result = await User.update(data{
      where:{
        id,
      },
      returning: true
    })
  }catch (e) {
    throw e;
  }

}

function deleteUser (id) {

}

