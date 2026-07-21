import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section: Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Column 1: Brand & Description (Takes up 2 columns on desktop) */}
          <div className="md:col-span-2 md:pr-10">
            <Link href="/" className="mb-6 flex items-center">
              {/* Simulating the 'Q' icon to match the navbar */}
              <span className="text-3xl font-bold text-blue-500">E</span>
              <span className="text-2xl font-bold tracking-tight text-gray-800">
                -Commerce
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-gray-900">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-gray-900">
              Get in touch
            </h3>
            <ul className="space-y-4">
              <li className="text-sm text-gray-500">+1-234-000-111</li>
              <li>
                <a
                  href="mailto:contact@greatstack.dev"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  contact@E-commerce.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-600">
            Copyright 2026 © GreatStack.dev All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
