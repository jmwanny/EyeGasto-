import { loadSavingsFromStorage, saveToLocalStorage } from "../core/storage.js";

let savedUser = loadSavingsFromStorage('user');
let savedName = loadSavingsFromStorage('savedName');

let isNewUser = savedUser === null ? true : false;
let username = savedName || "Tracker";

export const user = {
  name: username,

  setUser (name) {
   this.name = name;
   saveToLocalStorage('savedName', name);
  }
}


export function initShowGreetings () {
  const card = document.getElementById('greeting-card');
  const container = document.querySelector('.super-container');
  const button = document.getElementById('start-tracking-btn');
  const inputName = document.getElementById('user-name-input');


  if(isNewUser){
  card.classList.remove('hidden');
  container.classList.add('hidden');
  } else {
  card.classList.add('hidden');
  container.classList.remove('hidden');
  }

  button.addEventListener('click', () => {

  const inputValue = inputName.value.trim();

    user.setUser(inputValue);

        card.classList.add('hidden');
    container.classList.remove('hidden');

     if(isNewUser) {
      showNotif('newUser')
        isNewUser = false;

      saveToLocalStorage('user', isNewUser);
    } 

  })
   
  if(!isNewUser){
    showNotif('existingUser');
  }
  }

const NOTIF_TYPES = {
  budgetOut: {
    emoji: '😱',
    title: "Budget's All Gone!",
    message: "You've used up today's budget. Hold your spending, bestie! 🛑",
    bg: 'linear-gradient(135deg,#2a1218,#3d1212)',
    border: 'rgba(255,100,100,0.45)',
    bar: '#ff4e4e',
  },
  budgetLow: {
    emoji: '⚠️',
    title: 'Budget Running Low!',
    message: "You've used more than half your budget — spend wisely! 💪",
    bg: 'linear-gradient(135deg,#2a2010,#3d2e08)',
    border: 'rgba(245,166,35,0.45)',
    bar: '#f5a623',
  },
  greetings: {
    emoji: '🎉',
    title: 'Congratulations!',
    message: `Wow that's a great budget for today!`,
    bg: 'linear-gradient(135deg,#102a20,#083d28)',
    border: 'rgba(0,212,160,0.45)',
    bar: '#00d4a0',
  },

newUser: {
  emoji: '🎉',
  title: `Welcome Aboard <strong>${user.name}</strong>!`,
  message: `Hi there! We're excited to have you start your budgeting journey today!`,
  bg: 'linear-gradient(135deg,#1a2a3a,#0b1f2e)',
  border: 'rgba(0,212,160,0.45)',
  bar: '#00d4a0',
},

existingUser: {
  emoji: '👋',
  title: `Welcome Back <strong>${user.name}</strong>!`,
  message: `Good to see you again! Let's make today another productive day for your budget.`,
  bg: 'linear-gradient(135deg,#102a20,#083d28)',
  border: 'rgba(0,150,255,0.45)',
  bar: '#0096ff',
},
};

export function showNotif(type) {
  const t = NOTIF_TYPES[type];
  if (!t) return;

  const title = type === 'newUser' ? `Welcome Aboard <strong>${user.name}</strong>!`: t.title;

  const container = document.getElementById('notif-container');
  const el = document.createElement('div');
  el.className = `notif font-['Poppins']`;
  el.style.cssText = `background:${t.bg}; border-color:${t.border};`;

  el.innerHTML = `
    <div style="font-size:30px;flex-shrink:0">${t.emoji}</div>
    <div style="flex:1;min-width:0">
      <div class="fredoka font-bold" style="color:#fff;font-size:15px;margin-bottom:2px">${title}</div>
      <div style="color:rgba(210,240,245,0.85);font-size:12px;font-weight:600;line-height:1.4">${t.message}</div>
    </div>
    <button onclick="dismissNotif(this)" style="color:rgba(255,255,255,0.35);font-size:16px;background:none;border:none;cursor:pointer;padding:0;flex-shrink:0">✕</button>
    <div class="notif-bar" style="background:${t.bar}"></div>
  `;

  el.onclick = (e) => { 
    if (e.target.tagName !== 'BUTTON')
       dismissNotif(el.querySelector('button')); };
  container.appendChild(el);
  setTimeout(() => dismissNotif(el.querySelector('button')), 4200);
}

export function dismissNotif(btn) {
  const el = btn?.closest?.('.notif') ?? btn;
  if (!el || el.classList.contains('hide')) return;
  el.classList.add('hide');
  setTimeout(() => el.remove(), 380);
}

