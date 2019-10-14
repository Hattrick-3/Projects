window.main = (function(lib){
  var text = document.querySelector('input');
  var ol = document.querySelector('ol');
  var btn = document.querySelector('button');
  var body = document.querySelector('body');

  function create_clearAllBtn(){
    var clearAllBtn = document.querySelector('.btn_clearAll');
    if(!clearAllBtn){
      clearAllBtn = document.createElement('p');
      clearAllBtn.innerHTML =
       '<button class = "btn_clearAll"> Удалить все</button>';
        body.insertBefore(clearAllBtn, ol);
        console.log(clearAllBtn);
        clearAllBtn.addEventListener('click', function(){
        while (ol.firstChild) {
          ol.firstChild.remove();
        };
        body.removeChild(clearAllBtn);
      })
    }
  }
  function del_clearAllBtn(){
      var clear_AllBtn = document.querySelector('p');
      if(clear_AllBtn){
        var all_li = document.querySelectorAll('li');
        if(all_li.length == 0){
          body.removeChild(clear_AllBtn);
        }
      }
  }

  btn.addEventListener('click', function(){
    var value = text.value;

    if (value.trim() == ''){
      alert('Заполните поле!')
    }
    else {
      var li = document.createElement('li');
      li.innerHTML = '<b>'+ value + '</b>' + '.  Дата создания: '+ lib.datetime() +
       '<button class = "btn_clear">  </button>';
      ol.appendChild(li);
      li.addEventListener('click', function(ev){
        if(ev.target.tagName === 'BUTTON' ){
          ol.removeChild(ev.target.parentNode);
        }
        del_clearAllBtn();
      });
    }
   document.querySelector('input').value = '';
      create_clearAllBtn();
  });

  ol.addEventListener('click', function(ev){
    ev.target.classList.toggle('text-decoration');
  });

})(window.lib);
