import React from "react";

const Design = () => {
    return (
        <div className="bg-base-200 min-h-screen mt-17 py-14">
            <div className="max-w-6xl mx-auto px-4 space-y-16">

                {/* Hero */}
                <section className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Creative <span className="text-[#875DF8]">Design</span> Solutions
                    </h1>
                    <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
                        We design beautiful, user-friendly interfaces that turn ideas into
                        engaging digital experiences.
                    </p>
                </section>

                {/* Services */}
                <section className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "UI Design",
                            desc: "Clean, modern interfaces with great usability",
                        },
                        {
                            title: "UX Research",
                            desc: "User-focused design decisions based on research",
                        },
                        {
                            title: "Brand Design",
                            desc: "Consistent visuals that represent your brand",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-base-100 rounded-xl shadow p-6 text-center hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-base-content/70">{item.desc}</p>
                        </div>
                    ))}
                </section>

                {/* Design Process */}
                <section className="bg-base-100 rounded-xl shadow p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Our Design Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        {[
                            "Research",
                            "Wireframing",
                            "Visual Design",
                            "Delivery",
                        ].map((step, i) => (
                            <div key={i}>
                                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#875DF8] text-white flex items-center justify-center font-bold">
                                    {i + 1}
                                </div>
                                <p className="font-semibold">{step}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tools */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Tools We Use
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            "Figma",
                            "Adobe XD",
                            "Photoshop",
                            "Illustrator",
                        ].map((tool, i) => (
                            <div
                                key={i}
                                className="bg-base-100 rounded-xl shadow p-4 font-semibold"
                            >
                                {tool}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Design;
