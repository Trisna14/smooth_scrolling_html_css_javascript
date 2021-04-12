const btn_scroll = document.querySelectorAll('.scroll-page');

btn_scroll.forEach (btn => {

    btn.addEventListener ('click', event_btn => {

        // console.log(event_btn.target.getAttribute('href'))
        const href_value = event_btn.target.getAttribute('href');

        const gongTo_href = document.querySelector(href_value);

        window.scroll ({
            top: gongTo_href.offsetTop - 50,
            behavior: 'smooth'
        });
        
        // scroll-behavior: smooth;

        // offsetTop -> menentukan jarak elmen window dari atas ke elemen html
        console.log(gongTo_href.offsetTop); 

        event_btn.preventDefault(); // turn off href
    });
});
