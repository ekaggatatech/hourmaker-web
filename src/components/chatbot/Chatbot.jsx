import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Mail,
  Loader2,
  CheckCircle,
  XCircle,
  User,
  RotateCcw,
  Download,
  Menu,
  LogOut,
} from "lucide-react";
import faqData from "./faqData.json";
import flowConfig from "./chatbotFlow.json";
import { submitChatEscalation } from "../../services/firebaseService";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [chatState, setChatState] = useState("idle"); // idle, chatting, escalation, submitting, submitted, error
  const [randomIntents, setRandomIntents] = useState([]);
  const [escalationErrors, setEscalationErrors] = useState({});
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [hoveredIntent, setHoveredIntent] = useState(null);
  const [botIsTyping, setBotIsTyping] = useState(false);
  const [pendingBotReply, setPendingBotReply] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Generate unique ID
  const generateId = () => Math.random().toString(36).substring(2, 11);

  // Get random message from array
  const getRandomMessage = (messageArray) => {
    return messageArray[Math.floor(Math.random() * messageArray.length)];
  };

  // Get random answer from intent's answers array
  const getRandomAnswer = (answersArray) => {
    return answersArray[Math.floor(Math.random() * answersArray.length)];
  };

  // Get 3 random intents
  const getRandomIntents = useCallback(() => {
    const shuffled = [...faqData.intents].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  // Initialize random intents
  useEffect(() => {
    setRandomIntents(getRandomIntents());
  }, [getRandomIntents]);

  // Refresh random intents
  const refreshRandomIntents = () => {
    setRandomIntents(getRandomIntents());
  };

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("hourmaker_user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUserData(userData);
    }
  }, []);

  // Save user data to localStorage
  const saveUserData = (data) => {
    localStorage.setItem("hourmaker_user", JSON.stringify(data));
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
  }, [messages, botIsTyping, randomIntents]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Refresh intents after bot message
  useEffect(() => {
    if (!botIsTyping && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && !lastMessage.isUser) {
        // Add a small delay before refreshing intents
        setTimeout(() => {
          refreshRandomIntents();
        }, 300);
      }
    }
  }, [messages, botIsTyping]);

  // Handle pending bot reply
  useEffect(() => {
    if (pendingBotReply && !botIsTyping) {
      const newMessage = {
        id: generateId(),
        text: pendingBotReply,
        isUser: false,
      };
      setMessages((prev) => [...prev, newMessage]);
      setPendingBotReply(null);
    }
  }, [pendingBotReply, botIsTyping]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const startConversation = () => {
    const openingGreeting = getRandomMessage(flowConfig.greetings.opening);
    addBotMessage(openingGreeting);
  };

  const addMessage = (text, isUser = false) => {
    const newMessage = {
      id: generateId(),
      text,
      isUser,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  // Get random delay between 3-7 seconds (3000-7000ms)
  const getRandomDelay = () => {
    return Math.floor(Math.random() * 4000) + 3000; // 3000-7000ms
  };

  const addBotMessage = (text) => {
    setBotIsTyping(true);
    const delay = getRandomDelay(); // Use random delay

    setTimeout(() => {
      setPendingBotReply(text);
      setBotIsTyping(false);
    }, delay);
  };

  // Format intent name to uppercase with underscores as spaces
  const formatIntentName = (intentName) => {
    return intentName
      .split("_")
      .map((word) => word.toUpperCase())
      .join(" ");
  };

  // Download chat transcript
  const downloadChatTranscript = () => {
    if (messages.length === 0) return;

    const transcript = messages
      .map((msg) => {
        const timestamp = new Date().toLocaleString();
        const sender = msg.isUser ? "You" : "Aman (Hourmaker Support)";
        return `[${timestamp}] ${sender}: ${msg.text}`;
      })
      .join("\n\n");

    const blob = new Blob([transcript], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hourmaker-chat-transcript-${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Close menu after download
    setShowMenu(false);
  };

  // Advanced intent matching with keyword scoring
  const findMatchingIntent = (userInput) => {
    // Normalize user input
    const normalizedInput = userInput.toLowerCase().trim();

    // Check if it's meaningful input
    const isMeaningfulInput =
      normalizedInput.length > 3 &&
      /[a-z]/i.test(normalizedInput) &&
      !/^[^a-z]+$/i.test(normalizedInput);

    if (!isMeaningfulInput) {
      return null;
    }

    // Split input into words
    const inputWords = normalizedInput.split(/\s+/);

    // Calculate scores for each intent
    const intentScores = faqData.intents.map((intent) => {
      let score = 0;
      const keywordSet = new Set(intent.keywords.map((k) => k.toLowerCase()));

      // Check for exact keyword matches
      inputWords.forEach((word) => {
        if (keywordSet.has(word)) {
          score += 3; // Higher score for exact matches
        }
      });

      // Check for partial keyword matches
      intent.keywords.forEach((keyword) => {
        const keywordLower = keyword.toLowerCase();
        if (normalizedInput.includes(keywordLower)) {
          score += 2; // Medium score for partial matches
        }
      });

      // Check for keyword variations (plural/singular)
      intent.keywords.forEach((keyword) => {
        const keywordLower = keyword.toLowerCase();
        const keywordStem = keywordLower.replace(/s$/, "");
        const inputStem = normalizedInput.replace(/s$/, "");

        if (
          inputStem.includes(keywordStem) ||
          keywordStem.includes(inputStem)
        ) {
          score += 1; // Lower score for stem matches
        }
      });

      return { intent, score };
    });

    // Sort by score (highest first)
    intentScores.sort((a, b) => b.score - a.score);

    // Confidence threshold
    const confidenceThreshold = 2;

    // Check if top score meets threshold
    if (
      intentScores.length > 0 &&
      intentScores[0].score >= confidenceThreshold
    ) {
      // Check for tie (multiple intents with same score)
      const topScore = intentScores[0].score;
      const topIntents = intentScores.filter((item) => item.score === topScore);

      // If tie, return random one from top intents
      const winningIntent =
        topIntents[Math.floor(Math.random() * topIntents.length)];
      return winningIntent.intent;
    }

    return null;
  };

  const handleUserResponse = (text) => {
    if (!text.trim()) return;

    addMessage(text, true);
    setInputValue("");
    setChatState("chatting");

    // Use intent-based matching
    setTimeout(() => {
      const matchedIntent = findMatchingIntent(text);

      if (matchedIntent) {
        // Get random answer from the intent's answers array
        const randomAnswer = getRandomAnswer(matchedIntent.answers);
        addBotMessage(randomAnswer);
      } else {
        // Check if it's meaningful input
        const isMeaningfulQuestion =
          text.trim().length > 3 &&
          /[a-z]/i.test(text) &&
          !/^[^a-z]+$/i.test(text);

        if (isMeaningfulQuestion) {
          // For meaningful questions that don't match intents
          addBotMessage(getRandomMessage(flowConfig.flows.unmatchedResponse));
        } else {
          // For random/nonsense input
          addBotMessage(getRandomMessage(flowConfig.flows.randomInputResponse));
        }
      }
    }, 500);
  };

  const handleIntentClick = useCallback((intent) => {
    // Use intent description as the user question
    addMessage(intent.description, true);
    setChatState("chatting");

    setTimeout(() => {
      // Get random answer from the intent's answers array
      const randomAnswer = getRandomAnswer(intent.answers);
      addBotMessage(randomAnswer);
    }, 800);
  }, []);

  const handleStillNeedHelp = () => {
    addMessage("Still need help?", true);
    setChatState("escalation");
    setEscalationErrors({});

    setTimeout(() => {
      addBotMessage(
        "Leave your details and we'll get back to you within 24 hours.",
      );
    }, 500);
  };

  const validateEscalationForm = () => {
    const newErrors = {};

    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setEscalationErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEscalationSubmit = async (e) => {
    e.preventDefault();

    if (!validateEscalationForm()) {
      return;
    }

    setIsLoading(true);
    setChatState("submitting");

    try {
      // Submit to Firebase
      const firebaseResult = await submitChatEscalation(userData, messages);

      if (firebaseResult.success) {
        // Save user data to localStorage
        saveUserData(userData);

        setChatState("submitted");
        addBotMessage(
          `Thank you, ${userData.name || "there"}! We've received your request and will respond to ${userData.email} within 24 hours.`,
        );

        // Clear form
        setUserData((prev) => ({ ...prev, message: "" }));
        setEscalationErrors({});

        // Continue conversation after submission
        setTimeout(() => {
          const followUp = getRandomMessage(
            flowConfig.flows.afterFlow.followUp,
          );
          addBotMessage(followUp);
          setChatState("chatting");
        }, 1500);
      } else {
        setChatState("error");
        addBotMessage(
          "Sorry, there was an error sending your request. Please try again or email us at hello@hourmaker.in",
        );
      }
    } catch (error) {
      console.error("Chat escalation error:", error);
      setChatState("error");
      addBotMessage(
        "Sorry, there was an error sending your request. Please try again or email us at hello@hourmaker.in",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue) {
        handleUserResponse(trimmedValue);
      }
    }
  };

  const resetChat = () => {
    setMessages([]);
    setChatState("idle");
    setInputValue("");
    setIsLoading(false);
    setBotIsTyping(false);
    setPendingBotReply(null);
    setEscalationErrors({});
    refreshRandomIntents();
    startConversation();
    setShowMenu(false);
  };

  const handleExitChat = () => {
    setIsOpen(false);
    setShowMenu(false);
  };

  const renderQuickIntentBar = () => {
    // Don't show in certain states
    if (
      botIsTyping ||
      ["escalation", "submitting", "submitted", "error"].includes(chatState)
    ) {
      return (
        <div className="h-10 w-full mb-1">
          <div className="flex h-full gap-2">
            <div className="flex-1 bg-card border border-border rounded-lg px-2 py-1.5 opacity-50"></div>
            <div className="flex-1 bg-card border border-border rounded-lg px-2 py-1.5 opacity-50"></div>
            <div className="flex-1 bg-card border border-border rounded-lg px-2 py-1.5 opacity-50"></div>
          </div>
        </div>
      );
    }

    // Always show the bar, even when empty at start
    if (randomIntents.length === 0) {
      return (
        <div className="h-10 w-full mb-2">
          <div className="flex h-full gap-1">
            <div className="flex-1 bg-card border border-border rounded-lg px-1 py-1"></div>
            <div className="flex-1 bg-card border border-border rounded-lg px-1 py-1"></div>
            <div className="flex-1 bg-card border border-border rounded-lg px-1 py-1"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="h-10 w-full mb-0">
        <div className="flex h-full gap-2 p-2">
          {randomIntents.map((intent) => (
            <div
              key={intent.id}
              className="relative flex-1 min-w-0"
              onMouseEnter={() => setHoveredIntent(intent.id)}
              onMouseLeave={() => setHoveredIntent(null)}
            >
              <button
                onClick={() => handleIntentClick(intent)}
                className="w-full h-full bg-card hover:bg-accent text-muted-foreground border border-border rounded-lg px-2 py-1 transition-colors hover:border-primary/50 overflow-hidden group"
              >
                <div className="text-[11px] font-medium truncate text-center group-hover:text-foreground">
                  {formatIntentName(intent.intent)}
                </div>
              </button>

              {/* Tooltip for intent description */}
              {hoveredIntent === intent.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                  <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-normal max-w-xs w-max">
                    <div className="font-semibold mb-1">
                      {formatIntentName(intent.intent)}
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderEscalationForm = () => {
    if (chatState !== "escalation" && chatState !== "submitting") return null;

    return (
      <div className="p-4 border border-border rounded-xl bg-card space-y-2 mt-2">
        <div className="flex items-center gap-2 text-sm font-normal text-foreground">
          <Mail className="w-3 h-3 text-primary" />
          Get help from our team
        </div>
        <p className="text-xs text-muted-foreground">
          Leave your details and we'll get back to you within 24 hours.
        </p>
        <form onSubmit={handleEscalationSubmit} className="space-y-2">
          <div className="space-y-1">
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Your name (optional)"
              className="w-full px-3 py-2 text-xs border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={chatState === "submitting"}
            />
            <div>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => {
                  setUserData((prev) => ({ ...prev, email: e.target.value }));
                  if (escalationErrors.email) {
                    setEscalationErrors((prev) => ({
                      ...prev,
                      email: undefined,
                    }));
                  }
                }}
                placeholder="your@email.com *"
                required
                className={`w-full px-3 py-2 text-xs border rounded-lg bg-background focus:outline-none focus:ring-2 ${
                  escalationErrors.email
                    ? "border-red-300 focus:ring-red-500/50"
                    : "border-border focus:ring-primary/50"
                }`}
                disabled={chatState === "submitting"}
              />
              {escalationErrors.email && (
                <p className="text-xs text-red-600 mt-1">
                  {escalationErrors.email}
                </p>
              )}
            </div>
            <textarea
              value={userData.message}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Tell us more about what you need help with..."
              rows="3"
              className="w-full px-3 py-2 text-xs border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              disabled={chatState === "submitting"}
            />
          </div>
          <button
            type="submit"
            disabled={chatState === "submitting" || !userData.email.trim()}
            className="w-full bg-primary text-primary-foreground text-xs font-medium py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {chatState === "submitting" ? (
              <>
                <Loader2 className="w-3 h-3 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                Send Request
              </>
            )}
          </button>
        </form>
      </div>
    );
  };

  const renderSuccessState = () => {
    if (chatState !== "submitted") return null;

    return (
      <div className="p-4 border border-success/30 rounded-xl bg-success/10 space-y-2 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-success" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Request Received!
            </p>
            <p className="text-xs text-muted-foreground">
              Our team will review your question and respond shortly.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderErrorState = () => {
    if (chatState !== "error") return null;

    return (
      <div className="p-4 border border-destructive/30 rounded-xl bg-destructive/10 mt-3">
        <div className="flex items-center gap-2">
          <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
          <p className="text-sm text-destructive">
            Something went wrong. Please try again or email us at{" "}
            <a
              href="mailto:hello@hourmaker.in"
              className="underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              hello@hourmaker.in
            </a>
          </p>
        </div>
      </div>
    );
  };

  const isInputDisabled =
    isLoading ||
    botIsTyping ||
    ["escalation", "submitting", "submitted", "error"].includes(chatState);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "scale-0 opacity-0 pointer-events-none"
            : "bg-primary hover:bg-primary-dark"
        }`}
      >
        <MessageSquare className="w-6 h-6 text-white mx-auto" />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                {/* Green online status badge */}
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-primary"></div>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Aman</h3>
                <p className="text-xs opacity-80">Hourmaker Support</p>
              </div>
            </div>

            {/* Hamburger Menu */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
                disabled={isLoading || chatState === "submitting"}
              >
                {showMenu ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute right-0 top-12 w-48 bg-background border border-border rounded-lg shadow-xl z-50">
                  <div className="py-1">
                    {/* Contact Support */}
                    <button
                      onClick={() => {
                        handleStillNeedHelp();
                        setShowMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-accent transition-colors"
                      disabled={isLoading || chatState === "submitting"}
                    >
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>Contact Support</span>
                    </button>

                    {/* Reset Chat - only show if there are messages */}
                    {messages.length > 0 && (
                      <button
                        onClick={resetChat}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-accent transition-colors"
                        disabled={isLoading || chatState === "submitting"}
                      >
                        <RotateCcw className="w-4 h-4 text-muted-foreground" />
                        <span>Reset Chat</span>
                      </button>
                    )}

                    {/* Download Chat - only show if there are messages */}
                    {messages.length > 0 && (
                      <button
                        onClick={downloadChatTranscript}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-accent transition-colors"
                      >
                        <Download className="w-4 h-4 text-muted-foreground" />
                        <span>Download Chat</span>
                      </button>
                    )}

                    {/* Divider */}
                    <div className="border-t border-border my-1"></div>

                    {/* Close Chat */}
                    <button
                      onClick={handleExitChat}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                      disabled={isLoading || chatState === "submitting"}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Close Chat</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-muted/30 no-scrollbar">
            {/* Messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex ${message.isUser ? "flex-row-reverse" : "flex-row"} items-start gap-3 max-w-[85%]`}
                >
                  {/* Avatar Container */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.isUser ? "bg-muted" : "bg-primary/10"
                      }`}
                    >
                      {message.isUser ? (
                        <User className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <Bot className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      {message.isUser ? "You" : "Aman"}
                    </span>
                  </div>

                  {/* Message Container */}
                  <div
                    className={`flex flex-col ${message.isUser ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm ${
                        message.isUser
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-card text-card-foreground border border-border rounded-bl-md shadow-sm"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bot typing indicator */}
            {botIsTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-3 max-w-[85%]">
                  {/* Avatar Container */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      Aman
                    </span>
                  </div>

                  {/* Typing Container */}
                  <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-xs">
                    <div className="flex gap-2">
                      <span
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Escalation Form */}
            {renderEscalationForm()}

            {/* Success State */}
            {renderSuccessState()}

            {/* Error State */}
            {renderErrorState()}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Intents Bar */}
          {renderQuickIntentBar()}

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const trimmedValue = inputValue.trim();
              if (trimmedValue && !isInputDisabled) {
                handleUserResponse(trimmedValue);
              }
            }}
            className="p-2 border-t border-border bg-background"
          >
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                disabled={isInputDisabled}
                className="flex-1 px-3 py-2 text-xs border border-border rounded-full bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-background disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isInputDisabled}
                className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
