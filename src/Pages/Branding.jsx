import React from "react";

const Branding = () => {
  return (
    <div className="bg-base-50 min-h-screen mt-17 py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[#875DF8]">Brand</span> Identity
          </h1>
          <p className="text-base-600 text-lg max-w-2xl mx-auto">
            We build a financial experience that is simple, secure, and smart —
            designed to empower your money journey.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-base-600 leading-relaxed">
              FinEase aims to simplify personal finance management by providing
              intuitive tools that help people track expenses, manage budgets,
              and achieve financial freedom with confidence.
            </p>
          </div>
          <div className="bg-base-200 rounded-xl shadow p-6">
            <ul className="space-y-3 text-base-600">
              <li>✔ Simplicity First</li>
              <li>✔ User-Centered Design</li>
              <li>✔ Trust & Transparency</li>
              <li>✔ Smart Financial Insights</li>
            </ul>
          </div>
        </section>

        {/* Brand Colors */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Brand Colors
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Primary", color: "#875DF8" },
              { name: "Secondary", color: "#6F48E6" },
              { name: "Dark", color: "#1F2937" },
              { name: "Light", color: "#F3F4F6" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-base-200 rounded-xl shadow p-4 text-center"
              >
                <div
                  className="h-20 rounded-lg mb-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-base-500">{item.color}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="bg-base-300 rounded-xl shadow p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Typography
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Headings</h3>
              <p className="text-4xl font-bold">Inter / Poppins</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Body Text</h3>
              <p className="text-base-600">
                Clean, readable, and modern typography for financial clarity.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Brand Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Trust",
                desc: "Security and transparency in every transaction",
              },
              {
                title: "Innovation",
                desc: "Smart solutions powered by technology",
              },
              {
                title: "Growth",
                desc: "Helping users grow financially",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-base-200 rounded-xl shadow p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-base-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
};

export default Branding;
