import React from "react";
import { useLoaderData, useParams } from "react-router";
import MyContainer from "../Components/MyContainer";
import { toast } from "react-toastify";
import { BiCheckCircle } from "react-icons/bi";

const UpdateTransactions = () => {
  const data = useLoaderData();
  const { _id } = useParams();

  const transaction = data.find((transaction) => transaction._id === _id);
  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const amount = form.amount.value;
    const category = form.category.value;
    const date = form.date.value;
    const type = form.type.value;
    const description = form.description.value;
    const transaction = {
      amount,
      category,
      date,
      description,
      type,
    };
    if (!amount || !category || !date || !type || !description) {
      toast.error("All fields are required");
      return;
    }

    fetch(
      `https://finease-server-theta.vercel.app/transactions/update/${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully updated!", {
          progressClassName: "!bg-[#875df8]",
          icon: <BiCheckCircle className="text-[#875df8] w-5 h-5" />

        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MyContainer className="mt-20 mb-5">
      <p className="text-center font-bold text-2xl">Transaction Update</p>
      <form onSubmit={handleUpdate} className="flex flex-col max-w-md mx-auto ">
        {/* Checkbox Field */}
        <div className="mt-5">
          <label className="block text-start  font-bold ">Type</label>
          <div className="flex justify-center items-center rounded gap-5">
            <label className="block text-start  font-bold" htmlFor="amount">
              Income
            </label>
            <input
              type="radio"
              name="type"
              value="income"
              defaultChecked={transaction.type === "income"}
              required
              className="radio radio-primary"
            />
            <label
              className="block text-start  font-bold mb-2"
              htmlFor="amount"
            >
              Expense
            </label>
            <input
              type="radio"
              name="type"
              value="expense"
              defaultChecked={transaction.type === "expense"}
              required
              className="radio radio-primary"
            />
          </div>
        </div>
        {/* Description Field */}
        <div className="mt-5">
          <label
            className="block text-start  font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            placeholder="Enter description"
            defaultValue={transaction.description}
          ></textarea>
        </div>
        {/* Category Field */}
        <div>
          <label
            className="block text-start  font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            name="category"
            type="text"
            list="browsers"
            defaultValue={transaction.category}
            placeholder="Enter category"
          />
          <datalist id="browsers">
            <div className="flex">
              <div>
                <option value="Salary" />
                <option value="Loan Payment" />
                <option value="Freelance Income" />
                <option value="Transportation" />
                <option value="Business Profit" />
                <option value="Investments" />
              </div>
              <div>
                <option value="Internet & Phone Bill" />
                <option value="Travel" />
                <option value="Food & Groceries" />
                <option value="Rent Income" />
                <option value="Utilities (Electricity, Gas, Water)" />
                <option value="House Rent" />
                <option value="Other Income" />
              </div>
            </div>
          </datalist>
        </div>
        {/* Amount Field */}
        <div className="mt-5">
          <label className="block text-start  font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            name="amount"
            type="number"
            defaultValue={transaction.amount}
            placeholder="Enter amount"
          />
        </div>
        {/* Date Field */}
        <div className="mt-5">
          <label className="block text-start  font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            name="date"
            type="date"
            defaultValue={transaction.date.slice(0, 10) || ""}
          />
        </div>

        <button className="btn btn-primary mt-5">Update</button>
      </form>
    </MyContainer>
  );
};

export default UpdateTransactions;
