window.addEventListener('load', function () {
    var banner = document.getElementById('document-wrapper')
    if (banner != null) {
        var banners = banner.childNodes;
        if (banners.length > 3) {
            banners[0].parentNode.removeChild(banners[0]);
        }
    }
    var premiumButton = document.getElementById('header-position-handle')?.childNodes[0]?.childNodes[1]?.childNodes[0]?.childNodes[1];
    if (premiumButton != null) {
        premiumButton.parentNode.removeChild(premiumButton);
    }
    var banner_wrappers = Array.from(document.getElementsByClassName('banner-wrapper'));
    if (banner_wrappers != null) {
        banner_wrappers.forEach((banner_wrapper) => {
            banner_wrapper.parentNode.removeChild(banner_wrapper);
        });
    }

    /* Mobile */
    if (window.innerWidth <= 990) {
        var container = document.getElementById('page-container');
        if (container != null) {
            var pages = container.childNodes;
            for (i = 0; i < pages.length; i++) {
                if (pages[i].id == '') {
                    pages[i].parentNode.removeChild(pages[i]);
                }
            }
        }
    }

    try {
        var recomendations = document.getElementById('viewer-recommendations');
        if (recomendations != null) {
            recomendations.parentNode.parentNode.removeChild(recomendations.parentNode);
        }
    } catch (err) {
        console.log(err);
    }
    window.addEventListener('load', function () {
        var banner = document.querySelectorAll('._95f5f1767857')[0]
        banner.remove()

        if (window.innerWidth <= 990) {
            var pages = document.getElementById('page-container').childNodes;
            if (pages != null) {
                for (i = 0; i < pages.length; i++) {
                    if (pages[i].id == '') {
                        pages[i].parentNode.removeChild(pages[i]);
                    }
                }
            }
        }

    });
});
window.addEventListener('load', function () {
    var banner = document.querySelectorAll('._95f5f1767857')[0]
    banner.remove()

    if (window.innerWidth <= 990) {
        var pages = document.getElementById('page-container').childNodes;
        if (pages != null) {
            for (i = 0; i < pages.length; i++) {
                if (pages[i].id == '') {
                    pages[i].parentNode.removeChild(pages[i]);
                }
            }
        }
    }

});