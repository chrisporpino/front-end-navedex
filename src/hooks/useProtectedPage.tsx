import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { token } from "../services/axios";

export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/");
    } 
  }, [history]);
}