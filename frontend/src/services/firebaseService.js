import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  serverTimestamp,
  // query,
  // where,
  // getDocs,
  // orderBy,
  // limit,
  Timestamp,
} from "firebase/firestore";

/**
 * Submit contact form data from CompanyPage
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} - Result of submission
 */
export const submitContactForm = async (formData) => {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error("Name, email, and message are required");
    }

    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      type: "contact_mail",
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "Contact Form Submission",
      message: formData.message,
      timestamp: serverTimestamp(),
      status: "new",
      source: "company_page",
      userAgent: navigator.userAgent,
      read: false,
      responded: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    console.log("✅ Contact form submitted with ID: ", docRef.id);
    return {
      success: true,
      id: docRef.id,
      message: "Contact form submitted successfully",
    };
  } catch (error) {
    console.error("❌ Error submitting contact form: ", error);
    return {
      success: false,
      error: error.message,
      code: error.code,
      message: "Failed to submit contact form. Please try again later.",
    };
  }
};

/**
 * Submit demo request form from DemoModal
 * @param {Object} formData - Demo form data
 * @returns {Promise<Object>} - Result of submission
 */
export const submitDemoRequest = async (formData) => {
  try {
    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.company
    ) {
      throw new Error("Required fields are missing");
    }

    const docRef = await addDoc(collection(db, "demoRequests"), {
      type: "free_demo_mail",
      firstName: formData.firstName,
      lastName: formData.lastName,
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      company: formData.company,
      phone: formData.phone || "Not provided",
      message: formData.message || "No additional message",
      consent: formData.consent || false,
      timestamp: serverTimestamp(),
      status: "pending",
      source: "demo_modal",
      subject: `Demo Request from ${formData.firstName} ${formData.lastName} - ${formData.company}`,
      userAgent: navigator.userAgent,
      scheduled: false,
      followUpSent: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    console.log("✅ Demo request submitted with ID: ", docRef.id);
    return {
      success: true,
      id: docRef.id,
      message: "Demo request submitted successfully",
    };
  } catch (error) {
    console.error("❌ Error submitting demo request: ", error);

    // Provide user-friendly error message
    let userMessage = "Failed to submit demo request. Please try again later.";
    if (error.code === "permission-denied") {
      userMessage =
        "Permission denied. Please check your Firebase security rules.";
    } else if (error.code === "unavailable") {
      userMessage = "Network error. Please check your internet connection.";
    }

    return {
      success: false,
      error: error.message,
      code: error.code,
      message: userMessage,
    };
  }
};

/**
 * Submit chat escalation form from Chat component
 * @param {Object} formData - Chat escalation data
 * @param {Array} chatHistory - Previous chat messages
 * @returns {Promise<Object>} - Result of submission
 */
export const submitChatEscalation = async (formData, chatHistory = []) => {
  try {
    // Validate required fields
    if (!formData.email) {
      throw new Error("Email is required");
    }

    const docRef = await addDoc(collection(db, "chatEscalations"), {
      type: "chat_support_mail",
      name: formData.name || "Not provided",
      email: formData.email,
      message: formData.message || "No additional message",
      chatHistory: chatHistory.map((msg) => ({
        text: msg.text,
        isUser: msg.isUser,
        timestamp: new Date().toISOString(),
      })),
      timestamp: serverTimestamp(),
      status: "new",
      source: "chat_bot",
      subject: `Chat Support Request from ${formData.email}`,
      resolved: false,
      assignedTo: null,
      userAgent: navigator.userAgent,
      priority:
        formData.message && formData.message.length > 100 ? "high" : "normal",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    console.log("✅ Chat escalation submitted with ID: ", docRef.id);
    return {
      success: true,
      id: docRef.id,
      message: "Support request submitted successfully",
    };
  } catch (error) {
    console.error("❌ Error submitting chat escalation: ", error);

    // Provide user-friendly error message
    let userMessage =
      "Failed to submit support request. Please try again later.";
    if (error.code === "permission-denied") {
      userMessage =
        "Permission denied. Please check your Firebase security rules.";
    }

    return {
      success: false,
      error: error.message,
      code: error.code,
      message: userMessage,
    };
  }
};

/**
 * Test Firebase connection
 * @returns {Promise<Object>} - Test result
 */
export const testFirebaseConnection = async () => {
  try {
    // Try to write a test document
    const testRef = await addDoc(collection(db, "testConnection"), {
      test: true,
      timestamp: serverTimestamp(),
      message: "Testing Firebase connection",
    });

    console.log("✅ Firebase connection test successful");
    return {
      success: true,
      message: "Firebase connection successful",
      testId: testRef.id,
    };
  } catch (error) {
    console.error("❌ Firebase connection test failed: ", error);
    return {
      success: false,
      error: error.message,
      code: error.code,
      message: "Firebase connection failed",
    };
  }
};

/**
 * Submit book demo request from BookDemoModal
 * @param {Object} formData - Book demo form data
 * @returns {Promise<Object>} - Result of submission
 */
export const submitBookDemo = async (formData) => {
  try {
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      throw new Error("Full name, email, and phone are required");
    }

    const docRef = await addDoc(collection(db, "bookDemoRequests"), {
      type: "book_demo_mail",
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      demoDuration: formData.demoDuration || "",
      purpose: formData.purpose || "",
      preferredDate: formData.preferredDate || "",
      preferredTime: formData.preferredTime || "",
      specificFeatures: formData.specificFeatures || "",
      questions: formData.questions || "",
      agreeTerms: formData.agreeTerms || false,
      timestamp: serverTimestamp(),
      status: "pending",
      source: "book_demo_modal",
      subject: `Book Demo Request from ${formData.fullName}`,
      userAgent: navigator.userAgent,
      scheduled: false,
      followUpSent: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    console.log("✅ Book demo request submitted with ID: ", docRef.id);
    return {
      success: true,
      id: docRef.id,
      message: "Book demo request submitted successfully",
    };
  } catch (error) {
    console.error("❌ Error submitting book demo request: ", error);

    // Provide user-friendly error message
    let userMessage = "Failed to submit demo request. Please try again later.";
    if (error.code === "permission-denied") {
      userMessage =
        "Permission denied. Please check your Firebase security rules.";
    } else if (error.code === "unavailable") {
      userMessage = "Network error. Please check your internet connection.";
    }

    return {
      success: false,
      error: error.message,
      code: error.code,
      message: userMessage,
    };
  }
};

// Export all functions as a single object
const firebaseService = {
  submitContactForm,
  submitDemoRequest,
  submitChatEscalation,
  testFirebaseConnection,
  submitBookDemo,
};

export default firebaseService;
