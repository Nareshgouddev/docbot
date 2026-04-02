import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  getFirebaseSetupError,
  isFirebaseConfigured,
  onAuthStateChangedListener,
} from "./services/firebaseAuth";

const App = () => {
  const [currentRoute, setCurrentRoute] = useState("/");
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setAuthError(getFirebaseSetupError());
      setAuthLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChangedListener((user) => {
      setAuthUser(user);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Handle initial route
    const validRoutes = ["/", "/chat", "/login", "/register"];
    const path = window.location.pathname;
    setCurrentRoute(validRoutes.includes(path) ? path : "/");

    // Listen for browser back/forward navigation
    const handlePopState = () => {
      const validRoutes = ["/", "/chat", "/login", "/register"];
      const path = window.location.pathname;
      setCurrentRoute(validRoutes.includes(path) ? path : "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToChat = () => {
    window.history.pushState({}, "", "/chat");
    setCurrentRoute("/chat");
  };

  const navigateToLanding = () => {
    window.history.pushState({}, "", "/");
    setCurrentRoute("/");
  };

  const navigateToLogin = () => {
    window.history.pushState({}, "", "/login");
    setCurrentRoute("/login");
  };

  const navigateToRegister = () => {
    window.history.pushState({}, "", "/register");
    setCurrentRoute("/register");
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-vintage-white flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-vintage-gray-700 text-sm">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  if (authError && currentRoute === "/chat") {
    return (
      <div className="min-h-screen bg-vintage-white flex items-center justify-center p-6">
        <div className="card max-w-lg p-6">
          <h2 className="heading-sm text-vintage-black mb-2">
            Firebase Setup Required
          </h2>
          <p className="text-vintage-gray-600 text-sm">{authError}</p>
        </div>
      </div>
    );
  }

  const isAuthenticated = Boolean(authUser);
  const shouldShowChat = currentRoute === "/chat" && isAuthenticated;
  const shouldShowLogin =
    currentRoute === "/login" || (currentRoute === "/chat" && !isAuthenticated);
  const shouldShowRegister = currentRoute === "/register" && !isAuthenticated;

  return (
    <div className="min-h-screen bg-vintage-white">
      {shouldShowChat ? (
        <Chat onBackToLanding={navigateToLanding} />
      ) : shouldShowLogin ? (
        <Login
          onNavigateToLanding={navigateToLanding}
          onNavigateToRegister={navigateToRegister}
          onLoginSuccess={navigateToChat}
        />
      ) : shouldShowRegister ? (
        <Register
          onNavigateToLanding={navigateToLanding}
          onNavigateToLogin={navigateToLogin}
          onRegisterSuccess={navigateToChat}
        />
      ) : (
        <LandingPage
          onNavigateToChat={navigateToChat}
          onNavigateToLogin={navigateToLogin}
          onNavigateToRegister={navigateToRegister}
        />
      )}
    </div>
  );
};

export default App;
