"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Simple ProjectsSection component since it's referenced but not defined
const ProjectsSection = () => {
  return (
    <div className="bg-gray-800 bg-opacity-90 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">実績紹介</h3>
      <p className="text-gray-300">政府機関向けプロジェクトの実績をご紹介いたします。</p>
    </div>
  )
}

export default function AegisLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [projectSlide, setProjectSlide] = useState(0)

  // Navigation would handle page routing in a real application

  // Add this useEffect after the useState declaration
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < 2 ? prev + 1 : 0))
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  // Add this useEffect right after the existing useEffect for currentSlide
  useEffect(() => {
    const projectInterval = setInterval(() => {
      setProjectSlide((prev) => (prev < 2 ? prev + 1 : 0))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(projectInterval)
  }, [])

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Video - Moved outside the hero section */}
      <div className="fixed inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="/videos/government-building.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="/"
                className="text-2xl font-bold text-black hover:opacity-80 transition-opacity"
              >
                <span className="bg-black text-white px-2 py-1 mr-1">AEGIS</span>
                <span className="text-sm">LLP</span>
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a 
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                ホーム
                <div className="text-xs text-gray-500">Home</div>
              </a>
              <a 
                href="/services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                私たちのサービス
                <div className="text-xs text-gray-500">Service</div>
              </a>
              <a 
                href="/projects"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                実績
                <div className="text-xs text-gray-500">Projects</div>
              </a>
              <a 
                href="/careers"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                採用情報
                <div className="text-xs text-gray-500">Careers</div>
              </a>
              <a 
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                会社概要
                <div className="text-xs text-gray-500">About</div>
              </a>
              <a 
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                お問い合わせ
                <div className="text-xs text-gray-500">Contact</div>
              </a>
            </nav>

            {/* Contact Info and Entry Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block text-right">
                <div className="text-lg font-bold text-gray-900">TEL.03-1234-5678</div>
                <div className="text-xs text-gray-600">【受付時間】9:00～17:00</div>
              </div>
              <a 
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium flex items-center space-x-2 transition-colors"
              >
                <span>ENTRY</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center justify-between h-full">
              {/* Main Message - No white box, direct text overlay */}
              <div className="flex items-start space-x-4 ml-16">
                {/* First column with blue background */}
                <div className="bg-blue-600 px-4 py-8 text-white">
                  <div className="text-5xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    政府の
                  </div>
                  <div className="text-5xl font-bold leading-tight mt-2" style={{ writingMode: "vertical-rl" }}>
                    信頼だ
                  </div>
                </div>

                {/* Second column - white text */}
                <div className="text-white">
                  <div className="text-4xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    繋げる
                  </div>
                </div>

                {/* Third column - white text */}
                <div className="text-white">
                  <div className="text-4xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    のは
                  </div>
                </div>

                {/* Fourth column - white text */}
                <div className="text-white">
                  <div className="text-4xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    契約
                  </div>
                </div>

                {/* Fifth column - white text */}
                <div className="text-white">
                  <div className="text-4xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    じゃない、
                  </div>
                </div>
              </div>

              {/* Side Navigation */}
              <div className="hidden lg:block">
                <div className="writing-mode-vertical text-white text-sm space-y-8">
                  <div className="transform rotate-180" style={{ writingMode: "vertical-rl" }}>
                    ©2024 AEGIS LLP. ALL RIGHTS RESERVED.
                  </div>
                  <div className="transform rotate-180" style={{ writingMode: "vertical-rl" }}>
                    SCROLL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section - Small, bottom right */}
        <div className="absolute bottom-8 right-8 w-80">
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-600 font-medium">INFORMATION</div>
              <div className="flex space-x-1">
                <button
                  onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)}
                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <ChevronLeft className="w-3 h-3 text-gray-600" />
                </button>
                <button
                  onClick={() => setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0)}
                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <ChevronRight className="w-3 h-3 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">2024.01.15</div>
                    <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">一般</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">政府調達システム登録完了のお知らせ</div>
                </div>

                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">2024.01.10</div>
                    <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">重要</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">新規入札案件の受付開始について</div>
                </div>

                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">2024.01.05</div>
                    <div className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                      お知らせ
                    </div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">年末年始営業時間変更のご案内</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 right-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-white opacity-50"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-75"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Leader Message Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-400 mb-4">代表取締役社長からのメッセージ</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Single Card Layout */}
          <div className="bg-gray-800 bg-opacity-85 rounded-lg p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Leader image and info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="w-48 h-60 bg-gray-300 rounded-lg mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=240&width=192"
                    alt="代表取締役社長の写真"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-gray-300 text-sm mb-3">代表取締役社長の写真</p>
                  <div className="bg-blue-600 text-white p-3 rounded-lg inline-block">
                    <div className="text-sm mb-1">代表取締役社長</div>
                    <div className="text-xl font-bold">田中 太郎</div>
                  </div>
                </div>
              </div>

              {/* Message text */}
              <div className="flex-1">
                <div className="text-gray-200 leading-relaxed space-y-4">
                  <p>
                    この度は、AEGIS
                    LLP株式会社のウェブサイトをご覧いただき、誠にありがとうございます。当社は2010年の創業以来、日本の政府機関および自治体の皆様に対し、最先端のデジタル技術を活用したソリューションを提供してまいりました。
                  </p>

                  <p>
                    急速に変化するデジタル社会において、政府機関には従来以上の効率性と透明性が求められています。私たちは、この重要な使命を担う皆様のパートナーとして、確実で信頼性の高いシステム構築とサポートを提供することをお約束いたします。
                  </p>

                  <p>
                    技術的な卓越性と継続的な改善への取り組みを通じて、日本の行政サービスの向上に貢献し、国民の皆様により良いサービスを提供できるよう、全社一丸となって努力してまいります。
                  </p>

                  <p className="font-semibold">
                    今後とも変わらぬご支援とご指導を賜りますよう、心よりお願い申し上げます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service section */}
      <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
          <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 mb-4">
            Service
          </div>
          <h2 className="text-4xl font-bold text-blue-400 mb-4">事業内容</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16 max-w-6xl mx-auto">
          {/* Service 1 - Government Digital Solutions */}
          <div className="relative group">
            {/* Image Container */}
            <div className="w-full h-64 relative">
              <img
                src="/placeholder.svg?height=256&width=400"
                alt="政府デジタルソリューション"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Content Container - Overlapping */}
            <div className="bg-blue-600 text-white p-6 rounded-lg relative -mt-16 mx-6 z-10 shadow-xl">
              <div className="flex items-center mb-3">
                <div className="text-4xl font-bold text-white/30 mr-3">01</div>
                <div className="w-12 h-0.5 bg-cyan-400"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">政府デジタルソリューション</h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-4">
                政府機関向けの最新デジタル技術を活用したシステム開発から運用まで、包括的なソリューションを提供いたします。
              </p>
              <a href="/services/digital-solutions" className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group">
                <span>VIEW MORE</span>
                <div className="ml-2 w-6 h-px bg-cyan-400 group-hover:w-8 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          {/* Service 2 - Procurement & Contract Management */}
          <div className="relative group lg:mt-12">
            {/* Image Container */}
            <div className="w-full h-64 relative">
              <img
                src="/placeholder.svg?height=256&width=400"
                alt="調達・契約管理"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Content Container - Overlapping */}
            <div className="bg-blue-600 text-white p-6 rounded-lg relative -mt-16 mx-6 z-10 shadow-xl">
              <div className="flex items-center mb-3">
                <div className="text-4xl font-bold text-white/30 mr-3">02</div>
                <div className="w-12 h-0.5 bg-cyan-400"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">調達・契約管理</h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-4">
                政府調達プロセスの最適化から契約管理まで、効率的で透明性の高いシステムを構築いたします。
              </p>
              <a href="/services/procurement" className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group">
                <span>VIEW MORE</span>
                <div className="ml-2 w-6 h-px bg-cyan-400 group-hover:w-8 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          {/* Service 3 - System Integration */}
          <div className="relative group">
            {/* Image Container */}
            <div className="w-full h-64 relative">
              <img
                src="/placeholder.svg?height=256&width=400"
                alt="システム統合"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Content Container - Overlapping */}
            <div className="bg-blue-600 text-white p-6 rounded-lg relative -mt-16 mx-6 z-10 shadow-xl">
              <div className="flex items-center mb-3">
                <div className="text-4xl font-bold text-white/30 mr-3">03</div>
                <div className="w-12 h-0.5 bg-cyan-400"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">システム統合</h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-4">
                既存システムとの統合から新規システム構築まで、シームレスな統合ソリューションを提供いたします。
              </p>
              <a href="/services/system-integration" className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group">
                <span>VIEW MORE</span>
                <div className="ml-2 w-6 h-px bg-cyan-400 group-hover:w-8 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          {/* Service 4 - Consulting & Support */}
          <div className="relative group lg:mt-12">
            {/* Image Container */}
            <div className="w-full h-64 relative">
              <img
                src="/placeholder.svg?height=256&width=400"
                alt="コンサルティング・サポート"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Content Container - Overlapping */}
            <div className="bg-blue-600 text-white p-6 rounded-lg relative -mt-16 mx-6 z-10 shadow-xl">
              <div className="flex items-center mb-3">
                <div className="text-4xl font-bold text-white/30 mr-3">04</div>
                <div className="w-12 h-0.5 bg-cyan-400"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">コンサルティング・サポート</h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-4">
                専門的なコンサルティングから継続的なサポートまで、お客様のニーズに合わせたサービスを提供いたします。
              </p>
              <a href="/services/consulting" className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group">
                <span>VIEW MORE</span>
                <div className="ml-2 w-6 h-px bg-cyan-400 group-hover:w-8 transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action - Full Services Page */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">すべてのサービスを見る</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                AEGIS LLPが提供する包括的なサービスの詳細をご覧ください。政府機関向けの専門的なソリューションをすべてご紹介いたします。
              </p>
              <a href="/services" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                サービス一覧を見る
              </a>
            </div>
          </div>
        </div>

        {/* Side Text */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="text-white text-sm opacity-60" style={{ writingMode: "vertical-rl" }}>
            工場から公共施設、個人住宅も電気設備工事の総合パートナー。
          </div>
        </div>
      </div>
    </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-400 mb-4">実績</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Projects Slider */}
          <ProjectsSection  />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 mb-4">
              Contact
            </div>
            <h2 className="text-4xl font-bold text-blue-400 mb-4">お問い合わせ</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              政府機関向けデジタルソリューションに関するご相談は、お気軽にお問い合わせください。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 bg-opacity-90 rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                お問い合わせフォーム
              </h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      機関名・会社名 <span className="text-red-400">*</span>
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="例：○○省、○○市役所"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      部署名
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="例：情報システム課"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      お名前 <span className="text-red-400">*</span>
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      役職
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="例：課長、主任"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      メールアドレス <span className="text-red-400">*</span>
                    </div>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@gov.jp"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      電話番号
                    </div>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    お問い合わせ種別 <span className="text-red-400">*</span>
                  </div>
                  <select
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="system-development">システム開発のご相談</option>
                    <option value="system-integration">システム統合のご相談</option>
                    <option value="procurement">調達・契約管理のご相談</option>
                    <option value="consulting">コンサルティングのご相談</option>
                    <option value="support">サポートのご相談</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    お問い合わせ内容 <span className="text-red-400">*</span>
                  </div>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="具体的なご要望やご質問をお聞かせください。&#10;&#10;例：&#10;・現在のシステムの課題&#10;・導入予定時期&#10;・予算規模&#10;・その他ご要望"
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <div className="text-sm text-gray-300 leading-relaxed">
                    <span className="text-red-400">*</span> プライバシーポリシーに同意します。
                    <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline ml-1">
                      プライバシーポリシーを確認する
                    </a>
                  </div>
                </div>

                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    お問い合わせを送信
                  </span>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Information */}
              <div className="bg-gray-800 bg-opacity-90 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  本社所在地
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">〒100-0001</p>
                      <p>東京都千代田区千代田1-1-1</p>
                      <p>千代田ビル 15階</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">TEL: 03-1234-5678</p>
                      <p className="text-sm text-gray-400">【受付時間】平日 9:00～17:00</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                    <p>FAX: 03-1234-5679</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p>info@aegis-llp.co.jp</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-800 bg-opacity-90 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  営業時間
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span>平日</span>
                    <span className="font-medium">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span>土曜日</span>
                    <span className="text-gray-500">休業</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span>日曜・祝日</span>
                    <span className="text-gray-500">休業</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">※緊急時のサポートについては、別途ご相談ください。</p>
                </div>
              </div>

              {/* Access Information */}
              <div className="bg-gray-800 bg-opacity-90 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                  </div>
                  アクセス
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <div>
                      <p className="font-medium mb-1">電車でお越しの場合</p>
                      <p className="text-sm">JR山手線・中央線「東京駅」徒歩5分</p>
                      <p className="text-sm">東京メトロ丸ノ内線「東京駅」徒歩3分</p>
                      <p className="text-sm">都営三田線「大手町駅」徒歩7分</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <div>
                      <p className="font-medium mb-1">お車でお越しの場合</p>
                      <p className="text-sm">首都高速都心環状線「呉服橋IC」より3分</p>
                      <p className="text-sm">※駐車場完備（事前予約制）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-4">
                    <span className="bg-white text-black px-3 py-2 mr-2">AEGIS</span>
                    <span className="text-lg">LLP</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    政府機関向けデジタルソリューションのリーディングカンパニーとして、日本の行政サービス向上に貢献いたします。
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://twitter.com/aegis_llp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/company/aegis-llp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/aegis.llp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold text-white mb-6">サービス</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/services/digital-solutions" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      政府デジタルソリューション
                    </a>
                  </li>
                  <li>
                    <a href="/services/procurement" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      調達・契約管理
                    </a>
                  </li>
                  <li>
                    <a href="/services/system-integration" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      システム統合
                    </a>
                  </li>
                  <li>
                    <a href="/services/consulting" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      コンサルティング・サポート
                    </a>
                  </li>
                  <li>
                    <a href="/services/security" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      セキュリティソリューション
                    </a>
                  </li>
                  <li>
                    <a href="/services/cloud-migration" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      クラウド移行支援
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-bold text-white mb-6">会社情報</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      会社概要
                    </a>
                  </li>
                  <li>
                    <a href="/about/message" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      代表メッセージ
                    </a>
                  </li>
                  <li>
                    <a href="/about/philosophy" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      企業理念
                    </a>
                  </li>
                  <li>
                    <a href="/about/history" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      沿革
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      採用情報
                    </a>
                  </li>
                  <li>
                    <a href="/news" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      ニュース・お知らせ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact & Support */}
              <div>
                <h3 className="text-lg font-bold text-white mb-6">お問い合わせ・サポート</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-white font-medium text-sm">お電話でのお問い合わせ</span>
                    </div>
                    <p className="text-blue-400 font-bold">03-1234-5678</p>
                    <p className="text-gray-400 text-xs">平日 9:00～17:00</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-white font-medium text-sm">メールでのお問い合わせ</span>
                    </div>
                    <p className="text-blue-400 text-sm">info@aegis-llp.co.jp</p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      お問い合わせフォーム
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                  <p className="text-gray-400 text-sm">© 2024 AEGIS LLP. All rights reserved.</p>
                  <div className="flex space-x-6">
                    <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                      プライバシーポリシー
                    </a>
                    <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                      利用規約
                    </a>
                    <a href="/security" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                      セキュリティポリシー
                    </a>
                    <a href="/sitemap" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                      サイトマップ
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-400 text-sm">ISO 27001認証取得</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span className="text-gray-400 text-sm">政府認定事業者</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}