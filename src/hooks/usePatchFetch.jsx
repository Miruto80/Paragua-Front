import { useCallback, useState } from "react";
import api from "../services/api";

export const usePatchFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const patch = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);

      const [maybeId, maybeBody] = args.length === 1 ? [null, args[0]] : [args[0], args[1]];
      const url = maybeId ? `${endpoint}/${maybeId}` : endpoint;

      try {
        const response = await api.patch(url, maybeBody);
        setData(response.data);
        return response.data;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return { data, loading, error, patch };
};
