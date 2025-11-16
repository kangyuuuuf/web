import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 检测系统主题偏好
const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const ThemeProvider = ({ children }) => {
  // 使用 ref 跟踪是否是用户手动设置的
  const isManualSet = useRef(false);
  
  const [theme, setTheme] = useState(() => {
    // 从 localStorage 读取保存的主题
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      // 如果有保存的主题，标记为用户手动设置
      isManualSet.current = true;
      return savedTheme;
    }
    // 否则使用系统主题
    return getSystemTheme();
  });

  // 监听系统主题变化（仅在用户没有手动设置过主题时）
  useEffect(() => {
    if (!isManualSet.current && typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e) => {
        // 只有在用户没有手动设置过主题时才自动跟随系统
        if (!isManualSet.current) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      };

      // 使用现代浏览器的 addEventListener（如果支持）
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      } else {
        // 兼容旧浏览器
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, []);

  const toggleTheme = () => {
    // 用户手动切换主题，标记为手动设置
    isManualSet.current = true;
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      // 保存用户手动设置的主题到 localStorage
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

