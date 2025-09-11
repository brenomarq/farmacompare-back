const users = [];

const userService = {
  getAll() {
    return users;
  },

  create(name) {
    if (!name) {
      throw new Error("Name is required");
    }

    const user = {
      id: users.length + 1,
      name,
    };

    users.push(user);
    return user;
  },
};

export default userService;
