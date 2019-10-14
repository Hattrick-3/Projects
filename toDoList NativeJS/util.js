window.lib = (function(){
  var datetime = function(){
    var d = new Date();
    var hours = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var date = d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
   return(date + '.' + month + '.' +
        + year + ", " + hours + ':' + min + ':' + sec);
  };
  return {
    datetime
  };
})();
