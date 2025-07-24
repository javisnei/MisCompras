import { useEffect, useState } from "react";
import { getPurchase } from "../api/purchase";

export const useTareas = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getTareas = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getPurchase();

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTareas();
  }, []);

  return { data, loading, error, getTareas };
};
