import React from 'react'
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';
import { FloatingNavDemo } from '@/components/FloatingNavbar/floating-navbar-comp';

const layout = ({
    children,
  }:{
    children: React.ReactNode;
  }) => {
    
  return (
    <div>
      <FloatingNavDemo />
      {children}
      <Footer />
    </div>
  )
}

export default layout
