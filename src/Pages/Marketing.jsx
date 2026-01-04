import React from "react";

const Marketing = () => {
    return (
        <div className="bg-base-200 min-h-screen mt-17 py-14">
            <div className="max-w-6xl mx-auto px-4 space-y-16">

                {/* Hero Section */}
                <section className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Smart <span className="text-[#875DF8]">Marketing</span> Solutions
                    </h1>
                    <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
                        Grow your brand, reach the right audience, and boost conversions
                        with data-driven marketing strategies.
                    </p>
                </section>

                {/* Services */}
                <section className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Digital Marketing",
                            desc: "SEO, SEM, and performance-driven campaigns",
                        },
                        {
                            title: "Social Media",
                            desc: "Engaging content for Facebook, Instagram & LinkedIn",
                        },
                        {
                            title: "Brand Strategy",
                            desc: "Build trust and recognition with strong branding",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-base-100 rounded-xl shadow p-6 text-center"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-base-content/70">{item.desc}</p>
                        </div>
                    ))}
                </section>

                {/* Why Choose Us */}
                <section className="bg-base-100 rounded-xl shadow p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Why Choose Us
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-3 text-base-content/80">
                            <li>✔ Result-oriented marketing approach</li>
                            <li>✔ Data-driven decisions</li>
                            <li>✔ Transparent reporting</li>
                            <li>✔ Growth-focused strategies</li>
                        </ul>

                        <div className="flex items-center justify-center">
                            <img
                                src="https://img.freepik.com/premium-vector/about-us_773186-1363.jpg?semt=ais_hybrid&w=740&q=80"
                                alt="Marketing"
                                className="max-w-sm"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Marketing;
