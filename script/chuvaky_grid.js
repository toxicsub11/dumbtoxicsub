  var path_1 = '../media/main/content/chuvaky/1bw.gif';
  var path_2 = '../media/main/content/chuvaky/2bw.gif';
  var path_3 = '../media/main/content/chuvaky/3bw.gif';
  var path_4 = '../media/main/content/chuvaky/4bw.gif';

  function chuvakyGridMaker() {
    var chuvaky_container_grid = '<a href="chuvaky/" class="chuvaky_gif_link" id="chuvaky">';
    chuvaky_container_grid += `<img src="${path_1}" class="chuvaky_gif_img_2 cursor_switch" id="chuvaky_gif_1">`;
    chuvaky_container_grid += `<img src="${path_2}" class="chuvaky_gif_img_2 cursor_switch" id="chuvaky_gif_2"></a><a href="chuvaky/" class="chuvaky_gif_link">`;
    chuvaky_container_grid += `<img src="${path_3}" class="chuvaky_gif_img_2 cursor_switch" id="chuvaky_gif_3">`;
    chuvaky_container_grid += `<img src="${path_4}" class="chuvaky_gif_img_2 cursor_switch" id="chuvaky_gif_4"></a>`;

    // перевірка рєзолюшн екрану
    if (window.innerWidth >= 992) {
      chuvaky_container_grid = '<a href="chuvaky/" class="chuvaky_gif_link" id="chuvaky">';
      chuvaky_container_grid += `<img src="${path_1}" class="chuvaky_gif_img cursor_switch" id="chuvaky_gif_1">`;
      chuvaky_container_grid += `<img src="${path_2}" class="chuvaky_gif_img cursor_switch" id="chuvaky_gif_2">`;
      chuvaky_container_grid += `<img src="${path_3}" class="chuvaky_gif_img cursor_switch" id="chuvaky_gif_3">`;
      chuvaky_container_grid += `<img src="${path_4}" class="chuvaky_gif_img cursor_switch" id="chuvaky_gif_4"></a>`;
    }

    document.getElementById('chuvaky_container').innerHTML = chuvaky_container_grid;
    
    
    addEventListeners();
  }

  function addEventListeners() {
    document.getElementById("chuvaky_gif_1").addEventListener('mouseover', gif1MouseOver);
    document.getElementById("chuvaky_gif_1").addEventListener('mouseout', gif1MouseOut);

    document.getElementById("chuvaky_gif_2").addEventListener('mouseover', gif2MouseOver);
    document.getElementById("chuvaky_gif_2").addEventListener('mouseout', gif2MouseOut);

    document.getElementById("chuvaky_gif_3").addEventListener('mouseover', gif3MouseOver);
    document.getElementById("chuvaky_gif_3").addEventListener('mouseout', gif3MouseOut);

    document.getElementById("chuvaky_gif_4").addEventListener('mouseover', gif4MouseOver);
    document.getElementById("chuvaky_gif_4").addEventListener('mouseout', gif4MouseOut);
  }

  function gif1MouseOver() {
    path_1 = '../media/main/content/chuvaky/1.gif';
    updateImage("chuvaky_gif_1", path_1);
  }

  function gif1MouseOut() {
    path_1 = '../media/main/content/chuvaky/1bw.gif';
    updateImage("chuvaky_gif_1", path_1);
  }

  function gif2MouseOver() {
    path_2 = '../media/main/content/chuvaky/2.gif';
    updateImage("chuvaky_gif_2", path_2);
  }

  function gif2MouseOut() {
    path_2 = '../media/main/content/chuvaky/2bw.gif';
    updateImage("chuvaky_gif_2", path_2);
  }

  function gif3MouseOver() {
    path_3 = '../media/main/content/chuvaky/3.gif';
    updateImage("chuvaky_gif_3", path_3);
  }

  function gif3MouseOut() {
    path_3 = '../media/main/content/chuvaky/3bw.gif';
    updateImage("chuvaky_gif_3", path_3);
  }

  function gif4MouseOver() {
    path_4 = '../media/main/content/chuvaky/4.gif';
    updateImage("chuvaky_gif_4", path_4);
  }

  function gif4MouseOut() {
    path_4 = '../media/main/content/chuvaky/4bw.gif';
    updateImage("chuvaky_gif_4", path_4);
  }

  function updateImage(id, path) {
    document.getElementById(id).src = path;
  }

  window.addEventListener('resize', chuvakyGridMaker);
  window.onload = chuvakyGridMaker; // ініциація коду при старті сторінки