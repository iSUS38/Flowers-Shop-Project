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
        $(".product-icons-group span").text(sum).append(" грн");
        $(".cart div").text(itemsCount);
    }

    /*
    $(".add-to-cart p").click(function(){
        var str = $(".product-description-text p:last").text().match(/[0-9]/g).join("");
        var price = Number(str);
        sum += price;
        itemsCount++;
        $(".product-icons-group span").text(sum).append(" грн");
        $(".cart div").text(itemsCount);
    });
    $(".product-icons-group span").prepend(sum);
    $(".cart div").text("0");
    */
});