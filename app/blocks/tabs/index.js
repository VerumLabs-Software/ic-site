export default function tabs() {
  const tabTargets = document.querySelectorAll("[data-tab-target]");
  const activeClass = "is-active";

  const removeActiveClass = el => el.classList.remove(activeClass);

  tabTargets.forEach(tabTarget => {
    tabTarget.addEventListener("click", e => {
      e.preventDefault();

      const tabTargetGroupMembers = document.querySelectorAll(
        `[data-tab-target-group="${tabTarget.dataset.tabTargetGroup}"]`,
      );

      const tab = document.querySelector(
        `[data-tab="${tabTarget.dataset.tabTarget}"]`,
      );

      const tabGroupMembers = document.querySelectorAll(
        `[data-tab-group="${tab.dataset.tabGroup}"]`,
      );

      tabTargetGroupMembers.forEach(removeActiveClass);
      tabTarget.classList.add(activeClass);
      tabGroupMembers.forEach(removeActiveClass);
      tab.classList.add(activeClass);
    });
  });
}
