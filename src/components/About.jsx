import React from 'react'


export default function About({ profile }) {
if (!profile) return null
return (
<section id="about" className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-8">
<h2 className="text-3xl sm:text-5xl font-extrabold text-center text-pastel5 mb-12">Tentang Saya</h2>
<p className="text-lg text-center max-w-3xl mx-auto text-gray-600 mb-12">
{profile.description || 'Seorang mahasiswa yang bersemangat dalam memecahkan masalah dan menerjemahkan ide menjadi antarmuka yang fungsional.'}
</p>
<div className="grid md:grid-cols-3 gap-10 items-start">
<div className="md:col-span-2 space-y-4 pr-6">
<h3 className="text-2xl font-bold text-pastel5">Pengantar Singkat</h3>
<p className="text-lg text-gray-700 leading-relaxed">Saya <strong>{profile.name}</strong>, mahasiswa <strong>{profile.major}</strong> di <strong>{profile.campus}</strong>. Saya suka mengubah desain menjadi antarmuka yang responsif.</p>
<p className="text-lg text-gray-700 leading-relaxed">Kombinasi antara keterampilan teknis dan soft-skill membantu saya bekerja dalam tim dan menyelesaikan masalah.</p>
</div>
<div className="md:col-span-1 bg-gradient-to-br from-pastel4 to-pastel3 p-6 rounded-2xl shadow-2xl text-white">
<h3 className="text-xl font-bold mb-4">Info Akademik</h3>
<ul className="space-y-3 text-sm">
<li className="flex justify-between"><span>Kampus:</span><span className="font-semibold">{profile.campus}</span></li>
<li className="flex justify-between"><span>Fakultas:</span><span className="font-semibold">{profile.faculty}</span></li>
<li className="flex justify-between"><span>Jurusan:</span><span className="font-semibold">{profile.major}</span></li>
<li className="flex justify-between"><span>Semester:</span><span className="font-semibold">{profile.semester}</span></li>
</ul>
</div>
</div>
</div>
</section>
)
}