const textEditor = document.querySelector(".text_editor");

const preview = document.querySelector(".preview");

const downloadButton = document.querySelector(".download");

const burger = document.querySelector('.burger');

const navBar = document.querySelector('header nav');

burger.addEventListener('click', () => {
  navBar.classList.add('open')
  burger.classList.add('cross')
  console.log('Clicked Me!!')
})

const navItems = navBar.querySelectorAll('a').forEach((e) => {
  e.addEventListener('click', ()=>{
    navBar.className = ''
    burger.className = 'burger'
  })
})


const converter = new showdown.Converter({
  extensions: ["table"],
});

const headingButton = document.querySelector(".heading1");

const boldButton = document.querySelector(".bold");

const italicButton = document.querySelector(".italic");

const linkButton = document.querySelector(".link");

showdown.setFlavor("github");

headingButton.addEventListener("click", function () {
  textEditor.value += "\n# Heading(Edit this!!)";
  updatePreview();
});

boldButton.addEventListener("click", () => {
  textEditor.value += "\n**Bold text(Edit this!!)**";
  updatePreview();
});

italicButton.addEventListener("click", () => {
  textEditor.value += "\n***Italic text(Edit this!!)***";
  updatePreview();
});

linkButton.addEventListener("click", () => {
  console.log("clicked link!!");
});

downloadButton.addEventListener("click", () => {
  downloadHtmlFile();
});

function downloadHtmlFile() {

  const titleInput = document.querySelector('.title')

  let title  = titleInput.value ? titleInput.value : "Document"

  let doc = document.implementation.createHTMLDocument(title);

  doc.head.innerHTML +=
    '<link rel="stylesheet" href="https://res.cloudinary.com/dcjfrnxqn/raw/upload/v1613992932/lesscode_kfmptw.css">';
  let docPreview = document.createElement("div");
  docPreview.className = "preview";
  docPreview.innerHTML = preview.innerHTML;
  doc.body.appendChild(docPreview);

  var element = document.createElement("a");

  var finalDoc  = document.createElement('html')
  finalDoc.appendChild(doc.head)
  finalDoc.appendChild(doc.body) 

  var finalDocWrapper = document.createElement('div')
  finalDocWrapper.append(finalDoc)

  console.log(finalDocWrapper.innerHTML)


  element.setAttribute(
    "href",
    "data:text/html;charset=utf-8," + encodeURIComponent(finalDocWrapper.innerHTML)
  );

  element.setAttribute("download", "default");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

textEditor.addEventListener("input", updatePreview);

function updatePreview() {
  var html = converter.makeHtml(textEditor.value);
  console.log(html);
  preview.innerHTML = html;
  document.querySelectorAll("code").forEach((e) => {
    hljs.highlightBlock(e);
    e.classList.add("code_block");
  });
}
