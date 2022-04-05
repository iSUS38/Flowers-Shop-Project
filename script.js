$(function(){
    $(".myDropDown-a-1").click(function(){
        if($(".myDropDown-list-1").is(":visible")){
            $(".myDropDown-list-1").hide();
        } else{
            $(".myDropDown-list-1").show();
        }
    });
    $(".myDropDown-a-2").click(function(){
        if($(".myDropDown-list-2").is(":visible")){
            $(".myDropDown-list-2").hide();
        } else{
            $(".myDropDown-list-2").show();
        }
    });

    var str = "";
    var sum = 0;
    var itemsCount = 0;
    $(".product-icons-group span").prepend(sum);
    $(".cart div").text("0");
    $(".add-to-cart span").click(function(){
        if($(this).parent().hasClass("roses-price-str")){
            str = $(".roses-price-str p:last").text().match(/[0-9]/g).join("");
            fill_sumAndCart();
        } else if($(this).parent().hasClass("price-pionRoses-str")){
            str = $(".price-pionRoses-str p:last").text().match(/[0-9]/g).join("");
            fill_sumAndCart();
        } else if($(this).parent().hasClass("loveBoucquet-price")){
            str = $(".loveBoucquet-price p:last").text().match(/[0-9]/g).join("");
            fill_sumAndCart();
        } else if($(this).parent().hasClass("busketBoucquet-price")){
            str = $(".busketBoucquet-price p:last").text().match(/[0-9]/g).join("");
            fill_sumAndCart();
        } else{
            str;
        }
    });

    function fill_sumAndCart(){
        var price = Number(str);
        sum += price;
        itemsCount++;
        $("#sum-value").text(sum).append(" грн");
        $(".cart div").text(itemsCount);
    }

    var wishListCount = 0;
    $(".wishlist-circle").text(wishListCount);
    $(".wishlist-icon img").click(function(){
        wishListCount++;
        $(this).attr("src", "icons/clicked-wishlist.png");
        $(".wishlist-circle").text(wishListCount);
    });

    $(".city-dropdown a").click(function(){
        $(this).addClass("city-item");
        var cityItemText = $(".city-item").text();
        var cityNeedToChangeText = $(".cityNeedToChange").text();   
        $(".cityNeedToChange").text(cityItemText);
        $(".city-item").text(cityNeedToChangeText);
        $(this).removeClass("city-item");
    });
    $(".language-dropdown a").click(function(){
        $(this).addClass("language-item");
        var languageItemText = $(".language-item").text();
        var languageNeedToChangeText = $(".languageNeedToChange").text();   
        $(".languageNeedToChange").text(languageItemText);
        $(".language-item").text(languageNeedToChangeText);
        $(this).removeClass("language-item");
    });
    $(".currency-dropdown a").click(function(){
        $(this).addClass("currency-item");
        var currencyItemText = $(".currency-item").text();
        var currencyNeedToChangeText = $(".currencyNeedToChange").text();   
        $(".currencyNeedToChange").text(currencyItemText);
        $(".currency-item").text(currencyNeedToChangeText);
        $(this).removeClass("currency-item");
    });

    $(window).ready(function(){
        var element;
        if($(window).width() <= 1024){
            element = $("#sum-value").detach();
            element.appendTo("#divValueAappendTo");
        } else{
            element = $("#sum-value").detach();
            element.appendTo("#divSum-Value");
        }
    });

    $(".mobile-switcher-icon-1").click(function(){
        $(this).css("background-color", "#956D84")
        $(".mobile-switcher-icon-2, .mobile-switcher-icon-3").css("background-color", "white");
        $("#image2Mobile, #image3Mobile").hide(500);
        $("#image1Mobile").show(500);
        $("#text-for-mobile-images").html("Скидки <span>-6%</span> на все<br> букеты по предзаказу<br> <span>на 8 марта</span>").css({"right": "7%"});
    });
    $(".mobile-switcher-icon-2").click(function(){
        $(this).css("background-color", "#956D84");
        $(".mobile-switcher-icon-1, .mobile-switcher-icon-3").css("background-color", "white");
        $("#image1Mobile").hide(500);
        $("#image3Mobile").hide(500);
        $("#image2Mobile").show(500);
        $("#text-for-mobile-images").html("При заказе цветов<br> <span>в коробке,</span> конфеты<br> <span>Rafaello в подарок</span> к<br> закзазу").css({"right": "40%"});
        $("#text-for-mobile-images span").css("color", "#956D84");
    });
    $(".mobile-switcher-icon-3").click(function(){
        $(this).css("background-color", "#956D84");
        $(".mobile-switcher-icon-1, .mobile-switcher-icon-2").css("background-color", "white");
        $("#image1Mobile").hide(500);
        $("#image2Mobile").hide(500);
        $("#image3Mobile").show(500);
        $("#text-for-mobile-images").html("<span>Фирменная</span><br> карточка<br> с Вашим <span>текстом</span>").css({"right": "47%", "text-align": "left"});
        $("#text-for-mobile-images span").css("color", "#956D84");
    });

    $("#allBouquets_header").click(function(){
        if($("#allBouquets").is(":visible")){
            $(".mobile-menu img").eq(1).attr("src", "icons/Vector-rigth.png");
            $("#allBouquets").hide(600);
        } else{
            $(".mobile-menu img").eq(1).attr("src", "icons/Vector-down.png");
            $("#allBouquets").show(600);
        }
    });

    $("#roses-header").click(function(){
        if($("#roses").is(":visible")){
            $(".mobile-menu img").eq(2).attr("src", "icons/Vector-rigth.png");
            $("#roses").hide(600);
        } else {
            $(".mobile-menu img").eq(2).attr("src", "icons/Vector-down.png");
            $("#roses").show(600);
        }
    });

    $("#flowersInBoxes-header").click(function(){
        if($("#flowersInBoxes").is(":visible")){
            $(".mobile-menu img").eq(3).attr("src", "icons/Vector-rigth.png");
            $("#flowersInBoxes").hide(600);
        } else {
            $(".mobile-menu img").eq(3).attr("src", "icons/Vector-down.png");
            $("#flowersInBoxes").show(600);
        }
    });

    function mouseenter(){
        $(this).css({"background-color": "#956D84", "color": "white", "font-weight": "700"});
    }
    function mouseleave(){
        $(this).css({"background-color": "white", "color": "#333333", "font-weight": "300"});
    }
    $(".lists li").hover(mouseenter, mouseleave);
    $(".myDropDown-list-1 li").hover(mouseenter, mouseleave);
    $(".myDropDown-list-2 li").hover(mouseenter, mouseleave);

    $("#mobile-menu").click(function(){
        $(location).attr("href", "mobile_menu.html");
    });
    
    $("#close-menu").click(function(){
        $(location).attr("href", "index.html");
    });

    let windowWidth = $(window).outerWidth();
    if(windowWidth <= 1024){
        $(".footer-list h3").click(function(){
            let ul = $(this).next();
            if(ul.is(":visible")){
                ul.hide(500);
                $(this).filter(".vector").css("background-image", "url(icons/footer-vector-right.png)");
            } else {
                ul.show(500);
                $(this).filter(".vector").css("background-image", "url()");
            }
        });
    }
});