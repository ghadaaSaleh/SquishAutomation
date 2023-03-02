/*********************************************************************
** Copyright (C) 2011 - 2021 froglogic GmbH.
** Copyright (C) 2022 The Qt Company Ltd.
** All rights reserved.
**
** This file is part of Squish.
**
** Licensees holding a valid Squish License Agreement may use this
** file in accordance with the Squish License Agreement provided with
** the Software.
**
** This file is provided AS IS with NO WARRANTY OF ANY KIND, INCLUDING THE
** WARRANTY OF DESIGN, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
**
** See the LICENSE file in the toplevel directory of this package.
**
** Contact contact@froglogic.com if any conditions of this licensing are
** not clear to you.
**
**********************************************************************/
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace Addressbook
{
    public partial class AddForm : Form
    {
        public string Forename
        {
            get
            {
                return forenameBox.Text;
            }
        }

        public string Surname
        {
            get
            {
                return surnameBox.Text;
            }
        }

        public string Email
        {
            get
            {
                return emailBox.Text;
            }
        }

        public string Phone
        {
            get
            {
                return phoneBox.Text;
            }
        }

        public AddForm()
        {
            InitializeComponent();
            updateOkButtonState();
            AcceptButton = okButton;
        }

        private void updateOkButtonState()
        {
            okButton.Enabled = forenameBox.Text.Length > 0 &&
                               surnameBox.Text.Length > 0 &&
                               emailBox.Text.Length > 0 &&
                               phoneBox.Text.Length > 0;
        }

        private void forenameBox_TextChanged(object sender, EventArgs e)
        {
            updateOkButtonState();
        }

        private void surnameBox_TextChanged(object sender, EventArgs e)
        {
            updateOkButtonState();
        }

        private void emailBox_TextChanged(object sender, EventArgs e)
        {
            updateOkButtonState();
        }

        private void phoneBox_TextChanged(object sender, EventArgs e)
        {
            updateOkButtonState();
        }

        private void cancelButton_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void okButton_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.OK;
            Close();
        }
    }
}
