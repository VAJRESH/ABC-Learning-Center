var default_content = "";

$(document).ready(function () {
  checkURL();
  $("ul li a").click(function (e) {
    checkURL(this.hash);
  });

  //filling in the default content
  default_content = $("#pageContent").html();

  setInterval("checkURL()", 250);
});

var lasturl = "";

function checkURL(hash) {
  if (!hash) hash = window.location.hash;

  if (hash != lasturl) {
    lasturl = hash;
    // FIX - if we've used the history buttons to return to the homepage,
    // fill the pageContent with the default_content
    if (hash == "") $("#pageContent").html(default_content);
    else {
      if (hash == "#products") loadProducts();
      else loadPage(hash);
    }
  }
}

function loadPage(url) {
  url = url.replace("#page", "");

  $("#loading").css("visibility", "visible");

  $.ajax({
    type: "POST",
    url: "load_page.py",
    data: "page=" + url,
    dataType: "html",
    success: function (msg) {
      if (parseInt(msg) != 0) {
        $("#pageContent").html(msg);
        $("#loading").css("visibility", "hidden");
      }
    },
  });
}
let productPrice = [];

function loadProducts() {
  $("#loading").css("visibility", "visible");
  var jsonURL = "products.json";
  $.getJSON(jsonURL, function (json) {
    var imgList = '<ul class="products">';
    $.each(json.products, function (i) {
      productPrice.push(this.price);
      imgList +=
        '<li><img src= "' +
        this.imgPath +
        '"><h3>' +
        this.name +
        '</h3><p class="price" id=' +
        i +
        ">USD " +
        this.price +
        "</p></li>";
    });
    imgList += "</ul>";
    $("#pageContent").html(imgList);
    loadCurrency();
    $("#loading").css("visibility", "hidden");
  });
}

let jsonData;

function loadCurrency() {
  const ulList = document.getElementById("navigation");
  console.log(ulList);
  ulList.removeChild(ulList.lastChild);
  ulList.innerHTML += '<li><select id="dropdownList"></select></li>';

  $.getJSON("currencyData.json", function (res) {
    jsonData = res.data;
    const dropdownList = document.getElementById("dropdownList");
    dropdownList.onchange = handleChange;
    for (let object of jsonData) {
      const opt = createOption(
        object.name,
        object.code,
        object.rate,
        object.code
      );
      dropdownList.append(opt);
    }
  });
}

function createOption(innerText, value, rate, code) {
  const option = document.createElement("option");
  option.innerText = innerText;
  option.symbol = value;
  option.value = code + rate;
  return option;
}

function handleChange(e) {
  console.log(e.target.value, productPrice);

  // separate the code and the conversion rate form the selected option
  const rate = e.target.value.match(/\d+/g)[0];
  const code = e.target.value.match(/[a-zA-Z]+/g)[0];

  const products = document.querySelectorAll(".price");

  products.forEach((product, index) => {
    product.innerHTML = `${code} ${(rate * productPrice[index]).toFixed(2)}`;
  });
}
