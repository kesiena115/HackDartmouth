/* Insert JavaScript here */
$(document).ready(function(){

  $("#person-account").click(function(){
    console.log("person selected");
    $("#account-type").html("Person <span class='caret'></span>" );
  });

  $("#org-account").click(function(){
    console.log("org selected");
    $("#account-type").html("Organization <span class='caret'></span>" );
  });

  $("#phone").intlTelInput({
    allowExtensions: false,
    autoFormat: false,
    autoHideDialCode: false,
    autoPlaceholder: true,
    defaultCountry: "ng",
    ipinfoToken: "yolo",
    nationalMode: false,
    numberType: "MOBILE",
    onlyCountries: ['ng', 'us', 'gb'],
    preferredCountries: [],
    // utilsScript: "libphonenumber/build/utils.js" //commented out to stop complain "XMLHttpRequest cannot load...Cross origin requests are only supported for protocol schemes: http, data,"
  });


});
