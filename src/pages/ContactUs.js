import React from "react";

// Import Lib
import { motion } from "framer-motion";
import { pageAnimation } from "../styles/animations";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1 style={{ marginTop: "10vh" }}>Contact Us page</h1>
    </motion.div>
  );
};

export default ContactUs;
