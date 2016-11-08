const removeVimeoExtras = () => {
  let player = document.getElementsByClassName('video-in-mast')[0].contentDocument;

  player.addEventListener('DOMContentLoaded', () => {
    let sidedock = player.getElementsByClassName('sidedock')[0];
    let logo = player.getElementsByClassName('logo')[0];

    sidedock.addClass('hidden');
    logo.addClass('hidden');
  });
};

export default removeVimeoExtras;
