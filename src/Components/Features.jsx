import React from "react";
import MyContainer from "./MyContainer";

const Features = () => {
  return (
    <div>
      <MyContainer>
        <div className="text-center my-15">
          <h1 className="text-3xl font-bold">Features</h1>
          <p className="text-gray-500">
            Money Manager has easy and various features.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          {/*  left */}
          <div className="space-y-3">
            <div className="flex items-center group gap-5">
              <div className="text-end">
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"
                  open
                >
                  <summary className="collapse-title font-semibold">
                    Easy Content Access
                  </summary>
                  <div className="collapse-content text-sm">
                    Weekly, Monthly total and budgets are provided
                  </div>
                </details>
              </div>
              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center group gap-5">
              <div className="text-end">
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"
                  open
                >
                  <summary className="collapse-title font-semibold">
                    Reinforced Filter
                  </summary>
                  <div className="collapse-content text-sm">
                    Review your transactions
                  </div>
                </details>
              </div>
              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center group gap-5">
              <div className="text-end">
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"
                  open
                >
                  <summary className="collapse-title font-semibold">
                    Photo Save
                  </summary>
                  <div className="collapse-content text-sm">
                    Save receipt or memories together
                  </div>
                </details>
              </div>
              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point2.png"
                  alt=""
                />
              </div>
            </div>

            <div className="flex items-center group gap-5">
              <div className="text-end">
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"
                  open
                >
                  <summary className="collapse-title font-semibold">
                    Improved
                  </summary>
                  <div className="collapse-content text-sm">
                    Review all your monthly
                  </div>
                </details>
              </div>

              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point4.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="space-y-3">
            <div className="flex flex-row-reverse items-center group  gap-5">
              <div className="text-left">
                <h1 className="text-2xl font-bold">
                  Aesthetically Improved Charts
                </h1>
                <p className="text-gray-500">
                  Review your expenses with improved and well-organized charts
                </p>
              </div>
              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point5.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center group gap-5">
              <div className="flex flex-col justify-start">
                <h1 className="text-2xl font-bold">
                  Easier Double-entry Booking
                </h1>
                <p className="text-gray-500">
                  Manage your savings, insurance, loans and real-estate
                </p>
              </div>
              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point6.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center group gap-5">
              <div>
                <h1 className="text-2xl font-bold">Advanced Budget Feature</h1>
                <p className="text-gray-500">
                  Set a monthly budget for each category
                </p>
              </div>
              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point7.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center group gap-5">
              <div>
                <h1 className="text-2xl font-bold">Asset Graphs</h1>
                <p className="text-gray-500">
                  Review asset trend in your chart
                </p>
              </div>

              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point8.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Features;
