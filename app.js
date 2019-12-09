var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 50,
  autoStart: true,
  cursor: '█',
  strings: []
});

typewriter
  .typeString('Hello, my name is Jure Filipič.')
  .pauseFor(1000)
  .typeString('<br />')
  .pauseFor(300)
  .typeString('<br />')
  .pauseFor(500)
  .typeString('I work for <strong><a href="https://gigodesign.com" class="underline">[GIGODESIGN]</a></strong> as a media designer, junior web developer, and system administrator.')
  .pauseFor(500)
  .typeString('<br />')
  .pauseFor(600)
  .typeString('<br />')
  .pauseFor(800)
  .typeString('I am an experienced Media Designer with over 20 years of history working in the design industry.')
  .pauseFor(600)
  .typeString(' With excellent knowledge of OS X and Linux systems, networks, hosting')
  .pauseFor(900)
  .typeString(' and basic knowledge of HTML, CSS, PHP, and JavaScript.')
  .pauseFor(800)
  .typeString('<br />')
  .pauseFor(500)
  .typeString('<br />')
  .pauseFor(300)
  .typeString('Find me online: <br />')
  .pauseFor(1000)
  .typeString('<a href="mailto:jure@kreativc.si" class="underline" target="_blank">Email me</a> <br />')
  .typeString('<a href="https://www.linkedin.com/in/jure-filipic" class="underline" target="_blank">LinkedIn</a> <br />')
  .pauseFor(1000)
