import { useState } from "react";
import { Mail, Phone, MessageCircle, ShieldAlert, HelpCircle } from "lucide-react";
import { toast } from "react-toastify";
import { BiCheckCircle } from "react-icons/bi";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Support Request:", formData);

    toast.success("Support request submitted successfully!",{
      progressClassName: "!bg-[#875df8]",
      icon: <BiCheckCircle className="text-[#875df8] w-5 h-5" />
    });

    // ✅ Reset form
    setFormData({
      name: "",
      email: "",
      issue: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-base-50 px-4 py-10 mt-10">
      <div className="mx-auto max-w-6xl space-y-10">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-base-900">
            FinEase Support Center
          </h1>
          <p className="text-base-600 max-w-2xl mx-auto">
            We’re here to help you manage your finances smoothly and securely.
          </p>
        </div>

        {/* Quick Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-base-200 p-6 rounded-2xl shadow-sm space-y-3">
            <Mail className="h-8 w-8 text-[#875DF8]" />
            <h3 className="font-semibold text-lg">Email Support</h3>
            <p className="text-sm text-base-600">support@finease.com</p>
          </div>

          <div className="bg-base-200 p-6 rounded-2xl shadow-sm space-y-3">
            <Phone className="h-8 w-8 text-[#875DF8]" />
            <h3 className="font-semibold text-lg">Phone Support</h3>
            <p className="text-sm text-base-600">+880 123 456 789</p>
          </div>

          <div className="bg-base-200 p-6 rounded-2xl shadow-sm space-y-3">
            <MessageCircle className="h-8 w-8 text-[#875DF8]" />
            <h3 className="font-semibold text-lg">Live Chat</h3>
            <p className="text-sm text-base-600">10 AM – 8 PM</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-base-200 p-8 rounded-2xl shadow-sm space-y-6"
        >
          <h2 className="text-2xl font-semibold text-base-900">
            Submit a Support Request
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
              placeholder="Full Name"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
              placeholder="Email Address"
              required
            />
          </div>

          <input
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full"
            placeholder="Issue Type"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="border rounded-lg px-3 py-2 w-full"
            placeholder="Describe your issue..."
            required
          />

          <button
            type="submit"
            className="bg-[#875DF8] text-white px-6 py-2 rounded-lg"
          >
            Submit Request
          </button>
        </form>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-base-200 p-6 rounded-2xl shadow-sm space-y-2">
              <HelpCircle className="text-[#875DF8]" />
              <h4 className="font-medium">Why did my transaction fail?</h4>
              <p className="text-sm text-base-600">
                Network issues or insufficient balance.
              </p>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl shadow-sm space-y-2">
              <ShieldAlert className="text-[#875DF8]" />
              <h4 className="font-medium">Is FinEase secure?</h4>
              <p className="text-sm text-base-600">
                Yes, bank-level security is used.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-base-500">
          ⏱ Typical response time: within 24 hours
        </p>

      </div>
    </div>
  );
}
