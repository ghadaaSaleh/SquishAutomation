import * as names from 'names.js';

function main() {
    startApplication("Addressbook");
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "File"));
    mouseClick(waitForObjectItem(names.fileMenuItem, "New"));
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "Edit"));
    mouseClick(waitForObjectItem(names.editMenuItem, "Add..."));
    type(waitForObject(names.addressBookAddForenameEdit), "ghada");
    mouseClick(waitForObject(names.addressBookAddSurnameEdit), 39, 17, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddSurnameEdit), "nagib");
    mouseClick(waitForObject(names.addressBookAddWindow), 112, 93, MouseButton.PrimaryButton);
    mouseClick(waitForObject(names.addressBookAddEmailEdit), 34, 12, MouseButton.PrimaryButton);
    mouseClick(waitForObject(names.addressBookAddPhoneEdit), 23, 13, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddPhoneEdit), "12121");
    test.compare(waitForObjectExists(names.addressBookAddOKButton).enabled, false);
    mouseClick(waitForObject(names.addressBookAddEmailEdit), 31, 8, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddEmailEdit), "gh@yahoo.com");
    test.compare(waitForObjectExists(names.addressBookAddOKButton).enabled, true);
}
