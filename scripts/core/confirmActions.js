

export function confirmMessage(message, onConfirm) {
  
  const modal = document.createElement('div');
  modal.className = 'confirm-message-container w-full fixed inset-0 bg-black/50 z-50 flex hidden items-center justify-center'

  modal.innerHTML = 
  `
  <div class="js-close-confirm-message absolute top-5 right-5 text-white text-xl p-3">
      <i class="fa-solid fa-x cursor-pointer"></i>
    </div>

      <div class="inner-card rounded-xl p-6 flex flex-row items-center gap-2 w-full max-w-[500px]">
        
        <h1 id = "confirm-message" class = "font-['DM_Sans'] text-[14px]">${message}</h1>
        <button class = "text-white bg-green-500 p-2 px-5 rounded-md js-yes-button cursor-pointer font-['DM_Sans'] sm:text-base">Yes</button>
        <button class="text-white bg-red-600 p-2 px-5 rounded-md js-no-button cursor-pointer font-['DM_Sans']">No</button>
      </div>
  </div>
  `  

  document.body.append(modal);

  modal.style.display = 'flex';

  modal.querySelector('.js-close-confirm-message').addEventListener('click', ()=> {
    modal.remove();
  });

  modal.querySelector('.js-no-button').addEventListener('click', () => {
    modal.remove();
  })
 
  modal.querySelector('.js-yes-button').addEventListener('click', () => {
    if (onConfirm) onConfirm();
    modal.remove();
  })
}