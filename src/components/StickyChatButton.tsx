import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import chatIcon from "/images/sticky_cta.png";
import logoIcon from "/images/main_logo.png";

const StickyChatButtonWithModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userNumber, setUserNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      alert("Please enter a message.");
      return;
    }

    const recipient = "+639062334825"; // fixed recipient
    const encodedMessage = encodeURIComponent(trimmedMessage);
    const whatsappURL = `https://wa.me/${recipient}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
    setModalOpen(false);
    setUserNumber("");
    setMessage("");
  };

  return (
    <>
      {/* Sticky button */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-20 right-0 sm:right-12 text-white flex items-center gap-2 py-2 rounded-full z-40"
      >
        <img src={chatIcon} alt="Chat" className="w-32 h-32" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>

            {/* Modal content */}
            <div className="text-center mb-4">
              <img
                src={logoIcon}
                alt="Chat Logo"
                className="w-10 h-10 mx-auto mb-2"
              />
              <h2 className="text-lg font-semibold">Enter your message</h2>
              <p className="text-sm text-gray-500">
                We'll connect you directly on WhatsApp.
              </p>
            </div>

            {/* Inputs */}
            <p className="text-gray-700 text-sm mb-2 font-medium">
              Your Whatsapp Number
            </p>
            <input
              type="text"
              value={userNumber}
              onChange={(e) =>
                setUserNumber(e.target.value.replace(/[^0-9]/g, ""))
              }
              placeholder="Your WhatsApp Number"
              className="w-full border border-[#D5D7DA] rounded-lg px-3 py-3 mb-3 text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <p className="text-gray-700 text-sm mb-2 font-medium">
              Message (160 chars long)
            </p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message (160 chars max)"
              maxLength={160}
              className="w-full border border-[#D5D7DA] rounded-lg px-3 py-3 h-45 mb-4 text-sm focus:outline-none focus:ring focus:border-blue-300"
            />

            {/* Action buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="px-8 py-2 bg-[#08268F] text-white rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyChatButtonWithModal;
