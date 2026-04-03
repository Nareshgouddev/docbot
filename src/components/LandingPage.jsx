import React, { useState } from "react";
import {
  FileText,
  Upload,
  MessageCircle,
  ArrowRight,
  Zap,
  Shield,
  GraduationCap,
  Code,
  Brain,
  Lock,
  AlertCircle,
  Check,
  HelpCircle,
  Plus,
  Minus,
} from "lucide-react";

const LandingPage = ({
  onNavigateToChat,
  onNavigateToLogin,
  onNavigateToRegister,
  onNavigateToAbout,
}) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const features = [
    {
      icon: GraduationCap,
      title: "Ace Your Exams",
      description:
        "Summarize textbooks and notes instantly. Perfect for last-minute revision.",
    },
    {
      icon: Code,
      title: "For Developers",
      description:
        "Navigate tech specs and API docs without the headache. Find answers fast.",
    },
    {
      icon: Brain,
      title: "Research Assistant",
      description:
        "Break down complex papers into simple insights. Save hours of reading time.",
    },
    {
      icon: Zap,
      title: "Instant Answers",
      description:
        "Just ask and get the exact info you need. No more Ctrl+F searches.",
    },
    {
      icon: MessageCircle,
      title: "Simple Language",
      description: "Complex topics explained simply. We leave the jargon out.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your documents and research stay yours. 100% private and secure.",
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the file size limit?",
      answer:
        "Currently, we support PDF files up to 20MB. This covers most textbooks, research papers, and legal documents. If you need more, let us know!",
    },
    {
      question: "Which languages do you support?",
      answer:
        "DocuChat AI works best with English, but works with documents in Spanish, French, German, and many others. You can even chat in a different language than the document!",
    },
    {
      question: "How long do you store my data?",
      answer:
        "Your chats and uploaded documents are stored securely for 30 days while you work on them. After that, they are automatically deleted to ensure your privacy.",
    },
    {
      question: "Is there a free plan?",
      answer:
        "Yes! You can upload and analyze up to 3 documents per day completely for free. We also offer a Pro plan for power users who need unlimited access.",
    },
    {
      question: "Do you support scanned PDFs?",
      answer:
        "We rely on extracting text from the file, so clear scans with OCR (selectable text) work perfectly. For images-only scans, results may vary.",
    },
    {
      question: "Do I need to log in?",
      answer:
        "You can try a demo chat without logging in! To save your chat history and uploaded documents for later, you'll need to create a free account.",
    },
  ];

  return (
    <div className="min-h-screen bg-vintage-white overflow-hidden">
      {/* Enhanced Aesthetic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Diagonal Lines - More and varied */}
        <div className="absolute top-16 left-8 w-20 h-px bg-vintage-gray-300 rotate-45 opacity-50 animate-fade-in"></div>
        <div className="absolute top-24 right-16 w-28 h-px bg-vintage-gray-300 -rotate-45 opacity-40 animate-fade-in animation-delay-200"></div>
        <div className="absolute top-40 left-1/4 w-16 h-px bg-vintage-gray-300 rotate-12 opacity-35 animate-fade-in animation-delay-300"></div>
        <div className="absolute bottom-32 left-16 w-24 h-px bg-vintage-gray-300 rotate-12 opacity-45 animate-fade-in animation-delay-500"></div>
        <div className="absolute bottom-48 right-12 w-32 h-px bg-vintage-gray-300 -rotate-12 opacity-40 animate-fade-in animation-delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-18 h-px bg-vintage-gray-300 rotate-75 opacity-30 animate-fade-in animation-delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-22 h-px bg-vintage-gray-300 -rotate-30 opacity-35 animate-fade-in animation-delay-500"></div>

        {/* Horizontal Flowing Lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-vintage-gray-300 to-transparent opacity-20 animate-fade-in animation-delay-300"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-vintage-gray-300 to-transparent opacity-15 animate-fade-in animation-delay-700"></div>

        {/* Dotted Lines - Enhanced patterns */}
        <div className="absolute top-1/4 left-1/4 flex space-x-1 animate-fade-in animation-delay-500">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-vintage-gray-400 rounded-full opacity-25"
              style={{ animationDelay: `${i * 0.08}s` }}
            ></div>
          ))}
        </div>
        <div className="absolute top-2/3 right-1/4 flex space-x-1 animate-fade-in animation-delay-700">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-vintage-gray-400 rounded-full opacity-20"
              style={{ animationDelay: `${i * 0.12}s` }}
            ></div>
          ))}
        </div>
        <div className="absolute top-1/2 left-8 flex space-x-1 rotate-90 animate-fade-in animation-delay-300">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-vintage-gray-400 rounded-full opacity-30"
            ></div>
          ))}
        </div>

        {/* Vertical Dotted Lines */}
        <div className="absolute top-1/3 left-1/2 flex flex-col space-y-1 animate-fade-in animation-delay-500">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-vintage-gray-400 rounded-full opacity-15"
            ></div>
          ))}
        </div>
        <div className="absolute top-1/4 right-1/3 flex flex-col space-y-1 animate-fade-in animation-delay-700">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-vintage-gray-400 rounded-full opacity-25"
            ></div>
          ))}
        </div>

        {/* Corner and Scattered Decorative Elements */}
        <div className="absolute top-20 right-20 w-8 h-8 border border-vintage-gray-300 rounded-full opacity-25 animate-vintage-pulse"></div>
        <div className="absolute bottom-24 left-20 w-6 h-6 border border-vintage-gray-300 rotate-45 opacity-20 animate-vintage-pulse animation-delay-300"></div>
        <div className="absolute top-1/2 left-16 w-4 h-4 bg-vintage-gray-300 rotate-45 opacity-15 animate-vintage-pulse animation-delay-500"></div>
        <div className="absolute bottom-1/3 right-24 w-10 h-10 border-2 border-vintage-gray-300 opacity-20 animate-vintage-pulse animation-delay-700"></div>

        {/* Flowing Curves (using CSS transforms) */}
        <div className="absolute top-0 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-vintage-gray-300 to-transparent opacity-20 transform rotate-12 animate-fade-in animation-delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-1 h-24 bg-gradient-to-t from-transparent via-vintage-gray-300 to-transparent opacity-15 transform -rotate-12 animate-fade-in animation-delay-1000"></div>
      </div>

      {/* Navigation - Fully Responsive */}
      <nav className="relative z-10 px-4 sm:px-6 lg:px-8 py-3 border-b border-vintage-gray-200 bg-vintage-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-vintage-black rounded-md flex items-center justify-center">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-vintage-white" />
            </div>
            <span className="text-lg sm:text-xl font-display font-semibold tracking-vintage">
              DocuChat AI
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <button
              className="nav-link text-sm"
              onClick={() => scrollToSection("features")}
            >
              Features
            </button>
            <button className="nav-link text-sm" onClick={onNavigateToAbout}>
              About
            </button>
            <button className="nav-link text-sm" onClick={onNavigateToLogin}>
              Login
            </button>
            <button
              className="btn-secondary text-sm px-4 py-1.5"
              onClick={onNavigateToRegister}
            >
              Register
            </button>
            <button
              onClick={onNavigateToChat}
              className="btn-primary text-sm px-4 py-1.5"
            >
              Get Started
            </button>
          </div>
          <div className="sm:hidden">
            <button
              onClick={onNavigateToChat}
              className="btn-primary text-sm px-3 py-1.5"
            >
              Start
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced with more elements and fully responsive */}
      <section className="relative z-10 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-vintage text-vintage-black animate-slide-up">
              Master Your
              <br />
              <span>Documents </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-vintage-gray-700">
                with AI
              </span>
            </h1>

            {/* Enhanced decorative elements around hero */}
            <div className="relative py-4 sm:py-6">
              <div className="decorative-line w-16 sm:w-20 md:w-24 mx-auto animate-fade-in animation-delay-300"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-vintage-gray-400 rounded-full opacity-40"></div>
                  <div className="w-1 h-1 bg-vintage-gray-400 rounded-full opacity-60"></div>
                  <div className="w-1 h-1 bg-vintage-gray-400 rounded-full opacity-40"></div>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-vintage-gray-600 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200 px-4 sm:px-0">
              The ultimate study partner and research assistant. Upload notes,
              tech docs, or research papers and get answers instantly. No
              jargon, just clear results.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 px-4 sm:px-0 animate-slide-up animation-delay-500">
            <button
              onClick={onNavigateToChat}
              className="w-full sm:w-auto btn-primary text-base px-6 py-3 flex items-center justify-center space-x-2 group"
            >
              <span>Start Learning </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onNavigateToChat}
              className="w-full sm:w-auto btn-outline text-base px-6 py-3"
            >
              See Demo
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Divider - Responsive */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="decorative-line flex-1"></div>
            <div className="decorative-dots"></div>
            <div className="decorative-line flex-1"></div>
          </div>
        </div>
      </div>

      {/* Features Section - Fully Responsive Grid */}
      <section
        id="features"
        className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-vintage mb-3">
              Built for Students & Pros
            </h2>
            <p className="text-vintage-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0">
              Whether you are coding, studying, or researching—DocuChat AI helps
              you understand faster.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-feature group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div
                      className="w-8 h-8 bg-vintage-gray-100 rounded-lg flex items-center justify-center 
                                                        group-hover:bg-vintage-black transition-colors duration-300"
                    >
                      <feature.icon className="w-4 h-4 text-vintage-gray-600 group-hover:text-vintage-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-vintage-black mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-vintage-gray-600 leading-5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-vintage-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-vintage">
              Problems We Solve
            </h2>
          </div>

          <div className="space-y-6">
            {/* Problem Pair 1 */}
            <div className="bg-vintage-white p-6 rounded-xl border border-vintage-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6 group hover:shadow-md transition-shadow">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-red-500 font-semibold mb-1">
                  <AlertCircle className="w-5 h-5" />
                  <span>Problem</span>
                </div>
                <p className="text-vintage-gray-700">
                  "I don't have time to read 100+ pages for one specific
                  answer."
                </p>
              </div>
              <div className="hidden md:block w-px h-16 bg-vintage-gray-200"></div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-green-600 font-semibold mb-1">
                  <Check className="w-5 h-5" />
                  <span>Solution</span>
                </div>
                <p className="text-vintage-gray-700">
                  DocuChat AI scans the entire PDF instantly and gives you the
                  exact answer in seconds.
                </p>
              </div>
            </div>

            {/* Problem Pair 2 */}
            <div className="bg-vintage-white p-6 rounded-xl border border-vintage-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6 group hover:shadow-md transition-shadow">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-red-500 font-semibold mb-1">
                  <AlertCircle className="w-5 h-5" />
                  <span>Problem</span>
                </div>
                <p className="text-vintage-gray-700">
                  "The language is too technical and hard to understand."
                </p>
              </div>
              <div className="hidden md:block w-px h-16 bg-vintage-gray-200"></div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-green-600 font-semibold mb-1">
                  <Check className="w-5 h-5" />
                  <span>Solution</span>
                </div>
                <p className="text-vintage-gray-700">
                  Ask DocuChat AI to "explain like I'm 5," and get a simple,
                  jargon-free summary.
                </p>
              </div>
            </div>

            {/* Problem Pair 3 */}
            <div className="bg-vintage-white p-6 rounded-xl border border-vintage-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6 group hover:shadow-md transition-shadow">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-red-500 font-semibold mb-1">
                  <AlertCircle className="w-5 h-5" />
                  <span>Problem</span>
                </div>
                <p className="text-vintage-gray-700">
                  "I keep losing my place and forgetting key details."
                </p>
              </div>
              <div className="hidden md:block w-px h-16 bg-vintage-gray-200"></div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-green-600 font-semibold mb-1">
                  <Check className="w-5 h-5" />
                  <span>Solution</span>
                </div>
                <p className="text-vintage-gray-700">
                  DocuChat AI remembers the context of your chat, making it easy
                  to connect the dots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-vintage-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-vintage text-center mb-10 sm:mb-14">
            Loved by Learners and Pros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Student Testimonial */}
            <div className="bg-vintage-white p-6 rounded-xl border border-vintage-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 text-vintage-orange fill-current"
                  >
                    ★
                  </div>
                ))}
              </div>
              <p className="text-vintage-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                "I used to spend hours summarizing notes for finals. DocuChat AI
                breaks down entire chapters in seconds—it saved my GPA!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-vintage-gray-200 rounded-full flex items-center justify-center font-display font-bold text-vintage-gray-600">
                  PS
                </div>
                <div>
                  <p className="font-semibold text-sm text-vintage-black">
                    Priya Sharma
                  </p>
                  <p className="text-xs text-vintage-gray-500">
                    Computer Science Student
                  </p>
                </div>
              </div>
            </div>

            {/* Developer Testimonial */}
            <div className="bg-vintage-white p-6 rounded-xl border border-vintage-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 text-vintage-orange fill-current"
                  >
                    ★
                  </div>
                ))}
              </div>
              <p className="text-vintage-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                "Reading 50-page API documentation is a nightmare. DocuChat AI
                points me exactly to the endpoints I need instantly."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-vintage-gray-200 rounded-full flex items-center justify-center font-display font-bold text-vintage-gray-600">
                  RV
                </div>
                <div>
                  <p className="font-semibold text-sm text-vintage-black">
                    Rahul Verma
                  </p>
                  <p className="text-xs text-vintage-gray-500">
                    Backend Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Researcher Testimonial */}
            <div className="bg-vintage-white p-6 rounded-xl border border-vintage-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 text-vintage-orange fill-current"
                  >
                    ★
                  </div>
                ))}
              </div>
              <p className="text-vintage-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                "Analyzing research papers takes half the time now. It explains
                complex methodologies so clearly, I can focus on writing."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-vintage-gray-200 rounded-full flex items-center justify-center font-display font-bold text-vintage-gray-600">
                  AG
                </div>
                <div>
                  <p className="font-semibold text-sm text-vintage-black">
                    Dr. Ananya Gupta
                  </p>
                  <p className="text-xs text-vintage-gray-500">
                    Research Analyst
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-vintage-gray-100 rounded-xl mb-6">
            <Lock className="w-6 h-6 text-vintage-gray-700" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-vintage mb-4">
            We Care About Your Privacy
          </h2>
          <p className="text-vintage-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We understand that your documents contain sensitive information.
            That's why DocuChat AI is built with privacy at its core—your files
            are processed securely and are never used to train our public
            models.
          </p>

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
                You have full control. Delete your files instantly, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Built By Section */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-lg mb-6">
            <Code className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">
              Built with 💙
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-vintage mb-6">
            Meet the Maker
          </h2>
          <div className="bg-gradient-to-br from-vintage-white to-vintage-gray-50 p-8 rounded-2xl border border-vintage-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-vintage-black mb-4">
                Hi, I'm Naresh! 👋
              </h3>
              <p className="text-vintage-gray-700 leading-relaxed mb-4">
                I'm a Full Stack Developer from India who knows the struggle of
                drowning in documentation. I built DocuChat AI because I needed
                a faster way to understand complex research papers and technical
                docs without spending hours reading every single line.
              </p>
              <p className="text-vintage-gray-700 leading-relaxed">
                Whether you're a student cramming for finals or a dev trying to
                figure out a new API, I hope this tool helps you learn faster
                and build better things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-vintage-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-vintage">
              Ready to Learn Smarter?
            </h2>
            <p className="text-vintage-gray-600 text-sm sm:text-base max-w-xl mx-auto px-4 sm:px-0">
              Join thousands of students and developers who are saving time with
              DocuChat AI.
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={onNavigateToChat}
              className="w-full sm:w-auto btn-primary text-base px-8 py-3 inline-flex items-center justify-center space-x-2 group"
            >
              <span>Chat with PDF Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-vintage-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-vintage-gray-100 rounded-xl mb-6">
              <HelpCircle className="w-6 h-6 text-vintage-gray-700" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-vintage">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-vintage-white rounded-xl border transition-all duration-300 hover:shadow-md overflow-hidden ${openFaqIndex === index ? "border-vintage-orange ring-1 ring-vintage-orange/20 shadow-sm" : "border-vintage-gray-200"}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span
                    className={`font-semibold text-lg transition-colors ${openFaqIndex === index ? "text-vintage-orange" : "text-vintage-black"}`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-all duration-300 ${
                      openFaqIndex === index
                        ? "bg-vintage-orange text-white border-vintage-orange rotate-180"
                        : "bg-transparent text-vintage-gray-400 border-vintage-gray-200 hover:border-vintage-orange hover:text-vintage-orange"
                    }`}
                  >
                    {openFaqIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaqIndex === index
                      ? "max-h-48 opacity-100 mb-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 text-sm sm:text-base text-vintage-gray-600 leading-relaxed border-t border-dashed border-vintage-gray-200 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="relative z-10 border-t border-vintage-gray-200 bg-vintage-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-vintage-black rounded-md flex items-center justify-center">
                  <FileText className="w-4 h-4 text-vintage-white" />
                </div>
                <span className="font-display font-bold text-lg text-vintage-black">
                  DocuChat AI
                </span>
              </div>
              <p className="text-sm text-vintage-gray-600">
                AI-powered PDF analysis for students, researchers, and
                professionals.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-vintage-black mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-vintage-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-vintage-black transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-vintage-black transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-vintage-black transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-vintage-black mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-vintage-gray-600">
                <li>
                  <a
                    href="/about"
                    onClick={(event) => {
                      event.preventDefault();
                      onNavigateToAbout();
                    }}
                    className="hover:text-vintage-black transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-vintage-black transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-vintage-black transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-vintage-black mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-vintage-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-vintage-black transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-vintage-black transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-vintage-black transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-vintage-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-vintage-gray-500">
              © 2026 DocuChat AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://x.com/EDIGANARESHGOU4/"
                className="text-vintage-gray-400 hover:text-vintage-gray-600 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://github.com/Nareshgouddev"
                className="text-vintage-gray-400 hover:text-vintage-gray-600 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
