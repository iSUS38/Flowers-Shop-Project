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
});

$(function(){
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
});

$(function(){
    var wishListCount = 0;
    $(".wishlist-circle").text(wishListCount);
    $(".wishlist-icon img").click(function(){
        wishListCount++;
        $(this).attr("src", "icons/clicked-wishlist.png");
        $(".wishlist-circle").text(wishListCount);
    });
});

$(function(){
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
});

$(function(){
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
});

$(function(){
    $(".mobile-switcher-icon-1").click(function(){
        $(this).css("background-color", "#956D84")
        $(".mobile-switcher-icon-2, .mobile-switcher-icon-3").css("background-color", "white");
        $("#image2Mobile, #image3Mobile").hide();
        $("#image1Mobile").show();
        $("#text-for-mobile-images").html("Скидки <span>-6%</span> на все<br> букеты по предзаказу<br> <span>на 8 марта</span>")
        .css({"right": "7%"});
    });
    $(".mobile-switcher-icon-2").click(function(){
        $(this).css("background-color", "#956D84");
        $(".mobile-switcher-icon-1, .mobile-switcher-icon-3").css("background-color", "white");
        $("#image1Mobile").hide();
        $("#image3Mobile").hide();
        $("#image2Mobile").show();
        $("#text-for-mobile-images").html("Подарки").css({"right": "60%"});
    });
    $(".mobile-switcher-icon-3").click(function(){
        $(this).css("background-color", "#956D84");
        $(".mobile-switcher-icon-1, .mobile-switcher-icon-2").css("background-color", "white");
        $("#image1Mobile").hide();
        $("#image2Mobile").hide();
        $("#image3Mobile").show();
        $("#text-for-mobile-images").html("Розы").css({"right": "70%"});
    });
});