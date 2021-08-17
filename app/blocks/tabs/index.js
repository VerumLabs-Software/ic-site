const {$} = window;

export default function tabs() {
  $(document).on("click", "[data-tab-target]", function (e) {
    e.preventDefault();

    const button = $(this);
    const targetTab = button.data("tab-target");
    const targetTabGroup = button.data("tab-target-group");
    const targetTabGroupMembers = $(document).find(
      `[data-tab-target-group="${targetTabGroup}"]`,
    );
    const tab = $(document).find(`[data-tab="${targetTab}"]`);
    const tabGroup = tab.data("tab-group");
    const tabGroupMembers = $(document).find(`[data-tab-group="${tabGroup}"]`);
    const activeClass = "is-active";

    targetTabGroupMembers.each((_, _tab) => $(_tab).removeClass(activeClass));
    button.addClass(activeClass);
    tabGroupMembers.hide().removeClass(activeClass);

    tab.show(0, function () {
      $(this).addClass(activeClass);
    });
  });
}
