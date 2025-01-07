const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-yellow-500 to-orange-500 py-12 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-2 rounded border focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-2 rounded border focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">
              Message
            </label>
            <textarea
              id="message"
              className="w-full mt-2 p-2 rounded border focus:outline-none focus:ring focus:ring-yellow-300"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="w-full bg-white text-yellow-500 font-semibold py-2 rounded hover:bg-gray-100 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default ContactSection;