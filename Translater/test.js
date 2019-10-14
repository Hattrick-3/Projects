window.onload = function() {

  var req = new XMLHttpRequest();
  var req2 = new XMLHttpRequest();

  var API_KEY = 'trnsl.1.1.20190717T152405Z.b8b9a3867c3ecc83.ab28ef9da46187148344301585c4fc3224384269';
  var url_langs = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs';
  url_langs += '?key=' + API_KEY;
  url_langs += '&ui= ru';
  var text = document.querySelector('.input_text');
  var lang_text = document.querySelector('.select_lang_txt');
  var lang_tr = document.querySelector('.select_lang_tr');
  var btn = document.querySelector('button')
  var translate = document.querySelector('.output_text');

  function getLangs() {
    var response = JSON.parse(req2.response);
    var langs = response.langs;
    var arr_key_langs = Object.entries(langs);

    for (var i = 0; i < arr_key_langs.length; i++) {
      var option = document.createElement('option');
      option.innerHTML = arr_key_langs[i][1];
      option.value = arr_key_langs[i][0];

      var clone_option = option.cloneNode(true);
      lang_text.appendChild(option);
      lang_tr.appendChild(clone_option);
    }
  }
  req2.addEventListener('load', function () {
    getLangs();
  });
  req.addEventListener('load', function () {
    var response = JSON.parse(req.response); // парсим его из JSON-строки в JavaScript-объект
    console.log(response);
    if (response.code !== 200) {
      translate.value = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
      return;
    }

    if (response.text.length === 0) {
      translate.value = 'К сожалению, перевод для данного слова не найден';
      return;
    }

    translate.value = response.text[response.text.length-1]; // вставляем его на страницу

  });

  btn.addEventListener('click', function() {
    var value = text.value;
    var key1 = document.querySelector('.select_lang_txt').value;
    var key2 = document.querySelector('.select_lang_tr').value;
    var url_translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    url_translate += '?key=' + API_KEY; // добавляем к запросу ключ API
    url_translate += '&text=' + value; // текст для перевода
    url_translate += '&lang=' + key1 + '-' + key2; // направление перевода
    req.open('get', url_translate);
    req.send();
  })
  req2.open('get', url_langs);
  req2.send();

}
