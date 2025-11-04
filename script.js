// ページ読み込み時にロゴを不透明0から100に
window.addEventListener('load', function() {
  const logoImg = document.querySelector('.logo img');
  if (logoImg) {
    logoImg.classList.add('visible');
  }
});




// スクロール時に、要素を順次不透明0から100にしたい要素(おいしさの秘密、お知らせ)の指定
const fadeTargets = document.querySelectorAll('.about-icon, .about-header h2, .title-line, .news-icon, .news-box h2, .news-title-line');


//要素が画面に入ったら、処理する仕組み
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // 不透明化
      observer.unobserve(entry.target);       // 一度見えたら終了(何度もフェードインしない)
    }
  });
}, {
  threshold: 0.1 // 要素が10%見えたら
});


// それぞれの要素を、スクロールで見えたら(範囲に入ったら)検知し、処理される
fadeTargets.forEach(el => observer.observe(el));
