const BASE = 'http://localhost:3000'


export async function fetchProfile() {
const res = await fetch(`${BASE}/profile`)
return res.json()
}


export async function fetchHardSkills() {
const res = await fetch(`${BASE}/hard_skills`)
return res.json()
}


export async function fetchSoftSkills() {
const res = await fetch(`${BASE}/soft_skills`)
return res.json()
}


export async function fetchProjects() {
const res = await fetch(`${BASE}/projects`)
return res.json()
}


export async function fetchInterests() {
const res = await fetch(`${BASE}/interests`)
return res.json()
}