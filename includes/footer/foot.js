fetch("/zweefvliegen/includes/footer/foot.html")
  .then((response) => response.text())
  .then((html) => {
    html = html.replace("{brand}", brand);
    
    document.getElementById("footer-placeholder").innerHTML = html;
  });
