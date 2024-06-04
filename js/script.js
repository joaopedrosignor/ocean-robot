const observer = new IntersectionObserver(entries =>{
    Array.from(entries.forEach(entry => {
        if(entry.intersectionRatio>=1){
            entry.target.classList.add("init-hidden-off")
        }
    }))    
},{
    threshold: 1
})
Array.from(document.querySelectorAll(".init-hidden")).forEach( element => {
    observer.observe(element)
})

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('.conteudo');

        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var positionFromTop = section.getBoundingClientRect().top;
            var positionFromBottom = section.getBoundingClientRect().bottom;

            if (positionFromTop <= window.innerHeight / 2 && positionFromBottom >= window.innerHeight / 2) {
                section.classList.add('highlight-p1', 'highlight-p2');
            } else {
                section.classList.remove('highlight-p1', 'highlight-p2');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('.conteudoPublico');

        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var positionFromTop = section.getBoundingClientRect().top;
            var positionFromBottom = section.getBoundingClientRect().bottom;

            if (positionFromTop <= window.innerHeight / 2 && positionFromBottom >= window.innerHeight / 2) {
                section.classList.add('publico-highlight-p1', 'publico-highlight-p2','visible');
            } else {
                section.classList.remove('publico-highlight-p1', 'publico-highlight-p2','visible');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('.conteudoAjuda');

        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var positionFromTop = section.getBoundingClientRect().top;
            var positionFromBottom = section.getBoundingClientRect().bottom;

            if (positionFromTop <= window.innerHeight / 2 && positionFromBottom >= window.innerHeight / 2) {
                section.classList.add('ajuda-highlight-p', 'ajuda-highlight-ul');
            } else {
                section.classList.remove('ajuda-highlight-p', 'ajuda-highlight-ul');
            }
        }
    });
});
document.addEventListener('scroll', function() {
    var fixedText = document.getElementById('texto-fixo');
    var sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            var bgColor = window.getComputedStyle(section).backgroundColor;
            var rgb = bgColor.match(/\d+/g);
            if (rgb[0] == 255 && rgb[1] == 255 && rgb[2] == 255) {
                // Se a cor de fundo for branca
                fixedText.style.color = 'black';
            } else {
                // Qualquer outra cor de fundo
                fixedText.style.color = 'white'; 
            }
        }
    });
});