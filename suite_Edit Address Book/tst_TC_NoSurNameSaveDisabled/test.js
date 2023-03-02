import * as names from 'names.js';

function main() {
    startApplication("Addressbook");
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "File"));
    mouseClick(waitForObjectItem(names.fileMenuItem, "New"));
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "Edit"));
    mouseClick(waitForObjectItem(names.editMenuItem, "Add..."));
    mouseClick(waitForObject(names.addressBookAddSurnameEdit), 28, 17, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddSurnameEdit), "nagib");
    mouseClick(waitForObject(names.addressBookAddWindow), 104, 93, MouseButton.PrimaryButton);
    mouseClick(waitForObject(names.addressBookAddEmailEdit), 14, 10, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddEmailEdit), "gh@nagib@com");
    mouseClick(waitForObject(names.addressBookAddPhoneEdit), 32, 17, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddPhoneEdit), "1212");
    test.compare(waitForObjectExists(names.addressBookAddForenameEdit).enabled, true);
    mouseClick(waitForObject(names.addressBookAddForenameEdit), 42, 8, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddForenameEdit), "ghada");
    test.compare(waitForObjectExists(names.addressBookAddOKButton).enabled, true);
}
