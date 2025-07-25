"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, Building, Shield, Database, Cloud, Globe, Zap, CheckCircle, ExternalLink, Search, Eye, Phone, Mail } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  team: string;
  status: string;
  description: string;
  technologies: string[];
  features: string[];
  results: string[];
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ProjectsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < 2 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('projects-hero-section');
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

  const projects: Project[] = [
    {
      id: 1,
      title: "統合行政管理システム",
      category: "government",
      client: "内閣府",
      year: "2024",
      duration: "18ヶ月",
      team: "25名",
      status: "完了",
      description: "政府機関の業務プロセスを統合し、効率性を大幅に向上させたデジタル変革プロジェクト",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      features: [
        "ワークフロー自動化システム",
        "リアルタイム進捗管理",
        "多言語対応インターフェース",
        "高度なセキュリティ機能"
      ],
      results: [
        "処理時間70%短縮",
        "年間コスト3億円削減",
        "利用者満足度95%向上",
        "セキュリティインシデント0件"
      ],
      image: "/api/placeholder/600/400",
      icon: Building
    },
    {
      id: 2,
      title: "電子調達プラットフォーム",
      category: "procurement",
      client: "総務省",
      year: "2023",
      duration: "12ヶ月",
      team: "18名",
      status: "完了",
      description: "透明性と効率性を重視した次世代電子調達システムの構築と運用",
      technologies: ["Vue.js", "Spring Boot", "Oracle", "Azure", "Kubernetes"],
      features: [
        "AI駆動入札分析",
        "ブロックチェーン契約管理",
        "リアルタイム監査ログ",
        "モバイル対応インターフェース"
      ],
      results: [
        "調達期間50%短縮",
        "透明性スコア98%達成",
        "参加企業数300%増加",
        "不正入札検出率100%"
      ],
      image: "/api/placeholder/600/400",
      icon: Database
    },
    {
      id: 3,
      title: "クラウド移行プロジェクト",
      category: "cloud",
      client: "厚生労働省",
      year: "2024",
      duration: "24ヶ月",
      team: "30名",
      status: "進行中",
      description: "レガシーシステムの段階的クラウド移行と運用最適化",
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Python"],
      features: [
        "ゼロダウンタイム移行",
        "自動スケーリング機能",
        "災害復旧システム",
        "コスト最適化AI"
      ],
      results: [
        "運用コスト40%削減",
        "システム可用性99.9%",
        "移行完了率85%",
        "セキュリティ強化200%"
      ],
      image: "/api/placeholder/600/400",
      icon: Cloud
    },
    {
      id: 4,
      title: "サイバーセキュリティ強化",
      category: "security",
      client: "外務省",
      year: "2023",
      duration: "8ヶ月",
      team: "12名",
      status: "完了",
      description: "国家機密保護レベルのセキュリティシステム実装",
      technologies: ["Python", "TensorFlow", "ELK Stack", "Splunk", "Ansible"],
      features: [
        "AI脅威検知システム",
        "リアルタイム監視",
        "自動インシデント対応",
        "ゼロトラスト認証"
      ],
      results: [
        "脅威検知精度99.7%",
        "対応時間90%短縮",
        "セキュリティ評価AAA取得",
        "国際標準ISO27001準拠"
      ],
      image: "/api/placeholder/600/400",
      icon: Shield
    },
    {
      id: 5,
      title: "デジタル市民サービス",
      category: "citizen",
      client: "デジタル庁",
      year: "2024",
      duration: "15ヶ月",
      team: "22名",
      status: "進行中",
      description: "市民向けデジタルサービスの統合プラットフォーム開発",
      technologies: ["React Native", "GraphQL", "MongoDB", "GCP", "Firebase"],
      features: [
        "マイナンバー連携",
        "AIチャットボット",
        "音声認識機能",
        "バリアフリー対応"
      ],
      results: [
        "利用登録者数500万人",
        "手続き時間80%短縮",
        "アクセシビリティ満点",
        "アプリストア評価4.8"
      ],
      image: "/api/placeholder/600/400",
      icon: Globe
    },
    {
      id: 6,
      title: "エネルギー管理システム",
      category: "energy",
      client: "経済産業省",
      year: "2023",
      duration: "20ヶ月",
      team: "28名",
      status: "完了",
      description: "国家エネルギー効率最適化のためのIoTシステム構築",
      technologies: ["IoT", "Time Series DB", "Apache Kafka", "Redis", "Grafana"],
      features: [
        "リアルタイムエネルギー監視",
        "予測分析エンジン",
        "自動制御システム",
        "カーボンフットプリント計算"
      ],
      results: [
        "エネルギー効率25%向上",
        "CO2削減10万トン/年",
        "運用コスト30%削減",
        "予測精度95%達成"
      ],
      image: "/api/placeholder/600/400",
      icon: Zap
    }
  ];

  const categories: Category[] = [
    { id: 'all', name: '全て', count: projects.length },
    { id: 'government', name: '行政システム', count: projects.filter(p => p.category === 'government').length },
    { id: 'procurement', name: '調達管理', count: projects.filter(p => p.category === 'procurement').length },
    { id: 'cloud', name: 'クラウド', count: projects.filter(p => p.category === 'cloud').length },
    { id: 'security', name: 'セキュリティ', count: projects.filter(p => p.category === 'security').length },
    { id: 'citizen', name: '市民サービス', count: projects.filter(p => p.category === 'citizen').length },
    { id: 'energy', name: 'エネルギー', count: projects.filter(p => p.category === 'energy').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats: Stat[] = [
    { label: "完了プロジェクト", value: "50+", icon: CheckCircle },
    { label: "満足度", value: "98%", icon: Users },
    { label: "政府機関", value: "15", icon: Building },
    { label: "運用年数", value: "10年", icon: Calendar }
  ];

  const carouselSlides = [
    {
      title: "統合システム",
      status: "完了",
      description: "処理時間70%短縮を実現",
      statusColor: "bg-blue-100 text-blue-600"
    },
    {
      title: "セキュリティ強化",
      status: "高評価",
      description: "脅威検知精度99.7%達成",
      statusColor: "bg-green-100 text-green-600"
    },
    {
      title: "クラウド移行",
      status: "進行中",
      description: "運用コスト40%削減目標",
      statusColor: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
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
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium border-b-2 border-blue-600">
                実績
                <div className="text-xs text-blue-600">Works</div>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                採用情報
                <div className="text-xs text-gray-500">Recruit</div>
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
      <section id="projects-hero-section" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Projects Background"
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
                    Works
                  </div>
                </div>
                <div className="text-white mt-8">
                  <div className="text-3xl font-bold leading-tight" style={{ writingMode: "vertical-rl" }}>
                    実績
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    実現した
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    デジタル
                  </div>
                </div>
                <div className="text-white mt-12">
                  <div className="text-lg leading-relaxed" style={{ writingMode: "vertical-rl" }}>
                    変革
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
              <div className="text-xs text-gray-600 font-medium">PROJECT HIGHLIGHTS</div>
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
                {carouselSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="flex items-center space-x-2">
                      <div className="text-blue-600 font-bold text-xs">{slide.title}</div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${slide.statusColor}`}>
                        {slide.status}
                      </div>
                    </div>
                    <div className="text-gray-700 text-xs mt-1">{slide.description}</div>
                  </div>
                ))}
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
          {/* Stats Section */}
          <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">プロジェクト実績</h1>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  政府機関のデジタル変革を支援し、社会の発展に貢献してきた実績をご紹介します
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Filter and Search Section */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-blue-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        selectedCategory === category.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="プロジェクトを検索..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === '完了' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <project.icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-600 font-medium">{project.client}</span>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {project.team}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>詳細を見る</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">プロジェクトが見つかりません</h3>
                  <p className="text-gray-600">検索条件を変更してお試しください</p>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-blue-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-4">あなたのプロジェクトも成功に導きます</h2>
              <p className="text-xl text-blue-100 mb-8">
                豊富な実績と専門知識で、政府機関のデジタル変革を全力でサポートいたします
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 text-lg font-medium rounded hover:bg-gray-50 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  お問い合わせ
                </button>
                <button className="border-2 border-white text-white px-8 py-4 text-lg font-medium rounded hover:bg-white hover:text-blue-600 flex items-center justify-center">
                  資料ダウンロード
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
                      <Shield className="w-4 h-4 mr-1" />
                      政府認定事業者
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <selectedProject.icon className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">プロジェクト概要</h3>
                      <p className="text-gray-600">{selectedProject.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-medium text-gray-900">クライアント:</span>
                        <p className="text-gray-600">{selectedProject.client}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">完了年:</span>
                        <p className="text-gray-600">{selectedProject.year}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">期間:</span>
                        <p className="text-gray-600">{selectedProject.duration}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">チーム規模:</span>
                        <p className="text-gray-600">{selectedProject.team}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">主要機能</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">使用技術</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">達成成果</h3>
                  <div className="space-y-4">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="font-medium text-green-800">{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    類似プロジェクトを相談する
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center">
                    詳細資料をダウンロード
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;