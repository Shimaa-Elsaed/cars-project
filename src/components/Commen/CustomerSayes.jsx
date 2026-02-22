import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { team } from "@/assets/image";

const testimonials = [
  {
    title: "Great Work",
    text: "Amazing design, easy to customize and high quality performance.",
    image: team[0],
    name: "Leslie Alexander",
    role: "Marketing",
  },
  {
    title: "Awesome Design",
    text: "Very clean and professional layout. I really love the animations.",
    image: team[1],
    name: "Floyd Miles",
    role: "Designer",
  },
  {
    title: "Excellent Support",
    text: "Customer service was fast and very helpful with my questions.",
    image: team[2],
    name: "Dianne Russell",
    role: "Developer",
  },
  {
    title: "Perfect Experience",
    text: "Everything was smooth from start to finish. Highly recommended.",
    image: team[3],
    name: "Robert Fox",
    role: "Manager",
  },
  {
    title: "Very Reliable",
    text: "The cars were exactly as described and the service was excellent.",
    image: team[4],
    name: "Jenny Wilson",
    role: "Entrepreneur",
  },
  {
    title: "Super Quality",
    text: "I found my dream car easily. The process was simple and fast.",
    image: team[5],
    name: "Guy Hawkins",
    role: "Business Owner",
  },
];

const CustomerSayes = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const total = testimonials.length;

  // ✅ تحديد عدد الكروت حسب حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // موبايل
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // تابلت
      } else {
        setVisibleCards(3); // ديسكتوب
      }
    };

    handleResize(); // أول تحميل
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Next
  const nextSlide = () => {
    if (startIndex + visibleCards >= total) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  // Prev
  const prevSlide = () => {
    if (startIndex === 0) {
      setStartIndex(total - visibleCards);
    } else {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* العنوان */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 text-center sm:text-left gap-4">
          <h2 className="text-3xl font-bold">What our customers say</h2>

          <p className="text-gray-500 text-sm">
            Rated 4.7 / 5 based on 28,370 reviews
          </p>
        </div>

        {/* الكروت */}
        <div className="flex gap-6 overflow-hidden">
          {testimonials
            .slice(startIndex, startIndex + visibleCards)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md flex-1 transition-all duration-500"
              >
                <h3 className="font-semibold text-lg mb-4">{item.title}</h3>

                <p className="text-gray-600 text-sm mb-6">{item.text}</p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-gray-400 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* أزرار التحكم */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-200 transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-200 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSayes;
