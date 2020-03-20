const users = [];

const addUser = ({ id, name, room }) => {
  // Remove whitespaces from room and name and make it lowercase
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // If username is already taken throw an error, else add user to users array
  const existingUser = users.find(
    user => user.room === room && user.name === name
  );
  if (existingUser) {
    return { error: "Username is already taken." };
  }

  const user = { id, name, room };
  users.push(user);

  return user;
};

const removeUser = id => {
  // Remove user from users array
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

// Get one user
const getUser = id => users.find(user => user.id === id);

// Get all users in the room
const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
