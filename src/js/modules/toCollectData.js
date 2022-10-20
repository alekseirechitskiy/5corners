export function toCollectData() {
  let FormData = {
    address: '',
    name: '',
    phone: '',
    email: '',
    package: '',
    comment: ''
  }

  const collectData = () => {
    const userAddress = document.querySelector('.ymaps-2-1-79-searchbox-input__input').value;
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

  const checkAddressField = () => {
    const userAddressField = document.querySelector('#userAddress');
    const userAddressValue = document.querySelector('#userAddress').value;
    const yaUserAddressField = document.querySelector('.ymaps-2-1-79-searchbox-input__input');
    const yaUserAddressValue = document.querySelector('.ymaps-2-1-79-searchbox-input__input').value;

    if (yaUserAddressValue === '') {
      yaUserAddressField.classList.add('form__input-field--error');

    } else {
      userAddressField.classList.remove('form__input-field--error');
      yaUserAddressField.classList.remove('form__input-field--error');
    }
  }

  const colorField = () => {
    const result = document.querySelectorAll('.form__input-field--required');

    for (let i = 0; i < result.length; i++){
      if (result[i].value === '') {
        result[i].classList.add('form__input-field--error');
      } else {
        result[i].classList.remove('form__input-field--error');
      }
    }
  }

  const colorPhone = () => {
    const phone = document.querySelector('#userPhone');
    if (phone.value.length !== 18) {
      phone.classList.add('form__input-field--error');
    } 
  }

  const colorSelect = () => {
    const result = document.querySelector('.form__input-legend-select');
    const optionValue = document.querySelector('.select2-selection__rendered');
    const selectPlaceholder = document.querySelector('.select2-container--default .select2-selection--single .select2-selection__placeholder');
    const selectBorderBottom = document.querySelector('.select2-container--default .select2-selection--single');

    result.classList.remove('form__input-legend-select--visible');
    selectBorderBottom.classList.remove('select2-custom-style-border');
    // selectPlaceholder.classList.remove('select2-custom-style-placeholder');

    if (optionValue.title === 'Тип упаковки') { 
      selectBorderBottom.classList.add('select2-custom-style-border');
      selectPlaceholder.classList.add('select2-custom-style-placeholder');
      result.classList.add('form__input-legend-select--visible');
    } 
  }

  const showFormData = () => {
    if (FormData.address === '' ||
        FormData.name === '' ||
        FormData.phone === '' ||
        FormData.email === '' ||
        FormData.package === '') {
      alert('Заполните обязательные поля');
    } else {
      console.log('FormData: ', FormData);
    }
  }
  
  const submitButton = document.querySelector('.cart__button');
  
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    collectData();
    colorField();
    colorPhone();
    colorSelect();
    checkAddressField();
    showFormData();
  });
}
