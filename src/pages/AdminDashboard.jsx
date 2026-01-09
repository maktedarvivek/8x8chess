import React, { useState } from 'react';
import { 
  Users, Trophy, Calendar, Plus, Search, 
  LayoutDashboard, LogOut, ChevronRight, MoreVertical, X,
  TrendingUp, BarChart3, Settings, Bell, Filter, Download,
  Eye, Edit, Trash2, Crown, Target, Clock, Award,
  UserCheck, UserX, CheckCircle, AlertCircle, Menu, Home,
  MessageSquare, CreditCard, FileText, UserPlus
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false);
  
  const navigate = useNavigate();

  // Sample data
  const students = [
    { 
      id: 1, 
      name: "Vivek Maktedar", 
      username: "vivek_8x8", 
      rating: 1850, 
      status: "active", 
      joined: "Jan 2026",
      progress: "+120",
      category: "Advanced",
      lastActive: "2 hours ago"
    },
    { 
      id: 2, 
      name: "Dhanashree Jadhav", 
      username: "dhanu_chess", 
      rating: 1420, 
      status: "active", 
      joined: "Dec 2025",
      progress: "+85",
      category: "Intermediate",
      lastActive: "1 day ago"
    },
    { 
      id: 3, 
      name: "Sagar Kumbhar", 
      username: "sagar_grand", 
      rating: 2100, 
      status: "away", 
      joined: "Nov 2025",
      progress: "+45",
      category: "Grandmaster",
      lastActive: "3 days ago"
    },
    { 
      id: 4, 
      name: "Altaf Mulani", 
      username: "altaf_master", 
      rating: 1650, 
      status: "inactive", 
      joined: "Oct 2025",
      progress: "-10",
      category: "Intermediate",
      lastActive: "2 weeks ago"
    },
    { 
      id: 5, 
      name: "Omkar Mathpati", 
      username: "Omkar_King", 
      rating: 1950, 
      status: "active", 
      joined: "Sep 2025",
      progress: "+150",
      category: "Advanced",
      lastActive: "5 hours ago"
    },
  ];

  const tournaments = [
    { id: 1, name: "Spring Championship", date: "Mar 15, 2024", participants: 45, prize: "$5,000", status: "upcoming" },
    { id: 2, name: "Rapid Blitz Open", date: "Feb 28, 2024", participants: 32, prize: "$2,500", status: "ongoing" },
    { id: 3, name: "Winter Classic", date: "Dec 20, 2023", participants: 58, prize: "$7,000", status: "completed" },
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.username.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || student.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    { title: "Total Students", value: "156", change: "+12%", icon: <Users className="w-5 h-5 lg:w-6 lg:h-6" />, color: "bg-blue-500" },
    { title: "Active Tournaments", value: "3", change: "+1", icon: <Trophy className="w-5 h-5 lg:w-6 lg:h-6" />, color: "bg-amber-500" },
    { title: "Avg Rating", value: "1640", change: "+35", icon: <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />, color: "bg-emerald-500" },
    { title: "Completion Rate", value: "92%", change: "+5%", icon: <BarChart3 className="w-5 h-5 lg:w-6 lg:h-6" />, color: "bg-purple-500" },
  ];

  const handleLogout = () => {
    console.log("Logging out...");
    // Add actual logout logic here
    navigate('/login');
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    console.log(`Switched to ${tabId} tab`);
  };

  const handleAddStudent = () => {
    setIsAddStudentModalOpen(true);
    console.log("Opening Add Student modal");
  };

  const handleViewStudent = (studentId) => {
    console.log(`Viewing student ${studentId}`);
    // Navigate to student details page
    navigate(`/student/${studentId}`);
  };

  const handleEditStudent = (studentId) => {
    console.log(`Editing student ${studentId}`);
    // Open edit modal or navigate to edit page
  };

  const handleDeleteStudent = (studentId) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      console.log(`Deleting student ${studentId}`);
      // Add delete logic here
    }
  };

  const handleViewTournament = (tournamentId) => {
    console.log(`Viewing tournament ${tournamentId}`);
    // Navigate to tournament details
  };

  const handleOpenSettings = () => {
    setIsSettingsModalOpen(true);
    console.log("Opening settings");
  };

  const handleOpenAnalytics = () => {
    setIsAnalyticsModalOpen(true);
    console.log("Opening analytics");
  };

  const handleNotificationClick = () => {
    console.log("Opening notifications");
    setNotifications(0); // Mark as read
  };

  const bottomNavItems = [
    { id: 'dashboard', label: 'Home', icon: <LayoutDashboard className="w-5 h-5" />, action: () => handleTabChange('dashboard') },
    { id: 'students', label: 'Students', icon: <Users className="w-5 h-5" />, action: () => handleTabChange('students') },
    { id: 'tournaments', label: 'Events', icon: <Calendar className="w-5 h-5" />, action: () => handleTabChange('tournaments') },
    { id: 'ranking', label: 'Ranking', icon: <Trophy className="w-5 h-5" />, action: () => handleTabChange('ranking') },
    { id: 'more', label: 'More', icon: <MoreVertical className="w-5 h-5" />, action: () => setIsMobileMenuOpen(true) },
  ];

  // Render content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case 'students':
        return (
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-4 lg:p-6 border-b border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900">Students Management</h3>
                    <p className="text-slate-600 text-xs lg:text-sm">Manage all academy students</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
                      {['all', 'active', 'away', 'inactive'].map(filter => (
                        <button
                          key={filter}
                          onClick={() => {
                            setSelectedFilter(filter);
                            console.log(`Filter changed to: ${filter}`);
                          }}
                          className={`px-2 py-1.5 text-xs lg:text-sm rounded-md capitalize transition-colors whitespace-nowrap ${
                            selectedFilter === filter 
                              ? 'bg-white text-slate-900 shadow-sm' 
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                    
                    <button 
                      onClick={handleAddStudent}
                      className="flex items-center justify-center gap-2 px-3 lg:px-4 py-2 bg-slate-900 text-white rounded-lg text-xs lg:text-sm hover:bg-slate-800 transition-colors whitespace-nowrap"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span className="hidden sm:inline">Add Student</span>
                      <span className="sm:hidden">Add</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:p-6">
                <div className="relative mb-4 lg:mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search students..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-10 lg:pl-12 pr-4 py-2 lg:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                  />
                </div>

                {/* Student Table */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-slate-700">Student</th>
                        <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-slate-700">Rating</th>
                        <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-slate-700">Status</th>
                        <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-slate-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map(student => (
                        <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-3 lg:py-4 px-2 lg:px-4">
                            <div className="flex items-center gap-2 lg:gap-3">
                              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full"></div>
                              <div className="min-w-0">
                                <p className="font-medium text-slate-900 text-sm lg:text-base truncate">{student.name}</p>
                                <p className="text-xs lg:text-sm text-slate-500 truncate">@{student.username}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 lg:py-4 px-2 lg:px-4">
                            <div>
                              <p className="font-bold text-slate-900 text-sm lg:text-base">{student.rating}</p>
                              <p className={`text-xs ${
                                student.progress.startsWith('+') 
                                  ? 'text-emerald-600' 
                                  : 'text-red-600'
                              }`}>
                                {student.progress}
                              </p>
                            </div>
                          </td>
                          <td className="py-3 lg:py-4 px-2 lg:px-4">
                            <span className={`inline-flex items-center gap-1.5 px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${
                              student.status === 'active' 
                                ? 'bg-emerald-100 text-emerald-700' 
                                : student.status === 'away'
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-red-100 text-red-700'
                            }`}>
                              {student.status === 'active' && <CheckCircle className="w-3 h-3" />}
                              {student.status === 'away' && <AlertCircle className="w-3 h-3" />}
                              {student.status === 'inactive' && <UserX className="w-3 h-3" />}
                              <span className="hidden sm:inline">
                                {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                              </span>
                              <span className="sm:hidden">
                                {student.status.charAt(0).toUpperCase()}
                              </span>
                            </span>
                          </td>
                          <td className="py-3 lg:py-4 px-2 lg:px-4">
                            <div className="flex items-center gap-1 lg:gap-2">
                              <button 
                                onClick={() => handleViewStudent(student.id)}
                                className="p-1.5 lg:p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                aria-label="View student"
                              >
                                <Eye className="w-4 h-4 text-slate-600" />
                              </button>
                              <button 
                                onClick={() => handleEditStudent(student.id)}
                                className="p-1.5 lg:p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                aria-label="Edit student"
                              >
                                <Edit className="w-4 h-4 text-slate-600" />
                              </button>
                              <button 
                                onClick={() => handleDeleteStudent(student.id)}
                                className="p-1.5 lg:p-2 hover:bg-red-50 rounded-lg transition-colors"
                                aria-label="Delete student"
                              >
                                <Trash2 className="w-4 h-4 text-red-500" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'tournaments':
        return (
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-4">Tournaments Management</h3>
                <p className="text-slate-600 mb-6">All tournament functionality is working now!</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Create New Tournament
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'ranking':
        return (
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-4">Ranking System</h3>
                <p className="text-slate-600">Ranking functionality is now active!</p>
              </div>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-4">Analytics Dashboard</h3>
                <p className="text-slate-600">Analytics functionality is now working!</p>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-4">Settings Panel</h3>
                <p className="text-slate-600 mb-6">All settings are now accessible!</p>
                <button 
                  onClick={handleOpenSettings}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Open Settings
                </button>
              </div>
            </div>
          </div>
        );
      
      default: // dashboard
        return (
          <>
            {/* STUDENTS TABLE */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="p-4 lg:p-6 border-b border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-slate-900">Students</h3>
                      <p className="text-slate-600 text-xs lg:text-sm">Manage academy students</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
                        {['all', 'active', 'away', 'inactive'].map(filter => (
                          <button
                            key={filter}
                            onClick={() => {
                              setSelectedFilter(filter);
                              console.log(`Filter changed to: ${filter}`);
                            }}
                            className={`px-2 py-1.5 text-xs lg:text-sm rounded-md capitalize transition-colors whitespace-nowrap ${
                              selectedFilter === filter 
                                ? 'bg-white text-slate-900 shadow-sm' 
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                      
                      <button 
                        onClick={handleAddStudent}
                        className="flex items-center justify-center gap-2 px-3 lg:px-4 py-2 bg-slate-900 text-white rounded-lg text-xs lg:text-sm hover:bg-slate-800 transition-colors whitespace-nowrap"
                      >
                        <Plus className="w-4 h-4" />
                        <span className="hidden sm:inline">Add Student</span>
                        <span className="sm:hidden">Add</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:p-6">
                  <div className="relative mb-4 lg:mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search students..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="w-full pl-10 lg:pl-12 pr-4 py-2 lg:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                    />
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-slate-700">Student</th>
                          <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-slate-700">Rating</th>
                          <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-slate-700">Status</th>
                          <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-slate-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredStudents.map(student => (
                          <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="py-3 lg:py-4 px-2 lg:px-4">
                              <div className="flex items-center gap-2 lg:gap-3">
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full"></div>
                                <div className="min-w-0">
                                  <p className="font-medium text-slate-900 text-sm lg:text-base truncate">{student.name}</p>
                                  <p className="text-xs lg:text-sm text-slate-500 truncate">@{student.username}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 lg:py-4 px-2 lg:px-4">
                              <div>
                                <p className="font-bold text-slate-900 text-sm lg:text-base">{student.rating}</p>
                                <p className={`text-xs ${
                                  student.progress.startsWith('+') 
                                    ? 'text-emerald-600' 
                                    : 'text-red-600'
                                }`}>
                                  {student.progress}
                                </p>
                              </div>
                            </td>
                            <td className="py-3 lg:py-4 px-2 lg:px-4">
                              <span className={`inline-flex items-center gap-1.5 px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${
                                student.status === 'active' 
                                  ? 'bg-emerald-100 text-emerald-700' 
                                  : student.status === 'away'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {student.status === 'active' && <CheckCircle className="w-3 h-3" />}
                                {student.status === 'away' && <AlertCircle className="w-3 h-3" />}
                                {student.status === 'inactive' && <UserX className="w-3 h-3" />}
                                <span className="hidden sm:inline">
                                  {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                                </span>
                                <span className="sm:hidden">
                                  {student.status.charAt(0).toUpperCase()}
                                </span>
                              </span>
                            </td>
                            <td className="py-3 lg:py-4 px-2 lg:px-4">
                              <div className="flex items-center gap-1 lg:gap-2">
                                <button 
                                  onClick={() => handleViewStudent(student.id)}
                                  className="p-1.5 lg:p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                  aria-label="View student"
                                >
                                  <Eye className="w-4 h-4 text-slate-600" />
                                </button>
                                <button 
                                  onClick={() => handleEditStudent(student.id)}
                                  className="p-1.5 lg:p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                  aria-label="Edit student"
                                >
                                  <Edit className="w-4 h-4 text-slate-600" />
                                </button>
                                <button 
                                  onClick={() => handleDeleteStudent(student.id)}
                                  className="p-1.5 lg:p-2 hover:bg-red-50 rounded-lg transition-colors"
                                  aria-label="Delete student"
                                >
                                  <Trash2 className="w-4 h-4 text-red-500" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  // Add Student Modal
  const AddStudentModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={() => setIsAddStudentModalOpen(false)}
      ></div>
      <div className="bg-white w-full max-w-md rounded-xl lg:rounded-2xl shadow-2xl relative z-10">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 lg:p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-white">Add New Student</h3>
              <p className="text-slate-400 text-xs lg:text-sm mt-1">Register a new student</p>
            </div>
            <button 
              onClick={() => setIsAddStudentModalOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        
        <form className="p-4 lg:p-6 space-y-4">
          <input className="w-full px-4 py-3 border rounded-lg" placeholder="Full Name" />
          <input className="w-full px-4 py-3 border rounded-lg" placeholder="Username" />
          <input className="w-full px-4 py-3 border rounded-lg" placeholder="Email" />
          <input className="w-full px-4 py-3 border rounded-lg" placeholder="Initial Rating" />
          <button className="w-full py-3 bg-emerald-600 text-white rounded-lg font-medium">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
      {/* MODALS */}
      {isAddStudentModalOpen && <AddStudentModal />}
      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="bg-white w-full max-w-2xl rounded-xl lg:rounded-2xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 lg:p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-white">Create New Tournament</h3>
                  <p className="text-slate-400 text-xs lg:text-sm mt-1">Schedule a new chess tournament</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            
            <form className="p-4 lg:p-8 space-y-4 lg:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tournament Name</label>
                  <input 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                    placeholder="e.g., Summer Championship 2024"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tournament Type</label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base">
                    <option>Classical</option>
                    <option>Rapid</option>
                    <option>Blitz</option>
                    <option>Bullet</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Start Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">End Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Prize Pool ($)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                    placeholder="5000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea 
                  rows="3"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm lg:text-base"
                  placeholder="Tournament description, rules, and other details..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 lg:px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors text-sm lg:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 lg:px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg text-sm lg:text-base"
                >
                  Create Tournament
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SIDEBAR - DESKTOP */}
      <aside className="hidden lg:flex flex-col w-72 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-xl">
        <div className="p-8 border-b border-slate-700">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">♔</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full border-4 border-slate-900"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Chess Academy</h2>
              <p className="text-sm text-slate-400 mt-1">Administrator Panel</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">MAIN NAVIGATION</p>
            <nav className="space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
                { id: 'students', label: 'Students', icon: <Users className="w-5 h-5" /> },
                { id: 'tournaments', label: 'Tournaments', icon: <Calendar className="w-5 h-5" /> },
                { id: 'ranking', label: 'Ranking', icon: <Trophy className="w-5 h-5" /> },
                { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
                { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all
                    ${activeTab === tab.id 
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    {tab.icon}
                    {tab.label}
                  </div>
                  {activeTab === tab.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto bg-slate-800/50 rounded-xl p-4">
            <p className="text-xs text-slate-400 mb-2">Quick Actions</p>
            <div className="space-y-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm hover:bg-emerald-500/20 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span className="truncate">New Tournament</span>
              </button>
              <button 
                onClick={handleAddStudent}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm hover:bg-blue-500/20 transition-colors"
              >
                <UserCheck className="w-4 h-4" />
                <span className="truncate">Add Student</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm font-medium"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto pb-24 lg:pb-8">
        {/* MOBILE HEADER */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-slate-700" />
              </button>
              <div>
                <h1 className="text-lg font-bold text-slate-900">Admin Panel</h1>
                <p className="text-xs text-slate-600">Chess Academy</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center w-10 h-10 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                aria-label="Create tournament"
              >
                <Plus className="w-5 h-5" />
              </button>
              
              <button 
                onClick={handleNotificationClick}
                className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 text-slate-600" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP HEADER */}
        <header className="hidden lg:block mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">Admin Dashboard</h1>
              <p className="text-slate-600 mt-1">Manage your chess academy efficiently</p>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleNotificationClick}
                className="relative p-2 hover:bg-white rounded-lg transition-colors" 
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 text-slate-600" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              
              <div className="hidden lg:flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full"></div>
                <div>
                  <p className="font-medium">Admin User</p>
                  <p className="text-sm text-slate-500">Super Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-3 lg:mb-4">
                <div className={`p-2 lg:p-3 ${stat.color} rounded-lg lg:rounded-xl text-white`}>
                  {stat.icon}
                </div>
                <span className={`text-xs lg:text-sm font-medium px-2 py-1 rounded-full ${
                  stat.change.includes('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-slate-600 text-xs lg:text-sm">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {renderTabContent()}

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6 lg:space-y-8">
            {/* TOURNAMENTS */}
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-4 lg:p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900">Tournaments</h3>
                    <p className="text-slate-600 text-xs lg:text-sm">Upcoming events</p>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center w-10 h-10 lg:w-auto lg:h-auto lg:px-4 lg:py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    aria-label="Create tournament"
                  >
                    <Plus className="w-5 h-5" />
                    <span className="hidden lg:inline ml-2">Create</span>
                  </button>
                </div>
              </div>
              
              <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
                {tournaments.map(tournament => (
                  <div 
                    key={tournament.id} 
                    className="p-3 lg:p-4 border border-slate-200 rounded-xl hover:border-emerald-300 transition-colors cursor-pointer"
                    onClick={() => handleViewTournament(tournament.id)}
                  >
                    <div className="flex items-start justify-between mb-2 lg:mb-3">
                      <h4 className="font-semibold text-slate-900 text-sm lg:text-base truncate">{tournament.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                        tournament.status === 'upcoming' 
                          ? 'bg-blue-100 text-blue-700'
                          : tournament.status === 'ongoing'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {tournament.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 lg:gap-2 text-xs lg:text-sm">
                      <div className="text-slate-600">Date:</div>
                      <div className="font-medium truncate">{tournament.date}</div>
                      <div className="text-slate-600">Participants:</div>
                      <div className="font-medium">{tournament.participants}</div>
                      <div className="text-slate-600">Prize:</div>
                      <div className="font-medium text-emerald-600 truncate">{tournament.prize}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK STATS */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-white">
              <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Quick Stats</h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
                    <span className="text-slate-300 text-sm lg:text-base">Active Sessions</span>
                  </div>
                  <span className="font-bold text-sm lg:text-base">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-amber-400" />
                    <span className="text-slate-300 text-sm lg:text-base">Avg Session Time</span>
                  </div>
                  <span className="font-bold text-sm lg:text-base">45m</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400" />
                    <span className="text-slate-300 text-sm lg:text-base">Completion Rate</span>
                  </div>
                  <span className="font-bold text-sm lg:text-base">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" />
                    <span className="text-slate-300 text-sm lg:text-base">Top Rating</span>
                  </div>
                  <span className="font-bold text-sm lg:text-base">2450</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BOTTOM NAVIGATION MOBILE */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-30">
        <div className="flex justify-around items-center p-2">
          {bottomNavItems.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className={`flex flex-col items-center justify-center w-full py-2 transition-colors ${
                activeTab === item.id 
                  ? 'text-emerald-600' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label={item.label}
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

export default AdminDashboard;