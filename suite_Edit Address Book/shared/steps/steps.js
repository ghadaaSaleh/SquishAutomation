// A quick introduction to implementing scripts for BDD tests:
//
// This file contains snippets of script code to be executed as the .feature
// file is processed. See the section 'Behaviour Driven Testing' in the 'API
// Reference Manual' chapter of the Squish manual for a comprehensive reference.
//
// The functions Given/When/Then/Step can be used to associate a script snippet
// with a pattern which is matched against the steps being executed. Optional
// table/multi-line string arguments of the step are passed via a mandatory
// 'context' parameter:
//
//   When("I enter the text", function(context) {
//     <code here>
//   });
//
// The pattern is a plain string without the leading keyword, but a couple of
// placeholders including |any|, |word| and |integer| are supported which can
// be used to extract arbitrary, alphanumeric and integer values resp. from the
// pattern; the extracted values are passed as additional arguments:
//
//   Then("I get |integer| different names", function(context, numNames) {
//     <code here>
//   });
//
// Instead of using a string with placeholders, a regular expression object can
// be passed to Given/When/Then/Step to use regular expressions.
//

import * as names from 'names.js';


Given("step add", function(context) {
    startApplication("Addressbook");
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "File"));
    mouseClick(waitForObjectItem(names.fileMenuItem, "New"));
});


When("step edit", function(context) {
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "Edit"));
    mouseClick(waitForObjectItem(names.editMenuItem, "Add..."));

    var table = context.table;
    for (var i = 1; i < table.length; ++i) {
        var forename = table[i][0];
        var surname = table[i][1];
        var email = table[i][2];
        var phone = table[i][3];
        type(waitForObject(names.addressBookAddForenameEdit), forename);
        mouseClick(waitForObject(names.addressBookAddSurnameEdit), 22, 6, MouseButton.PrimaryButton);
        type(waitForObject(names.addressBookAddSurnameEdit), surname);
        mouseClick(waitForObject(names.addressBookAddEmailEdit), 45, 6, MouseButton.PrimaryButton);
        type(waitForObject(names.addressBookAddEmailEdit), email);
        mouseClick(waitForObject(names.addressBookAddPhoneEdit), 39, 9, MouseButton.PrimaryButton);
        type(waitForObject(names.addressBookAddPhoneEdit), phone);
        clickButton(waitForObject(names.addressBookAddOKButton));
        mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "Edit"));
        mouseClick(waitForObjectItem(names.editMenuItem, "Add..."));
    }
  
});
When("verify columns", function(context) {
      
        test.compare(waitForObjectExists(names.addressBookUnnamedAddressGridTable).rowCount, 3);
    });
When("click cancel", function(context) {
        clickButton(waitForObject(names.addressBookAddCancelButton));
    });
