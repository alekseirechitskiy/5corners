export default function () {
  let FormData = {
    address: '',
    name: '',
    phone: '',
    email: '',
    package: '',
    comment: ''
  }

  const collectData = () => {
    const userAddress = document.querySelector('#userAddress').value;
    const userName = document.querySelector('#userName').value;
    const userPhone = document.querySelector('#userPhone').value;
    const userEmail = document.querySelector('#userEmail').value;
    const userPackage = document.querySelector('#userPackage').value;
    const userComment = document.querySelector('#userComment').value;

    FormData = {
      address: userAddress,
      name: userName,
      phone: userPhone,
      email: userEmail,
      package: userPackage,
      comment: userComment
    }
  }

  const colorField = () => {
    const result = document.querySelectorAll('.form__input-field');

    for (let i = 0; i < result.length; i++){
      if (result[i].value === '') {
        result[i].classList.add('form__input-field--error');
        console.error('Empty field');
        // break;
      } else {
        result[i].classList.remove('form__input-field--error');
        // console.log('FormData: ', FormData);
      }
    }

    // result.forEach(item => {
    //   if (item.value === '') {
    //     item.classList.add('form__input-field--error');
    //     console.error('Empty field');
    //   } else {
    //     item.classList.remove('form__input-field--error');
    //     console.log('FormData: ', FormData);
    //   }
    // })
  }
  
  const submitButton = document.querySelector('.cart__button');
  
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    collectData();
    colorField();
  });
    
}
