import './styles.css';

const app = document.getElementById('app');
if (app) {
  app.innerHTML = `
              <h1>Hello Vanilla TS!</h1>
              <div>
                Playground
     
              </div>`;

  logHello('helloo!');
}

function logHello(str: string) {
  console.log(str);
}
