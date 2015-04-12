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
    autoFormat: true,
    autoHideDialCode: false,
    autoPlaceholder: true,
    defaultCountry: "ng",
    ipinfoToken: "yolo",
    nationalMode: true,
    numberType: "MOBILE",
    onlyCountries: ['ng', 'us', 'gb'],
    preferredCountries: [],
    utilsScript: "/projects/intl-tel-input-master/lib/libphonenumber/build/utils.js" 
  });


});
