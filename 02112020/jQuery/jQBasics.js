/*
    jQuery
        purpose of jQuery is to make it much easier to use JavaScript on your website.
    Features:
        ● HTML/DOM manipulation
        ● CSS manipulation
        ● HTML event methods
        ● Effects and animations
        ● AJAX
        ● Utilities
    Syntax:
        $(selector).action() 
            $ : define/access jQuery
            selector: query of find HTML elements
            action: jQuery actions to perform on elements 
*/

/*
    Document Ready Events:
        prevent any jQuery code from running before the document is finished loading

    Syntax:
        $(document).ready(function(){...})
                    or
        $(function(){...})
*/

$(()=>{
    let elementSelector = $('p');
    let idSelector = $('#heading')
    let classSelector = $('.firstPara')

    let output = $('#output')
    
    function print(val){
        let li = document.createElement('li');
        $(li).html(val).appendTo(output);
    }

    console.log(idSelector)
    console.log(classSelector)
/*
    Common Events:
        Mouse Events:
            click
            dblclick
            mouseenter
            mouseleave
        KeyBoard Events:
            keypress
            keydown
            keyup
        Form Events:
            submit
            change
            focus
            blur
        Document/Window Events:
            load
            resize
            scroll
            unload
*/

//event methods
    $(elementSelector).click(function(){
        print($(this))
    })

    $(idSelector).dblclick(function(){
        print($(this))
    })
//on
    $(classSelector).on({
        mouseover: function(){
            print('Entered First Paragraph element')
        },
        mouseleave: function(){
            print('Left First Paragraph element')
        }
    })    
//Add css
    $('p').css({"cursor":"pointer"})
    $(idSelector).css("cursor","pointer")
    $(idSelector).hover(function(){
        $(this).css({'font-size':'42px','transition':'font-size 1s linear'})
    }, function(){
        $(this).css({'font-size':'32px'})
    })
    $('#flip').css("cursor","pointer");
//jQuery Effects
    $("#flip").on({
        click: function(){
            $("#panel").slideDown("slow");
          },
        dblclick: function(){
            $("#panel").slideUp("slow");
          }
    })   
})

