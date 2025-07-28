"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Users, Target, TrendingUp, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const AboutPage = () => {
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
      const heroSection = document.getElementById('about-hero-section');
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

  const timelineData = [
    {
      year: '2010',
      title: 'AEGIS LLP設立',
      description: '政府機関向けIT支援サービスを開始'
    },
    {
      year: '2012',
      title: 'デジタル庁認定事業者',
      description: '政府認定事業者として正式認定'
    },
    {
      year: '2015',
      title: 'ISO 27001認証取得',
      description: '情報セキュリティマネジメントシステム認証'
    },
    {
      year: '2018',
      title: '事業拡大',
      description: '自治体向けサービス本格展開'
    },
    {
      year: '2020',
      title: 'デジタル化推進',
      description: 'コロナ禍での政府DX支援を強化'
    },
    {
      year: '2024',
      title: '150プロジェクト達成',
      description: '累計150以上のプロジェクト成功実績'
    }
  ];

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
      <section id="about-hero-section" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="About AEGIS LLP"
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
                    About
                  </div>
                </div>
                <div className="text-white mt-8">
                  <div className="text-3xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    会社概要
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    信頼と
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    革新で
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    未来を創る
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
              <div className="text-xs text-gray-600 font-medium">COMPANY INFO</div>
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
                    <div className="text-blue-600 font-bold text-xs">設立</div>
                    <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">2010年</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">政府機関向けIT支援でスタート</div>
                </div>

                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">実績</div>
                    <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">150+</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">政府・自治体プロジェクト成功</div>
                </div>

                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">認証</div>
                    <div className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">ISO</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">ISO 27001認証取得済み</div>
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

      {/* About Content Overlay Section */}
      <div 
        className="relative z-20"
        style={{
          marginTop: `-${scrollProgress * 100}vh`
        }}
      >
        <div className="bg-gray-50 min-h-screen">
          {/* About Header */}
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-4">About</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">会社概要</h1>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                政府機関のデジタル変革を支援するリーディングカンパニーとして、信頼と革新で未来を創造します
              </p>
            </div>
          </div>

          {/* CEO Message */}
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="CEO Portrait"
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded">
                    <div className="font-bold">代表取締役</div>
                    <div className="text-sm">田中 太郎</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">代表挨拶</h2>
                    <div className="w-16 h-1 bg-blue-500 mb-6"></div>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      政府機関のデジタル変革が急速に進む中、AEGIS LLPは常に最前線でお客様と共に歩んでまいりました。
                    </p>
                    <p>
                      私たちの使命は、単なるシステム構築ではなく、政府と国民の間により良いデジタル体験を創造することです。
                    </p>
                    <p>
                      今後も技術革新と人材育成に投資を続け、お客様の信頼に応える最高品質のサービスを提供してまいります。
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <blockquote className="text-blue-800 italic">
                      "テクノロジーで政府と国民をつなぎ、より良い社会の実現に貢献する"
                    </blockquote>
                    <div className="text-right text-blue-600 font-medium mt-3">- 田中 太郎</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Profile Table */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">会社概要</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-gray-600">
                  AEGIS LLPの基本情報をご紹介いたします
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 bg-gray-100 font-medium text-gray-900 w-1/3">会社名</td>
                      <td className="px-6 py-4 text-gray-700">AEGIS LLP（エージス・リミテッド・ライアビリティ・パートナーシップ）</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 bg-gray-100 font-medium text-gray-900">設立</td>
                      <td className="px-6 py-4 text-gray-700">
                        2010年4月 個人事業にて創業<br />
                        2012年3月 法人化
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 bg-gray-100 font-medium text-gray-900">資本金</td>
                      <td className="px-6 py-4 text-gray-700">5,000万円</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 bg-gray-100 font-medium text-gray-900">代表者</td>
                      <td className="px-6 py-4 text-gray-700">代表取締役 田中 太郎</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 bg-gray-100 font-medium text-gray-900">所在地</td>
                      <td className="px-6 py-4 text-gray-700">
                        〒100-0001<br />
                        東京都千代田区千代田1-1-1 千代田ビル 10F
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 bg-gray-100 font-medium text-gray-900">電話番号</td>
                      <td className="px-6 py-4 text-gray-700">03-1234-5678</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 bg-gray-100 font-medium text-gray-900">FAX番号</td>
                      <td className="px-6 py-4 text-gray-700">03-1234-5679</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 bg-gray-100 font-medium text-gray-900">従業員数</td>
                      <td className="px-6 py-4 text-gray-700">65名</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 bg-gray-100 font-medium text-gray-900">売上高</td>
                      <td className="px-6 py-4 text-gray-700">12億5千万円（2024年）</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 bg-gray-100 font-medium text-gray-900">主要取引先</td>
                      <td className="px-6 py-4 text-gray-700">
                        <ul className="space-y-1">
                          <li>• デジタル庁</li>
                          <li>• 総務省</li>
                          <li>• 各都道府県・市区町村</li>
                          <li>• 独立行政法人</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Company Philosophy */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">企業理念</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-gray-600">
                  私たちの使命・ビジョン・バリューをご紹介します
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ミッション</h3>
                  <p className="text-gray-600 leading-relaxed">
                    テクノロジーの力で政府と国民をつなぎ、より良い社会の実現に貢献する
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ビジョン</h3>
                  <p className="text-gray-600 leading-relaxed">
                    政府機関のデジタル変革を支援するリーディングカンパニーとして業界を牽引する
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">バリュー</h3>
                  <p className="text-gray-600 leading-relaxed">
                    信頼・革新・協働の精神で、お客様と共に課題解決に取り組む
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Story */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">私たちのストーリー</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-gray-600">
                  AEGIS LLPの歩みと成長の軌跡をご紹介します
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">創業の想い</h3>
                  <p className="text-blue-800 leading-relaxed">
                    2010年、政府機関のIT化が急速に進む中で、真にユーザーフレンドリーなシステムが少ないことに課題を感じた創業者が、
                    「政府と国民をつなぐ架け橋となるようなデジタルサービスを創りたい」という想いから会社を設立しました。
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">成長と発展</h3>
                  <p className="text-gray-800 leading-relaxed">
                    創業から14年間で150を超えるプロジェクトを成功に導き、政府機関からの厚い信頼を獲得してきました。
                    単なるシステム開発会社ではなく、お客様の課題を深く理解し、共に解決策を見つけるパートナーとして成長しています。
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">未来への挑戦</h3>
                  <p className="text-blue-800 leading-relaxed">
                    AI・IoT・ブロックチェーンなどの最新技術を活用し、次世代の行政サービスの在り方を模索しています。
                    国民一人ひとりがより便利で安心できるデジタル社会の実現に向けて、挑戦を続けていきます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">沿革</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-gray-600">
                  AEGIS LLPの主要な歩みをご紹介します
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300"></div>
                <div className="space-y-8">
                  {timelineData.map((item, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div className="ml-8 bg-white rounded-lg p-6 shadow-lg flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">認証・資格</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-gray-600">
                  取得している認証・資格をご紹介します
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-6 py-4 text-left font-bold">認証・資格名</th>
                      <th className="px-6 py-4 text-left font-bold">取得年月</th>
                      <th className="px-6 py-4 text-left font-bold">認証機関</th>
                      <th className="px-6 py-4 text-left font-bold">有効期限</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">ISO 27001</td>
                      <td className="px-6 py-4 text-gray-700">2015年3月</td>
                      <td className="px-6 py-4 text-gray-700">日本品質保証機構（JQA）</td>
                      <td className="px-6 py-4 text-gray-700">2027年3月</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">政府認定事業者</td>
                      <td className="px-6 py-4 text-gray-700">2012年5月</td>
                      <td className="px-6 py-4 text-gray-700">デジタル庁</td>
                      <td className="px-6 py-4 text-gray-700">継続認定</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">プライバシーマーク</td>
                      <td className="px-6 py-4 text-gray-700">2016年9月</td>
                      <td className="px-6 py-4 text-gray-700">日本情報経済社会推進協会（JIPDEC）</td>
                      <td className="px-6 py-4 text-gray-700">2026年9月</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">ISO 9001</td>
                      <td className="px-6 py-4 text-gray-700">2018年1月</td>
                      <td className="px-6 py-4 text-gray-700">日本品質保証機構（JQA）</td>
                      <td className="px-6 py-4 text-gray-700">2027年1月</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">情報処理安全確保支援士</td>
                      <td className="px-6 py-4 text-gray-700">2020年4月</td>
                      <td className="px-6 py-4 text-gray-700">情報処理推進機構（IPA）</td>
                      <td className="px-6 py-4 text-gray-700">継続更新</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 mb-2">ISO 27001</h4>
                  <p className="text-blue-700 text-sm">情報セキュリティマネジメント</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 mb-2">政府認定</h4>
                  <p className="text-blue-700 text-sm">デジタル庁認定事業者</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 mb-2">プライバシーマーク</h4>
                  <p className="text-blue-700 text-sm">個人情報保護体制</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 mb-2">ISO 9001</h4>
                  <p className="text-blue-700 text-sm">品質マネジメント</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">実績と数字で見るAEGIS LLP</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-gray-300">
                  私たちの成長と実績を数字でご紹介します
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">150+</div>
                  <div className="text-gray-300 mb-2">プロジェクト数</div>
                  <div className="text-gray-400 text-sm">累計成功実績</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">65</div>
                  <div className="text-gray-300 mb-2">従業員数</div>
                  <div className="text-gray-400 text-sm">専門技術者</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">14</div>
                  <div className="text-gray-300 mb-2">創業年数</div>
                  <div className="text-gray-400 text-sm">2010年設立</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-gray-300 mb-2">顧客満足度</div>
                  <div className="text-gray-400 text-sm">継続利用率</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">お気軽にお問い合わせください</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AEGIS LLPについてご質問やご相談がございましたら、いつでもお気軽にお声がけください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg">
                  会社案内資料請求
                </button>
                <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                  お問い合わせ
                </button>
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

export default AboutPage;