import { useCallback, useState } from "react";
import { api } from "../api";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (requestsSection, requestName, payload) => {
    setLoading(true);

    const onSuccess = (result) => {
      setLoading(false);
      return result;
    };
    const onError = (error) => {
      setLoading(false);
      setError(error)
    };
    
    return api[requestsSection][requestName](
      payload ? payload : undefined
    ).then(onSuccess, onError);
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
