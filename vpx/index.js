const links = document.querySelectorAll('.vpx-link button');

for (const link of links) {
    link.onmouseenter = (event) => {
        document.querySelector('#vpx-sound').play();
    
        for (const sublink of links) {
            if (!(link == sublink)) {
                sublink.style.opacity = 0.6;
                sublink.style.filter = 'blur(1px)';
            }
        }
    };

    link.onmouseleave = (event) => {
        document.querySelector('#vpx-sound').play();
    
        for (const sublink of links) {
            sublink.style.opacity = 1;
            sublink.style.filter = 'none';
        }
    };
}