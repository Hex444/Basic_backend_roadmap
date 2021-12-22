const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Hex444');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>yo</title>
  </head>
  <body>
      <div class="container">
          <h1>Head</h1>
          <p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, architecto soluta modi pariatur, repudiandae aspernatur ullam illo nostrum incidunt, dolore quisquam tempora magni. Earum modi at ut quam harum omnis in aut dolor veritatis maiores recusandae asperiores est necessitatibus minus, sapiente aliquid rem optio. Sit, itaque! Hic possimus ab dolores sunt fugiat ea. Commodi voluptatem blanditiis necessitatibus molestias delectus facere iusto incidunt veritatis, aspernatur doloribus tempora esse officiis placeat, dolorem labore eum illum accusamus ducimus fugiat magni. Rerum eos modi, cupiditate maxime consectetur dicta ipsum fugiat suscipit delectus, voluptates non eligendi, perspiciatis ex. Sit quam voluptate nobis voluptatum eos? At, nostrum illum? Quos deserunt, ipsam officiis, eos earum cupiditate error pariatur in laudantium reprehenderit ipsa. Ducimus similique perferendis ab! Quam reiciendis quisquam eaque? Atque a optio iusto laborum sequi voluptates, recusandae dicta voluptatum sint! Quae accusantium eveniet, reprehenderit numquam deserunt, dolorem ea corporis eaque esse nesciunt delectus, perferendis consequuntur non nam doloremque fugiat provident harum et eum illo culpa repellendus veritatis maxime. Animi autem dolorum ea magni excepturi possimus molestias exercitationem tempora aut. Fuga impedit delectus, possimus debitis doloribus quo laudantium consequatur praesentium. Aliquam ex distinctio sint deserunt error, maxime consequatur inventore porro suscipit quasi reiciendis sapiente veritatis doloribus itaque unde optio. Perferendis incidunt atque exercitationem accusantium reiciendis nostrum, hic amet facilis vitae sunt error architecto nobis obcaecati quisquam odit unde voluptate voluptatem ipsum quasi veritatis cum rerum. Facilis fugiat consectetur tempora mollitia!</p>
      </div>
      <button id="btn" onclick="togglehide()">Hide</button>
  </body>
  <script>
      function togglehide(){
          para = document.getElementById('para');
          button = document.getElementById('btn');
          if(para.style.display != "none"){
              para.style.display = "none";
              button.innerHTML = 'Unhide'
          }
          else {
              para.style.display = "block";
              button.innerHTML = 'hide'
          }
      }
      let para = document.getElementById('para');
      para.addEventListener('mouseover', function run(){
          console.log('mouse over para');
      })
      para.addEventListener('mouseout', function run(){
          console.log('mouse out of para');
      })
  </script>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
