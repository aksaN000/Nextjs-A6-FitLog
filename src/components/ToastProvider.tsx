"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#15171d",
          color: "#e5e7eb",
          border: "1px solid #232732",
          borderRadius: "12px",
          fontSize: "14px",
        },
        success: { iconTheme: { primary: "#ccff00", secondary: "#0f1115" } },
      }}
    />
  );
}
