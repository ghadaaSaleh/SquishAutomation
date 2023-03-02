import * as names from 'names.js';

function main() {
    startApplication("Addressbook");
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "File"));
    mouseClick(waitForObjectItem(names.fileMenuItem, "New"));
    mouseClick(waitForObjectItem(names.addressBookUnnamedMenubar, "Edit"));
    mouseClick(waitForObjectItem(names.editMenuItem, "Add..."));
    type(waitForObject(names.addressBookAddForenameEdit), "sfsdf");
    mouseClick(waitForObject(names.addressBookAddSurnameEdit), 44, 15, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddSurnameEdit), "sdfs");
    mouseClick(waitForObject(names.addressBookAddEmailEdit), 35, 12, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddEmailEdit), "sdfsf");
    test.compare(waitForObjectExists(names.addressBookAddOKButton).enabled, false);
    mouseClick(waitForObject(names.addressBookAddPhoneEdit), 30, 15, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddPhoneEdit), "21123");
    clickButton(waitForObject(names.addressBookAddOKButton));
    test.compare(waitForObjectExists(names.addressBookUnnamedWindow).enabled, true);
}
