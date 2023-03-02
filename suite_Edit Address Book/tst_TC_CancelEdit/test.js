import * as names from 'names.js';

function main() {
    startApplication("Addressbook");
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "File"));
    mouseClick(waitForObjectItem(names.fileMenuItem, "New"));
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "Edit"));
    mouseClick(waitForObjectItem(names.editMenuItem, "Add..."));
    type(waitForObject(names.addressBookAddForenameEdit), "ghada");
    mouseClick(waitForObject(names.addressBookAddSurnameEdit), 36, 14, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddSurnameEdit), "nagib");
    mouseClick(waitForObject(names.addressBookAddEmailEdit), 39, 10, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddEmailEdit), "gh@nowhere.com");
    mouseClick(waitForObject(names.addressBookAddPhoneEdit), 44, 11, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddPhoneEdit), "123 123");
    clickButton(waitForObject(names.addressBookAddCancelButton));
    mouseClick(waitForObject(names.addressBookUnnamedAddressGridTable));
    test.compare(waitForObjectExists(names.addressBookUnnamedAddressGridTable).itemCount, 0);
}
