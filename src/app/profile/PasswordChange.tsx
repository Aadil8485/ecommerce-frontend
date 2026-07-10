import Link from "next/link";

export default function ChangePasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Password Change Card */}
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        {/* Header Section */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Change Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ensure your account is using a long, random password to stay secure.
          </p>
        </div>

        {/* Form Section */}
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-5">
            {/* Current Password */}
            <div>
              <label
                htmlFor="current-password"
                className="block text-sm font-medium text-gray-700"
              >
                Current Password
              </label>
              <input
                id="current-password"
                name="current_password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-colors"
              />
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                id="new-password"
                name="new_password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-colors"
              />
            </div>

            {/* Confirm New Password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <input
                id="confirm-password"
                name="confirm_password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-colors"
              />
            </div>
          </div>

          {/* Password Requirements Hint */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-xs text-gray-600 space-y-2">
            <p className="font-medium text-gray-900">Password requirements:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Minimum of 8 characters long</li>
              <li>At least one uppercase character</li>
              <li>At least one number or special symbol</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between space-x-4 pt-2">
            <Link
              href="/profile"
              className="w-full flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
