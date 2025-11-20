import React from 'react'


export default function Header() {
return (
<header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
<nav className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-20">
<a href="#hero" className="text-2xl sm:text-3xl font-extrabold text-pastel5">
<span className="text-pastel2">B</span>ianca.
</a>
<div className="hidden md:flex items-center space-x-8">
<a href="#about" className="text-lg font-medium text-pastel4 hover:text-pastel2 transition-colors">Tentang</a>
<a href="#skills" className="text-lg font-medium text-pastel4 hover:text-pastel2 transition-colors">Keahlian</a>
<a href="#projects" className="text-lg font-medium text-pastel4 hover:text-pastel2 transition-colors">Proyek</a>
<a href="#contact" className="px-6 py-2 bg-gradient-to-r from-pastel2 to-pastel3 text-white rounded-full font-semibold shadow-lg">Kontak</a>
</div>
<button className="md:hidden text-pastel5">☰</button>
</nav>
</header>
)
}