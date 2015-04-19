/* Insert JavaScript here */
$(document).ready(function(){

  $("#person-account").click(function(){
    $("#account-type").html("Person <span class='caret'></span>" );
  });

  $("#org-account").click(function(){
    $("#account-type").html("Organization <span class='caret'></span>" );
  });

  $("#dr-title").click(function(){
    $("#title-select").html("Dr <span class='caret'></span>" );
  });

  $("#mr-title").click(function(){
    $("#title-select").html("Mr <span class='caret'></span>" );
  });

  $("#mrs-title").click(function(){
    $("#title-select").html("Mrs <span class='caret'></span>" );
  });

  $("#miss-title").click(function(){
    console.log("miss selected");
    $("#title-select").html("Miss <span class='caret'></span>" );
  });

  $("#business-org").click(function(){
    $("#industry-select").html("Business <span class='caret'></span>" );
  });

  $("#edu-org").click(function(){
    $("#industry-select").html("Education <span class='caret'></span>" );
  });

  $("#govern-org").click(function(){
    $("#industry-select").html("Government Administration <span class='caret'></span>" );
  });

  $("#religious-org").click(function(){
    $("#industry-select").html("Religious Institution <span class='caret'></span>" );
  });

  $("#social-org").click(function(){
    $("#industry-select").html("Social Group <span class='caret'></span>" );
  });

  $("#other-org").click(function(){
    $("#industry-select").html("Other <span class='caret'></span>" );
  });

  $("#phone").intlTelInput({
    allowExtensions: false,
    autoFormat: true,
    autoHideDialCode: false,
    autoPlaceholder: true,
    defaultCountry: "ng",
    ipinfoToken: "yolo",
    nationalMode: true,
    numberType: "MOBILE",
    onlyCountries: ['ng', 'us', 'gb'],
    preferredCountries: [],
    utilsScript: "js/intlTelIutils.js" 
  });


});
