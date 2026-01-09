import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Trophy,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  ChevronRight,
  PlayCircle,
  ChessKnight,
  Target,
  Award,
  BarChart3,
  Clock,
  BookOpen,
  Star
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";

/* ---------------- HERO CONTENT ---------------- */
const heroSlides = [
  {
    title: "Master the Game of Kings",
    subtitle: "Elite Chess Training Academy",
    desc: "Structured curriculum from beginner to master level with personalized coaching.",
    cta: "Start Your Journey",
    bgColor: "from-emerald-900/20 to-slate-900"
  },
  {
    title: "Think Like a Grandmaster",
    subtitle: "Strategic Mind Development",
    desc: "Develop critical thinking and strategic planning skills that extend beyond the board.",
    cta: "View Programs",
    bgColor: "from-amber-900/20 to-slate-900"
  },
  {
    title: "Tournament-Ready Players",
    subtitle: "Competitive Excellence",
    desc: "Prepare for national and international tournaments with our elite training program.",
    cta: "See Tournament Schedule",
    bgColor: "from-blue-900/20 to-slate-900"
  },
];

/* ---------- PERFORMANCE DATA ---------- */
const performanceData = [
  { name: "Advanced (1800+)", value: 25, color: "#059669" },
  { name: "Intermediate (1400-1800)", value: 45, color: "#3b82f6" },
  { name: "Beginner (1000-1400)", value: 30, color: "#f59e0b" },
];

const trainingMethods = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Personalized Training",
    desc: "Custom learning paths based on skill assessment and playing style",
    color: "border-l-4 border-emerald-500"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Structured Curriculum",
    desc: "Progressive lessons covering openings, middlegame, and endgames",
    color: "border-l-4 border-amber-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Game Analysis",
    desc: "Detailed analysis of your games with computer and coach feedback",
    color: "border-l-4 border-blue-500"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Live Tournaments",
    desc: "Weekly rated tournaments with prize pools and rating updates",
    color: "border-l-4 border-purple-500"
  }
];

const coaches = [
  {
    name: "Shashikant Maktedar",
    rating: 2950,
    specialization: "Positional Play",
    students: 120,
    imageColor: "bg-gradient-to-br from-emerald-700 to-emerald-900"
  },
  {
    name: "Shweta Maktedar",
    rating: 2420,
    specialization: "Opening Theory",
    students: 85,
    imageColor: "bg-gradient-to-br from-amber-700 to-amber-900"
  },
  {
    name: "Vivek Maktedar",
    rating: 2680,
    specialization: "Endgame Mastery",
    students: 95,
    imageColor: "bg-gradient-to-br from-blue-700 to-blue-900"
  }
];

const Home = () => {
  const [slide, setSlide] = useState(0);
  const sectionsRef = useRef([]);

  /* HERO AUTO CHANGE */
  useEffect(() => {
    const timer = setInterval(
      () => setSlide((prev) => (prev + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);




  /* SCROLL FADE EFFECT */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-slate-800 font-sans">




      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Chess Board Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%),
                              linear-gradient(-45deg, #000 25%, transparent 25%),
                              linear-gradient(45deg, transparent 75%, #000 75%),
                              linear-gradient(-45deg, transparent 75%, #000 75%)`,
            backgroundSize: '100px 100px',
            backgroundPosition: '0 0, 0 50px, 50px -50px, -50px 0px'
          }}></div>
        </div>





        {/* Animated Chess Pieces */}
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <ChessKnight size={120} className="text-emerald-400" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-pulse delay-1000">
          <ChessKnight size={120} className="text-amber-400 rotate-180" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                <span>FIDE-CERTIFIED ACADEMY • EST. 2015</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
                <span className="block text-emerald-400 font-black italic">8x8chess</span>
                <span className="block text-4xl md:text-5xl text-slate-200">Chess Academy</span>
              </h1>

              <div className="relative h-32 mb-8">
                <div className={`absolute inset-0 transition-all duration-1000 ${heroSlides[slide].bgColor} rounded-2xl p-6`}>
                  <p className="text-slate-300 text-lg mb-2 font-medium">{heroSlides[slide].subtitle}</p>
                  <p className="text-white text-xl font-semibold leading-relaxed">
                    {heroSlides[slide].desc}
                  </p>
                </div>
              </div>
              

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-sm hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-3 group"
                >
                  {heroSlides[slide].cta}
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link
                  to="/programs"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                >
                  <PlayCircle size={18} /> Explore Programs
                </Link>
              </div>



              {/* HERO DOTS */}
              <div className="flex gap-2 mt-12">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === slide ? "bg-emerald-400 w-8" : "bg-slate-600 w-3 hover:bg-slate-500"
                    }`}
                  ></button>
                ))}
              </div>
            </div>



            {/* Chess Board Preview */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700">
                <div className="grid grid-cols-8 gap-0.5 bg-slate-700 p-0.5 rounded-lg">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square ${Math.floor(i / 8) % 2 === i % 2 ? 'bg-amber-100' : 'bg-amber-800'}`}
                    ></div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-emerald-400 font-bold text-xl">2650</div>
                    <div className="text-slate-400 text-sm">Avg Coach Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-bold text-xl">98%</div>
                    <div className="text-slate-400 text-sm">Student Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-xl">10+</div>
                    <div className="text-slate-400 text-sm">Tournaments/Yr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* ================= STATS ================= */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="opacity-0 translate-y-10 transition-all duration-1000 py-20 max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Elite Training <span className="text-emerald-600 italic">Excellence</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Join hundreds of successful players who transformed their game with our proven methodology
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Users className="w-8 h-8" />, value: "850+", label: "Active Students", color: "bg-blue-500" },
            { icon: <Trophy className="w-8 h-8" />, value: "45", label: "National Champions", color: "bg-amber-500" },
            { icon: <TrendingUp className="w-8 h-8" />, value: "+350", label: "Avg Rating Gain", color: "bg-emerald-500" },
            { icon: <Award className="w-8 h-8" />, value: "12", label: "FIDE Masters", color: "bg-purple-500" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <div className="text-white">{item.icon}</div>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{item.value}</h3>
              <p className="text-slate-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRAINING METHODS ================= */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-emerald-600">Training</span> Methodology
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A comprehensive approach combining traditional teaching with modern technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${method.color}`}
              >
                <div className="text-emerald-600 mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{method.title}</h3>
                <p className="text-slate-600 leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE ANALYTICS ================= */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="opacity-0 translate-y-10 transition-all duration-1000 bg-gradient-to-br from-slate-900 to-slate-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6">
                <BarChart3 className="w-4 h-4" />
                STUDENT PROGRESS ANALYTICS
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Track Your <span className="text-emerald-400">Progress</span>
              </h2>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Our detailed analytics dashboard helps students and parents monitor improvement,
                identify strengths, and target areas for development with precision.
              </p>

              <div className="space-y-6">
                {performanceData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-white font-semibold">{item.name}</span>
                    </div>
                    <span className="text-emerald-300 font-bold text-lg">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white">Student Distribution</h3>
                <div className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold">
                  Current Season
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={performanceData}
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b',
                        border: '1px solid #475569',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                      formatter={(value) => [`${value}%`, 'Percentage']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-slate-400 text-sm">Average rating improvement</p>
                <p className="text-3xl font-bold text-emerald-400 mt-2">+245 Elo</p>
                <p className="text-slate-400 text-sm mt-2">per academic year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COACHES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Meet Our <span className="text-emerald-600">Grandmaster</span> Coaches
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Learn from internationally recognized chess masters with proven teaching methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className={`${coach.imageColor} w-20 h-20 rounded-full flex items-center justify-center`}>
                    <ChessKnight className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{coach.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                        FIDE {coach.rating}
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {coach.students} students
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Specialization</h4>
                  <p className="text-slate-900 font-semibold">{coach.specialization}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                  <span className="text-slate-600 font-semibold ml-2">5.0</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/coaches"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg shadow-emerald-600/30"
            >
              View All Coaches
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ChessKnight className="w-16 h-16 text-emerald-400 mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your <span className="text-emerald-400">Chess Journey</span>?
          </h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Book a free trial lesson and experience our world-class training methodology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/free-trial"
              className="bg-emerald-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/30"
            >
              Book Free Trial
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <ChessKnight className="w-8 h-8 text-emerald-400" />
                <span className="text-2xl font-bold italic">8x8Chess Academy</span>
              </div>
              <p className="text-slate-400 text-sm">Elite Chess Training Academy</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm mb-2">© 2026 8x8Chess Academy. All rights reserved.</p>
              <p className="text-slate-400 text-sm">FIDE Certified • ELO Rating Partners • International Standards</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;