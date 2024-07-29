"use client";

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS directly

const BootstrapClient = () => {
  useEffect(() => {
    const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.3/font/bootstrap-icons.min.css";
        document.head.appendChild(link);
    // Import JS file inside useEffect if necessary
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded');
      })
      .catch(err => {
        console.error('Error loading Bootstrap JS', err);
      });
  }, []);

  return null;
};

export default BootstrapClient;
