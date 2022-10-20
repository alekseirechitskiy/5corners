import all from "jquery-mask-plugin";
import $ from "jquery";

export default function () {
  $('.form__input-field--phone').mask('+0 (000) 000-00-00');
}