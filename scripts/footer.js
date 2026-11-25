{
  const footer = document.createElement('footer');

  const copyright = document.createElement('p');
  copyright.textContent = `© ${new Date().getFullYear()} Miguel Condori, Utah, USA`;

  const lastModified = document.createElement('p');
  lastModified.textContent = `Last Modification: ${document.lastModified}`;

  footer.append(copyright, lastModified);
  document.body.appendChild(footer);
}
