import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const [projectSlide, setProjectSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when section is in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const sectionHeight = rect.height;
        const scrolled = windowHeight - rect.top;
        
        // Phase 1: Let featured project fully display (first 60% of section scroll)
        // Phase 2: Start overlay animation (last 40% of section scroll)
        const phase1End = sectionHeight * 0.6;
        const phase2Start = sectionHeight * 0.6;
        
        if (scrolled <= phase1End) {
          // Phase 1: Featured project is fully visible, no overlay
          setScrollProgress(0);
        } else {
          // Phase 2: Start overlay animation
          const phase2Progress = (scrolled - phase2Start) / (sectionHeight * 0.4);
          const progress = Math.max(0, Math.min(1, phase2Progress));
          setScrollProgress(progress);
        }
      } else if (rect.top > windowHeight) {
        // Section hasn't been reached yet
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects-section" className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 mb-4">
            Projects
          </div>
          <h2 className="text-4xl font-bold text-blue-400 mb-4">実績紹介</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            政府機関および自治体との信頼関係のもと、数多くの重要プロジェクトを成功に導いてまいりました。
          </p>
        </div>

        {/* Featured Project - Base Layer */}
        <div className="relative mb-16">
          <div 
            className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-2xl transition-all duration-700 ease-out"
            style={{
              transform: `scale(${1 - scrollProgress * 0.1})`,
              opacity: 1 - scrollProgress * 0.3,
              filter: `blur(${scrollProgress * 2}px)`
            }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="デジタル庁統合システム"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Project
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <div className="text-6xl font-bold text-blue-600 opacity-30 mr-4">01</div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">デジタル庁統合システム</h3>
                    <div className="w-20 h-1 bg-blue-400"></div>
                  </div>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                  <p>
                    デジタル庁の基幹システム統合プロジェクトにおいて、複数の既存システムを統合し、効率的で使いやすい新システムを構築いたしました。
                  </p>
                  <p>
                    セキュリティ要件を満たしながら、職員の業務効率を30%向上させることに成功。全国の自治体からも高い評価をいただいております。
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">システム統合</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">セキュリティ</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">UI/UX改善</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">30%</div>
                    <div className="text-gray-400 text-sm">効率向上</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">12ヶ月</div>
                    <div className="text-gray-400 text-sm">開発期間</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">5,000+</div>
                    <div className="text-gray-400 text-sm">利用者数</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay Projects Section */}
        <div 
          className="absolute inset-0 z-20 transition-all duration-700 ease-out"
          style={{
            transform: `translateY(${100 - scrollProgress * 100}%)`,
            opacity: scrollProgress
          }}
        >
          <div className="bg-gray-900 bg-opacity-95 min-h-full pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Overlay Section Header */}
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-white mb-4">プロジェクト一覧</h3>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  AEGIS LLPが手がけた代表的なプロジェクトをご紹介いたします。
                </p>
              </div>

              {/* Project Carousel */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-2xl font-bold text-white">実績プロジェクト</h4>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setProjectSlide(projectSlide > 0 ? projectSlide - 1 : 2)}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={() => setProjectSlide(projectSlide < 2 ? projectSlide + 1 : 0)}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${projectSlide * 100}%)` }}
                  >
                    {/* Slide 1 */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Project 2 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="自治体税務管理システム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">02</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">自治体税務管理システム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              全国50以上の自治体で導入された税務管理システム。処理速度の大幅改善を実現。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">税務</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">自治体</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2023年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="政府調達プラットフォーム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">03</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">政府調達プラットフォーム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              透明性と効率性を重視した次世代調達システム。入札プロセスを完全デジタル化。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">調達</span>
                                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">入札</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2022年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 4 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="市民サービスポータル"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">04</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">市民サービスポータル</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              市民が24時間いつでも行政サービスを利用できるワンストップポータルサイト。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">市民</span>
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">ポータル</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2023年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 5 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="災害対策システム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">05</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">災害対策システム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              リアルタイム情報共有と迅速な意思決定を支援する統合災害対策システム。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">災害</span>
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">緊急</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2021年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 6 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="教育管理プラットフォーム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">06</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">教育管理プラットフォーム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              学校運営の効率化と教育の質向上を目指した統合教育管理システム。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">教育</span>
                                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">学校</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2022年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 7 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="健康管理システム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">07</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">健康管理システム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              市民の健康データを統合管理し、予防医療の推進を支援するシステム。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs">健康</span>
                                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs">医療</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2023年完了</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Project 8 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="交通管理システム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">08</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">交通管理システム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              AIを活用した次世代交通管理システム。渋滞緩和と安全性向上を実現。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">交通</span>
                                <span className="bg-lime-100 text-lime-800 px-2 py-1 rounded text-xs">AI</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2024年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 9 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="環境監視システム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">09</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">環境監視システム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              IoTセンサーを活用した環境データ収集・分析システム。持続可能な都市づくりを支援。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">環境</span>
                                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs">IoT</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2023年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 10 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="デジタル図書館システム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">10</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">デジタル図書館システム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              全国の公立図書館を繋ぐデジタル図書館ネットワーク。知識へのアクセスを向上。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded text-xs">図書館</span>
                                <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded text-xs">デジタル</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2022年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 11 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="社会保障システム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">11</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">社会保障システム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              国民の社会保障情報を安全に管理する統合データベースシステム。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">社会保障</span>
                                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">データ</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2024年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 12 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="電子投票システム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">12</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">電子投票システム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              セキュアで透明性の高い次世代電子投票システム。民主主義の基盤を支援。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">投票</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">民主主義</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2023年完了</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* More projects can be added here */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="スマートシティ基盤"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">13</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">スマートシティ基盤</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              IoTとAIを統合したスマートシティの基盤システム。未来型都市運営を実現。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">スマート</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">都市</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2024年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 14 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="地域経済分析システム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">14</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">地域経済分析システム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              ビッグデータを活用した地域経済の分析・予測システム。政策立案を支援。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">経済</span>
                                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">分析</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2023年完了</span>
                            </div>
                          </div>
                        </div>

                        {/* Project 15 */}
                        <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=320"
                              alt="公共施設予約システム"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <span className="text-4xl font-bold text-blue-600 opacity-50">15</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <h5 className="text-lg font-bold text-white mb-2">公共施設予約システム</h5>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                              市民が簡単に公共施設を予約できるオンラインシステム。利用率が大幅向上。
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">施設</span>
                                <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs">予約</span>
                              </div>
                              <span className="text-blue-400 text-xs font-medium">2022年完了</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setProjectSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        projectSlide === index ? "bg-blue-500" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-3xl font-bold text-white mb-4">すべての実績を見る</h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      AEGIS LLPが手がけた150以上のプロジェクトの詳細をご覧ください。政府機関との信頼関係に基づいた実績をご紹介いたします。
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      <span className="flex items-center justify-center">
                        <span>実績一覧を見る</span>
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
    </section>
  );
};

export default ProjectsSection;