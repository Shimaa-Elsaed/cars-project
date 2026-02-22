import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d99999.10838058441!2d31.34086625691031!3d30.059611343045265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2seg!4v1767300806297!5m2!1sar!2seg"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
