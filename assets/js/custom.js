  // Accordian
  // Question handler
  $(".faq-q").on("click", function () {
    $(this).next().slideToggle("400");
    $(this).toggleClass("active");
  });

  $("#addressDropdown").on("change", function () {
    var selectedValue = $(this).val();
    $("#selectedValue").val(selectedValue);
    $("#selectedValue").click();
  });
  $("#selectedValue").on("click", function () {
    var textFieldValue = $(this).val();
    var tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val(textFieldValue).select();
    document.execCommand("copy");
    tempInput.remove();
    alert("Address Copied: " + textFieldValue);
  });
