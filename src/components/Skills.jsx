import React, { useState } from 'react'


function HardCard({ skill }) {
return (
<div className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02] border-t-4 border-pastel2">
<h4 className="text-xl font-bold text-pastel5 mb-1">{skill.name}</h4>
<p className="text-sm font-semibold text-pastel3 mb-2">{skill.level}</p>
<p className="text-gray-600 text-sm">{skill.description}</p>
</div>
)
}


function SoftCard({ skill }) {
return (
<div className="p-4 rounded-2xl shadow-md bg-gradient-to-br from-pastel1 to-pastel2 text-white flex items-center gap-3">
<div className="text-2xl">{skill.icon}</div>
<div className="font-semibold">{skill.skill}</div>
</div>
)
}


export default function Skills({ hard = [], soft = [] }) {
const [tab, setTab] = useState('hard')
return (
<section id="skills" className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-8">
<h2 className="text-3xl sm:text-5xl font-extrabold text-center text-pastel5 mb-6">Keahlian</h2>
<p className="text-lg text-center max-w-3xl mx-auto text-gray-600 mb-8">Keahlian terbagi menjadi hard skills & soft skills — klik tab di bawah.</p>


<div className="flex justify-center gap-4 mb-8">
<button onClick={() => setTab('hard')} className={`px-6 py-2 rounded-full font-semibold ${tab==='hard' ? 'bg-pastel5 text-white' : 'bg-gray-100 text-pastel4'}`}>Hard Skills</button>
<button onClick={() => setTab('soft')} className={`px-6 py-2 rounded-full font-semibold ${tab==='soft' ? 'bg-pastel5 text-white' : 'bg-gray-100 text-pastel4'}`}>Soft Skills</button>
</div>


<div>
{tab === 'hard' && (
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{hard.map(s => <HardCard key={s.id} skill={s} />)}
</div>
)}


{tab === 'soft' && (
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{soft.map(s => <SoftCard key={s.id} skill={s} />)}
</div>
)}
</div>
</div>
</section>
)
}