import React from "react";
import MyContainer from "./MyContainer";

const Budgeting = () => {
  return (
    <div className="bg-[#875DF890]">
      <MyContainer className="py-10">
        <div className="my-10 text-center">
          <h1 className="text-3xl font-bold ">Budgeting</h1>
          <p className="text-sm font-regular">
            Simple ways to track your spending and save more every month.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center space-y-3">
            <img
              width="48"
              height="48"
              className="mx-auto"
              src="https://img.icons8.com/color/48/payment-history.png"
              alt="payment-history"
            />
            <h1 className="text-2xl font-medium">Track Your Spending</h1>
            <p className="text-sm  font-regular">
              Monitor where your money goes each month to identify unnecessary
              expenses and opportunities to save.
            </p>
          </div>
          <div className="text-center space-y-3">
            <img
              width="48"
              height="48"
              className="mx-auto"
              src="https://img.icons8.com/color/48/calendar-plus.png"
              alt="calendar-plus"
            />
            <h1 className="text-2xl font-medium"> Set Monthly Goals</h1>
            <p className="text-sm font-regular">
              Decide how much you want to save each month and create a realistic
              plan to reach it.
            </p>
          </div>
          <div className="text-center space-y-3">
            <img
              width="48"
              height="48"
              className="mx-auto"
              src="https://img.icons8.com/color/48/receive-cash.png"
              alt="receive-cash"
            />
            <h1 className="text-2xl font-medium">Automate Your Savings</h1>
            <p className="text-sm  font-regular">
              Set up automatic transfers to your savings account right after
              payday — save before you spend.
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Budgeting;
