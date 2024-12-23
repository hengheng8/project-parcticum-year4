

function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 m-5">
        {/* Support Section */}
        <div>
          <h2 className="font-bold text-xl">Support</h2>
          <ul className="mt-4 space-y-2">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h2 className="font-bold text-xl">About</h2>
          <ul className="mt-4 space-y-2">
            <li>Our Story</li>
            <li>Mission & Vision</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="font-bold text-xl">Resources</h2>
          <ul className="mt-4 space-y-2">
            <li>Guides & Tips</li>
            <li>Blog</li>
            <li>Success Stories</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h2 className="font-bold text-xl">Stay Updated</h2>
          <p className="mt-4">Subscribe for habit-tracking tips and updates:</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-l-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Follow Us Section */}
        <div className="mt-10 text-center">
            <h2 className="font-bold text-xl">Follow Us</h2>
        <div className="mt-4">
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600"
    >
      Facebook
    </a>
    <span className="mx-2 text-white">|</span>
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-500"
    >
      Instagram
    </a>
    <span className="mx-2 text-white">|</span>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400"
    >
      Twitter
    </a>
    <span className="mx-2 text-white">|</span>
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-700"
    >
      LinkedIn
    </a>
  </div>
</div>


      <div className="mt-10 text-center">
        <p>&copy; 2024 Habit Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
