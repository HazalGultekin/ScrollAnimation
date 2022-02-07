/* Navbar için animasyon */
const navbar = document.querySelector("nav");

function animation() {
    var controller = new ScrollMagic.Controller(); /* BU scroolMagic içersinde olan birşeydir. Kullnmak için yazmamız gerekir. */

    const t1 = gsap.timeline({ defaults:{ ease:Expo.InOut }}); /* Timeline'da default olanı alıyorum. */

    t1.fromTo(navbar, 1, { y: "-10rem"},{ y:0 }); /* Navbar'da 1 saniyelik gerçekleşsin ve -10 rem'den yani yukarıdan aşağıya gerçekleşsin diyorum */

    t1.fromTo(".banner-text",0.5,  /* banner-text'in sol taraftan gelmesini ve ilk başta görünmüyorken sonradan görünmesini istiyorum */
        { x: "-2rem", opacity:0},
        { x: "0", opacity:1},
        "-=1" );/** Animasyonların hepsini 1 saniyede aynı anda gerçeklrştirir. */

    t1.fromTo(".banner-img",0.5, /* banner-img'nin sağdan gelmesini sağlar. */
        { x:"5rem", opacity:0 },
        { x:"0", opacity:1 }  );

    t1.fromTo(".banner-img img", 0.5, { scale: 1.5 }, {scale:1} ); /* banner-img'nin küçülüp büyümesini sağlar. */



    // about animation
    const t2 = gsap.timeline({ defaults:{ ease:Expo.InOut }});


    t2.fromTo(".about-text",0.5,  { x: "-2rem", opacity:0}, { x: "0", opacity:1} );
    t2.fromTo(".about-img",0.5,  { x:"5rem", opacity:0 },{ x:"0", opacity:1 }  );
    t2.fromTo(".about-img img", 0.5, { scale: 1.5 }, {scale:1} );

    // Srollu belli bir hizaya geldikten sonra çalıştırmak için :
    new ScrollMagic.Scene({
        triggerElement: "#about",// scroll about kısmına geldikten sonra çalışacağını söylemiş oluyoruz.
        triggerHook: 0.5, //about kısmına geldikten 0.5s sonra çalıştırır.
        reverse: false, //animasyonun 1 kere çalışıp durmasını söylemiş oluyoruz.
    })
    .setTween(t2) // t2 için yaptığımızı söylemiş oluyoruz.
    .addTo(controller);



//card animation
const t3 = gsap.timeline({ defaults:{ ease:Expo.InOut }});

t3.fromTo( ".card", 1, { y: "-3rem", opacity:0}, { y:0, opacity:1, stagger:0.3 } );
t3.set(".card", { clearProps: "all" }); //css'te yazdığımız hover efektinin de geçerli olması için böyle yazdık.

new ScrollMagic.Scene({
    triggerElement: "#vid",
    triggerHook: 0.5,
    reverse: false,
})
    .setTween(t3)
    .addTo(controller);
}

animation();