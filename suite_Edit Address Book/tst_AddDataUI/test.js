import * as names from 'names.js';


function main()
{
    startApplication("Addressbook");
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "File"));
    mouseClick(waitForObjectItem(names.fileMenuItem, "New"));
   
    
    var dataset = testData.dataset("../shared/scripts/testdata.tsv");
    for (var row = 0; row < dataset.length; row++) {
        if(row>10)
        {break;}
        mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "Edit"));
        mouseClick(waitForObjectItem(names.editMenuItem, "Add..."));
        forename = testData.field(dataset[row], "Forename");
        surname = testData.field(dataset[row], "Surname");
        email = testData.field(dataset[row], "Email");
        phone = testData.field(dataset[row], "Phone");
  
        type(waitForObject(names.addressBookAddForenameEdit), forename);
        mouseClick(waitForObject(names.addressBookAddSurnameEdit), 36, 5, MouseButton.PrimaryButton);
        type(waitForObject(names.addressBookAddSurnameEdit), surname);
        mouseClick(waitForObject(names.addressBookAddEmailEdit), 29, 6, MouseButton.PrimaryButton);
        type(waitForObject(names.addressBookAddEmailEdit), email);
        mouseClick(waitForObject(names.addressBookAddPhoneEdit), 28, 5, MouseButton.PrimaryButton);
        type(waitForObject(names.addressBookAddPhoneEdit), phone);
        clickButton(waitForObject(names.addressBookAddOKButton));
    }
    snooze(10);
    test.compare(waitForObjectExists(names.addressBookUnnamedScrollBar).enabled, true);
}
