// DOM
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// pathname
console.log("pathname: " + document.location.pathname);

// head icindeki bilgiler
console.log("head: " + document.head)

// body icindeki bilgiler
console.log("Body: " + document.body)

// url bilgisi
console.log("Url: " + document.URL)
console.log("baseUri: " + document.baseURI)


// document icerisinde style bilgilerini degistirmek:
// css bilginizle birlikte style yapisi uzerinde duzenlemeler yapabilirsiniz..
document.body.style.backgroundColor = "aqua"