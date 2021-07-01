$('.ask').on('click',function (e){
    e.preventDefault();
    $('.ask').not($(this)).removeClass('active')
    $('.answer').not($(this).next()).slideUp(800)
    $(this).toggleClass('active').next().stop().slideToggle(800)
    
})

$('button[data-filter]').click(function () {
    
    let attr = $(this).attr('data-filter');
    if(attr === 'all'){
        $('div[data-filter').stop().slideDown(800)
    }else{
        $('div[data-filter]').stop().slideUp(800)
    }
    
    $(`div[data-filter=${attr}]`).stop().slideDown(800)
})

function writing(element) {
    let inner = element.html(),
    fullText = '',
    letterCount = 0,
    interval = setInterval(() => {
        fullText += inner[letterCount]
        element.html(fullText)
        letterCount++;
        if (fullText === inner) {
            clearInterval(interval)
        }
    }, 200);
}
function writing2(element) {
    let inner = element.html(),
    fullText = '',
    letterCount = 0,
    interval = setInterval(() => {
        fullText += inner[letterCount]
        element.html(fullText)
        letterCount++;
        if (fullText === inner) {
            clearInterval(interval)
        }
    }, 100);
}
writing($('h1'));
writing2($('.p'));

let read = document.querySelector('.read-more')
$('.read-more').click(function(){
    $('.text-hidden').toggleClass('hidden')
    if (read.innerHTML == 'Hidden') {
        read.innerHTML = 'Read More'
    }else{
        read.innerHTML = 'Hidden'
    }
})

