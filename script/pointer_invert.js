  function getPageInfo() {

    var pointer;

    if ((on_target_page === 1)) {
      pointer = '<img src="media/content/nav/youarehere_inverted.svg" class="nav_pointer" id="pointer_music">';
    }

    if ((on_target_page === 0)) {
      pointer = '<img src="media/content/nav/youarehere.svg" class="nav_pointer" id="pointer_shop">';
    }
    return pointer;
  }