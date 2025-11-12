import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const TransactionDetails = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const data = useLoaderData();
  //   const transaction = data.find((transaction) => transaction._id === _id);

  console.log("update clicked", data);
  useEffect(() => {
    fetch(`http://localhost:3000/myTransactions?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data fetched successfully my transactions page", data);
        setTransactions(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  return (
    <div>
      <h1>Transaction Details</h1>
    </div>
  );
};

export default TransactionDetails;
