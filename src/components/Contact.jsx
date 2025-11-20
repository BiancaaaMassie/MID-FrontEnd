import React from 'react'


export default function Contact({ profile, interests = [] }) {
return (
<section id="contact" className="py-24 bg-gradient-to-t from-pastel1/20 via-white to-white">
<div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
<h2 className="text-3xl sm:text-5xl font-extrabold text-pastel5 mb-6">Mari Terhubung!</h2>
<p className="text-lg text-gray-600 mb-6">Saya selalu terbuka untuk diskusi, peluang kolaborasi, atau sekadar bertukar pikiran.</p>
<a href={`mailto:${profile?.email || 'bianca.massie@example.com'}`} className="inline-block px-8 py-3 bg-gradient-to-r from-pastel2 to-pastel3 text-white rounded-full font-semibold">Kirim Email</a>


<div className="mt-12">
<h3 className="text-lg font-semibold text-pastel4 mb-4">Minat Pribadi Saya:</h3>
<div className="flex justify-center flex-wrap gap-3">
{interests.map(i => (
<span key={i.id} className={`text-white font-medium px-4 py-2 rounded-full shadow-md ${i.color}`}>{i.name}</span>
))}
</div>
</div>
</div>
</section>
)
}