import * as names from 'names.js';

function main() {
    startApplication("Addressbook");
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "File"));
    mouseClick(waitForObjectItem(names.fileMenuItem, "New"));
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "Edit"));
    mouseClick(waitForObjectItem(names.editMenuItem, "Add..."));
    type(waitForObject(names.addressBookAddForenameEdit), "ghada");
    mouseClick(waitForObject(names.addressBookAddSurnameEdit), 48, 5, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddSurnameEdit), "nagib");
    mouseClick(waitForObject(names.addressBookAddEmailEdit), 33, 17, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddEmailEdit), "ghada");
    mouseClick(waitForObject(names.addressBookAddPhoneEdit), 24, 4, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddPhoneEdit), " 121 781");
    test.compare(waitForObjectExists(names.addressBookUnnamedWindow).enabled, false);
}
