import React from 'react'


export default function Projects({ projects = [] }) {
return (
<section id="projects" className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-8">
<h2 className="text-3xl sm:text-5xl font-extrabold text-center text-pastel5 mb-8">Proyek Terbaru</h2>
<p className="text-center text-lg text-gray-600 mb-8">Berikut beberapa proyek yang pernah saya kerjakan.</p>
<div className="grid md:grid-cols-3 gap-6">
{projects.map(p => (
<div key={p.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow border border-gray-100">
<h4 className="text-xl font-bold text-pastel5 mb-2">{p.name}</h4>
<p className="text-gray-600 mb-3 text-sm">{p.description}</p>
<div className="flex flex-wrap gap-2">
{p.technologies.map((t, i) => (
<span key={i} className="text-xs font-medium px-3 py-1 bg-pastel1/30 text-pastel5 rounded-full">{t}</span>
))}
</div>
</div>
))}
</div>
</div>
</section>
)
}