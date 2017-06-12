require.config({
    baseUrl:"libs/vendor",
    paths:{
        "jquery":"jquery.min"
    }
})

require(['jquery'],function($){
    var $helloworld = $('body').append($('<h1>Hello World!</h1>'))
    setTimeout(()=>{
        $helloworld.append($('<h2>Use jQuery & requireJS!</h2>'))
    },2000)
})