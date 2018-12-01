// Set the appropriate color to the button.
chrome.storage
  .sync
  .get('color', (data) => {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

const colorChangeBtn = document.getElementById('changeColor');

colorChangeBtn.onclick = (element) => {

  let color = element.target.value;

  // Change the background color to be the same as the button color.
  chrome.tabs
    .query(
      {active: true, currentWindow: true},
      (tabs) => chrome.tabs
        .executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'}
        )
    );
};
