function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  /****** TABS ***************/
  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector),
        animationLine = tabsParent.querySelector('.animationLine');

  function animationSelector() {
    let activeTab = tabsParent.querySelector(activeClass);
    // selector.style.width = styleWidth;
    // selector.style.left = styleLeft;
    animationLine.style.width = activeTab.offsetWidth + 'px';
    animationLine.style.left = activeTab.offsetLeft + 'px';
  }

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove(activeClass.slice(1));
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass.slice(1));
  }

  hideTabContent();
  showTabContent();
  setTimeout(() => {
    animationSelector();
  }, 200);

  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
          animationSelector();
        }
      });
    }
  });
}

export default tabs;