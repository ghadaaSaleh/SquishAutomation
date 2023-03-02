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
    public partial class EnglishMessageBox : Form
    {
        public static DialogResult Show(String question, String caption, MessageBoxButtons buttons )
        {
            EnglishMessageBox dlg = new EnglishMessageBox();
            dlg.Text = caption;
            dlg.textLabel.Text = question;
            if (buttons == MessageBoxButtons.YesNo)
            {
                dlg.bCancel.Hide();
                dlg.CancelButton = dlg.bCancel;
            }
            else if (buttons == MessageBoxButtons.YesNoCancel)
            {
                dlg.CancelButton = dlg.bNo;
            }
            return dlg.ShowDialog();
        }

        public EnglishMessageBox()
        {
            InitializeComponent();
        }

        private void DeletionConfirmation_Load(object sender, EventArgs e)
        {
            icon.Image = SystemIcons.Warning.ToBitmap();
            MinimizeBox = false;
            MaximizeBox = false;
            FormBorderStyle = FormBorderStyle.FixedDialog;
        }

        private void bYes_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Yes;
            Close();
        }

        private void bNo_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.No;
            Close();
        }

        private void bCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            Close();
        }
    }
}
