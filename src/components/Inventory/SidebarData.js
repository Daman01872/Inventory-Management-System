import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';


export const SidebarData = [
  {
    title: 'Home',
    path: '/inventory',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/inventory/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Order',
    path: '/inventory/order',
    icon: <FaIcons.FaTruck />,
    cName: 'nav-text'
  },
  {
    title: 'Buyers',
    path: '/inventory/buyers',
    icon: <FaIcons.FaRupeeSign />,
    cName: 'nav-text'
  },
  {
    title: 'Suppliers',
    path: '/inventory/suppliers',
    icon: <FaIcons.FaShoppingCart />,
    cName: 'nav-text'
  },
  {
    title: 'User',
    path: '/inventory/user',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Inventory',
    path: '/inventory/inventory-product',
    icon: <FcIcons.FcComboChart />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/inventory/about',
    icon: <AiIcons.AiFillInfoCircle />,
    cName: 'nav-text'
  },
  {
    title: 'ContactUs',
    path: '/inventory/contact-us',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];