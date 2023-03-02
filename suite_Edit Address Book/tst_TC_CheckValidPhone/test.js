import * as names from 'names.js';

function main()
{
    startApplication("Addressbook");
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "File"));
    mouseClick(waitForObjectItem(names.fileMenuItem, "New"));
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "Edit"));
    mouseClick(waitForObjectItem(names.editMenuItem, "Add..."));
    type(waitForObject(names.addressBookAddForenameEdit), "ghada");
    mouseClick(waitForObject(names.addressBookAddSurnameEdit), 25, 14, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddSurnameEdit), "nagib");
    mouseClick(waitForObject(names.addressBookAddEmailEdit), 19, 6, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddEmailEdit), "gn@yahoo.com");
    mouseClick(waitForObject(names.addressBookAddPhoneEdit), 9, 12, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddPhoneEdit), "phoneNo");
    test.compare(waitForObjectExists(names.addressBookAddOKButton).enabled, false);
    type(waitForObject(names.addressBookAddPhoneEdit), "21212");
    test.compare(waitForObjectExists(names.addressBookAddOKButton).enabled, true);
}
