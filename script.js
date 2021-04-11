const btn_scroll = document.querySelectorAll('.scroll-page');

btn_scroll.forEach (btn => {

    btn.addEventListener ('click', event_btn => {

        // console.log(event_btn.target.getAttribute('href'))
        const href_value = event_btn.target.getAttribute('href');

        const gingTo_href = document.querySelector(href_value);

        window.scroll ({
            top: gingTo_href.offsetTop - 50,
            behavior: 'smooth'
        });

        // offsetTop -> menentukan jarak elmen window dari atas ke elemen html
        console.log(gingTo_href.offsetTop); 

        event_btn.preventDefault(); // turn off href
    });
});