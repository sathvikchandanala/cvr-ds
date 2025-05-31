import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Landmark, Building2, Mail } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [mapUrl, setMapUrl] = useState("");

  const openMapPopup = (url) => {
    setMapUrl(url);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen duration-500">
      <Nav />
      <main className="px-4 md:px-16 py-24 space-y-16">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Campus Address</h3>
                  <p className="text-sm mt-1">
                    CVR College Of Engineering,<br />
                    Vastunagar, Mangalpalli (V),<br />
                    Ibrahimpatnam (M), Rangareddy (D),<br />
                    Telangana 501510
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-sm mt-1">08414 661 601</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Landmark className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">EAPCET Code</h3>
                  <p className="text-sm mt-1">CVRH</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button
                className="w-full"
                onClick={() =>
                  openMapPopup(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.4621989573125!2d78.5944841749807!3d17.19635308365871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868b4727%3A0xf39a771705e23170!2sCVR%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1748702591222!5m2!1sen!2sin"
                  )
                }
              >
                View Campus Location
              </Button>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Building2 className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">City Office</h3>
                  <p className="text-sm mt-1">
                    #201 & 202, Ashoka Scintilla,<br />
                    above Mebaz and opp. Malabar Gold & Diamonds,<br />
                    Himayat Nagar,<br />
                    Hyderabad, Telangana 500029
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">E-Mail</h3>
                  <p className="text-sm mt-1">
                    For general enquiries:{" "}
                    <a
                      href="mailto:principal@cvr.ac.in"
                      className="text-blue-600 dark:text-blue-400 underline"
                    >
                      principal@cvr.ac.in
                    </a>
                    <br />
                    For admissions:{" "}
                    <a
                      href="mailto:snreddy@cvr.ac.in"
                      className="text-blue-600 dark:text-blue-400 underline"
                    >
                      snreddy@cvr.ac.in
                    </a>
                    <br />
                    For placements:{" "}
                    <a
                      href="mailto:placement@cvr.ac.in"
                      className="text-blue-600 dark:text-blue-400 underline"
                    >
                      placement@cvr.ac.in
                    </a>
                    <br />
                    For web-related queries:{" "}
                    <a
                      href="mailto:web@cvr.ac.in"
                      className="text-blue-600 dark:text-blue-400 underline"
                    >
                      web@cvr.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button
                className="w-full"
                onClick={() =>
                  openMapPopup(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2009061484723!2d78.48476219999999!3d17.4021435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dd1bddfa13%3A0x78b21c3c18ac3517!2sAshoka%20Scintilla%2C%20Himayat%20Nagar%20Rd%2C%20Sai%20Vihar%2C%20Advocates%20Colony%2C%20Himayatnagar%2C%20Hyderabad%2C%20Telangana%20500029!5e0!3m2!1sen!2sin!4v1748702711980!5m2!1sen!2sin"
                  )
                }
              >
                View City Office Location
              </Button>
            </div>
          </div>
        </motion.div>

      </main>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg"

          >
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg w-[90%] md:w-[600px] h-[400px] relative">
              <iframe
                title="Map View"
                src={mapUrl}
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
              />
              <button
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
