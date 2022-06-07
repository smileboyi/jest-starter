const getUserById = async (id: string) => {
  return Promise.resolve({
    params: { id },
  });
};

export default getUserById;
