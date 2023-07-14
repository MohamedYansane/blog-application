import axios from "axios";
export const signup = async ({ name, email, password }) => {
  try {
    // we've to pass our end points inside the options
    const { data } = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    //then we get back the data from the backend const {data}
    //in our usersController the data we wanna get is inside the res.status when it successfully registered
    return data;
  } catch (error) {
    //the first error is in case there's an error in backend side
    //and the second the default error
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
