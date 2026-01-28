import React from "react";

export const Toaster = () => {
  return null; // Placeholder - replace with actual toast implementation
};

export const toast = {
  success: (title, description) => console.log("Toast:", title, description),
  error: (title, description) =>
    console.log("Error Toast:", title, description),
};
