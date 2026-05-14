import {
  FiMaximize, FiPackage, FiThermometer, FiGrid, 
  FiBox, FiTrendingUp, FiClock, FiDatabase, FiTool, FiBarChart2,
  FiCode, FiCalendar
} from 'react-icons/fi';

export const categories = [
  { key: 'area', label: 'Area', icon: FiGrid, color: 'text-yellow-400' },
  { key: 'data', label: 'Data', icon: FiDatabase, color: 'text-indigo-400' },
  { key: 'length', label: 'Length', icon: FiMaximize, color: 'text-blue-400' },
  { key: 'speed', label: 'Speed', icon: FiTrendingUp, color: 'text-orange-400' },
  { key: 'temperature', label: 'Temperature', icon: FiThermometer, color: 'text-red-400' },
  { key: 'time', label: 'Time', icon: FiClock, color: 'text-teal-400' },
  { key: 'volume', label: 'Volume', icon: FiBox, color: 'text-purple-400' },
  { key: 'weight', label: 'Weight', icon: FiPackage, color: 'text-green-400' },
  // New Developer Tools Category
  { key: 'dev-tools', label: 'Developer Tools', icon: FiCode, color: 'text-cyan-500' },
  // New Utilities Category
  { key: 'utilities', label: 'Utilities', icon: FiCalendar, color: 'text-violet-500' },
  // Temporarily disabled scientific category
  // { key: 'scientific', label: 'Scientific Calculator', icon: FiCpu, color: 'text-purple-600' },
];


