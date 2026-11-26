import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// =============== Import Icons ================== 
import { IoIosArrowDown } from "react-icons/io"; 
import { IoMdHome } from "react-icons/io";
import { FaUserFriends , FaCalendarAlt} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { LiaToothSolid } from "react-icons/lia";
import { ImProfile } from "react-icons/im";
import { BsCapsule } from "react-icons/bs";
import { SlChemistry } from "react-icons/sl";
import { MdOutlineInventory } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";



const Mainheader = () => {
    const location = useLocation();
    
    const [openMenu, setOpenMenu] = useState(null);

    const Meus = [
        { name: 'داشبورد', link: '/', icon: <IoMdHome /> },
        { 
            name: 'بیماران', 
            link: '/patients', // مسیر پایه برای تشخیص فعال بودن والد
            icon: <FaUserFriends />,
            subMenus: [
                { name: 'لیست بیماران', link: '/patients' },
                { name: 'ثبت بیمار جدید', link: '/patients/create' },
            ]
        },
        { 
            name: 'نوبت ها',
            link: '/appoientment',
            icon: <FaCalendarAlt /> ,
            subMenus:[
                {name:'لیست نوبت ها',link:'/appoientment'},
                {name:'ایجاد نوبت',link:'/appoientment/create'},
                {name:' برنامه کاری داکتران',link:'/appoientments/schedules'}
            ]
        },
        { 
            name: 'داکتران',
            link: '/doctores',
            icon: <FaUserDoctor /> ,
            subMenus:[
                {name:'لیست داکتران',link:'/doctores'},
                {name:'ثبت داکتر',link:'/doctores/create'},
            ]
        },
        { 
            name: 'معاینات ',
             link: '/examinations',
             icon: <LiaToothSolid />,
              subMenus:[
                {name:'لیست معاینات',link:'/examinations'},
                {name:' ایجاد معاینه',link:'/examinations/create'},
            ]
         },
        { 
            name: 'درمان',
             link: '/treatments',
             icon: <ImProfile />,
             subMenus:[
                {name:'لیست درمان',link:'/treatments'},
                {name:'طرح درمان ',link:'/treatments/create'},
            ]
         },
        { name: 'خدمات', link: '/services', icon: <LiaToothSolid /> },
        { 
            name: 'نسخه ها',
             link: '/prescriptions',
             icon: <BsCapsule />,

         },
        { 
            name: 'پرداخت ها',
             link: '/billing',
             icon: <MdOutlinePayment />,
              subMenus:[
                {name:'لیست پرداخت ها',link:'/billing'},
                {name:'فاکتورها',link:'/billing/invoice/create'},
                {name:'پرداخت',link:'/billing/payments'},
            ]
         },
        { 
            name: 'لابراتوار',
            link: '/laboratory',
             icon: <SlChemistry />,
            subMenus:[
                {name:'لابراتوار',link:'/laboratory'},
                {name:'ایجاد سفارش',link:'/laboratory/orders/create'},
            ]
         },
        { 
            name: 'انبار',
            link: '/inventory',
            icon: <MdOutlineInventory />,
            subMenus:[
                {name:'مدیریت انبار',link:'/inventory'},
                {name:'صفحه محصولات',link:'/inventory/product'},
                {name:'ورود و خروج کالا',link:'/inventory/transactions'},
                {name:'تآمین کنندگان',link:'/inventory/Suppliers'},
            ]
         },
        { name: 'مصارف', link: '/expenses', icon: <RiMoneyDollarCircleFill /> },
        { name: 'گذارش ها', link: '/reporets', icon: <IoStatsChart /> },
        { name: 'کاربران', link: '/settings/users', icon: <FaRegUserCircle /> },
        { name: 'تنظیمات', link: '/settings', icon: <CiSettings /> },
    ];

    // باز ماندن خودکار زیرمنو در صورت رفرش کردن صفحه در یکی از زیرمسیرها
    useEffect(() => {
        Meus.forEach((item) => {
            if (item.subMenus) {
                const isChildActive = item.subMenus.some(sub => location.pathname === sub.link);
                if (isChildActive) {
                    setOpenMenu(item.name);
                }
            }
        });
    }, [location.pathname]);

    // تابع باز و بسته کردن منو با کلیک
    const toggleSubMenu = (name) => {
        setOpenMenu(openMenu === name ? null : name);
    };

    return (
        <ul className='mt-10'>
            {Meus.map((item, i) => {
                // بررسی اینکه آیا منو زیرمجموعه دارد یا خیر
                if (item.subMenus) {
                    const isOpen = openMenu === item.name;
                    // بررسی اینکه آیا کاربر در یکی از صفحات زیرمجموعه این منو است
                    const isParentActive = item.subMenus.some(sub => location.pathname === sub.link);

                    return (
                        <li key={i} className='mt-1'>
                            {/* دکمه اصلی منوی بازشو */}
                            <button
                                type="button"
                                onClick={() => toggleSubMenu(item.name)}
                                className={`flex w-full h-10 duration-300 text-white rounded-md items-center justify-between px-3 font-Vazirmatn-Medium ${
                                    isParentActive ? 'bg-Primary-Blue' : 'hover:bg-Primary-Blue'
                                }`}
                            >
                                <div className='flex items-center gap-3'>
                                    <span className='text-xl'>{item.icon}</span>
                                    <span className='text-[14px]'>{item.name}</span>
                                </div>
                                {/* چرخش آیکون فلش هنگام باز شدن */}
                                <IoIosArrowDown className={`duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* لیست زیرمجموعه‌ها (Dropdown) */}
                            {isOpen && (
                                <ul className='pr-2 mt-1 space-y-1 border-r border-white/20 mr-4'>
                                    {item.subMenus.map((sub, j) => (
                                        <li key={j}>
                                            <NavLink
                                                to={sub.link}
                                                end
                                                className={({ isActive }) =>
                                                    `flex w-full h-9 duration-300 rounded-md items-center pr-3 font-Vazirmatn-Medium text-[13px] ${
                                                        isActive 
                                                            ? 'bg-Primary-Blue/80 text-white font-bold' 
                                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                                    }`
                                                }
                                            >
                                                {sub.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                }

                // حالت عادی برای منوهایی که زیرمجموعه ندارند
                return (
                    <li key={i}>
                        <NavLink
                            to={item.link}
                            end
                            className={({ isActive }) =>
                                `flex w-full h-10 duration-300 text-white rounded-md mt-1 items-center pr-3 font-Vazirmatn-Medium gap-3 ${
                                    isActive ? 'bg-Primary-Blue' : 'hover:bg-Primary-Blue'
                                }`
                            }
                        >
                            <span className='text-xl'>{item.icon}</span>
                            <span className='text-[14px]'>{item.name}</span>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default Mainheader;
