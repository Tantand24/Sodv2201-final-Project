export const PROGRAMS = [
  { code: 'SD-DIP', name: 'Software Development - Diploma', term: 'Winter', start: '2024-09-05', end: '2026-06-15', fees: { domestic: 9254, international: 27735 } },
  { code: 'SD-PD',  name: 'Software Development - Post-Diploma', term: 'Winter', start: '2024-09-05', end: '2025-06-15', fees: { domestic: 7895, international: 23675 } },
]

export const COURSES = [
  { courseCode:'SODV1101', name:'Intro to Web Programming', term:'Winter', start:'2025-01-08', end:'2025-03-20', description:'HTML/CSS/JS basics', programs:['SD-DIP','SD-PD'] },
  { courseCode:'SODV1201', name:'Programming Fundamentals', term:'Winter', start:'2025-01-08', end:'2025-03-20', description:'C# basics', programs:['SD-DIP'] },
  { courseCode:'DATA1201', name:'Intro to Databases', term:'Winter', start:'2025-01-08', end:'2025-03-20', description:'Relational DBs', programs:['SD-DIP','SD-PD'] },
  { courseCode:'SODV2202', name:'Object-Oriented Programming', term:'Fall', start:'2025-09-05', end:'2025-12-10', description:'OOP in C#', programs:['SD-DIP'] },
  { courseCode:'DATA2201', name:'Relational Databases', term:'Fall', start:'2025-09-05', end:'2025-12-10', description:'SQL, ERD, normalization', programs:['SD-DIP','SD-PD'] },
  { courseCode:'WEBD2301', name:'Fullstack Foundations', term:'Spring', start:'2025-03-10', end:'2025-06-15', description:'Node + React basics', programs:['SD-PD'] },
]

export const TERMS = ['Spring','Summer','Fall','Winter']
