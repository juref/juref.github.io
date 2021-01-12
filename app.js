var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 20,
  autoStart: true,
  cursor: '█',
  strings: []
});

typewriter
  .typeString('Hello, my name is Jure Filipič.')
  .pauseFor(500)
  .typeString('<br />')
  .pauseFor(200)
  .typeString('<br />')
  .pauseFor(200)
  .typeString('I work for <strong><a href="https://gigodesign.com" class="underline">[GIGODESIGN]</a></strong> as a web developer, system administrator and media designer.')
  .pauseFor(200)
  .typeString('<br />')
  .pauseFor(400)
  .typeString('<br />')
  .pauseFor(400)
  .typeString('I am an experienced Media Designer with over 20 years of history working in the design industry.')
  .pauseFor(200)
  .typeString(' With excellent knowledge of OS X and Linux systems, networks and hosting')
  .pauseFor(500)
  .typeString(', and solid knowledge of Python, JavaScript, PHP, CSS and HTML. I am also familiar with frameworks Laravel and Vue, database MySql, MongoDB, and package managers such as  NPM, Yarn, Homebrew, etc.')
  .pauseFor(400)
  .typeString('<br />')
  .pauseFor(200)
  .typeString('<br />')
  .pauseFor(100)
  .typeString('You can find me online: <br />')
  .pauseFor(500)
  .typeString('<a href="mailto:jure@kreativc.si" class="underline" target="_blank">Email me</a> <br />')
  .typeString('<a href="https://www.linkedin.com/in/jure-filipic" class="underline" target="_blank">LinkedIn</a> <br />')
  .pauseFor(500)
