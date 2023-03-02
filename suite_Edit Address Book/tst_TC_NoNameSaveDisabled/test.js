import * as names from 'names.js';

function main() {
    startApplication("Addressbook");
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "File"));
    mouseClick(waitForObjectItem(names.fileMenuItem, "New"));
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "Edit"));
    mouseClick(waitForObjectItem(names.editMenuItem, "Add..."));
    type(waitForObject(names.addressBookAddForenameEdit), "ghada");
    mouseClick(waitForObject(names.addressBookAddEmailEdit), 15, 12, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddEmailEdit), "gh@nowhere.com");
    mouseClick(waitForObject(names.addressBookAddPhoneEdit), 27, 5, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddPhoneEdit), "12313");
    test.compare(waitForObjectExists(names.addressBookAddOKButton).enabled, false);
    mouseClick(waitForObject(names.addressBookAddSurnameEdit), 51, 3, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddSurnameEdit), "nagib");
    test.compare(waitForObjectExists(names.addressBookAddOKButton).enabled, true);
}
