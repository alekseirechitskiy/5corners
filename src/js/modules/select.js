import $ from 'jquery';
import select2 from 'select2';
export default function () {
  $('.form__select').select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Тип упаковки",
  });
};

