function runCode() {
    var content = document.getElementById('sourceCode').value;
    var iframe = document.getElementById('targetCode');
    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
    iframe.document.open();
    iframe.document.write(content);
    iframe.document.close();
    return false;
};