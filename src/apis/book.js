import axios from "axios";
import { url } from "../constant";
export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${url}/api/book`);
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.response.data.error.message &&
      error.response.data.status != 500
    ) {
      return Promise.reject(error.response.data.error.message);
    }
    return Promise.reject("Something went wrong");
  }
};
export const getBook = async (id) => {
  try {
    const response = await axios.get(`${url}/api/book/${id}`);
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.response.data.error.message &&
      error.response.data.status != 500
    ) {
      return Promise.reject(error.response.data.error.message);
    }
    return Promise.reject("Something went wrong");
  }
};
export const loginApi = async ({ username, password }) => {
  try {
    const response = await axios.post(`${url}/api/auth/signin`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.response.data.error.message &&
      error.response.data.status != 500
    ) {
      return Promise.reject(error.response.data.error.message);
    }
    return Promise.reject("Something went wrong");
  }
};
export const signUpApi = async ({ username, password }) => {
  try {
    const response = await axios.post(`${url}/api/auth/signup`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.response.data.error.message &&
      error.response.data.status != 500
    ) {
      return Promise.reject(error.response.data.error.message);
    }
    return Promise.reject("Something went wrong");
  }
};
export const addBookApi = async ({ token, ...data }) => {
  try {
    const response = await axios.post(`${url}/api/book/`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.response.data.error.message &&
      error.response.data.status != 500
    ) {
      return Promise.reject(error.response.data.error.message);
    }
    return Promise.reject("Something went wrong");
  }
};
export const editBookApi = async ({ id, token, ...data }) => {
  try {
    const response = await axios.put(`${url}/api/book/${id}`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.response.data.error.message &&
      error.response.data.status != 500
    ) {
      return Promise.reject(error.response.data.error.message);
    }
    return Promise.reject("Something went wrong");
  }
};

export const issueBookApi = async ({ id, userId, token }) => {
  try {
    const response = await axios.post(
      `${url}/api/book/issue/${id}`,
      {
        userId,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.response.data.error.message &&
      error.response.data.status != 500
    ) {
      return Promise.reject(error.response.data.error.message);
    }
    return Promise.reject("Something went wrong");
  }
};
export const deleteBookApi = async ({ id, token, ...data }) => {
  console.log(token);
  try {
    const response = await axios.delete(
      `${url}/api/book/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
      data
    );
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.response.data.error.message &&
      error.response.data.status != 500
    ) {
      return Promise.reject(error.response.data.error.message);
    }
    return Promise.reject("Something went wrong");
  }
};
export const searchApi = async (val) => {
  try {
    const response = await axios.get(`${url}/api/book/search?value=${val}`);
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.response.data.error.message &&
      error.response.data.status != 500
    ) {
      return Promise.reject(error.response.data.error.message);
    }
    return Promise.reject("Something went wrong");
  }
};
