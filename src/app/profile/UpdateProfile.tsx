import Link from "next/link";

export default function UpdateProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Update Profile</h1>
            <p className="mt-2 text-sm text-gray-600">
              Manage your personal information and account settings.
            </p>
          </div>
          <Link
            href="/profile"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            &larr; Back to Profile
          </Link>
        </div>

        {/* Update Form Card */}
        <form
          action="#"
          method="POST"
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 space-y-8">
            {/* Avatar Upload Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Profile Photo
              </label>
              <div className="flex items-center space-x-6">
                <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 overflow-hidden">
                  <span className="text-3xl font-bold text-indigo-600">JD</span>
                  {/* If you had an image, it would go here: <img src="..." alt="" className="h-full w-full object-cover" /> */}
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    Change photo
                  </button>
                  <p className="text-xs text-gray-500">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  defaultValue="John"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  defaultValue="Doe"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                />
              </div>

              {/* Email Address */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue="john.doe@example.com"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  defaultValue="+1 (555) 123-4567"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  defaultValue="San Francisco, CA"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                />
              </div>

              {/* Bio/About */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  About / Bio
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Write a few sentences about yourself.
                </p>
                <textarea
                  id="about"
                  name="about"
                  rows={4}
                  defaultValue="Software Engineer with a passion for building responsive and accessible web applications."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors resize-y"
                />
              </div>
            </div>
          </div>

          {/* Form Actions (Footer) */}
          <div className="bg-gray-50 px-8 py-5 border-t border-gray-200 flex items-center justify-end space-x-4">
            <Link
              href="/profile"
              className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
