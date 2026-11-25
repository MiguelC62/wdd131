
{
const yearSpan = document.querySelector('#currentyear');
const lastModifiedP = document.querySelector('#lastModified');

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModifiedP)
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
}
