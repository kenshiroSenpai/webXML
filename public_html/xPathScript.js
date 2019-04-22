window.onload = init;

// Detect the buttons and display the table.
function init() {
    displayTable();
    document.getElementById("textValue").value = "";
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");
    var btn9 = document.getElementById("btn9");
    var btn10 = document.getElementById("btn10");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            btn1.addEventListener("click", function () {
                showTitle(xhttp.responseXML);
            });
            btn2.addEventListener("click", function () {
                showPrice(xhttp.responseXML);
            });
            btn3.addEventListener("click", function () {
                showPriceGreaterThan50(xhttp.responseXML);
            });
            btn4.addEventListener("click", function () {
                showPlatformWithTitle(xhttp.responseXML);
            });
            btn5.addEventListener("click", function () {
                showYearGreaterThan2017(xhttp.responseXML);
            });
            btn6.addEventListener("click", function () {
                showLast(xhttp.responseXML);
            });
            btn7.addEventListener("click", function () {
                showPs4Game(xhttp.responseXML);
            });
            btn8.addEventListener("click", function () {
                showTextValue(xhttp.responseXML);
            });
            btn9.addEventListener("click", function () {
                showCategory(xhttp.responseXML);
            });
            btn10.addEventListener("click", function () {
                showDelevoper(xhttp.responseXML);
            });
        }
    };
    xhttp.open("GET", "videogame.xml", true);
    xhttp.send();

    btn10.addEventListener("click", loadPlatformTitle);
}
// Function to load the table.
function loadTable(filename) {
    if (window.ActiveXObject)
    {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } else
    {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    try {
        xhttp.responseType = "msxml-document";
    } catch (err) {
    } // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
}
// Load the data and show the table.
function displayTable() {
    xml = loadTable("videogame.xml");
    xsl = loadTable("index.xsl");
    if (window.ActiveXObject || xhttp.responseType === "msxml-document")
    {
        ex = xml.transformNode(xsl);
        document.getElementById("table").innerHTML = ex;
    }
// code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument)
    {
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("table").appendChild(resultDocument);
    }
}

function showTitle(xml) {
    var txt = "";
    path = "/videogame/game/title";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br><br>";
            result = nodes.iterateNext();
        }
    } else if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
    }
    document.getElementById("title").innerHTML = "Title";
    document.getElementById("titleContent").innerHTML = txt;
}
function showPrice(xml) {
    var txt = "";
    path = "/videogame/game/price";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br><br>";
            result = nodes.iterateNext();
        }
    } else if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
    }
    document.getElementById("price").innerHTML = "Prices";
    document.getElementById("priceContent").innerHTML = txt;
}

function showPriceGreaterThan50(xml) {
    var txt = "";
    path = "/videogame/game[price>50]/title | /videogame/game[price>50]/price";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br><br>";
            result = nodes.iterateNext();
        }
    } else if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
    }
    document.getElementById("priceGreaterThan50").innerHTML = "Prices > 50";
    document.getElementById("priceContent50").innerHTML = txt;
}

function showPlatformWithTitle(xml) {
    var txt = "";
    path = "/videogame/game/platform | /videogame/game/title";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br><br>";
            result = nodes.iterateNext();
        }
    } else if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br><br>";
        }
    }
    document.getElementById("platformTitle").innerHTML = "Platform and title";
    document.getElementById("platformTitleContent").innerHTML = txt;
}

function showYearGreaterThan2017(xml) {
    var txt = "";
    path = "/videogame/game[year>2017]/title";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br><br>";
            result = nodes.iterateNext();
        }
    } else if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br><br>";
        }
    }
    document.getElementById("yearGreaterThan2017").innerHTML = "Year > 2017";
    document.getElementById("yearGreaterThan2017Content").innerHTML = txt;
}

function showLast(xml) {
    var txt = "";
    path = "/videogame/game[last()]/title";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br><br>";
            result = nodes.iterateNext();
        }
    } else if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br><br>";
        }
    }
    document.getElementById("last").innerHTML = "Last one";
    document.getElementById("lastContent").innerHTML = txt;
}

function showPs4Game(xml) {
    var txt = "";
    path = "/videogame/game[platform='Playstation4']/title";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br><br>";
            result = nodes.iterateNext();
        }
    } else if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br><br>";
        }
    }
    document.getElementById("ps4Game").innerHTML = "Last one";
    document.getElementById("ps4GameContent").innerHTML = txt;
}

function showTextValue(xml) {
    var txt = "";
    var textValue = document.getElementById("textValue").value;
    path = "/videogame/game/title[text() = '" + textValue + "']";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br><br>";
            result = nodes.iterateNext();
        }
    } else if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br><br>";
        }
    }
    document.getElementById("textValueTitle").innerHTML = "Game";
    document.getElementById("textValueContent").innerHTML = txt;
}

function showCategory(xml) {
    var txt = "";
    path = "/videogame/game/@category";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.nodeValue + "<br><br>";
            result = nodes.iterateNext();
        }
    } else if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br><br>";
        }
    }
    document.getElementById("showCategory").innerHTML = "Category";
    document.getElementById("showCategoryContent").innerHTML = txt;
}

function showDelevoper(xml) {
    var txt = "";
    path = "/videogame/game/developer";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br><br>";
            result = nodes.iterateNext();
        }
    } else if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br><br>";
        }
    }
    document.getElementById("textDeveloper").innerHTML = "Developer";
    document.getElementById("textDeveloperContent").innerHTML = txt;
}


