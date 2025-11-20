import React from 'react'


export default function Footer({ profile }) {
return (
<footer className="py-12 bg-pastel5 text-white mt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
<p className="text-lg font-semibold mb-2">{profile?.name || 'Bianca Carolyne Massie'}</p>
<p className="opacity-80 mb-6">Dibuat dengan React, Vite, dan Tailwind CSS.</p>
<div className="flex justify-center space-x-6">
<a href="#" className="opacity-80 hover:opacity-100">LinkedIn</a>
<a href="#" className="opacity-80 hover:opacity-100">GitHub</a>
<a href="#" className="opacity-80 hover:opacity-100">Instagram</a>
</div>
<p className="mt-6 text-sm opacity-60">© 2025 Bianca Carolyne Massie. All rights reserved.</p>
</div>
</footer>
)
}