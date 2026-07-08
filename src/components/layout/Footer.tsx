import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-indigo-600 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Subscribe to our E-commerce Store
            </h3>
            <p className="mt-2 text-sm text-indigo-100">
              Get the latest updates on new products and upcoming sales.
            </p>
          </div>
          <form className="flex w-full max-w-md items-center gap-2">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-300 focus:border-white focus:ring-white sm:text-sm"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand/About Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-tight"
            >
              E-commerce Store
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-400 max-w-sm">
              Making the world a better place through constructing elegant
              hierarchies and premium quality products built to last.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Shop</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Women's Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm leading-6 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} StoreName, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
