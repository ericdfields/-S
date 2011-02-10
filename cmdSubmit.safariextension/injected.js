$('textarea,input,select').keydown(function(e) {
  if (e.metaKey && e.keyCode == 83) {
    e.preventDefault()
    $('*:focus').parents('form').submit()
  }
})