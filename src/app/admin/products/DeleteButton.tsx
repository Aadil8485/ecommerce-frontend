// src/app/admin/products/DeleteButton.tsx
"use client"; // Yeh batata hai ki yeh ek client component hai

export default function DeleteButton() {
  return (
    <button
      type="submit"
      className="bg-red-50 text-red-600 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-red-100 transition"
      onClick={(e) => {
        if (
          !confirm("Kya aap sach me is product ko delete karna chahte hain?")
        ) {
          e.preventDefault(); // Agar User cancel kare toh form submit mat karo
        }
      }}
    >
      Delete
    </button>
  );
}
