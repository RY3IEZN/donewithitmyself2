/** @format */

import React, { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return {
    request,
    data,
    loading,
  };
};
