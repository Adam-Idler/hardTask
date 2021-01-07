class SendForm {
  constructor() {
    this.errorMessage = 'Что-то пошло не так...';
    this.successMessage = 'Спасибо! Мы скоро с вами свяжимся!';
    this.forms = document.querySelectorAll('form');
  }
  postData(form, body) {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
  sendAjax() {
    const statusMessage = document.createElement('div');
    const loadingAnim = document.createElement('div');
    
    statusMessage.style.cssText = `
        font-size: 2rem;
        color: #fff;
    `;

    loadingAnim.style.cssText = ` 
        width: 4em;
        height: 4em;
        margin: auto;
        background-color: #337ab7;
        border-radius: 100%;
        animation: sk-spinner-pulse 1.0s infinite ease-in-out;
    `;
    loadingAnim.animate([
        { transform: 'scale(0)' },
        { transform: 'scale(1.0)',
          opacity: '0' }
        ],
        {
            duration: 1000,
          iterations: Infinity
    });
    
    this.forms.forEach( (form) => {
      form.addEventListener('submit', (event) => {
        for (let i = 0, len = form.elements.length; i < len; ++i) {
          form.elements[i].tagName === 'BUTTON' ? form.elements[i].disabled = true : form.elements[i].readOnly = true;
        }
        event.preventDefault();  
        statusMessage.textContent = ''; 
        form.appendChild(statusMessage);
        form.appendChild(loadingAnim);
        const formPhone = form.querySelector('.form-phone');
        formPhone.value = formPhone.value.replace(/\D/g, '');
        
        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
          body[key] = val;
        });
        
        this.postData(form, body)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error('status network not 200');
            }
            loadingAnim.remove();
            statusMessage.textContent = this.successMessage;
            
            setTimeout(() => {
              statusMessage.remove();
              for (let i = 0, len = form.elements.length; i < len; ++i) {
                form.elements[i].tagName === 'BUTTON' ? form.elements[i].disabled = '' : form.elements[i].readOnly = false;
              }
            }, 3000);
          })
          .catch(error => {
            loadingAnim.remove();
            statusMessage.textContent = this.errorMessage;
            console.error(error);
            setTimeout(() => {
              statusMessage.remove();
              for (let i = 0, len = form.elements.length; i < len; ++i) {
                form.elements[i].tagName === 'BUTTON' ? form.elements[i].disabled = '' : form.elements[i].readOnly = false;
              }
            }, 3000);
          });
        form.reset();
    });
    });
  }
}

export default SendForm;