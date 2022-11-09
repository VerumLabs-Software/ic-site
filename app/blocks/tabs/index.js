export default function tabs() {
  const tabTargets = document.querySelectorAll("[data-tab-target]");
  const activeClass = "is-active";

  const removeActiveClass = el => el.classList.remove(activeClass);
  const addActiveClass = el => el.classList.add(activeClass);

  tabTargets.forEach(tabTarget => {
    const tabTargetGroupMembers = document.querySelectorAll(
      `[data-tab-target-group="${tabTarget.dataset.tabTargetGroup}"]`,
    );

    const tabs = document.querySelectorAll(
      `[data-tab="${tabTarget.dataset.tabTarget}"]`,
    );

    const tabGroupMembers = document.querySelectorAll(
      `[data-tab-group="${tabs[0].dataset.tabGroup}"]`,
    );

    tabTarget.addEventListener("click", e => {
      e.preventDefault();

      tabTargetGroupMembers.forEach(removeActiveClass);
      tabTarget.classList.add(activeClass);
      tabGroupMembers.forEach(removeActiveClass);
      tabs.forEach(addActiveClass);
    });
  });
}
