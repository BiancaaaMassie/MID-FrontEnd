import React from 'react'


export default function Hero({ profile }) {
if (!profile) return (
<section className="min-h-[60vh] flex items-center justify-center pt-20">loading...</section>
)


return (
<section id="hero" className="min-h-[70vh] flex items-center pt-20 bg-gradient-to-br from-pastel1/20 via-white to-white">
<div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
<div className="text-center md:text-left">
<h1 className="text-4xl md:text-6xl font-extrabold text-pastel5 leading-tight">{profile.name}</h1>
<p className="text-2xl font-light text-pastel3 mt-3 mb-6">{profile.title}</p>
<p className="text-lg text-gray-600 max-w-lg mb-8">{profile.tagline}</p>
<div className="flex justify-center md:justify-start space-x-4">
<a href="#projects" className="px-6 py-3 bg-pastel5 text-white rounded-full font-semibold shadow-lg">Lihat Proyek</a>
<a href="#skills" className="px-6 py-3 text-pastel5 border-2 border-pastel5 rounded-full font-semibold">Lihat Keahlian</a>
</div>
</div>
<div className="relative hidden md:flex justify-center items-center h-full">
<div className="w-72 h-72 bg-gradient-to-br from-pastel2 to-pastel3 rounded-full blur-2xl opacity-30" />
<div className="absolute w-64 h-80 bg-white rounded-3xl shadow-2xl flex items-center justify-center font-bold text-3xl text-pastel5"
style={{ backgroundImage: `url(${profile.imagePlaceholder})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
</div>
</div>
</div>
</section>
)
}
