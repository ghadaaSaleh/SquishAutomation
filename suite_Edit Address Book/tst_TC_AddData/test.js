import * as names from 'names.js';

function main()
{
    startApplication("Addressbook");
    openSubMenuItem("File","New");
     var data = new Array(new Array("ghada", "nagib", "gh.nagib@nowhere.com", "555 123 6786"),
        new Array("dina", "ahmed", "candy.ahmed@nowhere.com", "555 234 8765"),
        new Array("Islam", "ali", "solom@nowhere.com", "555 876 4654"));

      for (var row = 0; row < data.length; ++row)
        addPopData(data[row]);
    
    test.compare(waitForObjectExists(names.addressBookUnnamedAddressGridTable).itemCount, 12);
    mouseClick(waitForObject(names.addressBookUnnamedWindow), 465, 14, MouseButton.PrimaryButton);
    
}

function openSubMenuItem(main,subMenu)
{
    mouseClick(waitForObject({'type':'MenuItem', 'text': main}));
    mouseClick(waitForObject({'type': 'MenuItem', 'text': subMenu}));
}
function addPopData(item)
{
    openSubMenuItem("Edit", "Add...");
    type(waitForObject(names.addressBookAddForenameEdit), item[0]);
    mouseClick(waitForObject(names.addressBookAddSurnameEdit), 65, 7, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddSurnameEdit), item[1]);
    mouseClick(waitForObject(names.addressBookAddEmailEdit), 62, 16, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddEmailEdit), item[2]);
    mouseClick(waitForObject(names.addressBookAddPhoneEdit), 31, 11, MouseButton.PrimaryButton);
    type(waitForObject(names.addressBookAddPhoneEdit), item[3]);
    clickButton(waitForObject(names.addressBookAddOKButton));    
}

