import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { fetchProfile, fetchHardSkills, fetchSoftSkills, fetchProjects, fetchInterests } from './api'


export default function App() {
const [profile, setProfile] = useState(null)
const [hardSkills, setHardSkills] = useState([])
const [softSkills, setSoftSkills] = useState([])
const [projects, setProjects] = useState([])
const [interests, setInterests] = useState([])


useEffect(() => {
fetchProfile().then(setProfile)
fetchHardSkills().then(setHardSkills)
fetchSoftSkills().then(setSoftSkills)
fetchProjects().then(setProjects)
fetchInterests().then(setInterests)
}, [])


return (
<div className="min-h-screen text-gray-800">
<Header />
<main className="pt-20">
<Hero profile={profile} />
<About profile={profile} />
<Skills hard={hardSkills} soft={softSkills} />
<Projects projects={projects} />
<Contact profile={profile} interests={interests} />
</main>
<Footer profile={profile} />
</div>
)
}