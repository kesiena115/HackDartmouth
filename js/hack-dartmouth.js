/* Insert JavaScript here */
$(document).ready(function(){

  $("#person-account").click(function(){
    $("#account-type").html("Person <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#org-account").click(function(){
    $("#account-type").html("Organization <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#dr-title").click(function(){
    $("#title-select").html("Dr <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#mr-title").click(function(){
    $("#title-select").html("Mr <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#mrs-title").click(function(){
    $("#title-select").html("Mrs <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#miss-title").click(function(){
    console.log("miss selected");
    $("#title-select").html("Miss <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#business-org").click(function(){
    $("#industry-select").html("Business <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#edu-org").click(function(){
    $("#industry-select").html("Education <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#govern-org").click(function(){
    $("#industry-select").html("Government Administration <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#religious-org").click(function(){
    $("#industry-select").html("Religious Institution <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#social-org").click(function(){
    $("#industry-select").html("Social Group <i class='fa fa-caret-down pull-right'></i>" );
  });

  $("#other-org").click(function(){
    $("#industry-select").html("Other <i class='fa fa-caret-down pull-right'></i>" );
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

  hideAllOptionalFields();

  $('#account-list li a').on('click', function(){
    var account = $(this).text();
    switch (account) {
        case 'Person':
            hideAllOptionalFields();
            $(".person-info, .person-org-info, .intl-tel-input").show();
        break;
        case 'Organization':
            hideAllOptionalFields();
            $(".org-info, .person-org-info, .intl-tel-input").show();
        break;
    }
  });

});

function hideAllOptionalFields() {
    //.intl-tel-input is the class used by the intlTelInput library
    $(".person-org-info, .person-info, .org-info, .intl-tel-input").hide();
  }
