function render() {
  var array = [];

  array = [
    "総武線",
    "京浜東北線"
    ]

  for(let i = 0; i < array.length; i++) {
    $('select').append('<option value="' + array[i] +'">' + array[i] + '</option>');
  }
}

render();


$('#button').click(function(){
  var val = $('select').val();
  var escaped_val = encodeURI(val);
  
  var tw = 'https://twitter.com/search?f=tweets&vertical=default&q=' + escaped_val + '&src=typd'
  console.log(escaped_val);
})

