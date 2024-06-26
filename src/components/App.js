import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions";
import { Skeleton } from "@mui/material";
export const App = () => {
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {Array.isArray(data) && (
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!Array.isArray(data) && (
        <div>
          <Skeleton />
        </div>
      )}
    </div>
  );
};
