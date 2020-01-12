$("a").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});

function change_onglet(name){
  document.getElementById('onglet_'+anc_onglet).className = 'onglet_0 onglet';
  document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
  anc_onglet = name;
}

var anc_onglet = 'profil';
change_onglet(anc_onglet);
