import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import { HiMenuAlt3 } from "react-icons/hi"; // آیکون منو برای موبایل
import { IoClose } from "react-icons/io5";   // آیکون بستن منو

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // بسته شدن خودکار سایدبار در موبایل بعد از کلیک روی هر لینک
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row bg-gray-50'>
      
      {/* هدر مخصوص موبایل و تبلت (در دسکتاپ مخفی می‌شود) */}
      <header className='lg:hidden flex items-center justify-between bg-slate-900 text-white px-4 h-14 sticky top-0 z-30 shadow-md'>
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className='text-2xl p-1 rounded-md hover:bg-white/10'
        >
          <HiMenuAlt3 />
        </button>
        <span className='font-Vazirmatn-Medium text-sm'>پنل مدیریت کلینیک</span>
      </header>

      {/* پس‌زمینه تیره (Overlay) هنگام باز بودن منو در موبایل */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className='fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-xs transition-opacity'
        />
      )}

      {/* بخش سایدبار */}
      <aside 
        id='sidebar'
        className={`fixed lg:sticky top-0 right-0 z-50 h-screen w-60 shrink-0 bg-slate-900 overflow-y-auto px-3 py-5 transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `}
      >
        {/* دکمه بستن سایدبار فقط در نمای موبایل */}
        <div className='flex justify-end lg:hidden mb-2'>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className='text-white text-2xl p-1 rounded-md hover:bg-white/10'
          >
            <IoClose />
          </button>
        </div>

        <Sidebar />
      </aside>

      {/* بخش محتوای اصلی */}
      <section className='flex-1 min-w-0 min-h-screen p-4 lg:p-6'>
        <Outlet />
      </section>

    </div>
  );
};

export default Layout;
