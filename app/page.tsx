export default function Page() {
  const products = [
    "Premium Teak Wood",
    "Designer Teak Doors",
    "Plywood & Laminates",
    "Custom Furniture",
    "Wooden Frames & Panels",
    "Interior Wood Solutions",
  ];

  const gallery = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-[#1c120b] text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6">
            Raghavendra Timber Depot
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Teak That Lasts a Lifetime
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918019549697"
              target="_blank"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold transition"
            >
              WhatsApp Enquiry
            </a>

            <a
              href="#products"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-2xl font-semibold transition"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 md:px-16 bg-[#24170f]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">
              About Us
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Raghavendra Timber Depot is a trusted destination in Adilabad for
              premium teak wood, quality plywood, designer doors, and elegant
              wooden furniture solutions. We focus on delivering durable,
              aesthetically crafted wood products suitable for homes,
              commercial spaces, and interiors.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              alt="Teak Wood"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-12">
            Our Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-[#2d1d13] p-8 rounded-3xl shadow-lg hover:scale-105 transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop"
                  alt={item}
                  className="rounded-2xl mb-6 h-52 w-full object-cover"
                />

                <h3 className="text-2xl font-semibold text-yellow-300">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 md:px-16 bg-[#24170f]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-12">
            Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div
                key={item}
                className="bg-[#382418] rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
                  alt="Gallery"
                  className="h-72 w-full object-cover"
                />

                <div className="p-4 text-gray-300 text-sm">
                  Placeholder for shop/furniture image
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">
            Contact Us
          </h2>

          <div className="bg-[#2d1d13] rounded-3xl p-10 shadow-2xl space-y-6">
            <p className="text-xl text-gray-200">
              📍 4-4-120/2/1/1, Opposite Collectorate, Vidya Nagar,
              Adilabad
            </p>

            <p className="text-xl text-gray-200">
              📞 +91 80195 49697
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/918019549697"
                target="_blank"
                className="bg-green-600 hover:bg-green-500 px-8 py-4 rounded-2xl font-semibold"
              >
                Chat on WhatsApp
              </a>

              <a
                href="https://maps.app.goo.gl/9e2C2BnP5TsYBS8D6"
                target="_blank"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-gray-400 border-t border-gray-800">
        <p>
          © 2026 Raghavendra Timber Depot • Crafted with Premium Teak
          Excellence
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918019549697"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-5 rounded-full shadow-2xl text-2xl"
      >
        💬
      </a>
    </div>
  );
}
