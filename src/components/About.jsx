import React from "react";
import {
  FileText,
  ArrowRight,
  CheckCircle2,
  Shield,
  Brain,
  Upload,
} from "lucide-react";

const About = ({
  onNavigateToLanding,
  onNavigateToChat,
  onNavigateToLogin,
  onNavigateToRegister,
  onLogout,
  isAuthenticated,
}) => {
  return (
    <div className="min-h-screen bg-vintage-white overflow-hidden">
      <nav className="relative z-10 px-4 sm:px-6 lg:px-8 py-3 border-b border-vintage-gray-200 bg-vintage-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onNavigateToLanding}
            className="flex items-center space-x-2"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-vintage-black rounded-md flex items-center justify-center">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-vintage-white" />
            </div>
            <span className="text-lg sm:text-xl font-display font-semibold tracking-vintage text-vintage-black">
              DocuChat AI
            </span>
          </button>
          <div className="hidden sm:flex items-center space-x-4">
            <button className="nav-link text-sm" onClick={onNavigateToLanding}>
              Home
            </button>
            <button className="nav-link text-sm nav-link-active">About</button>
            {isAuthenticated ? (
              <button className="nav-link text-sm" onClick={onLogout}>
                Logout
              </button>
            ) : (
              <>
                <button
                  className="nav-link text-sm"
                  onClick={onNavigateToLogin}
                >
                  Login
                </button>
                <button
                  className="btn-secondary text-sm px-4 py-1.5"
                  onClick={onNavigateToRegister}
                >
                  Register
                </button>
              </>
            )}
            <button
              onClick={onNavigateToChat}
              className="btn-primary text-sm px-4 py-1.5"
            >
              Get Started
            </button>
          </div>
          <div className="sm:hidden">
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="btn-secondary text-sm px-3 py-1.5"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={onNavigateToChat}
                className="btn-primary text-sm px-3 py-1.5"
              >
                Start
              </button>
            )}
          </div>
        </div>
      </nav>

      <section className="relative z-10 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-vintage text-vintage-black mb-4">
            About DocuChat AI
          </h1>
          <p className="text-vintage-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            DocuChat AI helps people understand complex PDFs in minutes, not
            hours. Built for students, developers, and researchers, it turns
            long documents into focused conversations and practical answers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="card p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-semibold text-vintage-black mb-3">
              Our Mission
            </h2>
            <p className="text-vintage-gray-700 leading-relaxed mb-5 text-sm sm:text-base">
              We believe clarity should be available to everyone. Our mission is
              to remove friction from reading so you can focus on learning,
              building, and making better decisions.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-vintage-gray-700">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-vintage-black" />
                <span>Fast extraction of key points and answers</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-vintage-gray-700">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-vintage-black" />
                <span>Simple explanations for technical content</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-vintage-gray-700">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-vintage-black" />
                <span>Secure-by-default handling of your documents</span>
              </div>
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-semibold text-vintage-black mb-3">
              How It Works
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-vintage-gray-700">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-vintage-gray-100 flex items-center justify-center text-xs font-semibold text-vintage-black">
                  1
                </div>
                <p>Upload your PDF and let DocuChat AI process the content.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-vintage-gray-100 flex items-center justify-center text-xs font-semibold text-vintage-black">
                  2
                </div>
                <p>
                  Ask questions in plain language like you would to a tutor.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-vintage-gray-100 flex items-center justify-center text-xs font-semibold text-vintage-black">
                  3
                </div>
                <p>Get clear answers with context so you can move faster.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 sm:py-14 px-4 sm:px-6 lg:px-8 bg-vintage-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-vintage text-center mb-8">
            Privacy Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex flex-col space-y-2 p-4 rounded-lg bg-vintage-white border border-vintage-gray-100">
              <h3 className="font-semibold text-vintage-black flex items-center gap-2">
                <Shield className="w-4 h-4" /> Bank-Grade Encryption
              </h3>
              <p className="text-sm text-vintage-gray-600">
                All uploads and chats are encrypted in transit and at rest.
              </p>
            </div>
            <div className="flex flex-col space-y-2 p-4 rounded-lg bg-vintage-white border border-vintage-gray-100">
              <h3 className="font-semibold text-vintage-black flex items-center gap-2">
                <Brain className="w-4 h-4" /> No AI Training
              </h3>
              <p className="text-sm text-vintage-gray-600">
                Your private data is never used to train our AI models.
              </p>
            </div>
            <div className="flex flex-col space-y-2 p-4 rounded-lg bg-vintage-white border border-vintage-gray-100">
              <h3 className="font-semibold text-vintage-black flex items-center gap-2">
                <Upload className="w-4 h-4" /> Easy Delete
              </h3>
              <p className="text-sm text-vintage-gray-600">
                You keep control and can remove files anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-vintage mb-4">
            Ready to Try It?
          </h2>
          <p className="text-vintage-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Upload a document and start chatting in seconds.
          </p>
          <button
            onClick={onNavigateToChat}
            className="w-full sm:w-auto btn-primary text-base px-8 py-3 inline-flex items-center justify-center space-x-2 group"
          >
            <span>Chat with PDF Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
