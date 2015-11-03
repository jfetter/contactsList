{ 'use strict';

$(document).ready(init);

var contacts = localStorage.contacts ? JSON.parse(localStorage.contacts) : [];
updateContacts();

function init() {
  $('#add').on('click', addContact);
  $('#edit').click(editContact);
  $('#delete').click(deleteContact);
}

function addContact() {
    console.log('adding contacts');
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var twitter = $('#twitter').val();
  
    var contact = new Contact(name, email, phone, twitter);
  
    contacts.push(contact);
    updateContacts();
    saveLocalStorage();
  
}
function editContact() {
  
  console.log("editing contacts")
  editLine = $(this).closest("tr");
  console.log("editLine", editLine);
  editName = editLine.children(":nth-of-type(1)").text();
  editEmail = editLine.children(":nth-of-type(2)").text();
  editPhone = editLine.children(":nth-of-type(3)").text();
  editTwitter = editLine.children(":nth-of-type(4)").text();
  console.log( editName);
  $("#name").val(editName);
  $("#email").val(editEmail);
  $("#phone").val(editPhone);
  $("#twitter").val(editTwitter);
  $("input").addClass("editing")
  deleteContact(editLine);

      //delete edit line

    //will need to pull the correct line and replace
    // the div where the text currently is
    // with an input box for each of the 4
    // fields to be filled

    // set up a click event for the input box
    // that will tell you which 

  // pull up the line that is to be edited 

 ///ORRRR Change the placeholder to be the text value of
 /// the current thing and have them reAdd it


  
    //$editLine = $(this).closest("tr");
    // find the index of the part of the text being edited
    // eg name, email etc
  //$(editLine).splice(editLine, 1)
  // and switch it from a div to an input field
  // 

}
function deleteContact(editLine) { 
  if ($("input").hasClass("editing")){
    console.log("editLine")
    var $targetRow = editLine;
    console.log($targetRow)
  } else {
  console.log("Deleting an entry")
  var $this = $(this);
  console.log("$this: ", $this);
  var $targetRow = $(this).closest('tr');
  console.log("$targetRow:" ,$targetRow)
  }
  var index = $targetRow.index();
  contacts.splice(index, 1);
  updateContacts();
  saveLocalStorage();
}

function updateContacts() {
  $('#list').empty();
  if (contacts.length) {
    $('table.table').show();
  } else {
    $('table.table').hide();
  }

  var contactDetails = contacts.map(function(contact) {
    var $tr = $('#template').clone();
    $tr.removeAttr('id');
    $tr.children('.name').text(contact.name);
    $tr.children('.email').text(contact.email);
    $tr.children('.phone').text(contact.phone);
    $tr.children('.twitter').text(contact.twitter);
    $tr.show();
    return $tr;
  })
  $('#list').append(contactDetails);
}

function saveLocalStorage() {
  localStorage.contacts = JSON.stringify(contacts);
}

function Contact(name, email, phone, twitter) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.twitter = twitter;
}
}