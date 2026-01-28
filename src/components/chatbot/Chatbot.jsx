import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Mail,
  Phone,
  Building,
  User,
} from "lucide-react";
import faqData from "../../data/faqData.json";
import flowConfig from "../../data/chatbotFlow.json";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentStep, setCurrentStep] = useState("initial");
  const [isTyping, setIsTyping] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    question: "",
  });
  const [userExists, setUserExists] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const messagesEndRef = useRef(null);

  // Helper: Get random message from array
  const getRandomMessage = (messageArray) => {
    return messageArray[Math.floor(Math.random() * messageArray.length)];
  };

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("hourmaker_user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setFormData(userData);
      setUserExists(true);
    }
  }, []);

  // Save user data to localStorage
  const saveUserData = (data) => {
    localStorage.setItem("hourmaker_user", JSON.stringify(data));
    setUserExists(true);
  };

  // Initialize chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation();
    }
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showFAQs]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const startConversation = () => {
    // Random opening greeting
    const openingGreeting = getRandomMessage(flowConfig.greetings.opening);
    addBotMessage(openingGreeting);
    setCurrentStep("awaitingResponse");
  };

  const addMessage = (text, isUser = false) => {
    const newMessage = {
      id: Date.now(),
      text,
      isUser,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addBotMessage = (text, delay = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage(text, false);
      setIsTyping(false);
    }, delay);
  };

  const handleUserResponse = (text) => {
    if (!text.trim()) return;

    addMessage(text, true);

    switch (currentStep) {
      case "awaitingResponse":
        // Random acknowledgement
        const acknowledgement = getRandomMessage(
          flowConfig.greetings.acknowledgements,
        );
        addBotMessage(acknowledgement, 500);

        // Random welcome message
        setTimeout(() => {
          const welcomeMsg = getRandomMessage(flowConfig.greetings.welcome);
          addBotMessage(welcomeMsg);
          showMainOptions();
        }, 1200);
        break;

      case "customName":
        if (!text.trim()) {
          const errorMsg = getRandomMessage(
            flowConfig.flows.customChat.name.error,
          );
          addBotMessage(errorMsg);
        } else {
          const updatedForm = { ...formData, name: text };
          setFormData(updatedForm);
          const greetMsg = getRandomMessage(
            flowConfig.flows.customChat.greetName,
          ).replace("{name}", text);
          addBotMessage(greetMsg);
          askEmail();
        }
        break;

      case "customEmail":
        if (!validateEmail(text)) {
          const errorMsg = getRandomMessage(
            flowConfig.flows.customChat.email.error,
          );
          addBotMessage(errorMsg);
        } else {
          setFormData((prev) => ({ ...prev, email: text }));
          askPhone();
        }
        break;

      case "customPhone":
        if (!validatePhone(text)) {
          const errorMsg = getRandomMessage(
            flowConfig.flows.customChat.phone.error,
          );
          addBotMessage(errorMsg);
        } else {
          setFormData((prev) => ({ ...prev, phone: text }));
          askCompany();
        }
        break;

      case "customCompany":
        if (!text.trim()) {
          const errorMsg = getRandomMessage(
            flowConfig.flows.customChat.company.error,
          );
          addBotMessage(errorMsg);
        } else {
          setFormData((prev) => ({ ...prev, company: text }));

          // Save to localStorage when all data is collected
          const finalData = { ...formData, company: text };
          saveUserData(finalData);

          askQuestion();
        }
        break;

      case "customQuestion":
        setFormData((prev) => ({ ...prev, question: text }));
        showSubmitButton();
        break;
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d+$/;
    return re.test(phone) && phone.length >= 8 && phone.length <= 15;
  };

  const showMainOptions = () => {
    setCurrentStep("mainOptions");
  };

  const handleOptionClick = (option) => {
    addMessage(option, true);

    if (option === "FAQ") {
      setShowFAQs(true);
      setCurrentStep("browsingFAQ");
    } else if (option === "Custom Chat") {
      startCustomChat();
    } else if (option === "Yes") {
      handleUpdateChoice(true);
    } else if (option === "No") {
      handleUpdateChoice(false);
    }
  };

  const startCustomChat = () => {
    if (userExists && formData.name) {
      // Existing user - ask if they want to update details with buttons
      setCurrentStep("updateChoice");
      const updateQuestion = getRandomMessage(
        flowConfig.flows.customChat.updateChoice.question,
      );
      addBotMessage(`${formData.name}, ${updateQuestion}`);
    } else {
      // New user - start from beginning
      setCurrentStep("customName");
      const nameQuestion = getRandomMessage(
        flowConfig.flows.customChat.name.question,
      );
      addBotMessage(nameQuestion);
    }
  };

  const handleUpdateChoice = (shouldUpdate) => {
    if (shouldUpdate) {
      setUpdateData(true);
      askName();
    } else {
      setUpdateData(false);
      const continueMsg = getRandomMessage(
        flowConfig.flows.customChat.updateChoice.continueWithSaved,
      );
      addBotMessage(`${continueMsg} ${formData.name}, ${formData.email}`);
      askQuestion();
    }
  };

  const askName = () => {
    setCurrentStep("customName");
    const nameQuestion = getRandomMessage(
      flowConfig.flows.customChat.name.question,
    );
    addBotMessage(nameQuestion);
  };

  const askEmail = () => {
    setCurrentStep("customEmail");
    const emailQuestion = getRandomMessage(
      flowConfig.flows.customChat.email.question,
    );
    addBotMessage(emailQuestion);
  };

  const askPhone = () => {
    setCurrentStep("customPhone");
    const phoneQuestion = getRandomMessage(
      flowConfig.flows.customChat.phone.question,
    );
    addBotMessage(phoneQuestion);
  };

  const askCompany = () => {
    setCurrentStep("customCompany");
    const companyQuestion = getRandomMessage(
      flowConfig.flows.customChat.company.question,
    );
    addBotMessage(companyQuestion);
  };

  const askQuestion = () => {
    setCurrentStep("customQuestion");
    const questionPrompt = getRandomMessage(
      flowConfig.flows.customChat.question.prompt,
    );
    addBotMessage(questionPrompt);
  };

  const showSubmitButton = () => {
    setCurrentStep("readyToSubmit");
    addBotMessage("Please review your information and click Submit:", 300);
  };

  const submitForm = () => {
    // Construct mailto URL
    const subject = "New Chatbot Inquiry - Hourmaker";
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Question: ${formData.question}

Submitted via Hourmaker Chatbot on ${new Date().toLocaleString()}
    `.trim();

    const mailtoUrl = `mailto:sinhaaman655@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // This will later be replaced with backend API (Node.js + Nodemailer)
    window.location.href = mailtoUrl;

    // Show success message
    const successMsg = getRandomMessage(
      flowConfig.flows.customChat.submit.success,
    );
    addMessage("Submit", true);
    addBotMessage(successMsg);

    // Clear the question for next time
    setFormData((prev) => ({ ...prev, question: "" }));

    // Continue conversation
    setTimeout(() => {
      const followUp = getRandomMessage(flowConfig.flows.afterFlow.followUp);
      addBotMessage(followUp);
      showMainOptions();
    }, 1500);
  };

  const handleFAQClick = (faq) => {
    if (!faq) return;

    addMessage(faq.question, true);
    setShowFAQs(false);

    setIsTyping(true);
    setTimeout(() => {
      addBotMessage(faq.answer);
      setIsTyping(false);

      setTimeout(() => {
        const followUp = getRandomMessage(flowConfig.flows.afterFlow.followUp);
        addBotMessage(followUp);
        showMainOptions();
      }, 1000);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue) {
        handleUserResponse(trimmedValue);
        setInputValue("");
      }
    }
  };

  const getInputPlaceholder = () => {
    switch (currentStep) {
      case "awaitingResponse":
        return "Type your reply...";
      case "customEmail":
        return "name@company.com";
      case "customPhone":
        return "Enter phone number (digits only)";
      default:
        return "Type here...";
    }
  };

  const renderOptions = () => {
    if (showFAQs) return null;

    if (currentStep === "mainOptions") {
      return (
        <div className="p-3 border-t border-border">
          <div className="flex flex-col gap-2">
            {flowConfig.flows.mainOptions.buttons.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="p-2 bg-primary-light hover:bg-primary hover:text-white rounded-lg transition-colors text-sm font-medium text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (currentStep === "updateChoice") {
      return (
        <div className="p-3 border-t border-border">
          <div className="flex flex-col gap-2">
            {["Yes", "No"].map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`p-2 rounded-lg transition-colors text-sm font-medium text-left ${
                  option === "Yes"
                    ? "bg-primary-light hover:bg-primary hover:text-white"
                    : "bg-muted hover:bg-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (currentStep === "readyToSubmit") {
      return (
        <div className="p-4 border-t border-border">
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm">
                <strong>Name:</strong> {formData.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm">
                <strong>Email:</strong> {formData.email}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm">
                <strong>Phone:</strong> {formData.phone}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm">
                <strong>Company:</strong> {formData.company}
              </span>
            </div>
            <div className="text-sm">
              <strong>Question:</strong> {formData.question}
            </div>
          </div>
          <div className="flex gap-2">
            {/* <button
              onClick={() => {
                // Clear localStorage and start fresh
                localStorage.removeItem("hourmaker_user");
                setUserExists(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  question: "",
                });
                addMessage("Clear data", true);
                addBotMessage("Data cleared. Starting fresh...");
                setTimeout(() => startCustomChat(), 1000);
              }}
              className="flex-1 py-2 border-2 border-destructive text-destructive font-semibold rounded-xl hover:bg-destructive/10 transition-colors text-sm"
            >
              Clear Data
            </button> */}
            <button
              onClick={submitForm}
              className="flex-1 py-2 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              {flowConfig.flows.customChat.submit.button}
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderInputField = () => {
    if (showFAQs) return null;

    const needsInput = [
      "awaitingResponse",
      "customName",
      "customEmail",
      "customPhone",
      "customCompany",
      "customQuestion",
    ].includes(currentStep);

    if (!needsInput) return null;

    return (
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={getInputPlaceholder()}
            className="flex-1 px-3 py-2 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-sm"
          />
          <button
            onClick={() => {
              const trimmedValue = inputValue.trim();
              if (trimmedValue) {
                handleUserResponse(trimmedValue);
                setInputValue("");
              }
            }}
            className="px-4 py-2 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const renderFAQs = () => {
    if (!showFAQs) return null;

    return (
      <div className="p-3 border-t border-border">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h4 className="font-poppins font-semibold text-primary-dark mb-1 ml-1">
              {flowConfig.flows.faq.browseTitle}
            </h4>
            <p className="text-sm ml-1 text-muted-foreground">
              {getRandomMessage(flowConfig.flows.faq.selectPrompt)}
            </p>
          </div>
          <button
            onClick={() => {
              setShowFAQs(false);
              const followUp = getRandomMessage(
                flowConfig.flows.afterFlow.followUp,
              );
              addBotMessage(followUp);
              showMainOptions();
            }}
            className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 max-h-64 overflow-y-auto pr-1 no-scrollbar">
          {faqData.questions.map((faq) => (
            <button
              key={faq.id}
              onClick={() => handleFAQClick(faq)}
              className="w-full text-left text-sm p-3 bg-muted hover:bg-primary-light rounded-xl transition-colors group border border-border hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "bg-destructive hover:bg-red-600"
            : "bg-primary hover:bg-primary-dark"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white mx-auto" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white mx-auto" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50  w-[85vw] md:w-96 max-w-96 h-[80vh] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col ">
          {/* Header */}
          <div className="bg-primary text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold">
                    Hourmaker Assistant
                  </h3>
                  <p className="text-xs opacity-90">Live chat support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 no-scrollbar ">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${message.isUser ? "text-right" : ""}`}
              >
                <div
                  className={`inline-block max-w-[80%] rounded-2xl p-2 ${
                    message.isUser
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <div
                    className={`text-[8px] mt-1 ${
                      message.isUser
                        ? "text-primary-light"
                        : "text-muted-foreground"
                    }`}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="mb-4">
                <div className="inline-block bg-muted rounded-2xl rounded-bl-none p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* FAQs Section */}
          {renderFAQs()}

          {/* Options Section */}
          {renderOptions()}

          {/* Input Field */}
          {renderInputField()}
        </div>
      )}
    </>
  );
};

export default Chatbot;
