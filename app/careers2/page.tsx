"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, Users, Award, Building, Clock, CheckCircle, ArrowRight, MapPin, Calendar, Briefcase } from 'lucide-react';

const CareersPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
  const [teamCarouselOffset, setTeamCarouselOffset] = useState(0);

  // Scroll effect for overlay
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('careers-hero-section');
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

  // Information carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselSlide(prev => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Team carousel continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setTeamCarouselOffset(prev => prev - 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const carouselSlides = [
    {
      date: "2024.07.15",
      badge: "募集中",
      title: "新卒採用開始のお知らせ",
      color: "bg-blue-500"
    },
    {
      date: "2024.06.20", 
      badge: "説明会",
      title: "キャリア説明会開催",
      color: "bg-green-500"
    },
    {
      date: "2024.05.10",
      badge: "福利厚生",
      title: "リモートワーク制度拡充",
      color: "bg-blue-600"
    }
  ];

  const jobOpenings = [
    {
      title: "政府系システムエンジニア",
      department: "技術部門",
      location: "東京",
      type: "正社員",
      experience: "3年以上"
    },
    {
      title: "プロジェクトマネージャー",
      department: "管理部門", 
      location: "東京/リモート",
      type: "正社員",
      experience: "5年以上"
    },
    {
      title: "セキュリティスペシャリスト",
      department: "技術部門",
      location: "東京",
      type: "正社員/契約",
      experience: "2年以上"
    },
    {
      title: "UIUXデザイナー",
      department: "デザイン部門",
      location: "東京/リモート",
      type: "正社員",
      experience: "経験不問"
    }
  ];

  const benefits = [
    { icon: Award, title: "競争力のある給与", description: "業界トップクラスの給与水準と成果に応じたインセンティブ" },
    { icon: Clock, title: "柔軟な働き方", description: "リモートワーク・フレックスタイム制度完備" },
    { icon: Users, title: "成長機会", description: "専門研修・資格取得支援・海外研修制度" },
    { icon: Building, title: "安定した環境", description: "政府機関との長期契約による安定した事業基盤" }
  ];

  const teamMembers = [
    { name: "田中 太郎", title: "シニアエンジニア", department: "技術部門", image: "/api/placeholder/150/150" },
    { name: "佐藤 花子", title: "プロジェクトマネージャー", department: "管理部門", image: "/api/placeholder/150/150" },
    { name: "山田 次郎", title: "セキュリティ専門家", department: "技術部門", image: "/api/placeholder/150/150" },
    { name: "鈴木 美咲", title: "UIUXデザイナー", department: "デザイン部門", image: "/api/placeholder/150/150" },
    { name: "高橋 健一", title: "システムアーキテクト", department: "技術部門", image: "/api/placeholder/150/150" },
    { name: "渡辺 恵子", title: "品質管理責任者", department: "品質部門", image: "/api/placeholder/150/150" },
    { name: "伊藤 大輔", title: "営業マネージャー", department: "営業部門", image: "/api/placeholder/150/150" },
    { name: "中村 智子", title: "人事責任者", department: "人事部門", image: "/api/placeholder/150/150" }
  ];

  const processSteps = [
    { step: "01", title: "応募書類提出", description: "履歴書・職務経歴書をオンラインで提出" },
    { step: "02", title: "書類選考", description: "1週間程度で結果をご連絡" },
    { step: "03", title: "一次面接", description: "技術面接・適性検査を実施" },
    { step: "04", title: "最終面接", description: "役員面接・条件面談" },
    { step: "05", title: "内定・入社", description: "条件合意後、入社日を調整" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-black">
                <span className="bg-black text-white px-2 py-1 mr-1">AEGIS</span>
                <span className="text-sm">LLP</span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                ホーム
                <div className="text-xs text-gray-500">Home</div>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                私たちのサービス
                <div className="text-xs text-gray-500">Service</div>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                実績
                <div className="text-xs text-gray-500">Works</div>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium border-b-2 border-blue-600">
                採用情報
                <div className="text-xs text-blue-600">Recruit</div>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                会社概要
                <div className="text-xs text-gray-500">Company</div>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                お問い合わせ
                <div className="text-xs text-gray-500">Contact</div>
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:block text-right">
                <div className="text-lg font-bold text-gray-900">TEL.03-1234-5678</div>
                <div className="text-xs text-gray-600">【受付時間】9:00～17:00</div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium flex items-center space-x-2">
                <span>ENTRY</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="careers-hero-section" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Careers Background"
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
                    Careers
                  </div>
                </div>
                <div className="text-white mt-8">
                  <div className="text-3xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    採用情報
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    共に未来を
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    創る仲間
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    募集中
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
              <div className="text-xs text-gray-600 font-medium">INFORMATION</div>
              <div className="flex space-x-1">
                <button
                  onClick={() => setCurrentCarouselSlide(currentCarouselSlide > 0 ? currentCarouselSlide - 1 : 2)}
                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <ChevronLeft className="w-3 h-3 text-gray-600" />
                </button>
                <button
                  onClick={() => setCurrentCarouselSlide(currentCarouselSlide < 2 ? currentCarouselSlide + 1 : 0)}
                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <ChevronRight className="w-3 h-3 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCarouselSlide * 100}%)` }}
              >
                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">新卒採用</div>
                    <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">募集中</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">2025年新卒採用を開始しました</div>
                </div>

                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">キャリア説明会</div>
                    <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">開催中</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">オンライン説明会を定期開催</div>
                </div>

                <div className="w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 font-bold text-xs">福利厚生</div>
                    <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">充実</div>
                  </div>
                  <div className="text-gray-700 text-xs mt-1">リモートワーク制度を拡充しました</div>
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

      {/* Content Overlay */}
      <div 
        className="relative z-20"
        style={{
          marginTop: `-${scrollProgress * 100}vh`
        }}
      >
        <div className="bg-gray-50 min-h-screen">
        {/* Why Join AEGIS */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">なぜAEGISを選ぶのか</h2>
              <p className="text-xl text-gray-600">政府機関向けデジタルソリューションのリーディングカンパニーとして、<br/>社会に貢献できる意義のある仕事を提供します</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">使命感のある仕事</h3>
                <p className="text-gray-600 mb-6">
                  日本の行政サービス向上に直接貢献できる仕事です。最新のデジタル技術を活用して、
                  国民の皆様により良いサービスを提供するシステムを構築しています。
                </p>
                <p className="text-gray-600 mb-8">
                  政府機関との長期的なパートナーシップにより、安定した環境で専門性を高め、
                  キャリアを積むことができます。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">社会貢献性の高いプロジェクト</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">最新技術への継続的な投資</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">長期安定したプロジェクト</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10+</div>
                    <div className="text-sm text-gray-600">年の政府機関との実績</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">完了プロジェクト数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-gray-600">チームメンバー</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Perks */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">福利厚生・働く環境</h2>
              <p className="text-xl text-gray-600">社員一人ひとりが最高のパフォーマンスを発揮できる環境を整備しています</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">募集職種</h2>
              <p className="text-xl text-gray-600">現在募集中のポジションをご確認ください</p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 flex items-center">
                        応募する
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">選考プロセス</h2>
              <p className="text-xl text-gray-600">応募から入社までの流れをご説明します</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex-1 max-w-xs">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-full w-4">
                      <ArrowRight className="w-6 h-6 text-blue-600 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Environment */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">働く環境</h2>
              <p className="text-xl text-gray-600">モダンなオフィス環境とリモートワークの最適な組み合わせ</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 p-8 rounded-lg mb-4">
                  <Building className="w-16 h-16 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">モダンオフィス</h3>
                <p className="text-gray-600">最新設備を完備した快適なワークスペース</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 p-8 rounded-lg mb-4">
                  <Clock className="w-16 h-16 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">フレキシブル</h3>
                <p className="text-gray-600">リモートワーク・フレックスタイム完全対応</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 p-8 rounded-lg mb-4">
                  <Users className="w-16 h-16 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">チーム連携</h3>
                <p className="text-gray-600">コラボレーションツールで seamless な協力体制</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">私たちのチーム</h2>
              <p className="text-xl text-gray-600">多様な専門性を持つメンバーが協力して最高のソリューションを提供します</p>
            </div>

            {/* Continuous Team Carousel */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform ease-linear"
                style={{ 
                  transform: `translateX(${teamCarouselOffset}px)`,
                  width: `${teamMembers.length * 280}px`
                }}
              >
                {/* Duplicate team members for seamless loop */}
                {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
                  <div key={index} className="flex-shrink-0 w-64 mx-2">
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-1">{member.title}</p>
                      <p className="text-sm text-gray-600">{member.department}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Reset position when it goes too far */}
              {teamCarouselOffset <= -(teamMembers.length * 280) && (() => {
                setTimeout(() => setTeamCarouselOffset(0), 0);
                return null;
              })()}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">あなたも私たちの仲間になりませんか？</h2>
            <p className="text-xl text-blue-100 mb-8">
              政府機関向けデジタルソリューションで社会に貢献する意義のある仕事を一緒に始めましょう
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 text-lg font-medium rounded hover:bg-gray-50 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                求人に応募する
              </button>
              <button className="border-2 border-white text-white px-8 py-4 text-lg font-medium rounded hover:bg-white hover:text-blue-600 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                お電話でのお問い合わせ
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-white text-black px-3 py-2 text-xl font-bold">AEGIS</div>
                  <span className="ml-2 text-sm">LLP</span>
                </div>
                <p className="text-gray-300 mb-6">
                  政府機関向けデジタルソリューションのリーディングカンパニーとして、日本の行政サービス向上に貢献いたします。
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-6">サービス</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>政府デジタルソリューション</li>
                  <li>調達・契約管理</li>
                  <li>システム統合</li>
                  <li>コンサルティング・サポート</li>
                  <li>セキュリティソリューション</li>
                  <li>クラウド移行支援</li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-bold mb-6">会社情報</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>会社概要</li>
                  <li>代表メッセージ</li>
                  <li>企業理念</li>
                  <li>沿革</li>
                  <li>採用情報</li>
                  <li>ニュース・お知らせ</li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-bold mb-6">お問い合わせ・サポート</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-blue-400 mb-2">
                      <Phone className="w-4 h-4 mr-2" />
                      お電話でのお問い合わせ
                    </div>
                    <div className="text-xl font-bold">03-1234-5678</div>
                    <div className="text-sm text-gray-400">平日 9:00～17:00</div>
                  </div>
                  <div>
                    <div className="flex items-center text-blue-400 mb-2">
                      <Mail className="w-4 h-4 mr-2" />
                      メールでのお問い合わせ
                    </div>
                    <div className="text-blue-400">info@aegis-llp.co.jp</div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded text-sm font-medium hover:bg-blue-700 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    お問い合わせフォーム
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 md:mb-0">
                  <span>© 2024 AEGIS LLP. All rights reserved.</span>
                  <a href="#" className="hover:text-white">プライバシーポリシー</a>
                  <a href="#" className="hover:text-white">利用規約</a>
                  <a href="#" className="hover:text-white">セキュリティポリシー</a>
                  <a href="#" className="hover:text-white">サイトマップ</a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-green-400 text-sm">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    ISO 27001認証取得
                  </div>
                  <div className="flex items-center text-blue-400 text-sm">
                    <Award className="w-4 h-4 mr-1" />
                    政府認定事業者
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
        }
        .text-orientation-upright {
          text-orientation: upright;
        }
      `}</style>
    </div>
    </div>
  );
};

export default CareersPage;