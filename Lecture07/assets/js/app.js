// 函數
// function () {}

$(function () {

    // 當點按鈕的時候，取得選取的標籤的值
    $("#submit-btn") .on('click', function () {
       //取得標籤的值 產生答案所在的ID
       //例如 value = 1 this id = "#answer-1" 
       var value = $("[name=answer]:checked").val();
       var id = "#answer-" + value;  
       
        //把此id以外的answer 加上d-none class         
        $(`[id^=answer-]:not(${id})`).addClass('d-none');

       //根據id  移除此id上的d-none class      
       $(id).removeClass("d-none");
    });

});