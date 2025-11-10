import React from "react";
import MyContainer from "../Components/MyContainer";
import Button from "../Components/Button";

const AddTransaction = () => {
  return (
    <MyContainer className="mt-17">
      <div className=" min-h-screen max-w-lg mx-auto text-center shadow-2xl p-10 border ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div></div>
          <h1 className="text-3xl font-bold">Add Transaction</h1>
          {/* Date Field */}
          <div>
            <input
              className="appearance-none border rounded w-full py-2   leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
            />
          </div>
        </div>
        <form className="mt-10">
          <div className="flex flex-col gap-5">
            {/* Name Field */}
            <div className="w-full">
              <label
                className="block text-start  font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter name"
              />
            </div>
            {/* Email Field */}
            <div className="w-full">
              <label
                className="block text-start  font-bold mb-2"
                htmlFor="name"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter email"
              />
            </div>
            {/* Amount Field */}
            <div className="w-full">
              <label
                className="block text-start  font-bold mb-2"
                htmlFor="amount"
              >
                Amount
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="amount"
                type="number"
                placeholder="Enter amount"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {/* Checkbox Field */}

            <div className="mt-5">
              <label
                className="block text-start  font-bold "
                htmlFor="description"
              >
                Type
              </label>
              <div className="flex justify-center items-center rounded gap-5">
                <label className="block text-start  font-bold" htmlFor="amount">
                  Income
                </label>
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-primary"
                  defaultChecked
                />
                <label
                  className="block text-start  font-bold mb-2"
                  htmlFor="amount"
                >
                  Expense
                </label>
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-primary"
                />
              </div>
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
                id="category"
                type="text"
                list="browsers"
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
              id="description"
              placeholder="Enter description"
            ></textarea>
          </div>
          <div className="mt-5">
            <Button>Add Transaction</Button>
          </div>
        </form>
      </div>
    </MyContainer>
  );
};

export default AddTransaction;
