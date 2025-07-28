"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < 2 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('services-hero-section');
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
                className="text-blue-600 font-medium transition-colors relative"
              >
                私たちのサービス
                <div className="text-xs text-blue-500">Service</div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
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
      <section id="services-hero-section" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/government-building.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-start space-x-4 ml-16">
                <div className="bg-blue-600 px-6 py-12 text-white">
                  <div className="text-6xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    Service
                  </div>
                </div>
                <div className="text-white mt-8">
                  <div className="text-3xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    事業案内
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    政府機関向け
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    デジタル
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    ソリューション
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
              <div className="text-xs text-gray-600 font-medium">SERVICES INFO</div>
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
                    <div className="text-blue-600 font-bold text-xs">デジタル化</div>
                    <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">最新</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">政府機関のデジタル変革を支援</div>
                </div>

                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">システム統合</div>
                    <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">実績</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">150以上のプロジェクト成功実績</div>
                </div>

                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">コンサルティング</div>
                    <div className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">専門</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">政府業務の専門的なサポート</div>
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

      {/* Services Overlay Section */}
      <div 
        className="relative z-20"
        style={{
          marginTop: `-${scrollProgress * 100}vh`
        }}
      >
        <div className="bg-gray-50 min-h-screen">
          {/* Services Header */}
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-4">Service</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">事業案内</h1>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                政府機関向けの包括的なデジタルソリューションをご提供いたします
              </p>
            </div>
          </div>

          {/* Service 1 */}
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="w-full h-80 relative">
                    <img
                      src="/placeholder.svg?height=320&width=500"
                      alt="電気設備事業"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="bg-blue-600 text-white p-6 rounded-lg relative -mt-20 mx-6 z-10 shadow-xl">
                    <div className="flex items-center mb-3">
                      <span className="text-4xl font-bold text-white/30 mr-3">01</span>
                      <div className="w-12 h-0.5 bg-cyan-400"></div>
                    </div>
                    <div className="text-sm text-cyan-400 mb-1">Electrical equipment</div>
                    <h2 className="text-xl font-bold mb-3">電気設備事業（高圧・低圧）</h2>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      工場の生産設備の自動化をはじめ、現地電気計装工事はもちろんのこと、制御盤の設計、製作、施工、PLCソフトの設計対応。
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">高品質な電気設備工事</h3>
                  <p className="text-gray-700 leading-relaxed">
                    政府機関および民間企業向けの電気設備工事において、高圧から低圧まで幅広い対応を行っています。
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">高圧設備</h4>
                      <p className="text-gray-600 text-sm">6.6kV以上の高圧電気設備</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">低圧設備</h4>
                      <p className="text-gray-600 text-sm">600V以下の低圧電気設備</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <h3 className="text-3xl font-bold text-gray-900">制御・計装設備の専門技術</h3>
                  <p className="text-gray-700 leading-relaxed">
                    最先端の制御技術により、政府機関のシステム効率化を実現します。
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">PLC制御</h4>
                      <p className="text-gray-600 text-sm">プログラマブルロジックコントローラ</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">計装設備</h4>
                      <p className="text-gray-600 text-sm">測定・制御機器の設計・施工</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <div className="w-full h-80 relative">
                    <img
                      src="/placeholder.svg?height=320&width=500"
                      alt="制御・計装設備事業"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="bg-blue-600 text-white p-6 rounded-lg relative -mt-20 mx-6 z-10 shadow-xl">
                    <div className="flex items-center mb-3">
                      <span className="text-4xl font-bold text-white/30 mr-3">02</span>
                      <div className="w-12 h-0.5 bg-cyan-400"></div>
                    </div>
                    <div className="text-sm text-cyan-400 mb-1">Control/instrumentation equipment</div>
                    <h2 className="text-xl font-bold mb-3">制御・計装設備事業</h2>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      政府機関向けの最新デジタル技術を活用したシステム開発から運用まで、包括的なソリューションを提供いたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="w-full h-80 relative">
                    <img
                      src="/placeholder.svg?height=320&width=500"
                      alt="空調設備事業"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="bg-blue-600 text-white p-6 rounded-lg relative -mt-20 mx-6 z-10 shadow-xl">
                    <div className="flex items-center mb-3">
                      <span className="text-4xl font-bold text-white/30 mr-3">03</span>
                      <div className="w-12 h-0.5 bg-cyan-400"></div>
                    </div>
                    <div className="text-sm text-cyan-400 mb-1">Air conditioning equipment</div>
                    <h2 className="text-xl font-bold mb-3">空調設備事業</h2>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      一般住宅はもちろん、事務所やオフィスの換気扇・換気ダクト工事やエアコンの取り付け・更新工事対応。
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">快適な環境づくり</h3>
                  <p className="text-gray-700 leading-relaxed">
                    政府機関や公共施設の空調設備工事から、一般オフィスの環境改善まで、幅広いニーズにお応えします。
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">換気システム</h4>
                      <p className="text-gray-600 text-sm">高効率換気扇・ダクト工事</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">空調機器</h4>
                      <p className="text-gray-600 text-sm">エアコン設置・メンテナンス</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <h3 className="text-3xl font-bold text-gray-900">専門的なコンサルティング</h3>
                  <p className="text-gray-700 leading-relaxed">
                    政府機関の課題解決に向けた専門的なコンサルティングサービスを提供。
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">戦略立案</h4>
                      <p className="text-gray-600 text-sm">デジタル変革戦略の策定</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">継続サポート</h4>
                      <p className="text-gray-600 text-sm">24時間体制の運用支援</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <div className="w-full h-80 relative">
                    <img
                      src="/placeholder.svg?height=320&width=500"
                      alt="コンサルティング・サポート"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="bg-blue-600 text-white p-6 rounded-lg relative -mt-20 mx-6 z-10 shadow-xl">
                    <div className="flex items-center mb-3">
                      <span className="text-4xl font-bold text-white/30 mr-3">04</span>
                      <div className="w-12 h-0.5 bg-cyan-400"></div>
                    </div>
                    <div className="text-sm text-cyan-400 mb-1">Consulting & Support</div>
                    <h2 className="text-xl font-bold mb-3">コンサルティング・サポート</h2>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      専門的なコンサルティングから継続的なサポートまで、お客様のニーズに合わせたサービスを提供いたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">お客様のニーズに最適なソリューションを</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AEGIS LLPの豊富な経験と専門知識で、政府機関のデジタル変革を成功に導きます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg">
                  サービス詳細資料請求
                </button>
                <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                  無料相談のお申し込み
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-900 text-white">
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
        </div>
      </div>

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

export default ServicesPage;