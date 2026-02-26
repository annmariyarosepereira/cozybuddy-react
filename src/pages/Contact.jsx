import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let temp = {};

    if (!form.name.trim()) temp.name = "Name is required 💛";

    if (!form.email) {
      temp.email = "Email is required 💛";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      temp.email = "Enter a valid email 💛";
    }

    if (!form.message.trim()) temp.message = "Message cannot be empty 💛";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Message sent successfully 🌼");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="container mt-5">

      <div className="cozy-hero p-5">

        <h2 className="fw-bold text-center">Contact CozyBuddy 💌</h2>

        <form className="mt-4" onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="mb-3">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              className="form-control"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <small className="text-danger">{errors.message}</small>}
          </div>

          <div className="text-center">
            <button className="btn btn-warning px-4">
              Send 💌
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}