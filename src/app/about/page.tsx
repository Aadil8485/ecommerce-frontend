import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We are passionate about building scalable, accessible, and
              high-performance web applications. Our goal is to craft digital
              experiences that users love.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Get in Touch
            </button>
          </div>

          {/* Image/Visual Content */}
          <div className="lg:w-1/2 w-full">
            <div className="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-12 relative rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
              {/* Note: In a real app, use the next/image component below */}
              {/* <Image src="/team-photo.jpg" alt="Our Team" fill className="object-cover" /> */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-gray-200">
                [ Hero Image Placeholder ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
            <p className="text-gray-600">
              We leverage modern frameworks and architectures to solve complex
              problems simply.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Performance
            </h3>
            <p className="text-gray-600">
              Speed is a feature. We optimize every layer to ensure
              lightning-fast load times.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Accessibility
            </h3>
            <p className="text-gray-600">
              The web is for everyone. We build inclusive interfaces that work
              for all users.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
