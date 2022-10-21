import $ from 'jquery';

export default function () { 
  let pattern = /^[a-z0-9_-]+@[a-z0-9_-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
  let mail = $('.form__input-field--email');
  // let statusMessage = $('.form__valid');

  mail.blur(function () {
    if (mail.val() != '') {
      if (mail.val().search(pattern) == 0) {
        // statusMessage.text('Адрес почты указан корректно');
        // $('.form__btn-submit').attr('disabled', false);
        // statusMessage.css('visibility', 'visible');
        // statusMessage.removeClass('error');
        // mail.addClass('success');
      } else {
        // statusMessage.text('Адрес почты указан неверно');
        // $('.form__btn-submit').attr('disabled', true);
        // statusMessage.css('visibility', 'visible');
        mail.addClass('form__input-field--error');
      }
    } else {
      // $('.form__valid').text('Поле e-mail не должно быть пустым');
      // $('.form__btn-submit').attr('disabled', true);
      // statusMessage.css('visibility', 'visible');
      // statusMessage.addClass('error');
    }
  });
}