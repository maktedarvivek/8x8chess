import React, { useState, useEffect } from 'react';
import { 
  Trophy, Calendar, Target, TrendingUp, Clock, 
  BookOpen, ChevronRight, Search, Filter, Download,
  BarChart3, Award, Users, Crown, Star, PlayCircle,
  Bookmark, Share2, Eye, Edit, MoreVertical,
  MessageSquare, Video, FileText, Puzzle,
  Timer, Zap, CheckCircle, XCircle,
  Home, User, Settings, LogOut, Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showPracticeModal, setShowPracticeModal] = useState(false);

  // Student Profile Data
  const studentProfile = {
    name: "Arjun Sharma",
    username: "arjun_chess",
    rating: 1640,
    level: "Intermediate",
    progress: 68,
    streak: 12,
    rank: 24,
    totalStudents: 156,
    joined: "Dec 2025"
  };

  // Performance Statistics
  const performanceData = [
    { month: 'Jan', rating: 1520, puzzles: 45 },
    { month: 'Feb', rating: 1560, puzzles: 52 },
    { month: 'Mar', rating: 1600, puzzles: 48 },
    { month: 'Apr', rating: 1620, puzzles: 60 },
    { month: 'May', rating: 1640, puzzles: 65 },
    { month: 'Jun', rating: 1660, puzzles: 58 },
  ];

  // Skill Distribution
  const skillData = [
    { name: 'Opening', value: 75, color: '#10b981' },
    { name: 'Middlegame', value: 65, color: '#3b82f6' },
    { name: 'Endgame', value: 45, color: '#f59e0b' },
    { name: 'Tactics', value: 82, color: '#8b5cf6' },
    { name: 'Strategy', value: 58, color: '#ec4899' },
  ];

  // Active Courses
  const courses = [
    { 
      id: 1, 
      title: "Mastering Chess Openings", 
      instructor: "GM Alexei Petrov",
      progress: 75,
      lessons: 12,
      duration: "8 weeks",
      level: "Intermediate",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    { 
      id: 2, 
      title: "Advanced Endgame Techniques", 
      instructor: "IM Sarah Chen",
      progress: 45,
      lessons: 8,
      duration: "6 weeks",
      level: "Advanced",
      icon: <Target className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      id: 3, 
      title: "Tactical Brilliance", 
      instructor: "CM Rahul Verma",
      progress: 90,
      lessons: 10,
      duration: "4 weeks",
      level: "All Levels",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
  ];

  // Recent Games
  const recentGames = [
    { id: 1, opponent: "vivek_8x8", result: "Win", ratingChange: "+15", date: "Today", timeControl: "10+0" },
    { id: 2, opponent: "sanya_grand", result: "Loss", ratingChange: "-8", date: "Yesterday", timeControl: "5+3" },
    { id: 3, opponent: "priya_queen", result: "Draw", ratingChange: "+2", date: "2 days ago", timeControl: "15+10" },
    { id: 4, opponent: "chess_master", result: "Win", ratingChange: "+12", date: "3 days ago", timeControl: "10+0" },
  ];

  // Upcoming Tournaments
  const tournaments = [
    { id: 1, name: "Weekly Blitz Arena", date: "Tomorrow", time: "6:00 PM", participants: 45, prize: "Rating Points" },
    { id: 2, name: "Monthly Rapid Championship", date: "Mar 25", time: "7:00 PM", participants: 32, prize: "$500" },
    { id: 3, name: "Spring Open 2024", date: "Apr 15", time: "10:00 AM", participants: 120, prize: "$2,000" },
  ];

  // Daily Tasks
  const dailyTasks = [
    { id: 1, task: "Solve 10 puzzles", completed: true, points: 50 },
    { id: 2, task: "Watch opening video", completed: false, points: 30 },
    { id: 3, task: "Play 3 rated games", completed: true, points: 75 },
    { id: 4, task: "Review endgame lesson", completed: false, points: 40 },
  ];

  // Practice Areas
  const practiceAreas = [
    { id: 1, title: "Puzzle Rush", icon: <Puzzle className="w-6 h-6" />, description: "Solve puzzles against the clock", time: "5 min", difficulty: "Mixed" },
    { id: 2, title: "Opening Trainer", icon: <BookOpen className="w-6 h-6" />, description: "Practice opening variations", time: "10 min", difficulty: "Custom" },
    { id: 3, title: "Endgame Practice", icon: <Target className="w-6 h-6" />, description: "Master endgame techniques", time: "15 min", difficulty: "Intermediate" },
    { id: 4, title: "Blitz Games", icon: <Timer className="w-6 h-6" />, description: "Play quick 3+2 games", time: "5 min", difficulty: "All Levels" },
  ];

  // Stats Cards
  const stats = [
    { title: "Current Rating", value: "1640", change: "+40", icon: <Trophy className="w-5 h-5" />, color: "bg-amber-500" },
    { title: "Puzzles Solved", value: "1,245", change: "+85", icon: <Puzzle className="w-5 h-5" />, color: "bg-emerald-500" },
    { title: "Win Rate", value: "62%", change: "+5%", icon: <TrendingUp className="w-5 h-5" />, color: "bg-blue-500" },
    { title: "Learning Streak", value: "12 days", change: "🔥", icon: <Zap className="w-5 h-5" />, color: "bg-purple-500" },
  ];

  // Bottom Navigation Items
  const bottomNavItems = [
    { id: 'dashboard', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'practice', label: 'Practice', icon: <Target className="w-5 h-5" /> },
    { id: 'games', label: 'Games', icon: <PlayCircle className="w-5 h-5" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  ];

  // Tab Content Renderer
  const renderTabContent = () => {
    switch(activeTab) {
      case 'courses':
        return <CoursesTab courses={courses} setSelectedCourse={setSelectedCourse} />;
      case 'practice':
        return <PracticeTab practiceAreas={practiceAreas} setShowPracticeModal={setShowPracticeModal} />;
      case 'games':
        return <GamesTab recentGames={recentGames} />;
      case 'profile':
        return <ProfileTab studentProfile={studentProfile} skillData={skillData} />;
      default: // dashboard
        return <DashboardTab 
          stats={stats} 
          performanceData={performanceData} 
          skillData={skillData}
          courses={courses}
          recentGames={recentGames}
          tournaments={tournaments}
          dailyTasks={dailyTasks}
          studentProfile={studentProfile}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-slate-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="font-bold text-slate-900">Student Dashboard</h1>
              <p className="text-xs text-slate-600">Chess Academy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-slate-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-gradient-to-b from-slate-900 to-slate-800 text-white h-screen fixed left-0 top-0">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold">♔</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-900"></div>
            </div>
            <div>
              <h2 className="font-bold">Chess Academy</h2>
              <p className="text-sm text-slate-400">Student Portal</p>
            </div>
          </div>
        </div>

        {/* Student Profile */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full"></div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{studentProfile.name}</h3>
              <p className="text-slate-400 text-sm">@{studentProfile.username}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-bold">
                  {studentProfile.rating} Elo
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                  {studentProfile.level}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
            { id: 'courses', label: 'My Courses', icon: <BookOpen className="w-5 h-5" /> },
            { id: 'practice', label: 'Practice', icon: <Target className="w-5 h-5" /> },
            { id: 'games', label: 'My Games', icon: <PlayCircle className="w-5 h-5" /> },
            { id: 'tournaments', label: 'Tournaments', icon: <Trophy className="w-5 h-5" /> },
            { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
            { id: 'messages', label: 'Messages', icon: <MessageSquare className="w-5 h-5" /> },
            { id: 'resources', label: 'Resources', icon: <FileText className="w-5 h-5" /> },
            { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
            { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
              {item.id === 'courses' && (
                <span className="ml-auto w-6 h-6 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-700">
          <Link to="/" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-gradient-to-b from-slate-900 to-slate-800 text-white animate-slide-in">
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold">♔</span>
                  </div>
                  <div>
                    <p className="font-bold">Chess Academy</p>
                    <p className="text-xs text-slate-400">Student Portal</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-slate-800 rounded-lg"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="p-4 space-y-1">
              {bottomNavItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === item.id 
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    {item.label}
                  </div>
                  {activeTab === item.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>

            <div className="p-6 border-t border-slate-700">
              <Link to="/" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={`lg:pl-72 ${activeTab === 'practice' ? 'pb-0' : 'pb-24 lg:pb-0'}`}>
        <div className="p-4 lg:p-8">
          {/* Desktop Header */}
          <header className="hidden lg:block mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">Student Dashboard</h1>
                <p className="text-slate-600">Welcome back, {studentProfile.name}! Ready to improve your game?</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all">
                  <PlayCircle className="w-5 h-5" />
                  Play Now
                </button>
                <button className="relative p-2 hover:bg-white rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-slate-600" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                </button>
              </div>
            </div>
          </header>

          {/* Render Active Tab Content */}
          {renderTabContent()}
        </div>
      </main>

      {/* Bottom Navigation - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-30">
        <div className="flex justify-around items-center p-2">
          {bottomNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-full py-2 transition-colors ${
                activeTab === item.id 
                  ? 'text-emerald-600' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className={`p-2 rounded-lg ${
                activeTab === item.id 
                  ? 'bg-emerald-50' 
                  : ''
              }`}>
                {item.icon}
              </div>
              <span className="text-xs font-medium mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Dashboard Tab Component
const DashboardTab = ({ stats, performanceData, skillData, courses, recentGames, tournaments, dailyTasks, studentProfile }) => (
  <>
    {/* Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
          <div className="flex justify-between items-start mb-3 lg:mb-4">
            <div className={`p-2 lg:p-3 ${stat.color} rounded-lg lg:rounded-xl text-white`}>
              {stat.icon}
            </div>
            <span className={`text-xs lg:text-sm font-medium px-2 py-1 rounded-full ${
              stat.change.includes('+') || stat.change === '🔥' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
            }`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
          <p className="text-slate-600 text-xs lg:text-sm">{stat.title}</p>
        </div>
      ))}
    </div>

    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-6 lg:space-y-8">
        {/* Rating Progress Chart */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 p-4 lg:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900">Rating Progress</h3>
              <p className="text-slate-600 text-sm">Last 6 months performance</p>
            </div>
            <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
              View Details →
            </button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="rating" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: '#10b981', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active Courses */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 p-4 lg:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900">Active Courses</h3>
              <p className="text-slate-600 text-sm">Continue your learning journey</p>
            </div>
            <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
              View All →
            </button>
          </div>
          <div className="space-y-4">
            {courses.map(course => (
              <div key={course.id} className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl hover:border-emerald-300 transition-colors">
                <div className={`p-3 bg-gradient-to-br ${course.color} rounded-xl text-white`}>
                  {course.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">{course.title}</h4>
                  <p className="text-sm text-slate-600 mb-2">by {course.instructor}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>{course.lessons} lessons</span>
                    <span>•</span>
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span className="px-2 py-1 bg-slate-100 rounded-full">{course.level}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-900">{course.progress}%</div>
                  <div className="text-xs text-slate-500">Completed</div>
                  <button className="mt-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6 lg:space-y-8">
        {/* Skill Distribution */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 p-4 lg:p-6">
          <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-6">Skill Distribution</h3>
          <div className="space-y-4">
            {skillData.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">{skill.name}</span>
                  <span className="font-bold text-slate-900">{skill.value}%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.value}%`, backgroundColor: skill.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Games */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 p-4 lg:p-6">
          <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-6">Recent Games</h3>
          <div className="space-y-3">
            {recentGames.map(game => (
              <div key={game.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <div>
                  <div className="font-medium text-slate-900">vs {game.opponent}</div>
                  <div className="text-xs text-slate-500">{game.date} • {game.timeControl}</div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  game.result === 'Win' ? 'bg-emerald-100 text-emerald-700' :
                  game.result === 'Loss' ? 'bg-red-100 text-red-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {game.result} {game.ratingChange}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Tasks */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-white">
          <h3 className="text-lg lg:text-xl font-bold mb-6">Daily Tasks</h3>
          <div className="space-y-3">
            {dailyTasks.map(task => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  {task.completed ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-white/30 rounded-full"></div>
                  )}
                  <span className={task.completed ? 'line-through text-slate-300' : 'text-white'}>
                    {task.task}
                  </span>
                </div>
                <span className="text-amber-400 font-bold">+{task.points}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

// Courses Tab Component
const CoursesTab = ({ courses, setSelectedCourse }) => (
  <div>
    <div className="mb-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">My Courses</h2>
      <p className="text-slate-600">Continue learning and master chess concepts</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <div key={course.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
          <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 bg-gradient-to-br ${course.color} rounded-xl text-white`}>
                {course.icon}
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                {course.level}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
            <p className="text-slate-600 mb-4">by {course.instructor}</p>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600">Progress</span>
                <span className="font-bold text-slate-900">{course.progress}%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{course.lessons} lessons</span>
              </div>
            </div>
            
            <button 
              onClick={() => setSelectedCourse(course)}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all"
            >
              {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
            </button>
          </div>
        </div>
      ))}
      
      {/* Add New Course Card */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-slate-300 hover:border-emerald-400 transition-colors">
        <div className="p-6 h-full flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <Plus className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Explore New Courses</h3>
          <p className="text-slate-600 mb-6">Browse our catalog of chess courses</p>
          <button className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
            View Catalog
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Practice Tab Component
const PracticeTab = ({ practiceAreas, setShowPracticeModal }) => (
  <div>
    <div className="mb-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Practice Arena</h2>
      <p className="text-slate-600">Sharpen your skills with targeted practice</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
      {practiceAreas.map(area => (
        <div key={area.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
              {area.icon}
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {area.difficulty}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-2">{area.title}</h3>
          <p className="text-slate-600 mb-6">{area.description}</p>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-slate-600">
              <Timer className="w-4 h-4" />
              <span>{area.time}</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => setShowPracticeModal(true)}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
          >
            Start Practice
          </button>
        </div>
      ))}
    </div>

    {/* Quick Practice Options */}
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Practice</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: '5-min Blitz', icon: <Timer className="w-5 h-5" />, color: 'bg-purple-500' },
          { label: '10 Puzzles', icon: <Puzzle className="w-5 h-5" />, color: 'bg-emerald-500' },
          { label: 'Opening Drill', icon: <BookOpen className="w-5 h-5" />, color: 'bg-amber-500' },
          { label: 'Endgame Test', icon: <Target className="w-5 h-5" />, color: 'bg-blue-500' },
        ].map((option, index) => (
          <button
            key={index}
            onClick={() => setShowPracticeModal(true)}
            className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
          >
            <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center mb-3 text-white`}>
              {option.icon}
            </div>
            <span className="font-medium text-slate-900">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

// Games Tab Component
const GamesTab = ({ recentGames }) => (
  <div>
    <div className="mb-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">My Games</h2>
      <p className="text-slate-600">Analyze your games and improve</p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Games History */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-6">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Recent Games</h3>
              <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-800 transition-colors">
                Analyze All
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Opponent</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Result</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Rating</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Date</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentGames.map(game => (
                  <tr key={game.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full"></div>
                        <div>
                          <p className="font-medium text-slate-900">{game.opponent}</p>
                          <p className="text-sm text-slate-500">{game.timeControl}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        game.result === 'Win' ? 'bg-emerald-100 text-emerald-700' :
                        game.result === 'Loss' ? 'bg-red-100 text-red-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {game.result}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`font-bold ${
                        game.ratingChange.startsWith('+') ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {game.ratingChange}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{game.date}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                          <Eye className="w-4 h-4 text-slate-600" />
                        </button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                          <BarChart3 className="w-4 h-4 text-slate-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Game Analysis */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Game Analysis</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Accuracy Score</h4>
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-600 mb-2">84%</div>
                <p className="text-slate-600">Good job! Keep improving</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Mistakes Breakdown</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Blunders</span>
                    <span className="font-bold text-red-600">2</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mistakes</span>
                    <span className="font-bold text-amber-600">4</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Inaccuracies</span>
                    <span className="font-bold text-blue-600">6</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
          <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span>Games Played</span>
              </div>
              <span className="font-bold">248</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span>Win Rate</span>
              </div>
              <span className="font-bold">62%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Avg Game Time</span>
              </div>
              <span className="font-bold">8:24</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>Best Streak</span>
              </div>
              <span className="font-bold">7 wins</span>
            </div>
          </div>
        </div>

        {/* Play New Game */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Play New Game</h3>
          <div className="space-y-4">
            {[
              { time: '1+0', label: 'Bullet' },
              { time: '3+2', label: 'Blitz' },
              { time: '10+0', label: 'Rapid' },
              { time: '15+10', label: 'Classical' },
            ].map((mode, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
              >
                <div>
                  <div className="font-bold text-slate-900">{mode.time}</div>
                  <div className="text-sm text-slate-600">{mode.label}</div>
                </div>
                <PlayCircle className="w-5 h-5 text-emerald-600" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Profile Tab Component
const ProfileTab = ({ studentProfile, skillData }) => (
  <div>
    <div className="mb-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">My Profile</h2>
      <p className="text-slate-600">Manage your profile and settings</p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl"></div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{studentProfile.name}</h3>
              <p className="text-slate-600 mb-4">@{studentProfile.username}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                  {studentProfile.rating} Elo
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                  {studentProfile.level}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Rank #{studentProfile.rank}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  {studentProfile.streak} day streak
                </span>
              </div>
              <p className="text-slate-600">Member since {studentProfile.joined}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Overall Progress</h4>
              <div className="relative">
                <div className="text-4xl font-bold text-slate-900 mb-2">{studentProfile.progress}%</div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000"
                    style={{ width: `${studentProfile.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Achievements</h4>
              <div className="flex gap-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white">
                    <Trophy className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Skill Progress</h3>
          <div className="space-y-6">
            {skillData.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <div className="font-medium text-slate-900">{skill.name}</div>
                  <div className="font-bold text-slate-900">{skill.value}%</div>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.value}%`, backgroundColor: skill.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
              <Edit className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-900">Edit Profile</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
              <Settings className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-900">Account Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
              <Download className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-900">Download Data</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
              <FileText className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-900">View Certificates</span>
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
          <h3 className="text-xl font-bold mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="font-bold">Weekly Blitz Arena</div>
              <div className="text-sm text-slate-300">Tomorrow • 6:00 PM</div>
            </div>
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="font-bold">GM Simultaneous</div>
              <div className="text-sm text-slate-300">Mar 28 • 7:00 PM</div>
            </div>
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="font-bold">Opening Theory Workshop</div>
              <div className="text-sm text-slate-300">Apr 5 • 5:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Missing Plus icon component
const Plus = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export default StudentDashboard;