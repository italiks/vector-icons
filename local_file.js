class LocalFileDelegate extends ExtensionDelegate {
  extractTextContent(node) {
    return node.textContent;
  }

  onPanelCreated(panel) {
    var node = document.querySelector('pre');
    node.insertBefore(panel, node.firstChild);
  }
};

setUpExtension('pre', new LocalFileDelegate());
