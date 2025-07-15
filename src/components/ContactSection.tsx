import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import MainCTAButton2 from "./MainCTSButton2";

const ContactSection = () => {
  const [userNumber, setUserNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    let trimmedNumber = userNumber.trim().replace(/[^0-9]/g, "");
    const trimmedMessage = message.trim();

    if (!trimmedNumber) {
      alert("Please enter your WhatsApp number.");
      return;
    }

    if (trimmedNumber.startsWith("09") && trimmedNumber.length === 11) {
      trimmedNumber = "63" + trimmedNumber.slice(1);
    }

    if (!(trimmedNumber.startsWith("63") && trimmedNumber.length === 12)) {
      alert(
        "Please enter a valid Philippine number (09xxxxxxxxx or 639xxxxxxxxx)."
      );
      return;
    }

    if (!trimmedMessage) {
      alert("Please enter a message.");
      return;
    }

    const recipient = "+639062334825"; // fixed recipient
    const encodedMessage = encodeURIComponent(trimmedMessage);
    const whatsappURL = `https://wa.me/${recipient}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-[120px] lg:pt-[180px] px-6 py-10 bg-gradient-to-b from-[#00BFFF] to-[#08268F] text-white">
      <h1 className="text-4xl font-semibold mb-16 lg:mb-32">Message Us</h1>
      <div className="w-full max-w-sm space-y-8">
        <input
          type="text"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
          placeholder="Your WhatsApp Number"
          className="w-full bg-transparent border-b border-white placeholder-white text-white focus:outline-none py-2 md:text-2xl"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message (max 160 chars)"
          maxLength={160}
          className="w-full bg-transparent border-b border-white placeholder-white text-white focus:outline-none py-2 md:text-2xl"
        />
        <div className="flex justify-center">
          <button onClick={handleSend}>
            <MainCTAButton2 label="Send Message" />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-12">
        <FaFacebookF className="text-4xl" />
        <FaInstagram className="text-4xl" />
        <FaTwitter className="text-4xl" />
        <FaMapMarkerAlt className="text-4xl" />
      </div>

      <div className="flex flex-col items-center mt-6 text-center text-sm md:text-lg">
        <p>Blk 9 Lot 22 Joshua St, Las Piñas, 1744 Metro Manila</p>
      </div>
    </div>
  );
};

export default ContactSection;
