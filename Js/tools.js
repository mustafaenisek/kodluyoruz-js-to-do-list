function confirmSingleRemove() {
  let e = confirm("Are you sure you want to delete selected task?");
  if (e) {
    $(".successRemove").toast("show");
    return true;
  } else {
    $(".cancelRemove").toast("show");
    return false;
  }
}

function confirmMultiRemove() {
  let e = confirm("Are you sure you want to delete selected tasks?");
  if (e) {
    $(".successMultipleRemove").toast("show");
    return true;
  } else {
    $(".cancelRemove").toast("show");
    return false;
  }
}

function showSelectsRemoveButton(list) {
  if (list.length > 1) {
    $("#removeSelectedButton").show();
  } else {
    $("#removeSelectedButton").hide();
  }
}

function emptyCheck(val) {
  if (val.trim() == "") {
    $(".errorAdd").toast("show");
    return false;
  } else {
    $(".successAdd").toast("show");
    return true;
  }
}
