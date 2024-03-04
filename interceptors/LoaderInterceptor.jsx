import axios from "axios";
import { setLoading } from "../context/LoadingContext";
import { Toast } from "native-base";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    setLoading(true);
    return config;
  },
  function (error) {
    setLoading(false);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    setLoading(false);
    // Dynamically set the toast title and description based on the response
    const toastTitle =
      response.data.status === "success" ? "Success!" : "Error!";
    const toastDescription =
      response.data.message || "An error occurred while loading data.";

    // Show a toast for the response
    Toast.show({
      title: toastTitle,
      description: toastDescription,
      variant: "left-accent",
      status: response.data.status === "success" ? "success" : "error",
      placement: "bottom-right",
      duration: 2000, // Auto close the toast after 2 seconds
    });
    return response;
  },
  function (error) {
    setLoading(false);
    // Show an error toast for failed responses
    Toast.show({
      title: "Error!",
      variant: "left-accent",
      description: "An error occurred while loading data.",
      status: "error",
      placement: "bottom-right",
      isClosable: true,
      duration: 2000, // Auto close the toast after 2 seconds
    });
    return Promise.reject(error);
  }
);

export default axios;
