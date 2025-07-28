"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < 2 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('contact-hero-section');
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      
      if (rect.top <= 0) {
        const scrolled = Math.abs(rect.top);
        const heroHeight = rect.height;
        const progress = Math.max(0, Math.min(1, scrolled / (heroHeight * 0.5)));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
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
      <section id="contact-hero-section" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Contact Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-start space-x-4 ml-16">
                <div className="bg-blue-600 px-6 py-12 text-white">
                  <div className="text-6xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    Contact
                  </div>
                </div>
                <div className="text-white mt-8">
                  <div className="text-3xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    お問い合わせ
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    ご相談・
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    お見積り
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    承ります
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="text-white text-sm space-y-8">
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

        <div className="absolute bottom-8 right-8 w-80">
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-600 font-medium">CONTACT INFO</div>
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
                    <div className="text-blue-600 font-bold text-xs">電話相談</div>
                    <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">無料</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">お気軽にお電話でご相談ください</div>
                </div>

                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">メール対応</div>
                    <div className="bg-green-100 text-blue-500 px-2 py-1 rounded-full text-xs font-medium">24時間</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">メールでのお問い合わせも承ります</div>
                </div>

                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">訪問相談</div>
                    <div className="bg-orange-100 text-blue-50 px-2 py-1 rounded-full text-xs font-medium">要予約</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">直接お伺いしてのご相談も可能</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-white opacity-50"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-75"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Contact Content Overlay Section */}
      <div 
        className="relative z-20"
        style={{
          marginTop: `-${scrollProgress * 100}vh`
        }}
      >
        <div className="bg-gray-50 min-h-screen">
          {/* Contact Header */}
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-4">Contact</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                ご質問・ご相談がございましたら、お気軽にお問い合わせください
              </p>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Phone className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">お電話でのお問い合わせ</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">03-1234-5678</div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">受付時間：9:00〜17:00（平日）</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      お急ぎのご相談はお電話が最も迅速です
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">メールでのお問い合わせ</h3>
                    <div className="text-lg font-bold text-blue-500 mb-2">info@aegis-llp.com</div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">24時間受付</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      詳細なご相談内容はメールでお送りください
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MapPin className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">ご来社でのご相談</h3>
                    <div className="text-lg font-bold text-blue-500 mb-2">東京本社</div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">要事前予約</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      直接お会いしてのご相談も承ります
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせフォーム</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-gray-600">
                  下記フォームにご記入いただき、送信してください。担当者より2営業日以内にご連絡いたします。
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      会社名・組織名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="株式会社○○"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-blue-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">お問い合わせ内容を選択してください</option>
                    <option value="government-digital">政府デジタルソリューション</option>
                    <option value="procurement">調達・契約管理</option>
                    <option value="system-integration">システム統合</option>
                    <option value="consulting">コンサルティング・サポート</option>
                    <option value="estimate">お見積り依頼</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    詳細・ご質問内容 <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="ご質問やご相談内容を詳しくお聞かせください..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
                  >
                    <Send className="w-5 h-5" />
                    <span>送信する</span>
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    ※ 担当者より2営業日以内にご連絡いたします
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Office Information */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">アクセス情報</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">AEGIS LLP 東京本社</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">住所</div>
                        <div className="text-gray-600">〒100-0001 東京都千代田区千代田1-1-1<br />千代田ビル 10F</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">電話番号</div>
                        <div className="text-gray-600">03-1234-5678</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">メール</div>
                        <div className="text-gray-600">info@aegis-llp.com</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">営業時間</div>
                        <div className="text-gray-600">平日 9:00〜17:00<br />（土日祝日は休業）</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-gray-600 text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Google Maps</p>
                    <p className="text-sm">地図がここに表示されます</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">よくあるご質問</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-gray-600">
                  お問い合わせの前に、よくあるご質問をご確認ください
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 相談は無料ですか？</h3>
                  <p className="text-gray-600">A. はい、初回のご相談は無料で承っております。お気軽にお問い合わせください。</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 見積もりにはどのくらい時間がかかりますか？</h3>
                  <p className="text-gray-600">A. プロジェクトの規模により異なりますが、通常1週間程度でお見積もりをご提示いたします。</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 全国対応は可能ですか？</h3>
                  <p className="text-gray-600">A. はい、全国どちらでも対応可能です。リモートでのサポートも充実しております。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold mb-4">
                <span className="bg-white text-black px-2 py-1 mr-1">AEGIS</span>
                <span className="text-sm">LLP</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                政府機関向けデジタルソリューションのリーディングカンパニー
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">
                  <span className="font-medium">TEL:</span> 03-1234-5678
                </div>
                <div className="text-sm text-gray-400">
                  <span className="font-medium">受付時間:</span> 9:00〜17:00
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">サービス</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">政府デジタルソリューション</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">調達・契約管理</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">システム統合</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">コンサルティング・サポート</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">会社情報</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">会社概要</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">代表挨拶</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">組織体制</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">アクセス</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">採用情報</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">サポート</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">資料請求</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">よくある質問</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">技術サポート</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">© 2024 AEGIS LLP. All rights reserved.</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    プライバシーポリシー
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    利用規約
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    セキュリティポリシー
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
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
      </footer>

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-8 right-8 z-30">
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgb(59, 130, 246)"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${175.929 * scrollProgress} 175.929`}
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-blue-400 text-xs font-bold">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;