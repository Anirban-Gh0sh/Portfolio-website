// #typed js code 
var typed = new Typed('#element', {
  strings: ['Software Engineer.','Java Developer.', ' Front End Developer.',' Web Designer.','Software Engineer.','Java Developer.', ' Front End Developer.',' Web Designer.','Software Engineer.','Java Developer.', ' Front End Developer.',' Web Designer.'],
typeSpeed: 70,
});

//menu down menu button event code
const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu-id');
    
toggleButton.addEventListener('click', function() 
{
  // alert("under construction");
  if (menu.style.display === 'none') 
  {
    menu.style.display = 'block';
  }
  else 
  {
    menu.style.display = 'none';
  }
});

  