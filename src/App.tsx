import { useState } from "react";
import {
  Mail,
  Phone,
  Globe,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  BookOpen,
  Zap,
} from "lucide-react";

const PhysicsRecruitmentTemplate = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const skillDistribution = [
    { skill: "Programming", percentage: 85 },
    { skill: "Data Analysis", percentage: 75 },
    { skill: "Electronics", percentage: 70 },
    { skill: "Simulation", percentage: 80 },
    { skill: "Research", percentage: 90 },
  ];

  const careerPaths = [
    { sector: "Software/IT", value: 35 },
    { sector: "R&D/Analytics", value: 25 },
    { sector: "Electronics", value: 20 },
    { sector: "Consulting", value: 12 },
    { sector: "Academia", value: 8 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-indigo-900 mb-2">
                Department of Physics
              </h1>
              <p className="text-xl text-indigo-600">
                Campus Recruitment 2025-26
              </p>
              <p className="text-gray-600 mt-2">
                SVNIT Surat • Engineering Physics & Integrated M.Sc.
              </p>
            </div>
            <div className="text-right">
              <div className="bg-indigo-100 rounded-lg p-4">
                <div className="text-3xl font-bold text-indigo-900">
                  ₹20 LPA
                </div>
                <div className="text-sm text-indigo-600">Highest Package</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {["overview", "programs", "skills", "placements"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-indigo-50"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Why Hire Physics Graduates */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                <Zap className="text-yellow-500" />
                Why Hire Our Physics Graduates?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <Award className="text-indigo-600 mb-3" size={32} />
                  <h3 className="font-bold text-lg mb-2">
                    Strong Analytical Foundation
                  </h3>
                  <p className="text-gray-700">
                    Advanced problem-solving with quantum mechanics,
                    computational physics, and statistical modeling
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <BookOpen className="text-purple-600 mb-3" size={32} />
                  <h3 className="font-bold text-lg mb-2">
                    Interdisciplinary Expertise
                  </h3>
                  <p className="text-gray-700">
                    Cross-domain skills in CS, ECE, EE with courses in AI, data
                    structures, and electronics
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                  <TrendingUp className="text-green-600 mb-3" size={32} />
                  <h3 className="font-bold text-lg mb-2">
                    Industry-Ready Skills
                  </h3>
                  <p className="text-gray-700">
                    Python, MATLAB, simulation tools, microprocessors, and
                    cutting-edge research exposure
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                  <Users className="text-orange-600 mb-3" size={32} />
                  <h3 className="font-bold text-lg mb-2">
                    Research Excellence
                  </h3>
                  <p className="text-gray-700">
                    30 research projects, ₹1.2 Cr DST-FIST funding, global
                    alumni network
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">2</div>
                <div className="text-gray-600">Degree Programs</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  30+
                </div>
                <div className="text-gray-600">Research Labs</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  85%
                </div>
                <div className="text-gray-600">Coding Proficiency</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  Global
                </div>
                <div className="text-gray-600">Alumni Network</div>
              </div>
            </div>
          </div>
        )}

        {/* Programs Tab */}
        {activeTab === "programs" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-indigo-900 mb-2">
                  Academic Programs
                </h3>
                <div className="flex gap-4 text-sm">
                  <span className="bg-white px-4 py-2 rounded-full font-semibold text-indigo-700">
                    B.Tech. Engineering Physics (4 Years)
                  </span>
                  <span className="bg-white px-4 py-2 rounded-full font-semibold text-purple-700">
                    Integrated M.Sc. Physics (5 Years)
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                    Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Quantum Mechanics",
                      "Computational Physics",
                      "High Energy Physics",
                      "Condensed Matter",
                      "Electronics",
                      "Optics",
                      "Plasma Physics",
                      "Astrophysics",
                      "Statistical Mechanics",
                      "Nano-Bio Physics",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                    Programming & Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "C/C++",
                      "MATLAB",
                      "AI/ML",
                      "Data Structures",
                      "Microprocessors",
                      "DFT Simulations",
                      "Data Analysis",
                      "Machine Learning",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                    Specialized Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Semiconductors",
                      "Nanotechnology",
                      "Solar Cells",
                      "Spectroscopy",
                      "Vacuum Technology",
                      "Thin Films",
                      "Remote Sensing",
                      "GNSS",
                      "NDT",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold text-green-800 mb-4 text-lg">
                    Placement Statistics 2024-25
                  </h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        ₹20.00
                      </div>
                      <div className="text-sm text-gray-600">Highest (LPA)</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        ₹10.35
                      </div>
                      <div className="text-sm text-gray-600">Average (LPA)</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        ₹8.00
                      </div>
                      <div className="text-sm text-gray-600">Median (LPA)</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        ₹4.80
                      </div>
                      <div className="text-sm text-gray-600">Lowest (LPA)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-indigo-900 mb-6">
                Interdisciplinary Learning
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="font-bold text-blue-700 mb-2">
                    Computer Science
                  </div>
                  <div className="text-sm text-gray-600">
                    Data Structures, AI, Programming
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="font-bold text-purple-700 mb-2">
                    Electronics & ECE
                  </div>
                  <div className="text-sm text-gray-600">
                    Digital Electronics, Communication
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="font-bold text-green-700 mb-2">
                    Electrical & Mechanical
                  </div>
                  <div className="text-sm text-gray-600">
                    Control Systems, Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                Student Competency Profile
              </h2>
              <div className="space-y-4">
                {skillDistribution.map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">
                        {item.skill}
                      </span>
                      <span className="text-indigo-600 font-bold">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                Career Path Distribution
              </h2>
              <div className="space-y-3">
                {careerPaths.map((item) => (
                  <div key={item.sector} className="flex items-center gap-4">
                    <div className="w-40 font-semibold text-gray-700">
                      {item.sector}
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-8">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-8 rounded-full flex items-center justify-end pr-3 text-white font-bold text-sm transition-all duration-1000"
                        style={{ width: `${item.value}%` }}
                      >
                        {item.value}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Placements Tab */}
        {activeTab === "placements" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                Physics Department Placement Statistics 2024-25
              </h2>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹20.00
                  </div>
                  <div className="text-gray-600 font-semibold">
                    Highest Package (LPA)
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ₹10.35
                  </div>
                  <div className="text-gray-600 font-semibold">
                    Average Package (LPA)
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    ₹8.00
                  </div>
                  <div className="text-gray-600 font-semibold">
                    Median Package (LPA)
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    ₹4.80
                  </div>
                  <div className="text-gray-600 font-semibold">
                    Lowest Package (LPA)
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <p className="text-center text-gray-700 text-lg">
                  <span className="font-bold text-indigo-900">
                    Combined statistics for B.Tech. Engineering Physics &
                    Integrated M.Sc. Physics programs
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                Top Recruiters & Roles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                  <Briefcase className="text-indigo-600 mb-3" size={32} />
                  <h3 className="font-bold text-lg mb-2">Software/IT</h3>
                  <p className="text-sm text-gray-600">
                    Data Scientist, Software Engineer, ML Engineer, Analyst
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                  <Briefcase className="text-purple-600 mb-3" size={32} />
                  <h3 className="font-bold text-lg mb-2">R&D/Analytics</h3>
                  <p className="text-sm text-gray-600">
                    Research Analyst, Quantitative Analyst, Simulation Engineer
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6">
                  <Briefcase className="text-green-600 mb-3" size={32} />
                  <h3 className="font-bold text-lg mb-2">Electronics</h3>
                  <p className="text-sm text-gray-600">
                    Hardware Engineer, Embedded Systems, Device Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 mt-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail size={24} />
              <div>
                <div className="text-sm opacity-80">Email</div>
                <div className="font-semibold">cdc@phy.svnit.ac.in</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={24} />
              <div>
                <div className="text-sm opacity-80">Phone</div>
                <div className="font-semibold">+91 99043 34220</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={24} />
              <div>
                <div className="text-sm opacity-80">Website</div>
                <div className="font-semibold">www.svnit.ac.in</div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">
              Dr. Vipul Kheraj - Faculty Coordinator
            </p>
            <p className="opacity-90 mt-2">
              Career Development Cell, Department of Physics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicsRecruitmentTemplate;
