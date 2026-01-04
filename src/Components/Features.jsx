import React from "react";
import MyContainer from "./MyContainer";

const Features = () => {
  return (
    <div>
      <MyContainer>
        <div className="text-center mt-10 mb-5">
          <h1 className="text-3xl font-bold">Features</h1>
          <p className="text-gray-500">
            Money Manager has easy and various features.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          {/*  left */}
          <div className="space-y-3">
            <div className="flex items-center group gap-5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="text-end">
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"

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
            <div className="flex items-center group gap-5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="text-end">
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"
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
            <div className="flex items-center group gap-5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="text-end">
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"

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

            <div className="flex items-center group gap-5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="text-end">
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"

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
            <div className="flex flex-row-reverse items-center group  gap-5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="text-left">
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"

                >
                  <summary className="collapse-title font-semibold">
                    Aesthetically Improved Charts more
                  </summary>
                  <div className="collapse-content text-sm">
                    Review your expenses with improved and well-organized charts{" "}
                  </div>
                </details>
              </div>
              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point5.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center group gap-5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="flex flex-col justify-start">
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"

                >
                  <summary className="collapse-title font-semibold">
                    Easier Double-entry Booking
                  </summary>
                  <div className="collapse-content text-sm">
                    Manage your savings, insurance, loans and real-estate
                  </div>
                </details>
              </div>
              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point6.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center group gap-5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div>
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"

                >
                  <summary className="collapse-title font-semibold">
                    Advanced Budget Feature
                  </summary>
                  <div className="collapse-content text-sm">
                    Set a monthly budget for each category
                  </div>
                </details>
              </div>
              <div className="flex items-center justify-center w-30 h-30 border group-hover:bg-[#875DF8] duration-500 border-[#875DF8] rounded-full">
                <img
                  className=" w-15 h-15 group-hover:filter group-hover:brightness-0 duration-500"
                  src="https://www.realbyteapps.com/images/main/bg_point7.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center group gap-5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div>
                <details
                  className="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"

                >
                  <summary className="collapse-title font-semibold">
                    Asset Graphs
                  </summary>
                  <div className="collapse-content text-sm">
                    Review asset trend in your chart
                  </div>
                </details>
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
