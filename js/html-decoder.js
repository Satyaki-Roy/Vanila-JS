const html1 = '<span class="red">hello world</span> <span>hello friend</span>';

const html2 = `<ul>
  <li>Hello Medium!</li>
  <li>Hello Friends!</li>
  <li>Lorem, ipsum dolor.</li>
</ul>`;

// Gets non-tag characters in an HTML -formatted string
function htmlDecoder(htmlChunk) {
  // create a html element
  let decoder = document.createElement("div");
  // add the content to the html element
  decoder.innerHTML = htmlChunk;
  // extract the content from the html element
  console.log(decoder.textContent);
  // return decoder.textContent
}

htmlDecoder(html1);
htmlDecoder(html2);

// expected output //
// 'hello world hello friend'
//   `  Hello Medium!
//   Hello Friends!
//   Lorem, ipsum dolor.`
