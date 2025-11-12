import React, { useContext, useEffect, useState } from "react";
import MyContainer from "../Components/MyContainer";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Button from "../Components/Button";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyTransactions = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);

  const handelDelete = (id) => {
    fetch(`http://localhost:3000/transaction/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
          setTransactions((prev) => prev.filter((t) => t._id !== id));
        } else {
          ("failed to delete");
        }
      })
      .catch(() => {
        toast.error("something went wrong!");
      });
  };

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
    <MyContainer>
      <h1 className="text-2xl font-bold my-5">My Transactions</h1>
      <div>
        {transactions.length === 0 ? (
          <h1 className="text-center text-5xl font-bold">
            No Transactions Found
          </h1>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Update</th>
                  <th>Delete</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {[...transactions].reverse().map((transaction, index) => (
                  <tr key={transaction._id}>
                    <th>{index + 1}</th>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.date}</td>
                    <td>
                      <Button>
                        <Link to={`/update/${transaction._id}`}>Update</Link>
                      </Button>
                    </td>
                    <td>
                      <Button>
                        <p onClick={() => handelDelete(transaction._id)}>
                          Delete
                        </p>
                      </Button>
                    </td>
                    <td>
                      <Button>
                        <Link to={`/transaction/details/${transaction._id}`}>
                          Details
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </MyContainer>
  );
};

export default MyTransactions;
