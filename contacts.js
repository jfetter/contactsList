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
  //pull up the line that is to be edited 
  // and switch it to an input field

}
function deleteContact() {
  var $this = $(this);
  var $targetRow = $(this).closest('tr');
  var index = $targetRow.index();
  contacts.splice(index, 1);
  updateContacts();
  saveLocalStorage();
}

function createTr() {
  $name = 
  $('#list').append
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